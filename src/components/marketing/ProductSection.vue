<template>
  <section class="product-section">
    <div class="product-section__inner">
      <div class="product-section__head">
        <p class="product-section__eyebrow">
          {{ product.solution.eyebrow }}
        </p>

        <h2 class="product-section__title">
          {{ product.solution.title }}
        </h2>

        <p class="product-section__text">
          {{ product.solution.text }}
        </p>
      </div>

      <div class="product-section__pipeline" aria-label="Converdict workflow">
        <article
          v-for="(item, index) in product.solution.points"
          :key="item.title"
          class="product-section__step"
        >
          <div class="product-section__step-top">
            <span class="product-section__step-number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <span
              v-if="index < product.solution.points.length - 1"
              class="product-section__connector"
              aria-hidden="true"
            ></span>
          </div>

          <div class="product-section__step-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>

      <div class="product-section__verdict">
        <span class="product-section__verdict-label">Final output</span>

        <strong>Clear reliability verdict</strong>

        <p>
          Converdict turns failure tests into a direct answer: safe, unsafe, or
          needs investigation.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { product } from "../../data/product";
</script>

<style scoped>
.product-section {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.product-section__inner {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 104px 0;
}

.product-section__head {
  max-width: 760px;
  margin-bottom: 54px;
}

.product-section__eyebrow {
  margin-bottom: 14px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-section__title {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2rem, 3.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.product-section__text {
  max-width: 660px;
  margin-top: 20px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.7;
}

.product-section__pipeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-md);
  overflow: hidden;
}

.product-section__step {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 260px;
  padding: 26px;
  border-right: 1px solid var(--sb-border);
}

.product-section__step:last-child {
  border-right: none;
}

.product-section__step-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 42px;
}

.product-section__step-number {
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

.product-section__connector {
  flex: 1;
  height: 1px;
  background: var(--sb-border-strong);
}

.product-section__connector::after {
  content: "";
  display: block;
  width: 7px;
  height: 7px;
  margin-left: auto;
  margin-top: -3px;
  border-top: 1px solid var(--sb-border-strong);
  border-right: 1px solid var(--sb-border-strong);
  transform: rotate(45deg);
}

.product-section__step-body {
  display: grid;
  align-content: end;
  gap: 12px;
}

.product-section__step h3 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.18rem;
  font-weight: 780;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.product-section__step p {
  max-width: 360px;
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.product-section__verdict {
  display: grid;
  gap: 8px;
  max-width: 520px;
  margin-top: 18px;
  margin-left: auto;
  border: 1px solid var(--sb-primary-border);
  border-radius: 16px;
  padding: 18px 20px;
  background: var(--sb-bg-soft);
}

.product-section__verdict-label {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-section__verdict strong {
  color: var(--sb-text);
  font-size: 1.05rem;
  font-weight: 780;
}

.product-section__verdict p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .product-section__inner {
    padding: 72px 0;
  }

  .product-section__pipeline {
    grid-template-columns: 1fr;
  }

  .product-section__step {
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid var(--sb-border);
  }

  .product-section__step:last-child {
    border-bottom: none;
  }

  .product-section__step-top {
    margin-bottom: 24px;
  }

  .product-section__connector {
    display: none;
  }

  .product-section__step-body {
    align-content: start;
  }

  .product-section__verdict {
    max-width: none;
    margin-left: 0;
  }
}

@media (max-width: 620px) {
  .product-section__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .product-section__head {
    margin-bottom: 36px;
  }

  .product-section__step {
    padding: 22px;
  }
}
</style>
