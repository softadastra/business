<template>
  <footer class="business-footer">
    <div class="sb-container">
      <div class="business-footer__main">
        <section class="business-footer__brand">
          <RouterLink
            to="/"
            class="business-footer__logo"
            aria-label="Softadastra Cloud home"
          >
            <img
              class="business-footer__mark"
              src="/logo.svg"
              alt=""
              aria-hidden="true"
            />

            <span class="business-footer__identity">
              <span> Softadastra </span>

              <strong> Cloud </strong>
            </span>
          </RouterLink>

          <p class="business-footer__description">
            The shared project operations layer around local Vix.cpp
            development. Organize projects, private packages, lockfiles, build
            reports, and controlled team access without moving compilation into
            the cloud.
          </p>

          <div
            class="business-footer__status"
            aria-label="Softadastra Cloud product availability"
          >
            <span class="business-footer__status-dot" aria-hidden="true"></span>

            <div>
              <strong> Available now </strong>

              <small> Early product </small>
            </div>
          </div>

          <div class="business-footer__actions">
            <a
              class="business-footer__primary-action"
              href="https://cloud.softadastra.com/register"
            >
              Create an account

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>

            <a
              class="business-footer__secondary-action"
              href="https://cloud.softadastra.com/login"
            >
              Sign in
            </a>
          </div>
        </section>

        <div class="business-footer__navigation">
          <nav
            v-for="group in footerNavigation"
            :key="group.title"
            class="business-footer__group"
            :aria-label="group.title"
          >
            <h2>
              {{ group.title }}
            </h2>

            <a
              v-for="item in group.links"
              :key="item.href"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              class="business-footer__link"
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
        </div>
      </div>

      <div class="business-footer__platform">
        <div class="business-footer__platform-copy">
          <p>A Softadastra product</p>

          <strong> Local C++ tooling and shared project operations. </strong>
        </div>

        <div class="business-footer__products">
          <a href="https://vixcpp.com">
            <span class="business-footer__product-mark"> V </span>

            <span>
              <small>Local foundation</small>
              <strong>Vix.cpp</strong>
            </span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <a href="https://softadastra.com">
            <span class="business-footer__product-mark"> S </span>

            <span>
              <small>The company</small>
              <strong>Softadastra</strong>
            </span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div class="business-footer__bottom">
        <p>© {{ currentYear }} Softadastra. All rights reserved.</p>

        <div class="business-footer__destinations">
          <a href="https://business.softadastra.com" aria-current="page">
            <span>Product website</span>
            <strong>business.softadastra.com</strong>
          </a>

          <a href="https://cloud.softadastra.com">
            <span>Cloud application</span>
            <strong>cloud.softadastra.com</strong>
          </a>
        </div>
      </div>
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

/* ========================================================
   MAIN FOOTER
   ======================================================== */

.business-footer__main {
  display: grid;
  grid-template-columns:
    minmax(320px, 1.2fr)
    minmax(360px, 0.8fr);
  gap: clamp(54px, 8vw, 108px);
  padding: 58px 0 48px;
}

.business-footer__brand {
  display: grid;
  max-width: 650px;
  justify-items: start;
  align-content: start;
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

.business-footer__identity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.business-footer__identity > span {
  color: var(--sb-text);
  font-size: 0.94rem;
  font-weight: 760;
  letter-spacing: -0.02em;
}

.business-footer__identity strong {
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  padding: 0 8px;
  font-size: 0.66rem;
  font-weight: 720;
}

.business-footer__description {
  max-width: 610px;
  margin-top: 20px;
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  line-height: 1.7;
}

.business-footer__status {
  display: inline-grid;
  grid-template-columns: 9px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  margin-top: 21px;
  border: 1px solid rgba(34, 197, 94, 0.28);
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.07);
  padding: 7px 11px;
}

.business-footer__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
}

.business-footer__status > div {
  display: flex;
  align-items: center;
  gap: 7px;
}

.business-footer__status strong {
  color: #15803d;
  font-size: 0.7rem;
  font-weight: 680;
}

.business-footer__status small {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
}

.business-footer__status small::before {
  content: "·";
  margin-right: 7px;
}

.business-footer__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.business-footer__primary-action,
.business-footer__secondary-action {
  display: inline-flex;
  min-height: 39px;
  align-items: center;
  justify-content: center;
  border-radius: var(--sb-radius-sm);
  padding: 0 13px;
  font-size: 0.75rem;
  font-weight: 660;
  text-decoration: none;
}

