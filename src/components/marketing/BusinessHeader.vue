<template>
  <header class="business-header" :class="{ 'is-open': isMenuOpen }">
    <div class="business-header__inner">
      <RouterLink
        to="/"
        class="business-header__brand"
        aria-label="Converdict home"
        @click="closeMenu"
      >
        <span class="business-header__mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" role="img">
            <path
              class="business-header__mark-frame"
              d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
            />
            <path
              class="business-header__mark-check"
              d="M12.5 20.5L18 26L28 15"
            />
          </svg>
        </span>

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
      <div class="business-header__mobile-inner">
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
  background: rgba(14, 17, 23, 0.94);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.business-header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  width: min(100% - 48px, 1440px);
  min-height: var(--sb-header-height);
  margin-inline: auto;
}

.business-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  min-width: max-content;
  color: var(--sb-text);
  text-decoration: none;
}

.business-header__mark {
  display: inline-flex;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
}

.business-header__mark svg {
  width: 100%;
  height: 100%;
}

.business-header__mark-frame {
  fill: none;
  stroke: var(--sb-text);
  stroke-width: 3;
  stroke-linejoin: round;
}

.business-header__mark-check {
  fill: none;
  stroke: var(--sb-primary);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.business-header__brand-text {
  display: grid;
  gap: 2px;
}

.business-header__brand-text strong {
  color: var(--sb-text);
  font-size: 0.98rem;
  font-weight: 820;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.business-header__brand-text span {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  font-weight: 650;
  line-height: 1.2;
}

.business-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
}

.business-header__nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 9px;
  padding: 0 12px;
  color: var(--sb-text-muted);
  font-size: 0.88rem;
  font-weight: 680;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background var(--sb-transition-fast),
    color var(--sb-transition-fast);
}

.business-header__nav-link:hover,
.business-header__nav-link.router-link-active {
  background: var(--sb-surface-muted);
  color: var(--sb-text);
}

.business-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.business-header__menu-button {
  display: none;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  border: 1px solid var(--sb-border);
  border-radius: 12px;
  background: var(--sb-surface);
  color: var(--sb-text);
  box-shadow: var(--sb-shadow-sm);
}

.business-header__menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  border-radius: 999px;
  background: currentColor;
  transition:
    transform var(--sb-transition-fast),
    opacity var(--sb-transition-fast);
}

.business-header.is-open .business-header__menu-button span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.business-header.is-open .business-header__menu-button span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.business-header__mobile {
  border-top: 1px solid var(--sb-border);
  background: #0c0f15;
}

.business-header__mobile-inner {
  display: grid;
  gap: 6px;
  width: min(100% - 32px, 1440px);
  margin-inline: auto;
  padding: 14px 0 18px;
}

.business-header__mobile-link {
  display: flex;
  align-items: center;
  min-height: 46px;
  border-radius: 12px;
  padding: 0 12px;
  color: var(--sb-text-soft);
  font-size: 0.96rem;
  font-weight: 720;
  text-decoration: none;
}

.business-header__mobile-link:hover,
.business-header__mobile-link.router-link-active {
  background: var(--sb-surface-muted);
  color: var(--sb-text);
}

@media (max-width: 980px) {
  .business-header__inner {
    width: min(100% - 36px, 1440px);
  }

  .business-header__nav,
  .business-header__actions {
    display: none;
  }

  .business-header__menu-button {
    display: inline-block;
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .business-header__inner {
    width: min(100% - 24px, 1440px);
  }

  .business-header__mark {
    width: 36px;
    height: 36px;
  }

  .business-header__brand {
    gap: 10px;
  }

  .business-header__brand-text span {
    display: none;
  }

  .business-header__mobile-inner {
    width: min(100% - 24px, 1440px);
  }
}
</style>
