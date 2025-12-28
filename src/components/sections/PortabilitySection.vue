<template>
  <section class="sa-section flowWrap">
    <div class="sa-container flow">
      <div class="flowHead">
        <div class="flowEyebrow">PORTABILITY</div>
        <h2 class="sa-title flowTitle">Run everywhere. Stay reliable.</h2>
        <p class="sa-subtitle flowSub">
          Softadastra connects real-world environments into one resilient system
          — cloud, on-prem, and offline-first.
        </p>
      </div>

      <div ref="stage" class="flowStage">
        <div class="flowCol flowCol--left">
          <div ref="nodeL1" class="nodeCard nodeCard--l">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 10a6 6 0 0 1 10.4-4H20v6h-2v2h-2v-2h-2.6A6 6 0 0 1 4 10Zm8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">Enterprise</div>
          </div>

          <div ref="nodeL2" class="nodeCard nodeCard--l">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 4h16v12H4V4Zm2 2v8h12V6H6Zm-2 14h16v2H4v-2Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">Universities</div>
          </div>

          <div ref="nodeL3" class="nodeCard nodeCard--l">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2a7 7 0 0 1 7 7c0 4.4-5.3 11.2-6.6 12.9a.5.5 0 0 1-.8 0C10.3 20.2 5 13.4 5 9a7 7 0 0 1 7-7Zm0 9.2A2.2 2.2 0 1 0 12 6.8a2.2 2.2 0 0 0 0 4.4Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">Field teams</div>
          </div>
        </div>

        <div ref="center" class="flowCenter">
          <div class="core">
            <svg
              class="saLogo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              role="img"
              aria-label="Softadastra"
            >
              <defs>
                <linearGradient id="saOrange" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#ffb24a" />
                  <stop offset="0.5" stop-color="#ff9900" />
                  <stop offset="1" stop-color="#e07f00" />
                </linearGradient>
                <linearGradient id="saGreen" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#2f7a5b" />
                  <stop offset="0.55" stop-color="#1f5f46" />
                  <stop offset="1" stop-color="#174a36" />
                </linearGradient>
              </defs>

              <path
                d="M358 92
                   C 298 58, 210 62, 162 110
                   C 126 145, 124 196, 160 232
                   C 187 259, 226 272, 264 290
                   C 306 309, 338 336, 332 372
                   C 326 408, 285 432, 240 430
                   C 196 428, 158 406, 132 372"
                fill="none"
                stroke="url(#saOrange)"
                stroke-width="78"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                d="M144 312
                   C 172 362, 228 408, 298 414
                   C 366 420, 420 386, 432 330"
                fill="none"
                stroke="url(#saGreen)"
                stroke-width="78"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="coreGlow"></div>
          </div>
        </div>

        <div class="flowCol flowCol--right">
          <div ref="nodeR1" class="nodeCard nodeCard--r">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 1 1 17 18H7Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">Cloud</div>
          </div>

          <div ref="nodeR2" class="nodeCard nodeCard--r">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">On-prem</div>
          </div>

          <div ref="nodeR3" class="nodeCard nodeCard--r">
            <div class="nodeIcon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 3a7 7 0 0 1 6.9 8.2l1.8 1.8-1.4 1.4-1.5-1.5A7 7 0 1 1 12 3Zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 12 5Z"
                />
              </svg>
            </div>
            <div class="nodeLabel">Offline</div>
          </div>
        </div>

        <svg
          v-if="ready"
          class="wires"
          :width="svgW"
          :height="svgH"
          :viewBox="`0 0 ${svgW} ${svgH}`"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="rgba(255,153,0,0)" />
              <stop offset="0.45" stop-color="rgba(255,153,0,0.95)" />
              <stop offset="1" stop-color="rgba(255,153,0,0)" />
            </linearGradient>
            <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            v-for="(p, i) in paths"
            :key="'b' + i"
            class="wireBase"
            :d="p.d"
          />
          <path
            v-for="(p, i) in paths"
            :key="'e' + i"
            class="wireEnergy"
            :class="p.delay"
            :d="p.d"
          />

          <g
            v-for="(p, i) in icons"
            :key="'ic' + i"
            :transform="`translate(${p.x}, ${p.y})`"
          >
            <rect
              class="wireChip"
              x="-10"
              y="-10"
              width="20"
              height="20"
              rx="5"
            />
            <path class="wireChipMark" d="M-3 0h6M0-3v6" />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortabilitySection",
  data() {
    return {
      ready: false,
      svgW: 0,
      svgH: 0,
      paths: [],
      icons: [],
      ro: null,
      raf: 0,
    };
  },
  mounted() {
    this.compute();
    this.ro = new ResizeObserver(() => this.compute());
    if (this.$refs.stage) this.ro.observe(this.$refs.stage);
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeUnmount() {
    if (this.ro && this.$refs.stage) this.ro.unobserve(this.$refs.stage);
    if (this.ro) this.ro.disconnect();
    window.removeEventListener("scroll", this.onScroll);
    if (this.raf) cancelAnimationFrame(this.raf);
  },
  methods: {
    onScroll() {
      this.compute();
    },
    compute() {
      if (this.raf) cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(() => {
        const stage = this.$refs.stage;
        const center = this.$refs.center;
        if (!stage || !center) return;

        const s = stage.getBoundingClientRect();
        const c = center.getBoundingClientRect();

        const getMidRight = (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.right - s.left, y: r.top - s.top + r.height / 2 };
        };

        const getMidLeft = (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.left - s.left, y: r.top - s.top + r.height / 2 };
        };

        const cx = c.left - s.left + c.width / 2;
        const cy = c.top - s.top + c.height / 2;

        const leftTargets = [
          getMidRight(this.$refs.nodeL1),
          getMidRight(this.$refs.nodeL2),
          getMidRight(this.$refs.nodeL3),
        ];

        const rightTargets = [
          getMidLeft(this.$refs.nodeR1),
          getMidLeft(this.$refs.nodeR2),
          getMidLeft(this.$refs.nodeR3),
        ];

        const entryLeft = { x: cx - c.width / 2 - 10, y: cy };
        const entryRight = { x: cx + c.width / 2 + 10, y: cy };

        const mkCubic = (p0, p3, bend) => {
          const dx = Math.max(80, Math.min(220, Math.abs(p3.x - p0.x) * 0.45));
          const p1 = { x: p0.x + dx, y: p0.y };
          const p2 = { x: p3.x - dx, y: p3.y + bend };
          return {
            p0,
            p1,
            p2,
            p3,
            d: `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`,
          };
        };

        const items = [];
        items.push(mkCubic(leftTargets[0], entryLeft, -38));
        items.push(mkCubic(leftTargets[1], entryLeft, 0));
        items.push(mkCubic(leftTargets[2], entryLeft, 38));
        items.push(mkCubic(rightTargets[0], entryRight, -38));
        items.push(mkCubic(rightTargets[1], entryRight, 0));
        items.push(mkCubic(rightTargets[2], entryRight, 38));

        const cubicPoint = (t, p0, p1, p2, p3) => {
          const u = 1 - t;
          const tt = t * t;
          const uu = u * u;
          const uuu = uu * u;
          const ttt = tt * t;
          return {
            x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
            y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
          };
        };

        const icons = items.map((it, idx) => {
          const t = idx < 3 ? 0.62 : 0.38;
          const p = cubicPoint(t, it.p0, it.p1, it.p2, it.p3);
          return { x: p.x, y: p.y };
        });

        const delays = ["d0", "d1", "d2", "d0", "d1", "d2"];

        this.svgW = Math.max(1, Math.round(s.width));
        this.svgH = Math.max(1, Math.round(s.height));
        this.paths = items.map((it, i) => ({ d: it.d, delay: delays[i] }));
        this.icons = icons;
        this.ready = true;
      });
    },
  },
};
</script>

