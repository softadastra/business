<template>
  <div class="product-page">
    <section class="product-page__hero">
      <div class="product-page__hero-inner">
        <div class="product-page__head">
          <p class="product-page__eyebrow">
            {{ product.status }}
          </p>

          <h1>{{ product.headline }}</h1>

          <p>
            {{ product.description }}
          </p>
        </div>

        <div class="product-page__summary">
          <span>Product focus</span>

          <strong>Reliability verification</strong>

          <p>
            Converdict is being built to answer one question clearly: did the
            system stay correct when failure happened?
          </p>
        </div>
      </div>
    </section>

    <section class="product-page__section">
      <div class="product-page__split">
        <div class="product-page__section-head">
          <p class="product-page__eyebrow">
            {{ product.problem.eyebrow }}
          </p>

          <h2>{{ product.problem.title }}</h2>

          <p>
            {{ product.problem.text }}
          </p>
        </div>

        <div class="product-page__risk-list">
          <article
            v-for="(item, index) in product.problem.points"
            :key="item.title"
            class="product-page__risk"
          >
            <span>{{ String(index + 1).padStart(2, "0") }}</span>

            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="product-page__section product-page__section--muted">
      <div class="product-page__workflow">
        <div class="product-page__workflow-head">
          <p class="product-page__eyebrow">
            {{ product.solution.eyebrow }}
          </p>

          <h2>{{ product.solution.title }}</h2>

          <p>
            {{ product.solution.text }}
          </p>
        </div>

        <div class="product-page__pipeline">
          <article
            v-for="(item, index) in product.solution.points"
            :key="item.title"
            class="product-page__step"
          >
            <span class="product-page__step-index">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <h3>{{ item.title }}</h3>

            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="product-page__section">
      <div class="product-page__checks-layout">
        <div class="product-page__section-head">
          <p class="product-page__eyebrow">
            {{ product.proof.eyebrow }}
          </p>

          <h2>{{ product.proof.title }}</h2>

          <p>
            Converdict focuses on the checks that matter when a system must
            remain correct under failure.
          </p>
        </div>

        <div class="product-page__checks">
          <article
            v-for="item in product.proof.items"
            :key="item"
            class="product-page__check"
          >
            <span aria-hidden="true">
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

            <strong>{{ item }}</strong>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import CtaSection from "../../components/marketing/CtaSection.vue";
import { product } from "../../data/product";
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  background: var(--sb-bg);
  color: var(--sb-text);
}

/* ==========================================================================
   Hero
   ========================================================================== */

.product-page__hero {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.product-page__hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: clamp(40px, 5vw, 72px);
  align-items: end;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 104px 0 88px;
}

.product-page__head {
  max-width: 860px;
}

.product-page__eyebrow {
  margin: 0 0 16px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-page__head h1 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2.6rem, 5.4vw, 5.4rem);
  font-weight: 840;
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.product-page__head p {
  max-width: 760px;
  margin-top: 24px;
  color: var(--sb-text-soft);
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.75;
}

.product-page__summary {
  display: grid;
  gap: 10px;
  border: 1px solid var(--sb-border);
  border-radius: 18px;
  padding: 22px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
}

.product-page__summary span {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-page__summary strong {
  color: var(--sb-text);
  font-size: 1.15rem;
  font-weight: 780;
  letter-spacing: -0.03em;
}

.product-page__summary p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

/* ==========================================================================
   Shared sections
   ========================================================================== */

.product-page__section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.product-page__section--muted {
  background: var(--sb-bg-soft);
}

.product-page__split,
.product-page__checks-layout,
.product-page__workflow {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 96px 0;
}

.product-page__split,
.product-page__checks-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(40px, 5vw, 72px);
  align-items: start;
}

.product-page__section-head {
  max-width: 540px;
}

.product-page__section-head h2,
.product-page__workflow-head h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.product-page__section-head p:not(.product-page__eyebrow),
.product-page__workflow-head p:not(.product-page__eyebrow) {
  max-width: 660px;
  margin-top: 20px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.7;
}

/* ==========================================================================
   Risks
   ========================================================================== */

.product-page__risk-list {
  display: grid;
  border: 1px solid var(--sb-border);
  border-radius: 18px;
  background: var(--sb-surface);
  overflow: hidden;
  box-shadow: var(--sb-shadow-md);
}

.product-page__risk {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 20px;
  border-bottom: 1px solid var(--sb-border);
  padding: 24px;
}

.product-page__risk:last-child {
  border-bottom: none;
}

.product-page__risk span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.product-page__risk h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.08rem;
  font-weight: 760;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.product-page__risk p {
  max-width: 680px;
  margin: 8px 0 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

/* ==========================================================================
   Workflow
   ========================================================================== */

.product-page__workflow-head {
  max-width: 760px;
  margin-bottom: 48px;
}

.product-page__pipeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  background: var(--sb-surface);
  overflow: hidden;
  box-shadow: var(--sb-shadow-md);
}

.product-page__step {
  display: grid;
  align-content: space-between;
  min-height: 260px;
  border-right: 1px solid var(--sb-border);
  padding: 26px;
}

.product-page__step:last-child {
  border-right: none;
}

.product-page__step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 34px;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  font-weight: 800;
}

.product-page__step h3 {
  margin: 52px 0 0;
  color: var(--sb-text);
  font-size: 1.16rem;
  font-weight: 780;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.product-page__step p {
  max-width: 360px;
  margin: 12px 0 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

/* ==========================================================================
   Checks
   ========================================================================== */

.product-page__checks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid var(--sb-border);
  border-radius: 18px;
  background: var(--sb-surface);
  overflow: hidden;
  box-shadow: var(--sb-shadow-md);
}

.product-page__check {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  min-height: 86px;
  border-right: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
  padding: 20px;
}

.product-page__check:nth-child(2n) {
  border-right: none;
}

.product-page__check:nth-last-child(-n + 2) {
  border-bottom: none;
}

.product-page__check span {
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

.product-page__check strong {
  color: var(--sb-text);
  font-size: 0.96rem;
  font-weight: 720;
  line-height: 1.35;
}

/* ==========================================================================
   Responsive
   ========================================================================== */

@media (max-width: 980px) {
  .product-page__hero-inner,
  .product-page__split,
  .product-page__checks-layout {
    grid-template-columns: 1fr;
  }

  .product-page__hero-inner {
    gap: 34px;
    padding: 76px 0 68px;
  }

  .product-page__summary {
    max-width: 620px;
  }

  .product-page__split,
  .product-page__checks-layout,
  .product-page__workflow {
    padding: 72px 0;
  }

  .product-page__pipeline {
    grid-template-columns: 1fr;
  }

  .product-page__step {
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid var(--sb-border);
  }

  .product-page__step:last-child {
    border-bottom: none;
  }

  .product-page__step h3 {
    margin-top: 32px;
  }
}

@media (max-width: 620px) {
  .product-page__hero-inner,
  .product-page__split,
  .product-page__checks-layout,
  .product-page__workflow {
    width: min(100% - 24px, 1440px);
  }

  .product-page__hero-inner {
    padding: 56px 0;
  }

  .product-page__split,
  .product-page__checks-layout,
  .product-page__workflow {
    padding: 56px 0;
  }

  .product-page__risk {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 22px;
  }

  .product-page__checks {
    grid-template-columns: 1fr;
  }

  .product-page__check,
  .product-page__check:nth-child(2n),
  .product-page__check:nth-last-child(-n + 2) {
    border-right: none;
    border-bottom: 1px solid var(--sb-border);
  }

  .product-page__check:last-child {
    border-bottom: none;
  }
}
</style>
