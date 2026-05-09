<!--
 *
 *  @file RunDetailPage.vue
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
    title="Run details"
    subtitle="Inspect one reliability run, its events and final report."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Run</p>
        <h2 class="dashboard-page-title">
          {{ run?.id || 'Loading run...' }}
        </h2>
        <p class="dashboard-page-description">
          {{ run?.targetUrl || 'Reliability run details and submitted telemetry.' }}
        </p>
      </div>

      <RouterLink to="/dashboard/runs" class="run-detail-back">
        Back to runs
      </RouterLink>
    </section>

    <AppCard
      title="Agent API key"
      description="Protected run endpoints require the agent key that created this run."
      class="run-key-card"
    >
      <div class="form-row-inline">
        <AppInput
          v-model="agentApiKey"
          label="Agent API key"
          placeholder="sa_agent_key_xxx"
        />

        <div class="run-key-actions">
          <AppButton :loading="loading" @click="loadRunDetail">
            Reload
          </AppButton>
        </div>
      </div>

      <p class="form-hint">
        This dashboard does not store one-time agent keys. Paste it only when you need to load protected run resources.
      </p>
    </AppCard>

    <AppLoading v-if="loading" center message="Loading run..." />

    <div v-else-if="run" class="run-detail-grid">
      <div class="dashboard-grid dashboard-grid-4">
        <StatCard
          label="Status"
          :value="run.status"
          helper="Current run state"
        />

        <StatCard
          label="Method"
          :value="run.method"
          helper="HTTP method"
        />

        <StatCard
          label="Scenario"
          :value="run.scenario"
          helper="Failure scenario"
        />

        <StatCard
          label="Events"
          :value="events.length"
          helper="Captured timeline items"
        />
      </div>

      <AppCard title="Run information" description="Core metadata for this reliability test.">
        <dl class="run-meta">
          <div>
            <dt>Run ID</dt>
            <dd>{{ run.id }}</dd>
          </div>

          <div>
            <dt>Project ID</dt>
            <dd>{{ run.projectId }}</dd>
          </div>

          <div>
            <dt>Agent ID</dt>
            <dd>{{ run.agentId }}</dd>
          </div>

          <div>
            <dt>Target URL</dt>
            <dd>{{ run.targetUrl }}</dd>
          </div>

          <div>
            <dt>Started</dt>
            <dd>{{ formatDateTime(run.startedAt) }}</dd>
          </div>

          <div>
            <dt>Finished</dt>
            <dd>{{ formatDateTime(run.finishedAt) }}</dd>
          </div>
        </dl>
      </AppCard>

      <AppCard title="Submit event" description="Add an observable event to this run.">
        <form class="form-stack" @submit.prevent="submitEvent">
          <div class="form-row-inline">
            <AppInput
              v-model="eventForm.eventType"
              label="Event type"
              placeholder="request_timeout"
              :disabled="submittingEvent"
            />

            <AppInput
              v-model="eventForm.severity"
              label="Severity"
              placeholder="warning"
              :disabled="submittingEvent"
            />
          </div>

          <AppInput
            v-model="eventForm.message"
            label="Message"
            placeholder="Request timed out after 5000ms"
            :disabled="submittingEvent"
            textarea
          />

          <AppInput
            v-model="eventForm.payload"
            label="Payload JSON"
            placeholder='{"duration_ms":5000,"attempt":1}'
            :disabled="submittingEvent"
            textarea
          />

          <p v-if="eventError" class="form-error">
            {{ eventError }}
          </p>

          <div class="form-actions">
            <AppButton type="submit" :loading="submittingEvent">
              Submit event
            </AppButton>
          </div>
        </form>
      </AppCard>

      <AppCard title="Events" description="Timeline submitted by the local agent.">
        <AppEmptyState
          v-if="events.length === 0"
          title="No events yet"
          description="Submit events to build a timeline for this run."
        />

        <div v-else class="timeline">
          <div
            v-for="event in events"
            :key="event.id"
            class="timeline-item"
          >
            <span class="timeline-dot"></span>

            <article class="timeline-card">
              <h3 class="timeline-title">
                {{ event.eventType }}
              </h3>

              <p class="timeline-meta">
                {{ event.severity }} · {{ formatDateTime(event.createdAt) }}
              </p>

              <p class="run-event-message">
                {{ event.message }}
              </p>

              <code v-if="event.payload" class="run-event-payload">
                {{ event.payload }}
              </code>
            </article>
          </div>
        </div>
      </AppCard>

      <AppCard title="Report" description="Final reliability output for this run.">
        <AppEmptyState
          v-if="!report"
          title="No report yet"
          description="Submit a report after the run finishes."
        />

        <div v-else class="run-report">
          <h3>{{ report.summary }}</h3>
          <p>{{ formatDateTime(report.createdAt) }}</p>
          <pre class="sa-scrollbar"><code>{{ prettyReportJson }}</code></pre>
        </div>

        <form class="form-stack run-report-form" @submit.prevent="submitReport">
          <AppInput
            v-model="reportForm.summary"
            label="Report summary"
            placeholder="Reliability test completed with timeout risk"
            :disabled="submittingReport"
          />

          <AppInput
            v-model="reportForm.rawJson"
            label="Raw JSON"
            placeholder='{"score":87,"grade":"B","risks":["timeout"]}'
            :disabled="submittingReport"
            textarea
          />

          <p v-if="reportError" class="form-error">
            {{ reportError }}
          </p>

          <div class="form-actions">
            <AppButton type="submit" :loading="submittingReport">
              Submit report
            </AppButton>
          </div>
        </form>
      </AppCard>
    </div>

    <AppEmptyState
      v-else
      title="Run not found"
      description="The requested run could not be loaded."
    />

    <p v-if="error" class="form-error run-detail-error">
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
import StatCard from '../../components/dashboard/StatCard.vue'
import {
  parseEventPayload,
  validateEventForm,
} from '../../features/events/eventHelpers'
import {
  useEvents,
} from '../../features/events/useEvents'
import {
  prettyReportRawJson,
  validateReportForm,
} from '../../features/reports/reportHelpers'
import {
  useReports,
} from '../../features/reports/useReports'
import {
  useRuns,
} from '../../features/runs/useRuns'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'
import { storageGet, storageSet } from '../../utils/storage'

