<!--
 *
 *  @file SettingsPage.vue
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
    title="Settings"
    subtitle="Configure frontend preferences and local development values."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Settings</p>
        <h2 class="dashboard-page-title">Workspace settings</h2>
        <p class="dashboard-page-description">
          These settings are stored locally in your browser for MVP testing.
        </p>
      </div>

      <AppButton variant="danger" @click="clearLocalData">
        Clear local data
      </AppButton>
    </section>

    <div class="settings-grid">
      <AppCard
        title="API configuration"
        description="Current frontend API target."
      >
        <dl class="settings-list">
          <div>
            <dt>App name</dt>
            <dd>{{ env.appName }}</dd>
          </div>

          <div>
            <dt>Environment</dt>
            <dd>{{ env.appEnvironment }}</dd>
          </div>

          <div>
            <dt>API base URL</dt>
            <dd>{{ env.apiBaseUrl }}</dd>
          </div>

          <div>
            <dt>Mode</dt>
            <dd>{{ env.isProduction ? 'production' : 'development' }}</dd>
          </div>
        </dl>
      </AppCard>

      <AppCard
        title="Agent key helper"
        description="Store a temporary agent key for dashboard run detail pages."
      >
        <form class="form-stack" @submit.prevent="saveAgentKey">
          <AppInput
            v-model="agentKey"
            label="Last agent API key"
            placeholder="sa_agent_key_xxx"
            hint="This is local browser storage only. Production should use safer token handling."
          />

          <p v-if="message" class="settings-message">
            {{ message }}
          </p>

          <div class="form-actions form-actions-left">
            <AppButton type="submit">
              Save key locally
            </AppButton>

            <AppButton
              type="button"
              variant="secondary"
              @click="removeAgentKey"
            >
              Remove key
            </AppButton>
          </div>
        </form>
      </AppCard>

      <AppCard
        title="MVP notes"
        description="Important current behavior."
      >
        <ul class="settings-notes">
          <li>
            Backend responses use <code>ok</code>, <code>message</code>,
            and <code>data</code>.
          </li>
          <li>
            Run, event and run-report endpoints require
            <code>x-agent-api-key</code>.
          </li>
          <li>
            Agent keys are shown only once after creation.
          </li>
          <li>
            Dashboard auth token is currently stored in localStorage for MVP use.
          </li>
        </ul>
      </AppCard>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, ref } from 'vue'

import AppButton from '../../components/common/AppButton.vue'
import AppCard from '../../components/common/AppCard.vue'
import AppInput from '../../components/common/AppInput.vue'
import { env } from '../../config/env'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import {
  storageClearApp,
  storageGet,
  storageRemove,
  storageSet,
} from '../../utils/storage'

const AGENT_KEY_STORAGE = 'last_agent_api_key'

const agentKey = ref(storageGet(AGENT_KEY_STORAGE, ''))
const message = ref('')

const hasAgentKey = computed(() => {
  return agentKey.value.trim().length > 0
})

function saveAgentKey() {
  const value = agentKey.value.trim()

  if (!value) {
    message.value = 'Agent key is empty.'
    return
  }

  storageSet(AGENT_KEY_STORAGE, value)
  agentKey.value = value
  message.value = 'Agent key saved locally.'
}

function removeAgentKey() {
  storageRemove(AGENT_KEY_STORAGE)
  agentKey.value = ''
  message.value = 'Agent key removed.'
}

function clearLocalData() {
  storageClearApp()
  agentKey.value = ''
  message.value = 'Local Softadastra data cleared.'
}
</script>

<style scoped>
.settings-grid {
  display: grid;
  gap: 18px;
}

.settings-list {
  display: grid;
  gap: 14px;
  margin: 0;
}

.settings-list div {
  display: grid;
  gap: 4px;
  border-bottom: 1px solid var(--sa-border);
  padding-bottom: 12px;
}

.settings-list div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.settings-list dt {
  color: var(--sa-text-muted);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.settings-list dd {
  margin: 0;
  color: var(--sa-text-soft);
  word-break: break-word;
}

.settings-message {
  margin: 0;
  color: var(--sa-success);
  font-size: 0.9rem;
  font-weight: 750;
}

.settings-notes {
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 20px;
  color: var(--sa-text-soft);
}

.settings-notes li {
  padding-left: 4px;
}

.settings-notes code {
  border: 1px solid var(--sa-border);
  border-radius: 8px;
  padding: 2px 6px;
  background: rgba(3, 7, 18, 0.72);
  color: #dbeafe;
}
</style>
