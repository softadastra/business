<template>
  <section class="proof-section sb-marketing-section">
    <div class="proof-section__inner sb-container">
      <div class="proof-section__panel sb-marketing-panel">
        <div class="proof-section__content">
          <p class="sb-eyebrow sb-marketing-section__eyebrow">
            {{ product.proof.eyebrow }}
          </p>

          <h2 class="sb-marketing-section__title">
            {{ product.proof.title }}
          </h2>

          <p class="proof-section__text">
            Converdict is being designed around concrete reliability questions:
            did the system lose data, duplicate work, recover safely, and reach
            a correct state after failure?
          </p>
        </div>

        <div class="proof-section__checks">
          <div
            v-for="item in product.proof.items"
            :key="item"
            class="proof-section__check"
          >
            <span class="proof-section__check-icon"></span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { product } from "../../data/product";
</script>

<style scoped>
.proof-section {
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.proof-section__panel {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: start;
}

.proof-section__content {
  max-width: 540px;
}

.proof-section__text {
  margin-top: 18px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.proof-section__checks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.proof-section__check {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  padding: 14px 15px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--sb-text-soft);
  font-size: 0.94rem;
  font-weight: 660;
  line-height: 1.45;
}

.proof-section__check-icon {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--sb-primary);
  box-shadow: 0 0 0 5px var(--sb-primary-soft);
}

@media (max-width: 900px) {
  .proof-section__panel {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 560px) {
  .proof-section__checks {
    grid-template-columns: 1fr;
  }
}
</style>
