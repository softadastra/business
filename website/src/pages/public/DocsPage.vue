<!--
 *
 *  @file DocsPage.vue
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
  <PublicLayout>
    <section class="docs-page">
      <div class="sa-container docs-layout">
        <aside class="docs-sidebar">
          <p class="docs-sidebar-title">API sections</p>

          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            class="docs-sidebar-link"
          >
            {{ section.title }}
          </a>
        </aside>

        <article class="docs-content">
          <header class="docs-hero">
            <span class="sa-badge">Softadastra Cloud API</span>
            <h1 class="sa-section-title">Local API quick reference.</h1>
            <p class="sa-section-text">
              The current MVP backend returns JSON responses with
              <code>ok</code>, <code>message</code>, and <code>data</code>.
              Agent-protected endpoints use the
              <code>x-agent-api-key</code> header.
            </p>
          </header>

          <section id="base-url" class="docs-section">
            <h2>Base URL</h2>
            <pre><code>http://127.0.0.1:8080</code></pre>
          </section>

          <section id="response-format" class="docs-section">
            <h2>Response format</h2>
            <pre><code>{
  "ok": true,
  "message": "Runs loaded",
  "data": {}
}</code></pre>
          </section>

          <section id="agent-auth" class="docs-section">
            <h2>Agent authentication</h2>
            <p>
              Runs, run events, and run reports use an agent API key.
            </p>
            <pre><code>x-agent-api-key: sa_agent_key_xxx</code></pre>
          </section>

          <section id="curl-flow" class="docs-section">
            <h2>Test flow with curl</h2>
            <pre><code>BASE_URL="http://127.0.0.1:8080"

curl -s "$BASE_URL/health" | jq

PROJECT_ID=$(curl -s -X POST "$BASE_URL/api/projects" \
  -H "Content-Type: application/json" \
  -d '{"name":"Curl Test API","description":"API tested from curl","base_url":"https://api.example.com"}' \
  | jq -r '.data.id')</code></pre>
          </section>

          <section id="endpoints" class="docs-section">
            <h2>Core endpoints</h2>

            <div class="docs-endpoints">
              <div v-for="endpoint in endpoints" :key="endpoint.path" class="docs-endpoint">
                <span class="docs-method">{{ endpoint.method }}</span>
                <code>{{ endpoint.path }}</code>
                <p>{{ endpoint.description }}</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '../../layouts/PublicLayout.vue'

const sections = [
  {
    id: 'base-url',
    title: 'Base URL',
  },
  {
    id: 'response-format',
    title: 'Response format',
  },
  {
    id: 'agent-auth',
    title: 'Agent auth',
  },
  {
    id: 'curl-flow',
    title: 'Curl flow',
  },
  {
    id: 'endpoints',
    title: 'Endpoints',
  },
]

const endpoints = [
  {
    method: 'GET',
    path: '/health',
    description: 'Returns backend health information.',
  },
  {
    method: 'POST',
    path: '/api/auth/register',
    description: 'Creates a dashboard user.',
  },
  {
    method: 'POST',
    path: '/api/projects',
    description: 'Creates a project to test.',
  },
  {
    method: 'POST',
    path: '/api/agents',
    description: 'Creates an agent and returns a one-time API key.',
  },
  {
    method: 'POST',
    path: '/api/runs',
    description: 'Creates a reliability run. Requires agent API key.',
  },
  {
    method: 'POST',
    path: '/api/runs/:id/events',
    description: 'Submits an event for a run. Requires agent API key.',
  },
  {
    method: 'POST',
    path: '/api/runs/:id/report',
    description: 'Submits a report for a run. Requires agent API key.',
  },
]
</script>

<style scoped>
.docs-page {
  padding: 72px 0 96px;
}

.docs-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 42px;
  align-items: start;
}

.docs-sidebar {
  position: sticky;
  top: calc(var(--sa-header-height) + 24px);
  display: grid;
  gap: 8px;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 14px;
  background: rgba(15, 23, 42, 0.72);
}

.docs-sidebar-title {
  margin: 0 0 6px;
  color: var(--sa-text);
  font-size: 0.82rem;
  font-weight: 850;
}

.docs-sidebar-link {
  border-radius: 12px;
  padding: 8px 10px;
  color: var(--sa-text-muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.docs-sidebar-link:hover {
  background: rgba(148, 163, 184, 0.08);
  color: var(--sa-text);
}

.docs-hero {
  margin-bottom: 36px;
}

.docs-section {
  scroll-margin-top: calc(var(--sa-header-height) + 32px);
  border-top: 1px solid var(--sa-border);
  padding: 30px 0;
}

.docs-section h2 {
  margin-bottom: 12px;
  color: var(--sa-text);
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.docs-section p {
  max-width: 760px;
}

.docs-section code {
  color: #dbeafe;
}

.docs-section pre {
  overflow-x: auto;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 18px;
  background: rgba(3, 7, 18, 0.86);
}

.docs-endpoints {
  display: grid;
  gap: 12px;
}

.docs-endpoint {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 8px 14px;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 16px;
  background: rgba(15, 23, 42, 0.58);
}

.docs-endpoint p {
  grid-column: 2;
  margin: 0;
}

.docs-method {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 999px;
  background: var(--sa-primary-soft);
  color: var(--sa-primary);
  font-size: 0.76rem;
  font-weight: 900;
}

@media (max-width: 860px) {
  .docs-layout {
    grid-template-columns: 1fr;
  }

  .docs-sidebar {
    position: static;
  }
}
</style>
