<template>
  <header
    class="business-header"
    :class="{
      'is-open': isMenuOpen,
      'is-scrolled': isScrolled,
    }"
  >
    <div class="business-header__inner">
      <RouterLink
        to="/"
        class="business-header__brand"
        aria-label="Softadastra Cloud home"
        @click="closeMenu"
      >
        <img
          class="business-header__mark"
          src="/logo.svg"
          alt=""
          aria-hidden="true"
        />

        <span class="business-header__brand-name"> Softadastra </span>

        <span class="business-header__product-name"> Cloud </span>
      </RouterLink>

      <nav class="business-header__navigation" aria-label="Main navigation">
        <a
          v-for="item in marketingNavigation"
          :key="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="business-header__nav-link"
          :class="{
            'is-active': isNavigationActive(item),
          }"
          :aria-current="isNavigationActive(item) ? 'location' : undefined"
          @click="handleNavigationClick(item)"
        >
          <span>
            {{ item.label }}
          </span>

          <svg v-if="item.external" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />

            <path
              d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
            />
          </svg>
        </a>
      </nav>

      <div class="business-header__actions">
        <a
          class="business-header__sign-in"
          href="https://cloud.softadastra.com/login"
        >
          Sign in
        </a>

        <BaseButton
          :href="marketingActions.primary.href"
          variant="primary"
          size="sm"
        >
          {{ marketingActions.primary.label }}
        </BaseButton>
      </div>

      <button
        ref="menuButton"
        class="business-header__menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="business-mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation' : 'Open navigation'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        id="business-mobile-navigation"
        class="business-header__mobile-layer"
        @click.self="closeMenu"
      >
        <div
          class="business-header__mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <header class="business-header__mobile-header">
            <div>
              <p>Softadastra Cloud</p>

              <strong>
                Local C++ development with shared project operations.
              </strong>
            </div>

            <span
              class="business-header__mobile-status"
              aria-hidden="true"
            ></span>
          </header>

          <nav
            class="business-header__mobile-navigation"
            aria-label="Mobile main navigation"
          >
            <p class="business-header__mobile-label">Explore</p>

            <a
              v-for="(item, index) in marketingNavigation"
              :key="item.href"
              :ref="
                (element) => {
                  if (index === 0) {
                    firstMobileLink = element;
                  }
                }
              "
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              class="business-header__mobile-link"
              :class="{
                'is-active': isNavigationActive(item),
              }"
              :aria-current="isNavigationActive(item) ? 'location' : undefined"
              @click="handleNavigationClick(item)"
            >
              <span class="business-header__mobile-index">
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <strong>
                {{ item.label }}
              </strong>

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <template v-if="item.external">
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />

                  <path
                    d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                  />
                </template>

                <template v-else>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </template>
              </svg>
            </a>
          </nav>

          <div class="business-header__mobile-actions">
            <a
              class="business-header__mobile-sign-in"
              href="https://cloud.softadastra.com/login"
              @click="closeMenu"
            >
              Sign in
            </a>

            <BaseButton
              :href="marketingActions.primary.href"
              variant="primary"
              size="md"
              block
            >
              {{ marketingActions.primary.label }}
            </BaseButton>
          </div>

          <footer class="business-header__mobile-footer">
            <div>
              <span aria-hidden="true"></span>

              <p>Softadastra Cloud is available as an early product.</p>
            </div>

            <a href="#availability" @click="closeMenu"> Product status </a>
          </footer>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

import { useRoute } from "vue-router";

import BaseButton from "../ui/BaseButton.vue";

import { marketingActions, marketingNavigation } from "../../data/navigation";

const route = useRoute();

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeHref = ref("");

const menuButton = ref(null);
const firstMobileLink = ref(null);

let sectionObserver = null;
let previousBodyOverflow = "";

function isInternalSection(item) {
  return (
    !item.external && typeof item.href === "string" && item.href.startsWith("#")
  );
}

function isNavigationActive(item) {
  return isInternalSection(item) && activeHref.value === item.href;
}

