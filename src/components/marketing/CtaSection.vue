<template>
  <section class="final-cta" id="cta">
    <div class="sb-container final-cta__inner">
      <p class="sb-eyebrow">Start here</p>
      <h2>Organize your C++ projects with Softadastra Cloud.</h2>
      <p>
        Keep project metadata, private packages, lockfiles, build reports, and team access connected to the local Vix.cpp workflow.
      </p>
      <div class="final-cta__actions">
        <BaseButton href="https://cloud.softadastra.com" size="lg">
          Open Softadastra Cloud
        </BaseButton>
        <BaseButton href="https://vixcpp.com" variant="secondary" size="lg">
          Explore Vix.cpp
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.final-cta {
  padding: 72px 0 86px;
  background: var(--sb-bg);
}

.final-cta__inner {
  max-width: 780px;
  padding: 28px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
  text-align: center;
  box-shadow: var(--sb-shadow-sm);
}

.final-cta h2 {
  margin-top: 10px;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.8vw, 3.2rem);
  font-weight: 720;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.final-cta p:not(.sb-eyebrow) {
  max-width: 620px;
  margin: 14px auto 0;
  color: var(--sb-text-soft);
  line-height: 1.7;
}

.final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 24px;
}

@media (max-width: 620px) {
  .final-cta__inner {
    padding: 22px;
  }

  .final-cta__actions {
    flex-direction: column;
  }
}
</style>
