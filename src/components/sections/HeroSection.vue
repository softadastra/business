<template>
  <section class="sa-section heroWrap">
    <div class="sa-container">
      <div class="hero">
        <div class="hero__left">
          <h1 class="hero__title">
            Offline-first software, built for real networks.
          </h1>

          <p class="hero__subtitle">
            Softadastra helps teams deliver fast, reliable products that keep
            working when connectivity is unstable — from universities to field
            operations and SMEs.
          </p>

          <div class="hero__actions">
            <router-link class="sa-btn sa-btn--primary" to="/products">
              Get started <span class="arrow" aria-hidden="true">→</span>
            </router-link>

            <router-link class="sa-btn" to="/services">
              View solutions <span class="arrow" aria-hidden="true">→</span>
            </router-link>
          </div>
        </div>

        <div class="hero__right" aria-hidden="true">
          <div class="animCard">
            <div class="animCard__top">
              <div class="animCard__pill">Sync</div>
              <div class="animCard__pill">Cache</div>
              <div class="animCard__pill">WAL</div>
              <div class="animCard__pill">Retry</div>
            </div>

            <div class="animCard__grid">
              <div class="node node--a"></div>
              <div class="node node--b"></div>
              <div class="node node--c"></div>
              <div class="node node--d"></div>
              <div class="node node--e"></div>

              <div class="link link--ab"></div>
              <div class="link link--bc"></div>
              <div class="link link--cd"></div>
              <div class="link link--ce"></div>

              <div class="pulse pulse--1"></div>
              <div class="pulse pulse--2"></div>
              <div class="pulse pulse--3"></div>
            </div>

            <div class="animCard__meta">
              <div class="metaRow">
                <span class="dot"></span>
                <span>Resilient sync pipeline</span>
              </div>
              <div class="metaRow">
                <span class="dot"></span>
                <span>Fast local reads</span>
              </div>
              <div class="metaRow">
                <span class="dot"></span>
                <span>Works offline by default</span>
              </div>
            </div>
          </div>

          <div class="animHint">Designed for unstable networks.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.heroWrap {
  padding-top: 56px;
  background: radial-gradient(
      900px 540px at 10% 0%,
      rgba(255, 153, 0, 0.12),
      transparent 60%
    ),
    radial-gradient(
      680px 420px at 85% 10%,
      rgba(255, 153, 0, 0.08),
      transparent 55%
    );
}

.hero {
  display: grid;
  gap: 18px;
  align-items: center;
}

.hero__left {
  max-width: 720px;
}

.hero__title {
  margin: 0;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.6px;
  color: var(--sa-text);
  font-weight: 850;
}

.hero__subtitle {
  margin: 14px 0 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--sa-text-muted);
  max-width: 640px;
}

.hero__actions {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.arrow {
  opacity: 0.7;
}

.hero__right {
  display: grid;
  gap: 10px;
  justify-items: end;
}

.animCard {
  width: min(520px, 100%);
  border-radius: 16px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--sa-shadow);
  overflow: hidden;
}

.animCard__top {
  padding: 12px 12px 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.animCard__pill {
  font-size: 12px;
  font-weight: 700;
  color: rgba(30, 30, 30, 0.86);
  border: 1px solid var(--sa-border);
  background: var(--sa-surface);
  border-radius: 999px;
  padding: 6px 10px;
}

.animCard__grid {
  position: relative;
  height: 220px;
  margin: 12px;
  border-radius: 14px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface-muted);
  overflow: hidden;
}

.node {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.9);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.12);
}

.node--a {
  left: 18%;
  top: 40%;
}
.node--b {
  left: 38%;
  top: 22%;
}
.node--c {
  left: 58%;
  top: 46%;
}
.node--d {
  left: 76%;
  top: 24%;
}
.node--e {
  left: 78%;
  top: 70%;
}

.link {
  position: absolute;
  height: 2px;
  background: rgba(30, 30, 30, 0.22);
  transform-origin: left center;
}

.link--ab {
  left: 18%;
  top: 40%;
  width: 26%;
  transform: rotate(-28deg);
}
.link--bc {
  left: 38%;
  top: 22%;
  width: 26%;
  transform: rotate(26deg);
}
.link--cd {
  left: 58%;
  top: 46%;
  width: 22%;
  transform: rotate(-22deg);
}
.link--ce {
  left: 58%;
  top: 46%;
  width: 24%;
  transform: rotate(35deg);
}

.pulse {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.9);
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.12));
  animation: movePulse 2.6s ease-in-out infinite;
}

.pulse--1 {
  left: 18%;
  top: 40%;
  animation-delay: 0ms;
}
.pulse--2 {
  left: 38%;
  top: 22%;
  animation-delay: 500ms;
}
.pulse--3 {
  left: 58%;
  top: 46%;
  animation-delay: 1000ms;
}

@keyframes movePulse {
  0% {
    transform: translate(0, 0);
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  55% {
    transform: translate(140px, -34px);
    opacity: 1;
  }
  100% {
    transform: translate(220px, 40px);
    opacity: 0;
  }
}

.animCard__meta {
  padding: 12px;
  display: grid;
  gap: 8px;
}

.metaRow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(30, 30, 30, 0.78);
  font-size: 13px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.9);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.1);
  flex: 0 0 auto;
}

.animHint {
  color: rgba(30, 30, 30, 0.62);
  font-size: 12px;
  justify-self: end;
}

@media (min-width: 980px) {
  .hero {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 22px;
  }
}

@media (max-width: 979px) {
  .hero__right {
    justify-items: start;
  }
  .animCard__grid {
    height: 200px;
  }
}
</style>