function handleNavigationClick(item) {
  if (isInternalSection(item)) {
    activeHref.value = item.href;
  }

  closeMenu();
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 8;
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

function handleKeydown(event) {
  if (event.key !== "Escape" || !isMenuOpen.value) {
    return;
  }

  closeMenu();

  nextTick(() => {
    menuButton.value?.focus();
  });
}

function createSectionObserver() {
  const sectionItems = marketingNavigation.filter(isInternalSection);

  if (sectionItems.length === 0) {
    return;
  }

  const sections = sectionItems
    .map((item) => {
      const element = document.querySelector(item.href);

      return element
        ? {
            element,
            href: item.href,
          }
        : null;
    })
    .filter(Boolean);

  if (sections.length === 0) {
    return;
  }

  const hrefByElement = new Map(
    sections.map((section) => [section.element, section.href]),
  );

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (left, right) =>
            left.boundingClientRect.top - right.boundingClientRect.top,
        );

      const firstVisible = visibleEntries[0];

      if (!firstVisible) {
        return;
      }

      const href = hrefByElement.get(firstVisible.target);

      if (href) {
        activeHref.value = href;
      }
    },
    {
      rootMargin: "-22% 0px -68% 0px",
      threshold: [0, 0.1, 0.25],
    },
  );

  sections.forEach(({ element }) => {
    sectionObserver.observe(element);
  });

  const initialHash = window.location.hash;

  if (initialHash && sectionItems.some((item) => item.href === initialHash)) {
    activeHref.value = initialHash;
  } else {
    activeHref.value = sectionItems[0]?.href ?? "";
  }
}

watch(isMenuOpen, async (open) => {
  if (typeof document === "undefined") {
    return;
  }

  if (open) {
    previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    await nextTick();

    firstMobileLink.value?.focus();
  } else {
    document.body.style.overflow = previousBodyOverflow;
  }
});

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  },
);

onMounted(() => {
  handleScroll();
  createSectionObserver();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  window.addEventListener("resize", handleResize);

  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  sectionObserver?.disconnect();

  window.removeEventListener("scroll", handleScroll);

  window.removeEventListener("resize", handleResize);

  window.removeEventListener("keydown", handleKeydown);

  document.body.style.overflow = previousBodyOverflow;
});
</script>

<style scoped>
.business-header {
  position: sticky;
  top: 0;
  z-index: 80;
  border-bottom: 1px solid transparent;
  background: rgba(255, 255, 255, 0.96);
  transition:
    border-color var(--sb-transition-fast),
    background var(--sb-transition-fast);
}

.business-header.is-scrolled,
.business-header.is-open {
  border-bottom-color: var(--sb-border);
  background: var(--sb-surface);
}

.business-header__inner {
  display: grid;
  width: min(100% - 48px, var(--sb-container));
  min-height: var(--sb-header-height);
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 28px;
  margin-inline: auto;
}

/* ========================================================
   BRAND
   ======================================================== */

.business-header__brand {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
  color: var(--sb-text);
  text-decoration: none;
}

.business-header__mark {
  display: block;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  object-fit: contain;
}

