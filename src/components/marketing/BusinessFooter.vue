<template>
  <footer class="business-footer">
    <div class="business-footer__inner">
      <div class="business-footer__brand">
        <RouterLink to="/" class="business-footer__logo">
          <span class="business-footer__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" role="img">
              <path
                class="business-footer__mark-frame"
                d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
              />
              <path
                class="business-footer__mark-check"
                d="M12.5 20.5L18 26L28 15"
              />
            </svg>
          </span>

          <span class="business-footer__logo-text">
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

    <div class="business-footer__bottom">
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
  background: #0c0f15;
}

.business-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) repeat(2, minmax(160px, 0.5fr));
  gap: 48px;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
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
  display: inline-flex;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
}

.business-footer__mark svg {
  width: 100%;
  height: 100%;
}

.business-footer__mark-frame {
  fill: none;
  stroke: var(--sb-text);
  stroke-width: 3;
  stroke-linejoin: round;
}

.business-footer__mark-check {
  fill: none;
  stroke: var(--sb-primary);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.business-footer__logo-text {
  display: grid;
  gap: 2px;
}

.business-footer__logo strong {
  color: var(--sb-text);
  font-size: 0.98rem;
  font-weight: 820;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.business-footer__logo small {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  font-weight: 650;
  line-height: 1.2;
}

.business-footer__brand p {
  max-width: 420px;
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
  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.business-footer__link {
  width: fit-content;
  color: var(--sb-text-muted);
  font-size: 0.9rem;
  font-weight: 650;
  line-height: 1.4;
  text-decoration: none;
  transition:
    color var(--sb-transition-fast),
    transform var(--sb-transition-fast);
}

.business-footer__link:hover {
  color: var(--sb-primary);
  transform: translateX(2px);
}

.business-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
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
    width: min(100% - 36px, 1440px);
    padding-top: 44px;
    padding-bottom: 34px;
  }

  .business-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    width: min(100% - 36px, 1440px);
  }
}

@media (max-width: 520px) {
  .business-footer__inner,
  .business-footer__bottom {
    width: min(100% - 24px, 1440px);
  }

  .business-footer__mark {
    width: 36px;
    height: 36px;
  }

  .business-footer__brand p {
    font-size: 0.92rem;
  }
}
</style>
