<template>
  <section class="problem-section">
    <div class="problem-section__inner">
      <div class="problem-section__head">
        <p class="problem-section__eyebrow">
          {{ product.problem.eyebrow }}
        </p>

        <h2 class="problem-section__title">
          {{ product.problem.title }}
        </h2>

        <p class="problem-section__text">
          {{ product.problem.text }}
        </p>
      </div>

      <div class="problem-section__grid">
        <article
          v-for="(item, index) in product.problem.points"
          :key="item.title"
          class="problem-section__card"
        >
          <span class="problem-section__index">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <h3>{{ item.title }}</h3>

          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { product } from "../../data/product";
</script>

<style scoped>
.problem-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.problem-section__inner {
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(40px, 5vw, 72px);
  align-items: start;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.problem-section__head {
  max-width: 520px;
}

.problem-section__eyebrow {
  margin-bottom: 14px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.problem-section__title {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.problem-section__text {
  max-width: 500px;
  margin-top: 20px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.7;
}

.problem-section__grid {
  display: grid;
  gap: 14px;
}

.problem-section__card {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  column-gap: 18px;
  row-gap: 8px;
  align-items: start;
  border: 1px solid var(--sb-border);
  border-radius: 16px;
  padding: 22px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
  transition:
    border-color var(--sb-transition-base),
    background var(--sb-transition-base),
    transform var(--sb-transition-base);
}

.problem-section__card:hover {
  border-color: var(--sb-border-strong);
  background: var(--sb-surface-soft);
  transform: translateY(-2px);
}

.problem-section__index {
  grid-row: span 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 34px;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  font-weight: 800;
}

.problem-section__card h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.05rem;
  font-weight: 760;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.problem-section__card p {
  max-width: 620px;
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

@media (max-width: 980px) {
  .problem-section__inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 72px 0;
  }

  .problem-section__head {
    max-width: 720px;
  }

  .problem-section__text {
    max-width: 680px;
  }
}

@media (max-width: 620px) {
  .problem-section__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .problem-section__card {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .problem-section__index {
    grid-row: auto;
  }
}
</style>
