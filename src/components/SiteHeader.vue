<template>
  <header class="sa-header" :class="{ 'sa-header--scrolled': scrolled }">
    <div class="sa-container sa-header__inner">
      <RouterLink
        to="/"
        class="sa-brand"
        aria-label="Softadastra Business Home"
      >
        <span class="sa-brand__name">{{ site.brand.name }}</span>
      </RouterLink>

      <nav class="sa-nav" aria-label="Primary navigation">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="sa-nav__link"
          :class="{ 'is-active': isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        class="sa-burger"
        type="button"
        :class="{ 'is-open': mobileOpen }"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        aria-label="Open menu"
        @click="toggleMobile()"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <teleport to="body">
      <transition name="sa-sheet">
        <div
          v-if="mobileOpen"
          class="sa-mobile"
          @click.self="closeMobile()"
          @pointerdown="onOverlayPointerDown"
        >
          <aside
            ref="panel"
            class="sa-mobile__panel"
            role="dialog"
            aria-label="Menu"
            @pointerdown="onPanelPointerDown"
            @pointermove="onPanelPointerMove"
            @pointerup="onPanelPointerUp"
            @pointercancel="onPanelPointerUp"
          >
            <div class="sa-mobile__top">
              <div class="sa-mobile__brand">{{ site.brand.name }}</div>
              <button
                class="sa-mobile__close"
                type="button"
                aria-label="Close menu"
                @click="closeMobile()"
              >
                ✕
              </button>
            </div>

            <nav class="sa-mobile__links" aria-label="Mobile navigation">
              <RouterLink
                v-for="item in nav"
                :key="item.to"
                :to="item.to"
                class="sa-mobile__link"
                :class="{ 'is-active': isActive(item.to) }"
                @click="closeMobile()"
              >
                {{ item.label }}
              </RouterLink>
            </nav>
          </aside>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "SiteHeader",
  data() {
    return {
      site,
      scrolled: false,
      mobileOpen: false,
      nav: [
        { label: "Services", to: "/services" },
        { label: "Pricing", to: "/pricing" },
        { label: "About", to: "/about" },
      ],
      swipe: {
        active: false,
        pointerId: null,
        startX: 0,
        startY: 0,
        lastX: 0,
        startedAt: 0,
        dragging: false,
        panelWidth: 0,
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("keydown", this.onKeyDown);
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("keydown", this.onKeyDown);
    document.documentElement.style.overflow = "";
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 6;
    },
    toggleMobile() {
      this.mobileOpen ? this.closeMobile() : this.openMobile();
    },
    openMobile() {
      this.mobileOpen = true;
      document.documentElement.style.overflow = "hidden";
      this.$nextTick(() => this.resetPanelTransform());
    },
    closeMobile() {
      this.mobileOpen = false;
      document.documentElement.style.overflow = "";
      this.resetSwipeState();
    },
    onKeyDown(e) {
      if (e.key === "Escape" && this.mobileOpen) this.closeMobile();
    },
    isActive(path) {
      return (
        this.$route.path === path || this.$route.path.startsWith(path + "/")
      );
    },

    resetPanelTransform() {
      const el = this.$refs.panel;
      if (el) {
        el.style.transform = "";
        el.style.transition = "";
      }
    },
    resetSwipeState() {
      this.swipe.active = false;
      this.swipe.pointerId = null;
      this.swipe.startX = 0;
      this.swipe.startY = 0;
      this.swipe.lastX = 0;
      this.swipe.startedAt = 0;
      this.swipe.dragging = false;
      this.swipe.panelWidth = 0;
    },

    onOverlayPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
    },

    onPanelPointerDown(e) {
      if (!this.mobileOpen) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;

      const el = this.$refs.panel;
      if (!el) return;

      this.swipe.active = true;
      this.swipe.pointerId = e.pointerId;
      this.swipe.startX = e.clientX;
      this.swipe.startY = e.clientY;
      this.swipe.lastX = e.clientX;
      this.swipe.startedAt = performance.now();
      this.swipe.dragging = false;
      this.swipe.panelWidth = el.getBoundingClientRect().width;

      if (el.setPointerCapture) {
        el.setPointerCapture(e.pointerId);
      }

      el.style.transition = "none";
    },

    onPanelPointerMove(e) {
      if (!this.swipe.active || e.pointerId !== this.swipe.pointerId) return;

      const dx = e.clientX - this.swipe.startX;
      const dy = e.clientY - this.swipe.startY;
      this.swipe.lastX = e.clientX;

      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      if (!this.swipe.dragging) {
        if (absX < 6) return;
        if (absY > absX) return;
        this.swipe.dragging = true;
      }

      const el = this.$refs.panel;
      if (!el) return;

      const translate = Math.max(0, dx);
      el.style.transform = `translateX(${translate}px)`;
    },

    onPanelPointerUp(e) {
      if (!this.swipe.active || e.pointerId !== this.swipe.pointerId) return;

      const el = this.$refs.panel;
      if (!el) {
        this.resetSwipeState();
        return;
      }

      const dx = e.clientX - this.swipe.startX;
      const dt = performance.now() - this.swipe.startedAt;

      const width = this.swipe.panelWidth || el.getBoundingClientRect().width;
      const progress = width > 0 ? Math.max(0, dx) / width : 0;
      const velocity = dt > 0 ? Math.max(0, dx) / dt : 0;

      el.style.transition = "transform 180ms ease";

      const shouldClose = progress > 0.33 || velocity > 0.9;

      if (shouldClose) {
        el.style.transform = `translateX(${width + 24}px)`;
        window.setTimeout(() => this.closeMobile(), 170);
      } else {
        el.style.transform = "translateX(0px)";
        window.setTimeout(() => this.resetPanelTransform(), 190);
      }

      if (el.releasePointerCapture) {
        el.releasePointerCapture(e.pointerId);
      }

      this.resetSwipeState();
    },
  },
};
</script>

