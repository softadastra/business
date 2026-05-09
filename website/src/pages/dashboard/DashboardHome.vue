<!--
 *
 *  @file DashboardHome.vue
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
    title="Dashboard"
    subtitle="Overview of your reliability projects, agents, runs and reports."
  >
    <template #actions>
      <RouterLink to="/dashboard/projects" class="dashboard-home-action">
        New project
      </RouterLink>
    </template>

    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Reliability Cloud</p>
        <h2 class="dashboard-page-title">System reliability overview</h2>
        <p class="dashboard-page-description">
          Track your API reliability activity from projects to final reports.
        </p>
      </div>
    </section>

    <AppLoading v-if="loading" center message="Loading dashboard..." />

    <template v-else>
      <AppCard
        v-if="agentKeyMissing"
        title="Agent API key required"
        description="Runs are protected by agent authentication. Save an agent key in Settings to load recent runs."
        class="dashboard-agent-key-warning"
      />

      <div class="dashboard-grid dashboard-grid-4">
        <StatCard
          label="Projects"
          :value="stats.projects"
          helper="Applications being tested"
        />

        <StatCard
          label="Agents"
          :value="stats.agents"
          helper="Local runtimes connected"
        />

        <StatCard
          label="Runs"
          :value="stats.runs"
          helper="Reliability sessions"
        />

        <StatCard
          label="Reports"
          :value="stats.reports"
          helper="Submitted run reports"
        />
      </div>
    </template>

    <div class="dashboard-home-grid">
      <AppCard title="Recent runs" description="Latest reliability test sessions.">
        <AppEmptyState
          v-if="recentRuns.length === 0"
          title="No runs yet"
          description="Create an agent and submit a run to start seeing reliability activity."
        >
          <template #action>
            <RouterLink to="/dashboard/runs" class="dashboard-card-link">
              View runs
            </RouterLink>
          </template>
        </AppEmptyState>

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
                <tr v-for="run in recentRuns" :key="run.id">
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

      <AppCard title="Recent reports" description="Latest saved reliability reports.">
        <AppEmptyState
          v-if="recentReports.length === 0"
          title="No reports yet"
          description="Reports appear here after an agent submits final run output."
        >
          <template #action>
            <RouterLink to="/dashboard/reports" class="dashboard-card-link">
              View reports
            </RouterLink>
          </template>
        </AppEmptyState>

        <div v-else class="reports-list">
          <RouterLink
            v-for="report in recentReports"
            :key="report.id"
            :to="`/dashboard/reports`"
            class="report-preview"
          >
            <strong>{{ report.summary }}</strong>
            <span>{{ formatDateTime(report.createdAt) }}</span>
          </RouterLink>
        </div>
      </AppCard>
    </div>

    <p v-if="error" class="form-error dashboard-home-error">
      {{ error }}
    </p>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue'

import AppCard from '../../components/common/AppCard.vue'
import AppEmptyState from '../../components/common/AppEmptyState.vue'
import AppLoading from '../../components/common/AppLoading.vue'
import StatCard from '../../components/dashboard/StatCard.vue'
import { useAgents } from '../../features/agents/useAgents'
import { useProjects } from '../../features/projects/useProjects'
import { useReports } from '../../features/reports/useReports'
import { useRuns } from '../../features/runs/useRuns'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'
import { storageGet } from '../../utils/storage'

const AGENT_KEY_STORAGE = 'last_agent_api_key'

const {
  total: projectsTotal,
  loading: projectsLoading,
  error: projectsError,
  loadProjects,
} = useProjects()

const {
  total: agentsTotal,
  loading: agentsLoading,
  error: agentsError,
  loadAgents,
} = useAgents()

const {
  runs,
  total: runsTotal,
  loading: runsLoading,
  error: runsError,
  loadRuns,
} = useRuns()

const {
  reports,
  total: reportsTotal,
  loading: reportsLoading,
  error: reportsError,
  loadReports,
} = useReports()

const stats = reactive({
  projects: 0,
  agents: 0,
  runs: 0,
  reports: 0,
})

const agentKeyMissing = computed(() => {
  return !storageGet(AGENT_KEY_STORAGE, '').trim()
})

const loading = computed(() => {
  return (
    projectsLoading.value ||
    agentsLoading.value ||
    runsLoading.value ||
    reportsLoading.value
  )
})

const error = computed(() => {
  /*
   * Ignore runsError when no local agent key is saved.
   * Runs are protected by x-agent-api-key, but the dashboard home should
   * still load projects, agents and reports.
   */
  if (agentKeyMissing.value) {
    return (
      projectsError.value ||
      agentsError.value ||
      reportsError.value
    )
  }

  return (
    projectsError.value ||
    agentsError.value ||
    runsError.value ||
    reportsError.value
  )
})

const recentRuns = computed(() => {
  return runs.value.slice(0, 5)
})

const recentReports = computed(() => {
  return reports.value.slice(0, 5)
})

async function loadDashboard() {
  const agentApiKey = storageGet(AGENT_KEY_STORAGE, '').trim()

  await Promise.all([
    loadProjects({ limit: 5, offset: 0 }),
    loadAgents({ limit: 5, offset: 0 }),
    loadReports({ limit: 5, offset: 0 }),
  ])

  if (agentApiKey) {
    try {
      await loadRuns({
        limit: 5,
        offset: 0,
        agentApiKey,
      })
    } catch {
      /*
       * Keep the dashboard usable even if the saved agent key is invalid.
       */
    }
  }

  stats.projects = projectsTotal.value
  stats.agents = agentsTotal.value
  stats.runs = agentApiKey ? runsTotal.value : 0
  stats.reports = reportsTotal.value
}

onMounted(() => {
  loadDashboard()
})
</script>
<style scoped>
.dashboard-home-action,
.dashboard-card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border: 1px solid rgba(56, 189, 248, 0.38);
  border-radius: 999px;
  padding: 0 16px;
  background: linear-gradient(135deg, var(--sa-primary), var(--sa-primary-strong));
  color: #03111d;
  font-size: 0.9rem;
  font-weight: 850;
}

.dashboard-home-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 18px;
  margin-top: 22px;
}

.reports-list {
  display: grid;
  gap: 12px;
}

.report-preview {
  display: grid;
  gap: 4px;
  border: 1px solid var(--sa-border);
  border-radius: 16px;
  padding: 14px;
  background: rgba(15, 23, 42, 0.58);
  transition:
    border-color 160ms ease,
    background 160ms ease,
    transform 160ms ease;
}

.report-preview:hover {
  transform: translateY(-1px);
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.72);
}

.report-preview strong {
  color: var(--sa-text);
  font-size: 0.94rem;
}

.report-preview span {
  color: var(--sa-text-muted);
  font-size: 0.82rem;
}

.dashboard-home-error {
  margin-top: 20px;
}

.dashboard-agent-key-warning {
  margin-bottom: 22px;
}

@media (max-width: 980px) {
  .dashboard-home-grid {
    grid-template-columns: 1fr;
  }
}
</style>
