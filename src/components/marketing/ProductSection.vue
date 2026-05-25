<template>
  <section
    class="product-section sb-marketing-section sb-marketing-section--bordered"
  >
    <div class="product-section__inner sb-container">
      <div class="product-section__content">
        <p class="sb-eyebrow sb-marketing-section__eyebrow">
          {{ product.solution.eyebrow }}
        </p>

        <h2 class="sb-marketing-section__title">
          {{ product.solution.title }}
        </h2>

        <p class="sb-marketing-section__text">
          {{ product.solution.text }}
        </p>
      </div>

      <div class="product-section__list">
        <BaseCard
          v-for="item in product.solution.points"
          :key="item.title"
          class="product-section__card"
        >
          <span class="product-section__index">
            {{ getIndex(item.title) }}
          </span>

          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from "../ui/BaseCard.vue";
import { product } from "../../data/product";

function getIndex(title) {
  const index = product.solution.points.findIndex(
    (item) => item.title === title,
  );
  return String(index + 1).padStart(2, "0");
}
</script>

<style scoped>
.product-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 56px;
  align-items: start;
}

.product-section__content {
  position: sticky;
  top: calc(var(--sb-header-height) + 32px);
}

.product-section__list {
  display: grid;
  gap: 14px;
}

.product-section__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: start;
}

.product-section__index {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 14px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.8rem;
  font-weight: 850;
}

.product-section__card h3 {
  margin: 0 0 8px;
  color: var(--sb-text);
  font-size: 1.08rem;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.product-section__card p {
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .product-section__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .product-section__content {
    position: static;
  }
}

@media (max-width: 520px) {
  .product-section__card {
    grid-template-columns: 1fr;
  }
}
</style>
