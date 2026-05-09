<!--
 *
 *  @file HomePage.vue
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
    <section class="home-hero">
      <div class="sa-container home-hero-inner">
        <div class="home-hero-content">
          <span class="sa-badge">
            <span class="sa-status-dot"></span>
            Reliability testing for real network failures
          </span>

          <h1 class="home-title">
            Know if your API loses data when the network fails.
          </h1>

          <p class="home-description">
            Softadastra Cloud runs failure-aware reliability tests against your
            APIs, records events, produces reports, and shows where your system
            breaks under timeouts, retries, offline periods, and recovery.
          </p>

          <div class="home-actions">
            <RouterLink to="/register" class="home-primary-action">
              Start testing
            </RouterLink>

            <RouterLink to="/docs" class="home-secondary-action">
              Read docs
            </RouterLink>
          </div>
        </div>

        <div class="home-terminal" aria-label="Softadastra Cloud API example">
          <div class="home-terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre><code>curl -X POST /api/runs
x-agent-api-key: sa_agent_key_xxx

{
  "target_url": "https://api.example.com/orders",
  "method": "POST",
  "scenario": "unstable_network"
}

Softadastra result:
score: 87
grade: B
risk: timeout</code></pre>
        </div>
      </div>
    </section>

    <section class="home-section">
      <div class="sa-container">
        <div class="home-section-heading">
          <span class="sa-badge">MVP boundary</span>
          <h2 class="sa-section-title">Built around one clear promise.</h2>
          <p class="sa-section-text">
            Softadastra shows whether your application loses data when the
            network fails. The MVP focuses on HTTP APIs, local agents, events,
            reports, and reliability scores.
          </p>
        </div>

        <div class="home-feature-grid">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="home-feature-card"
          >
            <span class="home-feature-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="home-section home-section-muted">
      <div class="sa-container home-flow">
        <div>
          <span class="sa-badge">Agent flow</span>
          <h2 class="sa-section-title">From test run to reliability report.</h2>
          <p class="sa-section-text">
            Your local agent creates a run, submits observable events, finishes
            the run, then uploads a report. The dashboard turns that into a
            clear reliability view.
          </p>
        </div>

        <div class="home-flow-list">
          <div
            v-for="(step, index) in flowSteps"
            :key="step"
            class="home-flow-item"
          >
            <span>{{ index + 1 }}</span>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '../../layouts/PublicLayout.vue'

const features = [
  {
    icon: '↯',
    title: 'Failure scenarios',
    description:
      'Simulate timeout, retry, offline logic, recovery, and failure-prone API behavior.',
  },
  {
    icon: '◉',
    title: 'Agent events',
    description:
      'Capture the timeline of what happened during a reliability run.',
  },
  {
    icon: '◇',
    title: 'Reports',
    description:
      'Store final run output with summaries, raw JSON, risks, and score data.',
  },
  {
    icon: '▣',
    title: 'Dashboard',
    description:
      'View projects, agents, runs, events, and reports from one clean interface.',
  },
]

const flowSteps = [
  'Create a project for the API you want to test.',
  'Create an agent and store the generated API key.',
  'Run reliability tests and submit events to the cloud API.',
  'Finish the run and upload a report.',
  'Review the reliability score and risks in the dashboard.',
]
</script>

<style scoped>
.home-hero {
  padding: 86px 0 92px;
}

.home-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
  gap: 58px;
  align-items: center;
}

.home-hero-content {
  min-width: 0;
}

.home-title {
  max-width: 760px;
  margin: 20px 0 18px;
  color: var(--sa-text);
  font-size: clamp(3rem, 7vw, 6.8rem);
  line-height: 0.92;
  letter-spacing: -0.085em;
}

.home-description {
  max-width: 720px;
  margin-bottom: 30px;
  color: var(--sa-text-muted);
  font-size: 1.08rem;
}

.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.home-primary-action,
.home-secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 999px;
  padding: 0 20px;
  font-size: 0.96rem;
  font-weight: 850;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease;
}

.home-primary-action {
  border: 1px solid rgba(56, 189, 248, 0.38);
  background: linear-gradient(135deg, var(--sa-primary), var(--sa-primary-strong));
  color: #03111d;
  box-shadow: 0 16px 38px rgba(56, 189, 248, 0.24);
}

.home-secondary-action {
  border: 1px solid var(--sa-border);
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text);
}

.home-primary-action:hover,
.home-secondary-action:hover {
  transform: translateY(-1px);
}

.home-terminal {
  overflow: hidden;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-xl);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent),
    rgba(3, 7, 18, 0.92);
  box-shadow: var(--sa-shadow-md);
}

.home-terminal-top {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--sa-border);
  padding: 14px 16px;
}

.home-terminal-top span {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.42);
}

.home-terminal pre {
  overflow-x: auto;
  margin: 0;
  padding: 22px;
  color: #dbeafe;
  font-size: 0.9rem;
  line-height: 1.7;
}

.home-section {
  padding: 82px 0;
}

.home-section-muted {
  border-top: 1px solid var(--sa-border);
  border-bottom: 1px solid var(--sa-border);
  background: rgba(15, 23, 42, 0.35);
}

.home-section-heading {
  margin-bottom: 34px;
}

.home-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.home-feature-card {
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 22px;
  background: rgba(15, 23, 42, 0.72);
  box-shadow: var(--sa-shadow-sm);
}

.home-feature-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border: 1px solid rgba(56, 189, 248, 0.28);
  border-radius: 15px;
  background: rgba(56, 189, 248, 0.08);
  color: var(--sa-primary);
  font-size: 1.2rem;
  font-weight: 900;
}

.home-feature-card h3 {
  margin-bottom: 8px;
  color: var(--sa-text);
  font-size: 1.05rem;
}

.home-feature-card p {
  margin: 0;
  font-size: 0.92rem;
}

.home-flow {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 48px;
  align-items: start;
}

.home-flow-list {
  display: grid;
  gap: 14px;
}

.home-flow-item {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  padding: 16px;
  background: rgba(15, 23, 42, 0.68);
}

.home-flow-item span {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 15px;
  background: var(--sa-primary-soft);
  color: var(--sa-primary);
  font-weight: 900;
}

.home-flow-item p {
  margin: 0;
  color: var(--sa-text-soft);
  font-weight: 650;
}

@media (max-width: 980px) {
  .home-hero-inner,
  .home-flow {
    grid-template-columns: 1fr;
  }

  .home-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding: 58px 0 70px;
  }

  .home-feature-grid {
    grid-template-columns: 1fr;
  }

  .home-terminal pre {
    font-size: 0.82rem;
  }
}
</style>
