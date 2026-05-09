<!--
 *
 *  @file PricingPage.vue
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
-->

<template>
  <PublicLayout>
    <section class="pricing-page">
      <div class="sa-container">
        <div class="pricing-hero">
          <span class="sa-badge">Simple MVP pricing</span>
          <h1 class="sa-section-title">Start with reliability visibility.</h1>
          <p class="sa-section-text">
            Softadastra Cloud is currently focused on validating the MVP:
            agent runs, event timelines, reports, and reliability scoring for
            HTTP APIs.
          </p>
        </div>

        <div class="pricing-grid">
          <article
            v-for="plan in plans"
            :key="plan.name"
            class="pricing-card"
            :class="{ featured: plan.featured }"
          >
            <div class="pricing-card-header">
              <p class="pricing-plan-name">{{ plan.name }}</p>
              <h2 class="pricing-price">{{ plan.price }}</h2>
              <p class="pricing-description">{{ plan.description }}</p>
            </div>

            <ul class="pricing-features">
              <li v-for="feature in plan.features" :key="feature">
                <span>✓</span>
                {{ feature }}
              </li>
            </ul>

            <RouterLink
              :to="plan.to"
              class="pricing-action"
              :class="{ primary: plan.featured }"
            >
              {{ plan.action }}
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '../../layouts/PublicLayout.vue'

const plans = [
  {
    name: 'Local MVP',
    price: 'Free',
    description: 'For local testing while the product is being validated.',
    action: 'Start testing',
    to: '/register',
    featured: false,
    features: [
      'Create projects',
      'Create local agents',
      'Submit runs and events',
      'Generate reports',
    ],
  },
  {
    name: 'Startup',
    price: 'Coming soon',
    description: 'For teams that need reliability checks before production releases.',
    action: 'Join waitlist',
    to: '/register',
    featured: true,
    features: [
      'Dashboard access',
      'HTTP API reliability runs',
      'Run history',
      'Risk reports',
      'Reliability score',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with larger reliability and deployment workflows.',
    action: 'Contact us',
    to: '/docs',
    featured: false,
    features: [
      'Custom scenarios',
      'Team workflows',
      'Advanced reporting',
      'Private deployment options',
    ],
  },
]
</script>

<style scoped>
.pricing-page {
  padding: 84px 0 100px;
}

.pricing-hero {
  max-width: 780px;
  margin-bottom: 42px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-xl);
  padding: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent),
    rgba(15, 23, 42, 0.72);
  box-shadow: var(--sa-shadow-sm);
}

.pricing-card.featured {
  border-color: rgba(56, 189, 248, 0.38);
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.14), transparent 18rem),
    rgba(15, 23, 42, 0.86);
  box-shadow: var(--sa-shadow-md);
}

.pricing-card-header {
  margin-bottom: 24px;
}

.pricing-plan-name {
  margin-bottom: 10px;
  color: var(--sa-primary);
  font-size: 0.82rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pricing-price {
  margin-bottom: 10px;
  color: var(--sa-text);
  font-size: 2.4rem;
  line-height: 1;
  letter-spacing: -0.06em;
}

.pricing-description {
  margin: 0;
}

.pricing-features {
  display: grid;
  gap: 12px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
}

.pricing-features li {
  display: flex;
  gap: 10px;
  color: var(--sa-text-soft);
  font-size: 0.94rem;
}

.pricing-features span {
  color: var(--sa-success);
  font-weight: 900;
}

.pricing-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: auto;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.78);
  color: var(--sa-text);
  font-weight: 850;
}

.pricing-action.primary {
  border-color: rgba(56, 189, 248, 0.38);
  background: linear-gradient(135deg, var(--sa-primary), var(--sa-primary-strong));
  color: #03111d;
}

@media (max-width: 940px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
