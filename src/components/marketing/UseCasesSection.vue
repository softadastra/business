<template>
  <section
    class="use-cases-section sb-marketing-section sb-marketing-section--bordered"
  >
    <div class="sb-container">
      <div
        class="use-cases-section__head sb-marketing-section__head sb-marketing-section__head--center"
      >
        <p class="sb-eyebrow sb-marketing-section__eyebrow">
          {{ product.useCases.eyebrow }}
        </p>

        <h2 class="sb-marketing-section__title">
          {{ product.useCases.title }}
        </h2>
      </div>

      <div
        class="use-cases-section__grid sb-marketing-grid sb-marketing-grid--two"
      >
        <BaseCard
          v-for="item in product.useCases.items"
          :key="item.title"
          class="use-cases-section__card"
        >
          <div class="use-cases-section__icon">
            <span></span>
          </div>

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
.use-cases-section__head {
  max-width: 760px;
}

.use-cases-section__grid {
  align-items: stretch;
}

.use-cases-section__card {
  position: relative;
  overflow: hidden;
}

.use-cases-section__card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top right,
    rgba(104, 167, 255, 0.08),
    transparent 18rem
  );
  pointer-events: none;
}

.use-cases-section__icon {
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  margin-bottom: 22px;
  border: 1px solid var(--sb-primary-border);
  border-radius: 15px;
  background: var(--sb-primary-soft);
}

.use-cases-section__icon span {
  width: 14px;
  height: 14px;
  border: 2px solid var(--sb-primary);
  border-radius: 50%;
  box-shadow: 18px 0 0 -6px var(--sb-primary), 9px 16px 0 -6px var(--sb-primary);
}

.use-cases-section__card h3 {
  position: relative;
  margin: 0 0 10px;
  color: var(--sb-text);
  font-size: 1.1rem;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.use-cases-section__card p {
  position: relative;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .use-cases-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
