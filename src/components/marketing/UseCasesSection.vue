<template>
  <section class="use-cases-section">
    <div class="use-cases-section__inner">
      <div class="use-cases-section__head">
        <p class="use-cases-section__eyebrow">
          {{ product.useCases.eyebrow }}
        </p>

        <h2 class="use-cases-section__title">
          {{ product.useCases.title }}
        </h2>
      </div>

      <div class="use-cases-section__list">
        <article
          v-for="(item, index) in product.useCases.items"
          :key="item.title"
          class="use-cases-section__item"
        >
          <span class="use-cases-section__number">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <div class="use-cases-section__copy">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>

          <span class="use-cases-section__arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { product } from "../../data/product";
</script>

<style scoped>
.use-cases-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.use-cases-section__inner {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.use-cases-section__head {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-bottom: 44px;
}

.use-cases-section__eyebrow {
  margin-bottom: 14px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.use-cases-section__title {
  grid-column: 1 / -1;
  max-width: 880px;
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.use-cases-section__list {
  display: grid;
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-md);
  overflow: hidden;
}

.use-cases-section__item {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) 34px;
  gap: 20px;
  align-items: center;
  min-height: 126px;
  border-bottom: 1px solid var(--sb-border);
  padding: 26px 28px;
  transition:
    background var(--sb-transition-base),
    border-color var(--sb-transition-base);
}

.use-cases-section__item:last-child {
  border-bottom: none;
}

.use-cases-section__item:hover {
  background: var(--sb-surface-soft);
}

.use-cases-section__number {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.use-cases-section__copy {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.use-cases-section__copy h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.16rem;
  font-weight: 780;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.use-cases-section__copy p {
  max-width: 820px;
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.use-cases-section__arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-primary);
  background: var(--sb-bg-soft);
  transition:
    border-color var(--sb-transition-base),
    background var(--sb-transition-base),
    transform var(--sb-transition-base);
}

.use-cases-section__item:hover .use-cases-section__arrow {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  transform: translateX(3px);
}

@media (max-width: 820px) {
  .use-cases-section__inner {
    padding: 72px 0;
  }

  .use-cases-section__head {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 36px;
  }

  .use-cases-section__item {
    grid-template-columns: 48px minmax(0, 1fr);
    padding: 22px;
  }

  .use-cases-section__arrow {
    display: none;
  }
}

@media (max-width: 620px) {
  .use-cases-section__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .use-cases-section__item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
