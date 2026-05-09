<!--
 *
 *  @file RunsPage.vue
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
-->

<template>
  <DashboardLayout
    title="Runs"
    subtitle="Track reliability test sessions submitted by agents."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Runs</p>
        <h2 class="dashboard-page-title">Reliability test sessions</h2>
        <p class="dashboard-page-description">
          Runs represent real API reliability tests executed by local agents.
        </p>
      </div>

      <AppButton @click="showCreateForm = !showCreateForm">
        {{ showCreateForm ? 'Close form' : 'Create run' }}
      </AppButton>
    </section>

    <AppCard
      v-if="showCreateForm"
      title="Create run"
      description="Create a test run manually using an existing project, agent, and API key."
      class="runs-form-card"
    >
      <form class="form-stack" @submit.prevent="submitRun">
        <div class="form-row-inline">
          <label class="form-row">
            <span class="form-label">Project</span>
            <select
              v-model="form.projectId"
              class="form-select"
              :disabled="creating"
            >
              <option value="">Select project</option>
              <option
                v-for="project in projects"
                :key="project.id"
                :value="project.id"
              >
                {{ project.name }}
              </option>
            </select>
          </label>

          <label class="form-row">
            <span class="form-label">Agent</span>
            <select
              v-model="form.agentId"
              class="form-select"
              :disabled="creating"
            >
              <option value="">Select agent</option>
              <option
                v-for="agent in filteredAgents"
                :key="agent.id"
                :value="agent.id"
              >
                {{ agent.name }}
              </option>
            </select>
          </label>
        </div>

        <AppInput
          v-model="form.agentApiKey"
          label="Agent API key"
          placeholder="sa_agent_key_xxx"
          hint="The key is shown only once when the agent is created."
          :disabled="creating"
        />

        <div class="form-row-inline">
          <AppInput
            v-model="form.targetUrl"
            label="Target URL"
            placeholder="https://api.example.com/orders"
            :disabled="creating"
          />

          <AppInput
            v-model="form.method"
            label="Method"
            placeholder="POST"
            :disabled="creating"
          />
        </div>

        <AppInput
          v-model="form.scenario"
          label="Scenario"
          placeholder="unstable_network"
          :disabled="creating"
        />

        <p v-if="formError" class="form-error">
          {{ formError }}
        </p>

        <div class="form-actions">
          <AppButton type="submit" :loading="creating">
            Create run
          </AppButton>
        </div>
      </form>
    </AppCard>

    <AppCard
      v-if="runsLoadSkipped"
      title="Agent API key required"
      description="Runs are protected by agent authentication. Paste an agent key in the create run form or save one in Settings to load runs."
      class="runs-agent-key-warning"
    />

    <AppLoading v-if="loading" center message="Loading runs..." />

    <AppEmptyState
      v-else-if="runs.length === 0"
      title="No runs yet"
      description="Create a run from an agent to start collecting reliability events."
    >
      <template #action>
        <AppButton @click="showCreateForm = true">
          Create run
        </AppButton>
      </template>
    </AppEmptyState>

    <div v-else class="data-table-wrap">
      <div class="data-table-scroll sa-scrollbar">
        <table class="data-table">
          <thead>
            <tr>
              <th>Run</th>
              <th>Status</th>
              <th>Project</th>
              <th>Agent</th>
              <th>Scenario</th>
              <th>Started</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="run in runs" :key="run.id">
              <td>
                <RouterLink :to="`/dashboard/runs/${run.id}`">
                  <strong>{{ run.id }}</strong>
                </RouterLink>
                <p class="run-row-url">
                  {{ run.targetUrl }}
                </p>
              </td>

              <td>
                <span class="status-pill" :class="run.status">
                  {{ run.status }}
                </span>
              </td>

              <td>{{ projectName(run.projectId) }}</td>
              <td>{{ agentName(run.agentId) }}</td>
              <td>{{ run.scenario }}</td>
              <td>{{ formatDateTime(run.startedAt) }}</td>

              <td>
                <RouterLink
                  :to="`/dashboard/runs/${run.id}`"
                  class="run-row-link"
                >
                  Open
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-if="error" class="form-error runs-error">
      {{ error }}
    </p>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'

