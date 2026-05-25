<template>
  <header class="business-header">
    <div class="business-header__inner sb-container">
      <RouterLink
        to="/"
        class="business-header__brand"
        aria-label="Converdict home"
      >
        <span class="business-header__mark">C</span>
        <span class="business-header__brand-text">
          <strong>Converdict</strong>
          <span>Softadastra Business</span>
        </span>
      </RouterLink>

      <nav class="business-header__nav" aria-label="Main navigation">
        <RouterLink
          v-for="item in marketingNavigation"
          :key="item.href"
          :to="item.href"
          class="business-header__nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="business-header__actions">
        <BaseButton
          :to="marketingActions.primary.href"
          variant="primary"
          size="sm"
        >
          {{ marketingActions.primary.label }}
        </BaseButton>
      </div>

      <button
        class="business-header__menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div v-if="isMenuOpen" class="business-header__mobile">
      <RouterLink
        v-for="item in marketingNavigation"
        :key="item.href"
        :to="item.href"
        class="business-header__mobile-link"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>

      <BaseButton
        :to="marketingActions.primary.href"
        variant="primary"
        size="md"
        block
        @click="closeMenu"
      >
        {{ marketingActions.primary.label }}
      </BaseButton>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import { marketingActions, marketingNavigation } from "../../data/navigation";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.business-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--sb-border);
  background: rgba(7, 11, 18, 0.84);
  backdrop-filter: blur(18px);
}

.business-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--sb-header-height);
  gap: 24px;
}

.business-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sb-text);
  text-decoration: none;
}

.business-header__mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 12px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.business-header__brand-text {
  display: grid;
  gap: 2px;
}

.business-header__brand-text strong {
  color: var(--sb-text);
  font-size: 0.98rem;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.business-header__brand-text span {
  color: var(--sb-text-muted);
  font-size: 0.75rem;
  font-weight: 650;
}

.business-header__nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.business-header__nav-link {
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--sb-text-muted);
  font-size: 0.88rem;
  font-weight: 680;
  text-decoration: none;
  transition: background var(--sb-transition-fast),
    color var(--sb-transition-fast);
}

.business-header__nav-link:hover,
.business-header__nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.05);
  color: var(--sb-text);
}

.business-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.business-header__menu-button {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--sb-border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sb-text);
}

.business-header__menu-button span {
  display: block;
  width: 17px;
  height: 2px;
  margin: 4px auto;
  border-radius: 999px;
  background: currentColor;
}

.business-header__mobile {
  display: none;
  border-top: 1px solid var(--sb-border);
  padding: 14px 16px 18px;
  background: rgba(7, 11, 18, 0.96);
}

.business-header__mobile-link {
  display: block;
  border-radius: 12px;
  padding: 13px 12px;
  color: var(--sb-text-soft);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
}

.business-header__mobile-link:hover,
.business-header__mobile-link.router-link-active {
  background: rgba(255, 255, 255, 0.05);
  color: var(--sb-text);
}

@media (max-width: 820px) {
  .business-header__nav,
  .business-header__actions {
    display: none;
  }

  .business-header__menu-button {
    display: inline-block;
  }

  .business-header__mobile {
    display: grid;
    gap: 6px;
  }
}

@media (max-width: 480px) {
  .business-header__brand-text span {
    display: none;
  }
}
</style>
