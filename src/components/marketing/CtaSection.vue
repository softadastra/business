<template>
  <section class="cta-section">
    <div class="cta-section__inner">
      <div class="cta-section__panel">
        <div class="cta-section__content">
          <span class="cta-section__label">In development</span>

          <h2>{{ product.cta.title }}</h2>

          <p>{{ product.cta.text }}</p>
        </div>

        <div class="cta-section__actions">
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
import BaseButton from "../ui/BaseButton.vue";
import { product } from "../../data/product";
</script>

<style scoped>
.cta-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.cta-section__inner {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.cta-section__panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 48px;
  align-items: end;
  border: 1px solid var(--sb-border);
  border-radius: 22px;
  padding: 38px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-md);
}

.cta-section__content {
  max-width: 760px;
}

.cta-section__label {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 16px;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  padding: 6px 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta-section h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.6vw, 3.6rem);
  font-weight: 820;
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.cta-section p {
  max-width: 680px;
  margin-top: 18px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.7;
}

.cta-section__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

@media (max-width: 900px) {
  .cta-section__inner {
    padding: 72px 0;
  }

  .cta-section__panel {
    grid-template-columns: 1fr;
    gap: 28px;
    align-items: start;
    padding: 30px;
  }

  .cta-section__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 620px) {
  .cta-section__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .cta-section__panel {
    padding: 24px;
  }

  .cta-section__actions {
    flex-direction: column;
    width: 100%;
  }

  .cta-section__actions :deep(.base-button) {
    width: 100%;
  }
}
</style>
