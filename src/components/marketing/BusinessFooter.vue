<template>
  <footer class="business-footer">
    <div class="business-footer__inner">
      <div class="business-footer__brand">
        <RouterLink to="/" class="business-footer__logo" aria-label="Softadastra Cloud home">
          <img class="business-footer__mark" src="/logo.svg" alt="" aria-hidden="true" />
          <span class="business-footer__logo-text">
            <strong>Softadastra Cloud</strong>
            <small>Built by Softadastra</small>
          </span>
        </RouterLink>

        <p>
          Softadastra Cloud is the project operations platform for modern C++ teams.
          Softadastra is the C++ Tooling Company.
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
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="business-footer__link"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <div class="business-footer__bottom">
      <p>© {{ currentYear }} Softadastra. All rights reserved.</p>
      <p>business.softadastra.com is the product website. cloud.softadastra.com is the application.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { footerNavigation } from "../../data/navigation";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.business-footer {
  border-top: 1px solid var(--sb-border);
  background: var(--sb-surface);
}

.business-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(160px, 0.5fr));
  gap: 42px;
  width: min(100% - 48px, var(--sb-container));
  margin-inline: auto;
  padding: 46px 0 34px;
}

.business-footer__brand {
  max-width: 460px;
}

.business-footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--sb-text);
  text-decoration: none;
}

.business-footer__mark {
  display: block;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  object-fit: contain;
}

.business-footer__logo-text {
  display: grid;
  gap: 2px;
}

.business-footer__logo strong {
  color: var(--sb-text);
  font-size: 0.98rem;
  font-weight: 760;
  line-height: 1.05;
}

.business-footer__logo small {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  font-weight: 620;
}

.business-footer__brand p {
  max-width: 430px;
  margin-top: 16px;
  color: var(--sb-text-soft);
  font-size: 0.94rem;
  line-height: 1.65;
}

.business-footer__group {
  display: grid;
  align-content: start;
  gap: 9px;
}

.business-footer__group h2 {
  margin: 0 0 7px;
  color: var(--sb-text);
  font-size: 0.76rem;
  font-weight: 760;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.business-footer__link {
  width: fit-content;
  color: var(--sb-text-soft);
  font-size: 0.9rem;
  font-weight: 620;
  text-decoration: none;
}

.business-footer__link:hover {
  color: var(--sb-primary-hover);
}

.business-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: min(100% - 48px, var(--sb-container));
  margin-inline: auto;
  border-top: 1px solid var(--sb-border);
  padding: 18px 0 22px;
}

.business-footer__bottom p {
  color: var(--sb-text-muted);
  font-size: 0.84rem;
  line-height: 1.5;
}

@media (max-width: 820px) {
  .business-footer__inner,
  .business-footer__bottom {
    width: min(100% - 32px, var(--sb-container));
  }

  .business-footer__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .business-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
