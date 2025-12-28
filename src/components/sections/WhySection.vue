<template>
  <section id="why" class="sa-section whyWrap">
    <div class="sa-container">
      <div class="head">
        <div>
          <h2 class="sa-title whyTitle">Why Softadastra</h2>
          <p class="sa-subtitle whySub">
            Reliable software for unstable networks — offline-first sync,
            predictable performance, and long-term maintainability.
          </p>
        </div>
      </div>

      <div class="whyGrid">
        <article class="sa-card whyCard">
          <div class="sa-card__inner">
            <div class="whyCard__top">
              <div class="whyCard__title">Offline-first</div>
              <div class="whyCard__meta">Local writes • Safe sync</div>
            </div>
            <p class="whyCard__desc">
              Applications keep working without connectivity. Data sync resumes
              automatically when the network is back.
            </p>
          </div>
        </article>

        <article class="sa-card whyCard">
          <div class="sa-card__inner">
            <div class="whyCard__top">
              <div class="whyCard__title">Performance</div>
              <div class="whyCard__meta">Low latency • Predictable</div>
            </div>
            <p class="whyCard__desc">
              Fast foundations for APIs and real-time systems, designed for
              production workloads.
            </p>
          </div>
        </article>

        <article class="sa-card whyCard">
          <div class="sa-card__inner">
            <div class="whyCard__top">
              <div class="whyCard__title">Enterprise-ready</div>
              <div class="whyCard__meta">Cloud • On-prem • Hybrid</div>
            </div>
            <p class="whyCard__desc">
              Clean architecture that supports deployments, integration, and
              long-term support.
            </p>
          </div>
        </article>

        <div class="whyAnim" aria-hidden="true">
          <div class="animBox">
            <div class="animBox__header">
              <span class="chip">Offline</span>
              <span class="chip">Sync</span>
              <span class="chip">Retry</span>
              <span class="chip">Cache</span>
            </div>

            <div class="animBox__stage">
              <div class="ring ring--1"></div>
              <div class="ring ring--2"></div>
              <div class="ring ring--3"></div>

              <div class="pkt pkt--a"></div>
              <div class="pkt pkt--b"></div>
              <div class="pkt pkt--c"></div>

              <div class="beam beam--1"></div>
              <div class="beam beam--2"></div>
              <div class="beam beam--3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhySection",
};
</script>

<style scoped>
.whyWrap {
  background: radial-gradient(
    700px 420px at 85% 0%,
    rgba(255, 153, 0, 0.06),
    transparent 60%
  );
}

.head {
  display: grid;
  gap: 12px;
  align-items: end;
}

.whyTitle {
  font-size: clamp(22px, 2.6vw, 34px);
  margin: 0;
}

.whySub {
  max-width: 860px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.arrow {
  opacity: 0.7;
}

.whyGrid {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}

.whyCard {
  border-radius: 14px;
}

.whyCard__top {
  display: grid;
  gap: 4px;
}

.whyCard__title {
  font-weight: 800;
  color: var(--sa-text);
  letter-spacing: -0.1px;
}

.whyCard__meta {
  font-size: 12px;
  color: var(--sa-text-muted);
}

.whyCard__desc {
  margin: 10px 0 0 0;
  color: var(--sa-text-muted);
  font-size: 13px;
  line-height: 1.65;
}

.whyAnim {
  border-radius: 14px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--sa-shadow);
  overflow: hidden;
}

.animBox {
  padding: 12px;
}

.animBox__header {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  font-weight: 700;
  color: rgba(30, 30, 30, 0.82);
  background: var(--sa-surface);
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 6px 10px;
}

.animBox__stage {
  position: relative;
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface-muted);
  height: 210px;
  overflow: hidden;
}

.ring {
  position: absolute;
  inset: 50%;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(30, 30, 30, 0.14);
  animation: ringPulse 2.6s ease-in-out infinite;
}

.ring--2 {
  width: 130px;
  height: 130px;
  opacity: 0.75;
  animation-delay: 220ms;
}

.ring--3 {
  width: 90px;
  height: 90px;
  opacity: 0.55;
  animation-delay: 440ms;
}

@keyframes ringPulse {
  0% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0.35;
  }
  55% {
    transform: translate(-50%, -50%) scale(1.03);
    opacity: 0.75;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0.35;
  }
}

.pkt {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.95);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.12);
  animation: pktOrbit 2.4s linear infinite;
  left: 50%;
  top: 50%;
}

.pkt--a {
  animation-delay: 0ms;
}
.pkt--b {
  animation-delay: 400ms;
  opacity: 0.85;
}
.pkt--c {
  animation-delay: 800ms;
  opacity: 0.7;
}

@keyframes pktOrbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(70px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(70px);
  }
}

.beam {
  position: absolute;
  left: 18%;
  right: 18%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(
    90deg,
    rgba(255, 153, 0, 0),
    rgba(255, 153, 0, 0.75),
    rgba(255, 153, 0, 0)
  );
  opacity: 0.6;
  animation: beamScan 2.2s ease-in-out infinite;
}

.beam--2 {
  top: 40%;
  opacity: 0.45;
  animation-delay: 300ms;
}

.beam--3 {
  top: 60%;
  opacity: 0.35;
  animation-delay: 600ms;
}

@keyframes beamScan {
  0% {
    transform: translateY(-50%) scaleX(0.6);
    opacity: 0.2;
  }
  45% {
    transform: translateY(-50%) scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-50%) scaleX(0.6);
    opacity: 0.2;
  }
}

.animBox__footer {
  margin-top: 12px;
  display: grid;
  gap: 8px;
}

.animLine {
  height: 10px;
  border-radius: 999px;
  background: rgba(30, 30, 30, 0.08);
  overflow: hidden;
  position: relative;
}

.animLine::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 42%;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.22);
  transform: translateX(-60%);
  animation: lineMove 2.6s ease-in-out infinite;
}

.animLine--muted::after {
  background: rgba(255, 153, 0, 0.14);
  animation-delay: 220ms;
}

@keyframes lineMove {
  0% {
    transform: translateX(-60%);
    opacity: 0.3;
  }
  45% {
    transform: translateX(130%);
    opacity: 0.8;
  }
  100% {
    transform: translateX(130%);
    opacity: 0.3;
  }
}

@media (min-width: 980px) {
  .head {
    grid-template-columns: 1.2fr 0.8fr;
  }
  .actions {
    justify-content: flex-end;
  }

  .whyGrid {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }

  .whyAnim {
    grid-column: 1 / -1;
  }
}

@media (max-width: 979px) {
  .whyAnim .animBox__stage {
    height: 190px;
  }
}
</style>
