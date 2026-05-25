<template>
  <section class="hero-section sb-marketing-hero">
    <div class="hero-section__inner sb-container sb-marketing-hero__inner">
      <div class="hero-section__content sb-marketing-hero__content">
        <BaseBadge variant="primary">
          {{ product.hero.eyebrow }}
        </BaseBadge>

        <h1 class="hero-section__title sb-marketing-hero__title">
          {{ product.hero.title }}
        </h1>

        <p class="hero-section__text sb-marketing-hero__subtitle">
          {{ product.hero.text }}
        </p>

        <div class="hero-section__actions sb-marketing-hero__actions">
          <BaseButton :to="product.hero.primaryAction.href" size="lg">
            {{ product.hero.primaryAction.label }}
          </BaseButton>

          <BaseButton
            :to="product.hero.secondaryAction.href"
            variant="secondary"
            size="lg"
          >
            {{ product.hero.secondaryAction.label }}
          </BaseButton>
        </div>
      </div>

      <div class="hero-section__visual" aria-label="Converdict product preview">
        <div class="hero-section__window">
          <div class="hero-section__window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="hero-section__window-body">
            <div class="hero-section__verdict">
              <span class="hero-section__verdict-label">
                Reliability verdict
              </span>

              <strong>In development</strong>

              <p>
                Converdict is being built to verify how systems behave under
                retries, timeouts, crashes, and unstable networks.
              </p>
            </div>

            <div class="hero-section__checks">
              <div
                v-for="item in product.proof.items.slice(0, 5)"
                :key="item"
                class="hero-section__check"
              >
                <span></span>
                <p>{{ item }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-section__note">
          <strong>No dashboard yet.</strong>
          <span>
            The business site introduces the product while Converdict is still
            under active development.
          </span>
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
.hero-section {
  min-height: calc(100vh - var(--sb-header-height));
  display: flex;
  align-items: center;
}

.hero-section__content {
  display: grid;
  justify-items: start;
}

.hero-section__title {
  margin-top: 22px;
}

.hero-section__visual {
  position: relative;
}

.hero-section__window {
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: linear-gradient(135deg, rgba(47, 212, 156, 0.08), transparent 42%),
    rgba(15, 23, 36, 0.86);
  box-shadow: var(--sb-shadow-lg);
  overflow: hidden;
}

.hero-section__window-top {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  border-bottom: 1px solid var(--sb-border);
  padding: 0 18px;
  background: rgba(255, 255, 255, 0.03);
}

.hero-section__window-top span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
}

.hero-section__window-body {
  display: grid;
  gap: 18px;
  padding: 24px;
}

.hero-section__verdict {
  border: 1px solid var(--sb-primary-border);
  border-radius: var(--sb-radius-lg);
  padding: 22px;
  background: var(--sb-primary-soft);
}

.hero-section__verdict-label {
  display: block;
  margin-bottom: 14px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-section__verdict strong {
  display: block;
  color: var(--sb-text);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 860;
  line-height: 1;
  letter-spacing: -0.055em;
}

.hero-section__verdict p {
  margin-top: 14px;
  color: var(--sb-text-soft);
  font-size: 0.95rem;
  line-height: 1.65;
}

.hero-section__checks {
  display: grid;
  gap: 10px;
}

.hero-section__check {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  padding: 13px 14px;
  background: rgba(255, 255, 255, 0.035);
}

.hero-section__check span {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--sb-primary);
  box-shadow: 0 0 0 5px var(--sb-primary-soft);
}

.hero-section__check p {
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  font-weight: 650;
}

.hero-section__note {
  position: absolute;
  right: 28px;
  bottom: -34px;
  max-width: 310px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  padding: 16px;
  background: rgba(7, 11, 18, 0.92);
  box-shadow: var(--sb-shadow-md);
  backdrop-filter: blur(16px);
}

.hero-section__note strong {
  display: block;
  color: var(--sb-text);
  font-size: 0.9rem;
  font-weight: 780;
}

.hero-section__note span {
  display: block;
  margin-top: 5px;
  color: var(--sb-text-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}

@media (max-width: 960px) {
  .hero-section {
    min-height: auto;
  }

  .hero-section__visual {
    max-width: 620px;
  }

  .hero-section__note {
    position: static;
    max-width: none;
    margin-top: 16px;
  }
}

@media (max-width: 520px) {
  .hero-section__actions {
    width: 100%;
    flex-direction: column;
  }

  .hero-section__actions :deep(.base-button) {
    width: 100%;
  }

  .hero-section__window-body {
    padding: 18px;
  }
}
</style>