<style scoped>
.sa-header {
  position: sticky;
  top: 0;
  z-index: 60;
  background: rgba(244, 245, 247, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--sa-border);
}

.sa-header--scrolled {
  background: rgba(244, 245, 247, 0.98);
}

.sa-header__inner {
  height: 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
}

.sa-brand {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  min-width: 140px;
}

.sa-brand__name {
  font-weight: 800;
  letter-spacing: -0.2px;
  color: var(--sa-text);
}

.sa-nav {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sa-nav__link {
  padding: 10px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: rgba(30, 30, 30, 0.78);
  transition: background var(--sa-fast) ease, color var(--sa-fast) ease;
}

.sa-nav__link:hover {
  background: var(--sa-surface-muted);
  color: rgba(30, 30, 30, 0.92);
}

.sa-nav__link.is-active {
  background: rgba(255, 153, 0, 0.12);
  color: rgba(30, 30, 30, 0.96);
}

.sa-burger {
  justify-self: end;
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface);
  cursor: pointer;
  position: relative;
  transition: background var(--sa-fast) ease;
}

.sa-burger:hover {
  background: var(--sa-surface-muted);
}

.sa-burger span {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: rgba(30, 30, 30, 0.86);
  transform: translateX(-50%);
  transition: transform 160ms ease, opacity 160ms ease, top 160ms ease;
}

.sa-burger span:nth-child(1) {
  top: 15px;
}
.sa-burger span:nth-child(2) {
  top: 21px;
}
.sa-burger span:nth-child(3) {
  top: 27px;
}

.sa-burger.is-open span:nth-child(1) {
  top: 21px;
  transform: translateX(-50%) rotate(45deg);
}
.sa-burger.is-open span:nth-child(2) {
  opacity: 0;
}
.sa-burger.is-open span:nth-child(3) {
  top: 21px;
  transform: translateX(-50%) rotate(-45deg);
}

.sa-mobile {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: flex-end;
}

.sa-mobile__panel {
  width: min(380px, 92vw);
  height: 100%;
  background: var(--sa-surface);
  border-left: 1px solid var(--sa-border);
  box-shadow: -16px 0 36px rgba(0, 0, 0, 0.18);
  padding: 16px;
  padding-top: calc(16px + env(safe-area-inset-top));
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  touch-action: pan-y;
  will-change: transform;
}

.sa-mobile__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--sa-border);
}

.sa-mobile__brand {
  font-weight: 800;
  letter-spacing: -0.2px;
  color: var(--sa-text);
}

.sa-mobile__close {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface);
  cursor: pointer;
  transition: background var(--sa-fast) ease;
}

.sa-mobile__close:hover {
  background: var(--sa-surface-muted);
}

.sa-mobile__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
}

.sa-mobile__link {
  padding: 12px 12px;
  border-radius: 10px;
  font-weight: 600;
  color: rgba(30, 30, 30, 0.9);
  background: var(--sa-surface);
  border: 1px solid var(--sa-border);
  transition: background var(--sa-fast) ease, border-color var(--sa-fast) ease;
}

.sa-mobile__link:hover {
  background: var(--sa-surface-muted);
}

.sa-mobile__link.is-active {
  border-color: rgba(255, 153, 0, 0.35);
  background: rgba(255, 153, 0, 0.08);
}

.sa-sheet-enter-active,
.sa-sheet-leave-active {
  transition: opacity 160ms ease;
}

.sa-sheet-enter-from,
.sa-sheet-leave-to {
  opacity: 0;
}

.sa-sheet-enter-active .sa-mobile__panel,
.sa-sheet-leave-active .sa-mobile__panel {
  transition: transform 220ms ease;
}

.sa-sheet-enter-from .sa-mobile__panel {
  transform: translateX(18px);
}

.sa-sheet-leave-to .sa-mobile__panel {
  transform: translateX(18px);
}

@media (max-width: 980px) {
  .sa-nav {
    display: none;
  }
  .sa-burger {
    display: inline-block;
  }
  .sa-header__inner {
    grid-template-columns: auto 1fr auto;
  }
}
</style>