const route = useRoute()

const AGENT_KEY_STORAGE = 'last_agent_api_key'

const {
  currentRun,
  loading: runLoading,
  error: runError,
  loadRun,
} = useRuns()

const {
  events,
  loading: eventsLoading,
  saving: eventSaving,
  error: eventsError,
  loadEventsForRun,
  saveEventForRun,
} = useEvents()

const {
  currentReport,
  loading: reportLoading,
  saving: reportSaving,
  error: reportsError,
  loadReportForRun,
  saveReportForRun,
} = useReports()

const agentApiKey = ref(storageGet(AGENT_KEY_STORAGE, ''))

const eventError = ref('')
const reportError = ref('')
const localError = ref('')

const eventForm = reactive({
  eventType: 'request_timeout',
  severity: 'warning',
  message: 'Request timed out after 5000ms',
  payload: '{"duration_ms":5000,"attempt":1}',
})

const reportForm = reactive({
  summary: 'Reliability test completed with timeout risk',
  rawJson: '{"score":87,"grade":"B","risks":["timeout"]}',
})

const run = computed(() => {
  return currentRun.value
})

const report = computed(() => {
  return currentReport.value
})

const loading = computed(() => {
  return runLoading.value || eventsLoading.value || reportLoading.value
})

const submittingEvent = computed(() => {
  return eventSaving.value
})

const submittingReport = computed(() => {
  return reportSaving.value
})

const error = computed(() => {
  return (
    localError.value ||
    runError.value ||
    eventsError.value ||
    reportsError.value
  )
})

const prettyReportJson = computed(() => {
  return prettyReportRawJson(report.value)
})

function parseJsonOrString(value) {
  return parseEventPayload(value)
}

function saveAgentKeyIfPresent() {
  if (agentApiKey.value.trim()) {
    storageSet(AGENT_KEY_STORAGE, agentApiKey.value.trim())
  }
}