.business-header__brand-name {
  color: var(--sb-text);
  font-size: 0.88rem;
  font-weight: 760;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.business-header__product-name {
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  padding: 0 8px;
  font-size: 0.66rem;
  font-weight: 700;
}

/* ========================================================
   DESKTOP NAVIGATION
   ======================================================== */

.business-header__navigation {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.business-header__nav-link {
  position: relative;
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: var(--sb-radius-sm);
  color: var(--sb-text-muted);
  padding: 0 10px;
  font-size: 0.78rem;
  font-weight: 630;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background var(--sb-transition-fast),
    color var(--sb-transition-fast);
}

.business-header__nav-link::after {
  content: "";
  position: absolute;
  right: 10px;
  bottom: -1px;
  left: 10px;
  height: 2px;
  background: transparent;
}

.business-header__nav-link:hover {
  background: var(--sb-bg-soft);
  color: var(--sb-text);
}

.business-header__nav-link.is-active {
  color: var(--sb-primary-hover);
}

.business-header__nav-link.is-active::after {
  background: var(--sb-primary-hover);
}

.business-header__nav-link svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   DESKTOP ACTIONS
   ======================================================== */

.business-header__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.business-header__sign-in {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  color: var(--sb-text-soft);
  padding: 0 8px;
  font-size: 0.76rem;
  font-weight: 650;
  text-decoration: none;
}

.business-header__sign-in:hover {
  color: var(--sb-primary-hover);
}

/* ========================================================
   MOBILE TRIGGER
   ======================================================== */

.business-header__menu-button {
  display: none;
  width: 39px;
  height: 39px;
  min-height: 39px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-sm);
  outline: 0;
  background: var(--sb-surface);
  color: var(--sb-text);
  padding: 0;
  cursor: pointer;
}

.business-header__menu-button:hover,
.business-header__menu-button:focus-visible {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.business-header__menu-button span {
  display: block;
  width: 17px;
  height: 1.5px;
  margin: 4px auto;
  border-radius: 999px;
  background: currentColor;
  transition:
    transform var(--sb-transition-fast),
    opacity var(--sb-transition-fast);
}

.business-header.is-open .business-header__menu-button span:first-child {
  transform: translateY(2.75px) rotate(45deg);
}

.business-header.is-open .business-header__menu-button span:last-child {
  transform: translateY(-2.75px) rotate(-45deg);
}

/* ========================================================
   MOBILE LAYER
   ======================================================== */

.business-header__mobile-layer {
  position: fixed;
  inset: var(--sb-header-height) 0 0;
  z-index: 70;
  display: flex;
  justify-content: flex-end;
  background: rgba(17, 20, 23, 0.28);
}

.business-header__mobile-panel {
  display: grid;
  width: min(100%, 390px);
  height: 100%;
  grid-template-rows:
    auto
    minmax(0, 1fr)
    auto
    auto;
  overflow-y: auto;
  border-left: 1px solid var(--sb-border);
  background: var(--sb-surface);
}

.business-header__mobile-header {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--sb-border);
}

.business-header__mobile-header > div {
  display: grid;
  max-width: 290px;
  gap: 5px;
}

.business-header__mobile-header p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.business-header__mobile-header strong {
  color: var(--sb-text);
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.45;
}

.business-header__mobile-status {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #22c55e;
}

/* ========================================================
   MOBILE NAVIGATION
   ======================================================== */

.business-header__mobile-navigation {
  display: grid;
  align-content: start;
  padding: 18px 14px;
}

.business-header__mobile-label {
  padding: 0 8px 9px;
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.business-header__mobile-link {
  display: grid;
  min-height: 53px;
  grid-template-columns: 31px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 10px;
  border: 1px solid transparent;
  border-radius: var(--sb-radius-md);
  color: var(--sb-text-soft);
  padding: 8px 10px;
  text-decoration: none;
}

.business-header__mobile-link:hover,
.business-header__mobile-link:focus-visible {
  border-color: var(--sb-border);
  background: var(--sb-bg-soft);
  color: var(--sb-text);
}

.business-header__mobile-link.is-active {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.business-header__mobile-index {
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 700;
}

.business-header__mobile-link strong {
  font-size: 0.82rem;
  font-weight: 640;
}

.business-header__mobile-link svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   MOBILE ACTIONS
   ======================================================== */

.business-header__mobile-actions {
  display: grid;
  gap: 8px;
  padding: 14px;
  border-top: 1px solid var(--sb-border);
}

.business-header__mobile-sign-in {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-sm);
  color: var(--sb-text-soft);
  font-size: 0.78rem;
  font-weight: 650;
  text-decoration: none;
}

.business-header__mobile-sign-in:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

/* ========================================================
   MOBILE FOOTER
   ======================================================== */

.business-header__mobile-footer {
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 18px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.business-header__mobile-footer > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.business-header__mobile-footer div > span {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #22c55e;
}

.business-header__mobile-footer p {
  color: var(--sb-text-muted);
  font-size: 0.66rem;
  line-height: 1.45;
}

.business-header__mobile-footer a {
  flex: 0 0 auto;
  color: var(--sb-primary-hover);
  font-size: 0.66rem;
  font-weight: 650;
  text-decoration: none;
}

/* ========================================================
   TRANSITION
   ======================================================== */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 180ms ease;
}

.mobile-menu-enter-active .business-header__mobile-panel,
.mobile-menu-leave-active .business-header__mobile-panel {
  transition: transform 220ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .business-header__mobile-panel,
.mobile-menu-leave-to .business-header__mobile-panel {
  transform: translateX(100%);
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active .business-header__mobile-panel,
  .mobile-menu-leave-active .business-header__mobile-panel {
    transition: none;
  }
}

@media (max-width: 1040px) {
  .business-header__inner {
    gap: 18px;
  }

  .business-header__nav-link {
    padding-inline: 7px;
    font-size: 0.73rem;
  }
}

@media (max-width: 960px) {
  .business-header__inner {
    width: min(100% - 32px, var(--sb-container));
    grid-template-columns:
      minmax(0, 1fr)
      auto;
  }

  .business-header__navigation,
  .business-header__actions {
    display: none;
  }

  .business-header__menu-button {
    display: grid;
  }
}

@media (max-width: 520px) {
  .business-header__inner {
    width: min(100% - 24px, var(--sb-container));
  }

  .business-header__brand-name {
    font-size: 0.82rem;
  }

  .business-header__product-name {
    min-height: 22px;
    padding-inline: 7px;
  }

  .business-header__mobile-panel {
    width: 100%;
    border-left: 0;
  }
}

@media (max-width: 360px) {
  .business-header__product-name {
    display: none;
  }
}
</style>
