<!--
 *
 *  @file AgentsPage.vue
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
    title="Agents"
    subtitle="Manage local runtimes that submit reliability data."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Agents</p>
        <h2 class="dashboard-page-title">Local reliability agents</h2>
        <p class="dashboard-page-description">
          Agents use one-time API keys to create runs, submit events, and upload reports.
        </p>
      </div>

      <AppButton @click="showCreateForm = !showCreateForm">
        {{ showCreateForm ? 'Close form' : 'Create agent' }}
      </AppButton>
    </section>

    <AppCard
      v-if="showCreateForm"
      title="Create agent"
      description="Select a project and generate a new one-time API key."
      class="agents-form-card"
    >
      <form class="form-stack" @submit.prevent="submitAgent">
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

        <AppInput
          v-model="form.name"
          label="Agent name"
          placeholder="Production Agent"
          :disabled="creating"
        />

        <p v-if="formError" class="form-error">
          {{ formError }}
        </p>

        <div class="form-actions">
          <AppButton type="submit" :loading="creating">
            Save agent
          </AppButton>
        </div>
      </form>

      <div v-if="createdApiKey" class="api-key-box agents-api-key-box">
        <p class="api-key-warning">
          Store this key now. It will not be shown again.
        </p>
        <code class="api-key-value">{{ createdApiKey }}</code>
      </div>
    </AppCard>

    <AppLoading v-if="loading" center message="Loading agents..." />

    <AppEmptyState
      v-else-if="agents.length === 0"
      title="No agents yet"
      description="Create an agent to connect local reliability runs to Softadastra Cloud."
    >
      <template #action>
        <AppButton @click="showCreateForm = true">
          Create agent
        </AppButton>
      </template>
    </AppEmptyState>

    <div v-else class="data-table-wrap">
      <div class="data-table-scroll sa-scrollbar">
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Agent ID</th>
              <th>Project</th>
              <th>Last seen</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="agent in agents" :key="agent.id">
              <td><strong>{{ agent.name }}</strong></td>
              <td>{{ agent.id }}</td>
              <td>{{ projectName(agent.projectId) }}</td>
              <td>{{ formatDateTime(agent.lastSeenAt) }}</td>
              <td>{{ formatDateTime(agent.createdAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-if="error" class="form-error agents-error">
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
  makeAgentMap,
  validateAgentForm,
} from '../../features/agents/agentHelpers'
import { useAgents } from '../../features/agents/useAgents'
import {
  makeProjectMap,
  projectNameFromMap,
} from '../../features/projects/projectHelpers'
import { useProjects } from '../../features/projects/useProjects'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'

const {
  agents,
  loading: agentsLoading,
  saving,
  error: agentsError,
  lastApiKey,
  loadAgents,
  saveAgent,
} = useAgents()

const {
  projects,
  loading: projectsLoading,
  error: projectsError,
  loadProjects,
} = useProjects()

const showCreateForm = ref(false)
const formError = ref('')

const form = reactive({
  projectId: '',
  name: '',
})

const loading = computed(() => {
  return agentsLoading.value || projectsLoading.value
})

const creating = computed(() => {
  return saving.value
})

const error = computed(() => {
  return agentsError.value || projectsError.value
})

const createdApiKey = computed(() => {
  return lastApiKey.value
})

const projectMap = computed(() => {
  return makeProjectMap(projects.value)
})

const agentMap = computed(() => {
  return makeAgentMap(agents.value)
})

function projectName(projectId) {
  return projectNameFromMap(projectMap.value, projectId)
}

function agentName(agentId) {
  return agentNameFromMap(agentMap.value, agentId)
}

async function loadAgentsPage() {
  await Promise.all([
    loadAgents({
      limit: 100,
      offset: 0,
    }),
    loadProjects({
      limit: 100,
      offset: 0,
    }),
  ])
}

function resetForm() {
  form.projectId = ''
  form.name = ''
}

async function submitAgent() {
  formError.value = ''

  const validation = validateAgentForm(form)

  if (!validation.valid) {
    formError.value =
      validation.errors.projectId ||
      validation.errors.name ||
      'Invalid agent form.'

    return
  }

  try {
    await saveAgent({
      projectId: form.projectId,
      name: form.name.trim(),
    })

    resetForm()
  } catch (err) {
    formError.value = err.message
  }
}

onMounted(() => {
  loadAgentsPage()
})
</script>

<style scoped>
.agents-form-card {
  margin-bottom: 22px;
}

.agents-api-key-box {
  margin-top: 18px;
}

.agents-error {
  margin-top: 18px;
}
</style>