async function loadRunDetail() {
  localError.value = ''
  eventError.value = ''
  reportError.value = ''

  saveAgentKeyIfPresent()

  const runId = String(route.params.id || '')

  try {
    await loadRun(runId, {
      agentApiKey: agentApiKey.value.trim(),
    })

    await loadEventsForRun(runId, {
      limit: 100,
      offset: 0,
      agentApiKey: agentApiKey.value.trim(),
    })

    try {
      await loadReportForRun(runId, {
        agentApiKey: agentApiKey.value.trim(),
      })
    } catch {
      /*
       * A run can exist without a report.
       * The page should still load and display the report empty state.
       */
    }
  } catch (err) {
    localError.value = err.message
  }
}

async function submitEvent() {
  eventError.value = ''

  const validation = validateEventForm({
    agentApiKey: agentApiKey.value,
    eventType: eventForm.eventType,
    severity: eventForm.severity,
    payload: eventForm.payload,
  })

  if (!validation.valid) {
    eventError.value =
      validation.errors.agentApiKey ||
      validation.errors.eventType ||
      validation.errors.severity ||
      validation.errors.payload ||
      'Invalid event form.'

    return
  }

  try {
    await saveEventForRun(String(route.params.id || ''), {
      eventType: eventForm.eventType.trim(),
      severity: eventForm.severity.trim() || 'info',
      message: eventForm.message.trim(),
      payload: parseJsonOrString(eventForm.payload),
      agentApiKey: agentApiKey.value.trim(),
    })

    await loadRunDetail()
  } catch (err) {
    eventError.value = err.message
  }
}

async function submitReport() {
  reportError.value = ''

  const validation = validateReportForm({
    agentApiKey: agentApiKey.value,
    summary: reportForm.summary,
    rawJson: reportForm.rawJson,
  })

  if (!validation.valid) {
    reportError.value =
      validation.errors.agentApiKey ||
      validation.errors.summary ||
      validation.errors.rawJson ||
      'Invalid report form.'

    return
  }

  try {
    await saveReportForRun(String(route.params.id || ''), {
      summary: reportForm.summary.trim(),
      rawJson: parseJsonOrString(reportForm.rawJson),
      agentApiKey: agentApiKey.value.trim(),
    })

    await loadRunDetail()
  } catch (err) {
    reportError.value = err.message
  }
}

onMounted(() => {
  loadRunDetail()
})
</script>

<style scoped>
.run-key-card {
  margin-bottom: 22px;
}

.run-key-actions {
  display: flex;
  align-items: end;
  padding-top: 28px;
}

.run-detail-back {
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

.run-detail-grid {
  display: grid;
  gap: 18px;
}

.run-meta {
  display: grid;
  gap: 14px;
  margin: 0;
}

.run-meta div {
  display: grid;
  gap: 4px;
  border-bottom: 1px solid var(--sa-border);
  padding-bottom: 12px;
}

.run-meta div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.run-meta dt {
  color: var(--sa-text-muted);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.run-meta dd {
  margin: 0;
  color: var(--sa-text-soft);
  word-break: break-word;
}

.run-event-message {
  margin: 8px 0 0;
  color: var(--sa-text-soft);
}

.run-event-payload {
  display: block;
  overflow-x: auto;
  margin-top: 10px;
  border-radius: 12px;
  padding: 10px;
  background: rgba(3, 7, 18, 0.72);
  color: #dbeafe;
  white-space: pre;
}

.run-report {
  display: grid;
  gap: 10px;
}

.run-report h3 {
  margin: 0;
  color: var(--sa-text);
}

.run-report p {
  margin: 0;
  color: var(--sa-text-muted);
}

.run-report pre {
  overflow-x: auto;
  max-height: 360px;
  margin: 0;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 16px;
  background: rgba(3, 7, 18, 0.82);
  color: #dbeafe;
}

.run-report-form {
  margin-top: 22px;
  border-top: 1px solid var(--sa-border);
  padding-top: 20px;
}

.run-detail-error {
  margin-top: 18px;
}
</style>
