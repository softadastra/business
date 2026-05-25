<template>
  <section class="cta-section sb-marketing-section">
    <div class="sb-container">
      <div class="cta-section__panel sb-marketing-cta">
        <BaseBadge variant="primary"> In development </BaseBadge>

        <h2>{{ product.cta.title }}</h2>

        <p>{{ product.cta.text }}</p>

        <div class="cta-section__actions sb-marketing-cta__actions">
          <BaseButton :to="product.cta.primaryAction.href" size="lg">
            {{ product.cta.primaryAction.label }}
          </BaseButton>

          <BaseButton
            :to="product.cta.secondaryAction.href"
            variant="secondary"
            size="lg"
          >
            {{ product.cta.secondaryAction.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";
import { product } from "../../data/product";
</script>

<style scoped>
.cta-section {
  border-top: 1px solid var(--sb-border);
}

.cta-section__panel {
  position: relative;
  overflow: hidden;
}

.cta-section__panel::before {
  content: "";
  position: absolute;
  inset: auto -10% -45%;
  height: 340px;
  background: radial-gradient(
    circle,
    rgba(47, 212, 156, 0.16),
    transparent 32rem
  );
  pointer-events: none;
}

.cta-section__panel > * {
  position: relative;
}

.cta-section h2 {
  margin-top: 20px;
}

.cta-section__actions {
  position: relative;
}

@media (max-width: 560px) {
  .cta-section__actions {
    flex-direction: column;
  }

  .cta-section__actions :deep(.base-button) {
    width: 100%;
  }
}
</style>
