<template>
  <footer class="business-footer">
    <div class="business-footer__inner sb-container">
      <div class="business-footer__brand">
        <RouterLink to="/" class="business-footer__logo">
          <span class="business-footer__mark">C</span>
          <span>
            <strong>Converdict</strong>
            <small>Softadastra Business</small>
          </span>
        </RouterLink>

        <p>
          Reliability verification for distributed systems that must stay
          correct under retries, timeouts, crashes, and unstable networks.
        </p>
      </div>

      <nav
        v-for="group in footerNavigation"
        :key="group.title"
        class="business-footer__group"
        :aria-label="group.title"
      >
        <h2>{{ group.title }}</h2>

        <a
          v-for="item in group.links"
          :key="item.href"
          :href="item.external ? item.href : undefined"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
          class="business-footer__link"
          @click.prevent="!item.external && goTo(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <div class="business-footer__bottom sb-container">
      <p>© {{ currentYear }} Softadastra. All rights reserved.</p>
      <p>Converdict is currently in development.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { footerNavigation } from "../../data/navigation";

const router = useRouter();

const currentYear = computed(() => new Date().getFullYear());

function goTo(href) {
  router.push(href);
}
</script>

<style scoped>
.business-footer {
  border-top: 1px solid var(--sb-border);
  background: rgba(7, 11, 18, 0.88);
}

.business-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(160px, 0.5fr));
  gap: 48px;
  padding-top: 56px;
  padding-bottom: 42px;
}

.business-footer__brand {
  max-width: 460px;
}

.business-footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sb-text);
  text-decoration: none;
}

.business-footer__mark {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 13px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.business-footer__logo span:last-child {
  display: grid;
  gap: 2px;
}

.business-footer__logo strong {
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 820;
  letter-spacing: -0.025em;
}

.business-footer__logo small {
  color: var(--sb-text-muted);
  font-size: 0.76rem;
  font-weight: 650;
}

.business-footer__brand p {
  margin-top: 18px;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.7;
}

.business-footer__group {
  display: grid;
  align-content: start;
  gap: 10px;
}

.business-footer__group h2 {
  margin: 0 0 8px;
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.business-footer__link {
  width: fit-content;
  color: var(--sb-text-muted);
  font-size: 0.9rem;
  font-weight: 640;
  text-decoration: none;
  transition: color var(--sb-transition-fast);
}

.business-footer__link:hover {
  color: var(--sb-primary);
}

.business-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid var(--sb-border);
  padding-top: 20px;
  padding-bottom: 24px;
}

.business-footer__bottom p {
  color: var(--sb-text-muted);
  font-size: 0.84rem;
  line-height: 1.5;
}

@media (max-width: 820px) {
  .business-footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .business-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
