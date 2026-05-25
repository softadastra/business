<template>
  <section class="problem-section sb-marketing-section">
    <div class="sb-container">
      <div class="problem-section__head sb-marketing-section__head">
        <p class="sb-eyebrow sb-marketing-section__eyebrow">
          {{ product.problem.eyebrow }}
        </p>

        <h2 class="sb-marketing-section__title">
          {{ product.problem.title }}
        </h2>

        <p class="sb-marketing-section__text">
          {{ product.problem.text }}
        </p>
      </div>

      <div class="problem-section__grid sb-marketing-grid">
        <BaseCard
          v-for="item in product.problem.points"
          :key="item.title"
          class="problem-section__card"
        >
          <span class="problem-section__marker"></span>

          <h3>{{ item.title }}</h3>

          <p>{{ item.text }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from "../ui/BaseCard.vue";
import { product } from "../../data/product";
</script>

<style scoped>
.problem-section {
  position: relative;
}

.problem-section__head {
  max-width: 780px;
}

.problem-section__grid {
  align-items: stretch;
}

.problem-section__card {
  position: relative;
  overflow: hidden;
}

.problem-section__card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top right,
    rgba(255, 95, 109, 0.08),
    transparent 18rem
  );
  pointer-events: none;
}

.problem-section__marker {
  display: block;
  width: 34px;
  height: 6px;
  margin-bottom: 22px;
  border-radius: 999px;
  background: var(--sb-danger);
  opacity: 0.78;
}

.problem-section__card h3 {
  position: relative;
  margin: 0 0 10px;
  color: var(--sb-text);
  font-size: 1.08rem;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.problem-section__card p {
  position: relative;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .problem-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
