<!--
 *
 *  @file ProjectDetailPage.vue
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
    title="Project details"
    subtitle="Inspect one project, its agents, and its recent reliability runs."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Project</p>
        <h2 class="dashboard-page-title">
          {{ project?.name || 'Loading project...' }}
        </h2>
        <p class="dashboard-page-description">
          {{ project?.description || 'Project reliability activity and linked agents.' }}
        </p>
      </div>

      <RouterLink to="/dashboard/projects" class="project-detail-back">
        Back to projects
      </RouterLink>
    </section>

    <AppLoading v-if="loading" center message="Loading project..." />

    <div v-else-if="project" class="project-detail-grid">
      <AppCard title="Project information" description="Core target details.">
        <dl class="project-meta">
          <div>
            <dt>Project ID</dt>
            <dd>{{ project.id }}</dd>
          </div>

          <div>
            <dt>Slug</dt>
            <dd>{{ project.slug }}</dd>
          </div>

          <div>
            <dt>Base URL</dt>
            <dd>{{ project.baseUrl || 'No base URL configured' }}</dd>
          </div>

          <div>
            <dt>Created</dt>
            <dd>{{ formatDateTime(project.createdAt) }}</dd>
          </div>

          <div>
            <dt>Updated</dt>
            <dd>{{ formatDateTime(project.updatedAt) }}</dd>
          </div>
        </dl>
      </AppCard>

      <AppCard title="Create agent" description="Generate a local agent API key for this project.">
        <form class="form-stack" @submit.prevent="submitAgent">
          <AppInput
            v-model="agentForm.name"
            label="Agent name"
            placeholder="Production Agent"
            :disabled="creatingAgent"
          />

          <p v-if="agentError" class="form-error">
            {{ agentError }}
          </p>

          <div class="form-actions form-actions-left">
            <AppButton type="submit" :loading="creatingAgent">
              Create agent
            </AppButton>
          </div>
        </form>

        <div v-if="createdAgentKey" class="api-key-box project-agent-key">
          <p class="api-key-warning">
            Store this key now. It will not be shown again.
          </p>
          <code class="api-key-value">{{ createdAgentKey }}</code>
        </div>
      </AppCard>

      <AppCard title="Agents" description="Agents attached to this project.">
        <AppEmptyState
          v-if="agents.length === 0"
          title="No agents yet"
          description="Create an agent to submit runs from your local runtime."
        />

        <div v-else class="data-table-wrap">
          <div class="data-table-scroll sa-scrollbar">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Agent ID</th>
                  <th>Last seen</th>
                  <th>Created</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="agent in agents" :key="agent.id">
                  <td><strong>{{ agent.name }}</strong></td>
                  <td>{{ agent.id }}</td>
                  <td>{{ formatDateTime(agent.lastSeenAt) }}</td>
                  <td>{{ formatDateTime(agent.createdAt) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AppCard>

      <AppCard title="Recent runs" description="Latest runs for this project.">
        <AppEmptyState
          v-if="runs.length === 0"
          title="No runs yet"
          description="Runs will appear here after your agent submits reliability tests."
        />

        <div v-else class="data-table-wrap">
          <div class="data-table-scroll sa-scrollbar">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Run</th>
                  <th>Status</th>
                  <th>Scenario</th>
                  <th>Started</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="run in runs" :key="run.id">
                  <td>
                    <RouterLink :to="`/dashboard/runs/${run.id}`">
                      <strong>{{ run.id }}</strong>
                    </RouterLink>
                  </td>
                  <td>
                    <span class="status-pill" :class="run.status">
                      {{ run.status }}
                    </span>
                  </td>
                  <td>{{ run.scenario }}</td>
                  <td>{{ formatDateTime(run.startedAt) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AppCard>
    </div>

    <AppEmptyState
      v-else
      title="Project not found"
      description="The requested project could not be loaded."
    />

    <p v-if="error" class="form-error project-detail-error">
      {{ error }}
    </p>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

import AppButton from '../../components/common/AppButton.vue'
import AppCard from '../../components/common/AppCard.vue'
import AppEmptyState from '../../components/common/AppEmptyState.vue'
import AppInput from '../../components/common/AppInput.vue'
import AppLoading from '../../components/common/AppLoading.vue'
import { useAgents } from '../../features/agents/useAgents'
import { validateAgentForm } from '../../features/agents/agentHelpers'
import { useProjects } from '../../features/projects/useProjects'
import { useRuns } from '../../features/runs/useRuns'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'
import { storageGet } from '../../utils/storage'

const route = useRoute()

const AGENT_KEY_STORAGE = 'last_agent_api_key'

const {
  currentProject,
  loading: projectLoading,
  error: projectError,
  loadProject,
} = useProjects()

const {
  agents,
  lastApiKey,
  loading: agentsLoading,
  saving: agentSaving,
  error: agentsError,
  loadAgents,
  saveAgent,
} = useAgents()

const {
  runs,
  loading: runsLoading,
  error: runsError,
  loadRuns,
} = useRuns()

const agentError = ref('')

const project = computed(() => {
  return currentProject.value
})

const loading = computed(() => {
  return projectLoading.value || agentsLoading.value || runsLoading.value
})

const creatingAgent = computed(() => {
  return agentSaving.value
})

const error = computed(() => {
  return projectError.value || agentsError.value || runsError.value
})

const createdAgentKey = computed(() => {
  return lastApiKey.value
})

const agentForm = reactive({
  name: '',
})

async function loadProjectDetail() {
  const projectId = String(route.params.id || '')
  const agentApiKey = storageGet(AGENT_KEY_STORAGE, '')

  await Promise.all([
    loadProject(projectId),
    loadAgents({
      projectId,
      limit: 50,
      offset: 0,
    }),
  ])

  try {
    await loadRuns({
      projectId,
      limit: 20,
      offset: 0,
      agentApiKey,
    })
  } catch {
    /*
     * Runs are agent-protected.
     * If no local agent key is saved yet, the project page should still load.
     */
  }
}

async function submitAgent() {
  agentError.value = ''

  const validation = validateAgentForm({
    projectId: String(route.params.id || ''),
    name: agentForm.name,
  })

  if (!validation.valid) {
    agentError.value =
      validation.errors.name ||
      validation.errors.projectId ||
      'Invalid agent form.'

    return
  }

  try {
    await saveAgent({
      projectId: String(route.params.id || ''),
      name: agentForm.name.trim(),
    })

    agentForm.name = ''

    await loadProjectDetail()
  } catch (err) {
    agentError.value = err.message
  }
}

onMounted(() => {
  loadProjectDetail()
})
</script>

<style scoped>
.project-detail-back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 0 15px;
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text);
  font-size: 0.9rem;
  font-weight: 800;
}

.project-detail-grid {
  display: grid;
  gap: 18px;
}

.project-meta {
  display: grid;
  gap: 14px;
  margin: 0;
}

.project-meta div {
  display: grid;
  gap: 4px;
  border-bottom: 1px solid var(--sa-border);
  padding-bottom: 12px;
}

.project-meta div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.project-meta dt {
  color: var(--sa-text-muted);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-meta dd {
  margin: 0;
  color: var(--sa-text-soft);
  word-break: break-word;
}

.project-agent-key {
  margin-top: 18px;
}

.project-detail-error {
  margin-top: 18px;
}
</style>
