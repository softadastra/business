<template>
  <div class="docs-page">
    <section class="docs-page__hero">
      <div class="docs-page__hero-inner">
        <div class="docs-page__head">
          <p class="docs-page__eyebrow">Documentation</p>

          <h1>Converdict documentation is being prepared.</h1>

          <p>
            The public docs will cover how to run reliability checks, define
            failure scenarios, connect agents, read verdicts, and integrate
            Converdict into engineering workflows.
          </p>
        </div>

        <div class="docs-page__status">
          <span>Status</span>
          <strong>Not public yet</strong>
          <p>
            Converdict is still in development. The documentation will open as
            the CLI, dashboard, agents, and reports become ready.
          </p>
        </div>
      </div>
    </section>

    <section class="docs-page__section">
      <div class="docs-page__section-inner">
        <div class="docs-page__section-head">
          <p class="docs-page__eyebrow">Planned docs</p>

          <h2>What the documentation will cover.</h2>
        </div>

        <div class="docs-page__list">
          <article
            v-for="item in plannedDocs"
            :key="item.title"
            class="docs-page__item"
          >
            <span class="docs-page__number">{{ item.label }}</span>

            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="docs-page__notice-section">
      <div class="docs-page__notice">
        <span class="docs-page__notice-label">Early stage</span>

        <div>
          <h2>The product is still being built.</h2>

          <p>
            For now, Softadastra Business introduces Converdict and its product
            direction. Full documentation will be added when the first public
            workflows are ready to test.
          </p>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import CtaSection from "../../components/marketing/CtaSection.vue";

const plannedDocs = [
  {
    label: "01",
    title: "Getting started",
    text: "Install the CLI, create a verification project, and run the first reliability scenario.",
  },
  {
    label: "02",
    title: "Failure scenarios",
    text: "Define tests for timeouts, retries, crashes, network cuts, duplicate writes, and recovery paths.",
  },
  {
    label: "03",
    title: "Reliability verdicts",
    text: "Understand pass, fail, unsafe, and needs investigation results from Converdict runs.",
  },
  {
    label: "04",
    title: "Reports",
    text: "Read findings about data loss, duplicate writes, retry safety, recovery time, and convergence.",
  },
  {
    label: "05",
    title: "Agents",
    text: "Connect local or server-side agents that execute controlled reliability checks.",
  },
  {
    label: "06",
    title: "Integrations",
    text: "Add Converdict to development, CI, staging, and production-readiness workflows.",
  },
];
</script>

<style scoped>
.docs-page {
  min-height: 100vh;
  background: var(--sb-bg);
  color: var(--sb-text);
}

/* ==========================================================================
   Hero
   ========================================================================== */

.docs-page__hero {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.docs-page__hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 420px);
  gap: clamp(40px, 5vw, 72px);
  align-items: end;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 104px 0 88px;
}

.docs-page__head {
  max-width: 840px;
}

.docs-page__eyebrow {
  margin: 0 0 16px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.docs-page__head h1 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2.6rem, 5.4vw, 5.2rem);
  font-weight: 840;
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.docs-page__head p {
  max-width: 720px;
  margin-top: 24px;
  color: var(--sb-text-soft);
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.75;
}

.docs-page__status {
  display: grid;
  gap: 10px;
  border: 1px solid var(--sb-border);
  border-radius: 18px;
  padding: 22px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
}

.docs-page__status span {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.docs-page__status strong {
  color: var(--sb-text);
  font-size: 1.15rem;
  font-weight: 780;
  letter-spacing: -0.03em;
}

.docs-page__status p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

/* ==========================================================================
   Planned docs
   ========================================================================== */

.docs-page__section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.docs-page__section-inner {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.docs-page__section-head {
  max-width: 760px;
  margin-bottom: 44px;
}

.docs-page__section-head h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.docs-page__list {
  display: grid;
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  background: var(--sb-surface);
  overflow: hidden;
  box-shadow: var(--sb-shadow-md);
}

.docs-page__item {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  border-bottom: 1px solid var(--sb-border);
  padding: 26px 28px;
  transition: background var(--sb-transition-base);
}

.docs-page__item:last-child {
  border-bottom: none;
}

.docs-page__item:hover {
  background: var(--sb-surface-soft);
}

.docs-page__number {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.docs-page__item h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.12rem;
  font-weight: 780;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.docs-page__item p {
  max-width: 820px;
  margin: 8px 0 0;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ==========================================================================
   Notice
   ========================================================================== */

.docs-page__notice-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.docs-page__notice {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 32px;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 56px 0;
}

.docs-page__notice-label {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.docs-page__notice h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(1.4rem, 2.4vw, 2.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.docs-page__notice p {
  max-width: 760px;
  margin-top: 14px;
  color: var(--sb-text-muted);
  font-size: 0.96rem;
  line-height: 1.7;
}

/* ==========================================================================
   Responsive
   ========================================================================== */

@media (max-width: 980px) {
  .docs-page__hero-inner {
    grid-template-columns: 1fr;
    gap: 34px;
    padding: 76px 0 68px;
  }

  .docs-page__status {
    max-width: 620px;
  }

  .docs-page__section-inner {
    padding: 72px 0;
  }

  .docs-page__notice {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

@media (max-width: 620px) {
  .docs-page__hero-inner,
  .docs-page__section-inner,
  .docs-page__notice {
    width: min(100% - 24px, 1440px);
  }

  .docs-page__hero-inner {
    padding: 56px 0;
  }

  .docs-page__section-inner {
    padding: 56px 0;
  }

  .docs-page__item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 22px;
  }

  .docs-page__notice {
    padding: 44px 0;
  }
}
</style>
