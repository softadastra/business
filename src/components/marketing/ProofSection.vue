<template>
  <section class="proof-section">
    <div class="proof-section__inner">
      <div class="proof-section__head">
        <p class="proof-section__eyebrow">
          {{ product.proof.eyebrow }}
        </p>

        <h2 class="proof-section__title">
          {{ product.proof.title }}
        </h2>

        <p class="proof-section__text">
          {{ product.proof.text }}
        </p>
      </div>

      <div class="proof-section__matrix">
        <article
          v-for="(item, index) in product.proof.items"
          :key="item"
          class="proof-section__check"
        >
          <span class="proof-section__icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path
                d="M3 8.5l3 3 7-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <div>
            <span class="proof-section__number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <h3>{{ item }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { product } from "../../data/product";
</script>

<style scoped>
.proof-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.proof-section__inner {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.proof-section__head {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-bottom: 44px;
}

.proof-section__eyebrow {
  margin-bottom: 14px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proof-section__title {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.proof-section__text {
  max-width: 680px;
  margin: 0;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.7;
}

.proof-section__matrix {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  background: var(--sb-surface);
  overflow: hidden;
  box-shadow: var(--sb-shadow-md);
}

.proof-section__check {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  min-height: 132px;
  border-right: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
  padding: 22px;
}

.proof-section__check:nth-child(4n) {
  border-right: none;
}

.proof-section__check:nth-last-child(-n + 4) {
  border-bottom: none;
}

.proof-section__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(52, 199, 89, 0.32);
  border-radius: 999px;
  background: var(--sb-success-soft);
  color: var(--sb-success);
}

.proof-section__number {
  display: block;
  margin-bottom: 10px;
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.proof-section__check h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.96rem;
  font-weight: 740;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

@media (max-width: 1100px) {
  .proof-section__matrix {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .proof-section__check:nth-child(4n) {
    border-right: 1px solid var(--sb-border);
  }

  .proof-section__check:nth-child(2n) {
    border-right: none;
  }

  .proof-section__check:nth-last-child(-n + 4) {
    border-bottom: 1px solid var(--sb-border);
  }

  .proof-section__check:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 820px) {
  .proof-section__inner {
    padding: 72px 0;
  }

  .proof-section__head {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .proof-section__text {
    max-width: 680px;
  }
}

@media (max-width: 620px) {
  .proof-section__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .proof-section__matrix {
    grid-template-columns: 1fr;
  }

  .proof-section__check,
  .proof-section__check:nth-child(2n),
  .proof-section__check:nth-child(4n),
  .proof-section__check:nth-last-child(-n + 2),
  .proof-section__check:nth-last-child(-n + 4) {
    border-right: none;
    border-bottom: 1px solid var(--sb-border);
  }

  .proof-section__check:last-child {
    border-bottom: none;
  }
}
</style>