import AppButton from '../../components/common/AppButton.vue'
import AppCard from '../../components/common/AppCard.vue'
import AppEmptyState from '../../components/common/AppEmptyState.vue'
import AppInput from '../../components/common/AppInput.vue'
import AppLoading from '../../components/common/AppLoading.vue'
import {
  agentNameFromMap,
  filterAgentsByProject,
  makeAgentMap,
} from '../../features/agents/agentHelpers'
import {
  useAgents,
} from '../../features/agents/useAgents'
import {
  makeProjectMap,
  projectNameFromMap,
} from '../../features/projects/projectHelpers'
import {
  useProjects,
} from '../../features/projects/useProjects'
import {
  normalizeHttpMethod,
  validateRunForm,
} from '../../features/runs/runHelpers'
import {
  useRuns,
} from '../../features/runs/useRuns'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'
import {
  storageGet,
  storageSet,
} from '../../utils/storage'

const AGENT_KEY_STORAGE = 'last_agent_api_key'

const {
  runs,
  loading: runsLoading,
  saving: runSaving,
  error: runsError,
  loadRuns,
  saveRun,
} = useRuns()

const {
  agents,
  loading: agentsLoading,
  error: agentsError,
  loadAgents,
} = useAgents()

const {
  projects,
  loading: projectsLoading,
  error: projectsError,
  loadProjects,
} = useProjects()

const showCreateForm = ref(false)
const formError = ref('')
const runsLoadSkipped = ref(false)

const form = reactive({
  projectId: '',
  agentId: '',
  agentApiKey: storageGet(AGENT_KEY_STORAGE, ''),
  targetUrl: '',
  method: 'POST',
  scenario: 'unstable_network',
})

const hasAgentApiKey = computed(() => {
  return form.agentApiKey.trim().length > 0
})

const loading = computed(() => {
  return projectsLoading.value || agentsLoading.value || runsLoading.value
})

const creating = computed(() => {
  return runSaving.value
})

const error = computed(() => {
  if (!hasAgentApiKey.value || runsLoadSkipped.value) {
    return agentsError.value || projectsError.value
  }

  return runsError.value || agentsError.value || projectsError.value
})

const projectMap = computed(() => {
  return makeProjectMap(projects.value)
})

const agentMap = computed(() => {
  return makeAgentMap(agents.value)
})

const filteredAgents = computed(() => {
  return filterAgentsByProject(agents.value, form.projectId)
})

function projectName(projectId) {
  return projectNameFromMap(projectMap.value, projectId)
}

function agentName(agentId) {
  return agentNameFromMap(agentMap.value, agentId)
}

async function loadRunsPage() {
  runsLoadSkipped.value = false

  await Promise.all([
    loadProjects({
      limit: 100,
      offset: 0,
    }),
    loadAgents({
      limit: 100,
      offset: 0,
    }),
  ])

  if (!hasAgentApiKey.value) {
    runsLoadSkipped.value = true
    return
  }

  try {
    await loadRuns({
      limit: 100,
      offset: 0,
      agentApiKey: form.agentApiKey.trim(),
    })
  } catch {
    runsLoadSkipped.value = true
  }
}

function resetForm() {
  form.projectId = ''
  form.agentId = ''
  form.targetUrl = ''
  form.method = 'POST'
  form.scenario = 'unstable_network'
}

async function submitRun() {
  formError.value = ''

  form.method = normalizeHttpMethod(form.method)

  const validation = validateRunForm(form)

  if (!validation.valid) {
    formError.value =
      validation.errors.projectId ||
      validation.errors.agentId ||
      validation.errors.agentApiKey ||
      validation.errors.targetUrl ||
      validation.errors.method ||
      validation.errors.scenario ||
      'Invalid run form.'

    return
  }

  storageSet(AGENT_KEY_STORAGE, form.agentApiKey.trim())

  try {
    await saveRun({
      projectId: form.projectId,
      agentId: form.agentId,
      targetUrl: form.targetUrl.trim(),
      method: form.method,
      scenario: form.scenario.trim(),
      agentApiKey: form.agentApiKey.trim(),
    })

    resetForm()
    showCreateForm.value = false

    await loadRunsPage()
  } catch (err) {
    formError.value = err.message
  }
}

onMounted(() => {
  loadRunsPage()
})
</script>

<style scoped>
.runs-form-card {
  margin-bottom: 22px;
}

.run-row-url {
  margin: 4px 0 0;
  color: var(--sa-text-muted);
  font-size: 0.82rem;
}

.run-row-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 0 12px;
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text);
  font-size: 0.84rem;
  font-weight: 800;
}

.run-row-link:hover {
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.82);
}

.runs-error {
  margin-top: 18px;
}

.runs-agent-key-warning {
  margin-bottom: 22px;
}
</style>
