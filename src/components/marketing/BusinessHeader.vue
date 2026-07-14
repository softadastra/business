<template>
  <header class="business-header" :class="{ 'is-open': isMenuOpen }">
    <div class="business-header__inner">
      <RouterLink
        to="/"
        class="business-header__brand"
        aria-label="Softadastra Cloud home"
        @click="closeMenu"
      >
        <img class="business-header__mark" src="/logo.svg" alt="" aria-hidden="true" />
        <span class="business-header__brand-text">
          <strong>Softadastra Cloud</strong>
          <span>Project operations for C++ teams</span>
        </span>
      </RouterLink>

      <nav class="business-header__nav" aria-label="Main navigation">
        <a
          v-for="item in marketingNavigation"
          :key="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="business-header__nav-link"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="business-header__actions">
        <BaseButton :href="marketingActions.primary.href" variant="primary" size="sm">
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
      <div class="business-header__mobile-inner">
        <a
          v-for="item in marketingNavigation"
          :key="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="business-header__mobile-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>

        <BaseButton :href="marketingActions.primary.href" variant="primary" size="md" block>
          {{ marketingActions.primary.label }}
        </BaseButton>
      </div>
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
  background: rgba(255, 255, 255, 0.94);
}

.business-header__inner {
  display: flex;
  align-items: center;
  gap: 20px;
  width: min(100% - 48px, var(--sb-container));
  min-height: var(--sb-header-height);
  margin-inline: auto;
}

.business-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  color: var(--sb-text);
  text-decoration: none;
}

.business-header__mark {
  display: block;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  object-fit: contain;
}

.business-header__brand-text {
  display: grid;
  gap: 2px;
}

.business-header__brand-text strong {
  color: var(--sb-text);
  font-size: 0.96rem;
  font-weight: 760;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.business-header__brand-text span {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  font-weight: 620;
  line-height: 1.2;
}

.business-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  flex: 1 1 auto;
  min-width: 0;
}

.business-header__nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  border-radius: var(--sb-radius-sm);
  padding: 0 10px;
  color: var(--sb-text-soft);
  font-size: 0.86rem;
  font-weight: 650;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--sb-transition-fast), color var(--sb-transition-fast);
}

.business-header__nav-link:hover {
  background: var(--sb-bg-muted);
  color: var(--sb-text);
}

.business-header__actions {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.business-header__menu-button {
  display: none;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-sm);
  background: var(--sb-surface);
  color: var(--sb-text);
}

.business-header__menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  border-radius: var(--sb-radius-full);
  background: currentColor;
  transition: transform var(--sb-transition-fast), opacity var(--sb-transition-fast);
}

.business-header.is-open .business-header__menu-button span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.business-header.is-open .business-header__menu-button span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.business-header__mobile {
  border-top: 1px solid var(--sb-border);
  background: var(--sb-surface);
}

.business-header__mobile-inner {
  display: grid;
  gap: 6px;
  width: min(100% - 32px, var(--sb-container));
  margin-inline: auto;
  padding: 12px 0 16px;
}

.business-header__mobile-link {
  padding: 10px 12px;
  border-radius: var(--sb-radius-sm);
  color: var(--sb-text-soft);
  font-weight: 650;
  text-decoration: none;
}

.business-header__mobile-link:hover {
  background: var(--sb-bg-muted);
  color: var(--sb-text);
}

@media (max-width: 920px) {
  .business-header__inner {
    width: min(100% - 32px, var(--sb-container));
  }

  .business-header__nav,
  .business-header__actions {
    display: none;
  }

  .business-header__menu-button {
    display: block;
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .business-header__inner {
    width: min(100% - 24px, var(--sb-container));
  }

  .business-header__brand-text span {
    display: none;
  }
}
</style>
