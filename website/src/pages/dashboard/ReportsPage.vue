<!--
 *
 *  @file ReportsPage.vue
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
    title="Reports"
    subtitle="Review final reliability outputs submitted by agents."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Reports</p>
        <h2 class="dashboard-page-title">Reliability reports</h2>
        <p class="dashboard-page-description">
          Reports summarize completed runs and preserve the raw result JSON
          produced by local agents.
        </p>
      </div>

      <AppButton variant="secondary" :loading="loading" @click="loadReports">
        Refresh
      </AppButton>
    </section>

    <AppLoading v-if="loading" center message="Loading reports..." />

    <AppEmptyState
      v-else-if="reports.length === 0"
      title="No reports yet"
      description="Reports will appear here after an agent submits final run output."
    />

    <div v-else class="reports-grid">
      <AppCard
        v-for="report in reports"
        :key="report.id"
        hover
      >
        <template #header>
          <div class="report-card-header">
            <div>
              <h3 class="report-title">{{ report.summary }}</h3>
              <p class="report-meta">
                {{ formatDateTime(report.createdAt) }}
              </p>
            </div>

            <span class="status-pill success">
              saved
            </span>
          </div>
        </template>

        <dl class="report-details">
          <div>
            <dt>Report ID</dt>
            <dd>{{ report.id }}</dd>
          </div>

          <div>
            <dt>Run ID</dt>
            <dd>{{ report.runId }}</dd>
          </div>

          <div>
            <dt>Updated</dt>
            <dd>{{ formatDateTime(report.updatedAt) }}</dd>
          </div>
        </dl>

        <details class="report-json">
          <summary>View raw JSON</summary>
          <pre class="sa-scrollbar"><code>{{ prettyRawJson(report.rawJson) }}</code></pre>
        </details>

        <template #footer>
          <RouterLink
            :to="`/dashboard/runs/${report.runId}`"
            class="report-open-link"
          >
            Open run
          </RouterLink>
        </template>
      </AppCard>
    </div>

    <p v-if="error" class="form-error reports-error">
      {{ error }}
    </p>
  </DashboardLayout>
</template>

<script setup>
import { onMounted } from 'vue'

import AppButton from '../../components/common/AppButton.vue'
import AppCard from '../../components/common/AppCard.vue'
import AppEmptyState from '../../components/common/AppEmptyState.vue'
import AppLoading from '../../components/common/AppLoading.vue'
import {
  prettyReportRawJson,
} from '../../features/reports/reportHelpers'
import {
  useReports,
} from '../../features/reports/useReports'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'

const {
  reports,
  loading,
  error,
  loadReports,
} = useReports()

function prettyRawJson(value) {
  return prettyReportRawJson({
    rawJson: value,
  })
}

onMounted(() => {
  loadReports({
    limit: 100,
    offset: 0,
  })
})
</script>

<style scoped>
.reports-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.report-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.report-title {
  margin: 0;
  color: var(--sa-text);
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}

.report-meta {
  margin: 5px 0 0;
  color: var(--sa-text-muted);
  font-size: 0.84rem;
}

.report-details {
  display: grid;
  gap: 12px;
  margin: 0;
}

.report-details div {
  display: grid;
  gap: 4px;
  border-bottom: 1px solid var(--sa-border);
  padding-bottom: 10px;
}

.report-details div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.report-details dt {
  color: var(--sa-text-muted);
  font-size: 0.74rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.report-details dd {
  margin: 0;
  color: var(--sa-text-soft);
  word-break: break-word;
}

.report-json {
  margin-top: 18px;
}

.report-json summary {
  cursor: pointer;
  color: var(--sa-primary);
  font-size: 0.9rem;
  font-weight: 800;
}

.report-json pre {
  overflow-x: auto;
  max-height: 320px;
  margin: 12px 0 0;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 14px;
  background: rgba(3, 7, 18, 0.82);
  color: #dbeafe;
}

.report-open-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 0 13px;
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text);
  font-size: 0.86rem;
  font-weight: 800;
}

.report-open-link:hover {
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.82);
}

.reports-error {
  margin-top: 18px;
}

@media (max-width: 900px) {
  .reports-grid {
    grid-template-columns: 1fr;
  }
}
</style>