.business-footer__primary-action {
  gap: 7px;
  border: 1px solid var(--sb-primary-hover);
  background: var(--sb-primary-hover);
  color: #ffffff;
}

.business-footer__primary-action:hover {
  background: var(--sb-primary);
  color: #ffffff;
}

.business-footer__primary-action svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.business-footer__secondary-action {
  border: 1px solid var(--sb-border);
  background: transparent;
  color: var(--sb-text-soft);
}

.business-footer__secondary-action:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

/* ========================================================
   NAVIGATION
   ======================================================== */

.business-footer__navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 34px;
  align-content: start;
}

.business-footer__group {
  display: grid;
  align-content: start;
  gap: 5px;
}

.business-footer__group h2 {
  margin: 0 0 10px;
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 720;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.business-footer__link {
  display: inline-flex;
  width: fit-content;
  min-height: 32px;
  align-items: center;
  gap: 6px;
  color: var(--sb-text-soft);
  font-size: 0.79rem;
  font-weight: 610;
  text-decoration: none;
}

.business-footer__link:hover {
  color: var(--sb-primary-hover);
}

.business-footer__link svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   PLATFORM RELATIONSHIP
   ======================================================== */

.business-footer__platform {
  display: grid;
  grid-template-columns:
    minmax(240px, 0.7fr)
    minmax(0, 1.3fr);
  align-items: center;
  gap: clamp(36px, 7vw, 86px);
  padding: 28px 0;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.business-footer__platform-copy {
  display: grid;
  gap: 5px;
}

.business-footer__platform-copy p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
  font-weight: 720;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.business-footer__platform-copy strong {
  color: var(--sb-text);
  font-size: 0.86rem;
  font-weight: 640;
  line-height: 1.45;
}

.business-footer__products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.business-footer__products a {
  display: grid;
  min-width: 0;
  grid-template-columns: 38px minmax(0, 1fr) 17px;
  align-items: center;
  gap: 10px;
  min-height: 62px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-bg-soft);
  color: var(--sb-text);
  padding: 10px 12px;
  text-decoration: none;
}

.business-footer__products a:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
}

.business-footer__product-mark {
  display: grid;
  width: 37px;
  height: 37px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 9px;
  background: var(--sb-surface);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 760;
}

.business-footer__products a > span:nth-child(2) {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.business-footer__products small {
  color: var(--sb-text-muted);
  font-size: 0.65rem;
}

.business-footer__products strong {
  color: var(--sb-text);
  font-size: 0.78rem;
  font-weight: 640;
}

.business-footer__products svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--sb-text-muted);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   BOTTOM
   ======================================================== */

.business-footer__bottom {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 18px 0 24px;
}

.business-footer__bottom > p {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  line-height: 1.5;
}

.business-footer__destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.business-footer__destinations a {
  display: grid;
  gap: 2px;
  border-left: 1px solid var(--sb-border);
  color: var(--sb-text);
  padding: 3px 14px;
  text-decoration: none;
}

.business-footer__destinations a:hover strong {
  color: var(--sb-primary-hover);
}

.business-footer__destinations span {
  color: var(--sb-text-muted);
  font-size: 0.62rem;
}

.business-footer__destinations strong {
  color: var(--sb-text-soft);
  font-family: var(--sb-font-mono);
  font-size: 0.65rem;
  font-weight: 620;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 880px) {
  .business-footer__main {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .business-footer__brand {
    max-width: 700px;
  }

  .business-footer__navigation {
    max-width: 600px;
  }

  .business-footer__platform {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .business-footer__main {
    padding: 48px 0 38px;
  }

  .business-footer__navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .business-footer__products {
    grid-template-columns: 1fr;
  }

  .business-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 17px;
  }

  .business-footer__destinations {
    width: 100%;
    justify-content: flex-start;
  }

  .business-footer__destinations a:first-child {
    padding-left: 0;
    border-left: 0;
  }
}

@media (max-width: 460px) {
  .business-footer__identity > span {
    font-size: 0.86rem;
  }

  .business-footer__actions {
    width: 100%;
    flex-direction: column;
  }

  .business-footer__primary-action,
  .business-footer__secondary-action {
    width: 100%;
  }

  .business-footer__navigation {
    grid-template-columns: 1fr;
  }

  .business-footer__destinations {
    display: grid;
  }

  .business-footer__destinations a,
  .business-footer__destinations a:first-child {
    padding: 8px 0;
    border-left: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .business-footer__destinations a:last-child {
    border-bottom: 0;
  }
}
</style>
