<template>
  <div class="docs-page sb-marketing-page">
    <section class="docs-page__hero sb-marketing-section">
      <div class="sb-container">
        <div class="docs-page__head">
          <BaseBadge variant="primary"> Documentation </BaseBadge>

          <h1>Converdict documentation is not public yet.</h1>

          <p>
            Converdict is still in development. This page will later contain the
            product documentation, CLI usage, agent setup, reliability
            scenarios, report formats, and integration guides.
          </p>
        </div>
      </div>
    </section>

    <section
      class="docs-page__section sb-marketing-section sb-marketing-section--bordered"
    >
      <div class="sb-container">
        <div class="docs-page__grid">
          <BaseCard v-for="item in plannedDocs" :key="item.title">
            <span>{{ item.label }}</span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="docs-page__section sb-marketing-section">
      <div class="sb-container">
        <BaseAlert title="Early stage" variant="info">
          For now, Softadastra Business only introduces Converdict. The full
          documentation will be added when the product, dashboard, agents, and
          reports are ready.
        </BaseAlert>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import BaseAlert from "../../components/ui/BaseAlert.vue";
import BaseBadge from "../../components/ui/BaseBadge.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import CtaSection from "../../components/marketing/CtaSection.vue";

const plannedDocs = [
  {
    label: "01",
    title: "Getting started",
    text: "Install the Converdict CLI, create a project, and run the first reliability verification scenario.",
  },
  {
    label: "02",
    title: "Failure scenarios",
    text: "Define tests for retries, timeouts, crashes, network interruptions, duplicate writes, and recovery paths.",
  },
  {
    label: "03",
    title: "Reports",
    text: "Understand reliability verdicts, technical findings, data loss checks, duplicate write checks, and recovery metrics.",
  },
  {
    label: "04",
    title: "Agents",
    text: "Connect local or server-side agents that execute controlled reliability verification tasks.",
  },
];
</script>

<style scoped>
.docs-page__hero {
  padding-top: 104px;
}

.docs-page__head {
  display: grid;
  justify-items: start;
  max-width: 820px;
}

.docs-page__head h1 {
  margin: 20px 0 0;
  color: var(--sb-text);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 860;
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.docs-page__head p {
  max-width: 720px;
  margin-top: 22px;
  color: var(--sb-text-soft);
  font-size: 1.05rem;
  line-height: 1.75;
}

.docs-page__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.docs-page__grid span {
  display: inline-flex;
  margin-bottom: 18px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.75rem;
  font-weight: 850;
  letter-spacing: 0.08em;
}

.docs-page__grid h2 {
  margin: 0 0 10px;
  color: var(--sb-text);
  font-size: 1.12rem;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.docs-page__grid p {
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

@media (max-width: 820px) {
  .docs-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
