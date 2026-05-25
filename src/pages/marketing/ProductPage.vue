<template>
  <div class="product-page sb-marketing-page">
    <section class="product-page__hero sb-marketing-section">
      <div class="sb-container">
        <div class="product-page__head">
          <BaseBadge variant="primary">
            {{ product.status }}
          </BaseBadge>

          <h1>{{ product.headline }}</h1>

          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="product-page__section sb-marketing-section sb-marketing-section--bordered"
    >
      <div class="product-page__split sb-container">
        <div>
          <p class="sb-eyebrow">
            {{ product.problem.eyebrow }}
          </p>

          <h2>{{ product.problem.title }}</h2>

          <p>
            {{ product.problem.text }}
          </p>
        </div>

        <div class="product-page__cards">
          <BaseCard v-for="item in product.problem.points" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="product-page__section sb-marketing-section">
      <div class="product-page__split sb-container">
        <div>
          <p class="sb-eyebrow">
            {{ product.solution.eyebrow }}
          </p>

          <h2>{{ product.solution.title }}</h2>

          <p>
            {{ product.solution.text }}
          </p>
        </div>

        <div class="product-page__cards">
          <BaseCard v-for="item in product.solution.points" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section
      class="product-page__section sb-marketing-section sb-marketing-section--bordered"
    >
      <div class="sb-container">
        <div class="product-page__head product-page__head--compact">
          <p class="sb-eyebrow">
            {{ product.proof.eyebrow }}
          </p>

          <h2>{{ product.proof.title }}</h2>

          <p>
            Converdict is still in development, but the product direction is
            already clear: produce direct reliability verdicts for the failure
            modes that matter most.
          </p>
        </div>

        <div class="product-page__checks">
          <BaseBadge
            v-for="item in product.proof.items"
            :key="item"
            variant="neutral"
          >
            {{ item }}
          </BaseBadge>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import BaseBadge from "../../components/ui/BaseBadge.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import CtaSection from "../../components/marketing/CtaSection.vue";
import { product } from "../../data/product";
</script>

<style scoped>
.product-page__hero {
  padding-top: 104px;
}

.product-page__head {
  display: grid;
  justify-items: start;
  max-width: 820px;
}

.product-page__head--compact {
  max-width: 760px;
}

.product-page__head h1,
.product-page__head h2,
.product-page__split h2 {
  margin: 20px 0 0;
  color: var(--sb-text);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 860;
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.product-page__head h2,
.product-page__split h2 {
  font-size: clamp(2rem, 4vw, 3.4rem);
}

.product-page__head p,
.product-page__split p {
  max-width: 720px;
  margin-top: 20px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.product-page__split {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
  gap: 52px;
  align-items: start;
}

.product-page__cards {
  display: grid;
  gap: 14px;
}

.product-page__cards h3 {
  margin: 0 0 8px;
  color: var(--sb-text);
  font-size: 1.04rem;
  font-weight: 760;
  letter-spacing: -0.02em;
}

.product-page__cards p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.product-page__checks {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

@media (max-width: 900px) {
  .product-page__split {
    grid-template-columns: 1fr;
    gap: 34px;
  }
}
</style>