<style scoped>
.flowWrap {
  background: radial-gradient(
    900px 520px at 50% 0%,
    rgba(255, 153, 0, 0.08),
    transparent 60%
  );
}

.flow {
  display: grid;
  gap: 26px;
}

.flowHead {
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

.flowEyebrow {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: rgba(255, 153, 0, 0.85);
  margin-bottom: 10px;
}

.flowTitle {
  font-size: clamp(28px, 3.2vw, 44px);
}

.flowSub {
  margin-top: 10px;
}

.flowStage {
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--sa-shadow);
  padding: 22px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  min-height: 380px;
}

.flowStage::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    520px 280px at 50% 55%,
    rgba(255, 153, 0, 0.08),
    transparent 72%
  );
  pointer-events: none;
}

.flowCol {
  display: grid;
  gap: 16px;
  position: relative;
  z-index: 3;
}

.flowCol--left {
  justify-items: end;
}

.flowCol--right {
  justify-items: start;
}

.nodeCard {
  width: min(280px, 100%);
  border-radius: 14px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.06);
  padding: 12px 12px;
  display: grid;
  gap: 8px;
}

.nodeIcon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(255, 153, 0, 0.25);
  background: rgba(255, 153, 0, 0.12);
  display: grid;
  place-items: center;
  color: rgba(30, 30, 30, 0.86);
}

.nodeLabel {
  font-weight: 800;
  color: var(--sa-text);
  letter-spacing: -0.1px;
  font-size: 13px;
}

.flowCenter {
  position: relative;
  z-index: 4;
}

.core {
  width: 190px;
  height: 190px;
  border-radius: 26px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.95);
  display: grid;
  place-items: center;
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.14);
  position: relative;
}

.saLogo {
  width: 130px;
  height: 130px;
  display: block;
}

.coreGlow {
  position: absolute;
  inset: -18px;
  border-radius: 32px;
  border: 1px solid rgba(255, 153, 0, 0.35);
  opacity: 0.7;
  animation: corePulse 2.8s ease-in-out infinite;
}

@keyframes corePulse {
  0% {
    transform: scale(0.985);
    opacity: 0.35;
  }
  55% {
    transform: scale(1.03);
    opacity: 0.85;
  }
  100% {
    transform: scale(0.985);
    opacity: 0.35;
  }
}

.wires {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.wireBase {
  fill: none;
  stroke: rgba(30, 30, 30, 0.12);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wireEnergy {
  fill: none;
  stroke: url(#wireGrad);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: url(#wireGlow);
  stroke-dasharray: 10 18;
  animation: energy 1.55s linear infinite;
}

.d0 {
  animation-delay: 0ms;
}
.d1 {
  animation-delay: 220ms;
}
.d2 {
  animation-delay: 440ms;
}

@keyframes energy {
  0% {
    stroke-dashoffset: 0;
    opacity: 0.35;
  }
  20% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: -130;
    opacity: 0.35;
  }
}

.wireChip {
  fill: rgba(255, 255, 255, 0.92);
  stroke: rgba(30, 30, 30, 0.16);
  stroke-width: 1;
  filter: url(#wireGlow);
}

.wireChipMark {
  fill: none;
  stroke: rgba(255, 153, 0, 0.95);
  stroke-width: 1.8;
  stroke-linecap: round;
  opacity: 0.9;
}

@media (max-width: 980px) {
  .flowStage {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: unset;
  }

  .flowCol--left,
  .flowCol--right {
    justify-items: center;
  }

  .core {
    width: 170px;
    height: 170px;
  }

  .saLogo {
    width: 118px;
    height: 118px;
  }

  .wires {
    display: none;
  }
}
</style>
