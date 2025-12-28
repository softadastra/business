<template>
  <main class="sa-page">
    <section class="sa-section">
      <div class="sa-container">
        <div class="nf">
          <!-- SVG Dog (animated) -->
          <div class="nfArt" aria-hidden="true">
            <svg
              class="dog"
              width="520"
              height="320"
              viewBox="0 0 520 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <!-- soft background blob -->
              <path
                class="blob"
                d="M410 68c49 35 63 112 28 168-35 56-118 91-193 70-75-21-142-97-122-164S178 41 261 38c83-3 100-5 149 30Z"
              />

              <!-- tiny stars -->
              <g class="sparkles">
                <circle cx="92" cy="92" r="3" />
                <circle cx="128" cy="70" r="2.5" />
                <circle cx="440" cy="120" r="2.8" />
                <circle cx="400" cy="92" r="2.2" />
              </g>

              <!-- leash wire -->
              <path class="wire" d="M370 240c38-18 60-10 92 8" />

              <!-- dog group -->
              <g class="dogGroup" transform="translate(120 92)">
                <!-- shadow -->
                <ellipse class="shadow" cx="130" cy="206" rx="110" ry="18" />

                <!-- tail -->
                <path
                  class="tail"
                  d="M248 148c28 6 40 20 34 38-7 22-36 20-54 10"
                />

                <!-- body -->
                <path
                  class="body"
                  d="M56 116c6-38 40-60 88-60h38c42 0 72 18 86 50 15 35 6 84-20 112-20 21-54 32-92 32-44 0-74-13-90-36-18-26-16-66-10-98Z"
                />

                <!-- chest -->
                <path
                  class="belly"
                  d="M168 70c-18 10-28 26-30 50-2 22 8 44 26 62"
                />

                <!-- head -->
                <g class="head" transform="translate(0 0)">
                  <path
                    class="face"
                    d="M46 118c-20-36-10-80 22-100 30-18 74-10 98 18 20 24 20 62 2 90-18 28-54 40-86 30-16-5-28-16-36-38Z"
                  />

                  <!-- ears -->
                  <path
                    class="earL"
                    d="M52 52c-22-10-40 4-40 28 0 22 18 34 40 28"
                  />
                  <path
                    class="earR"
                    d="M130 28c18-18 42-10 46 14 4 24-14 42-38 40"
                  />

                  <!-- muzzle -->
                  <path
                    class="muzzle"
                    d="M66 116c12 18 30 26 52 22 14-3 26-10 34-20"
                  />

                  <!-- nose -->
                  <path
                    class="nose"
                    d="M122 118c0 10-10 16-22 16-12 0-22-6-22-16 0-10 10-16 22-16 12 0 22 6 22 16Z"
                  />

                  <!-- eyes -->
                  <g class="eyes">
                    <circle cx="88" cy="92" r="4" />
                    <circle cx="132" cy="92" r="4" />
                    <path class="brow" d="M78 80c8-8 18-10 30-6" />
                    <path class="brow" d="M120 74c10-4 20-2 28 6" />
                  </g>
                </g>

                <!-- collar -->
                <path class="collar" d="M108 156c22 12 64 12 88 0" />
                <circle class="tag" cx="152" cy="170" r="8" />
              </g>

              <!-- 404 text -->
              <g class="big404">
                <text x="40" y="276">404</text>
              </g>
            </svg>
          </div>

          <!-- Text -->
          <div class="nfText">
            <div class="sa-badge">Not found</div>

            <h1 class="sa-title" style="font-size: clamp(26px, 3.2vw, 44px)">
              Page not found
            </h1>

            <p class="sa-subtitle" style="max-width: 720px">
              The page you’re looking for doesn’t exist or has been moved. You
              can return to the homepage or explore our products.
            </p>

            <div class="nfActions">
              <router-link class="sa-btn sa-btn--accent" to="/">
                Back to homepage →
              </router-link>
              <router-link class="sa-btn" to="/products">
                View products
              </router-link>
            </div>

            <div class="hint">
              <div class="dot" aria-hidden="true"></div>
              <div class="hintText">
                Tip: double-check the URL or use the navigation menu above.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "NotFoundPage",
  mounted() {
    document.title = "404 — Softadastra Business";
  },
};
</script>

<style scoped>
.sa-page {
  display: block;
}

.nf {
  display: grid;
  gap: 18px;
  align-items: center;
  padding: 8px 0;
}

.nfArt {
  display: grid;
  place-items: center;
}

.dog {
  width: min(520px, 100%);
  height: auto;
  filter: drop-shadow(0 18px 28px rgba(17, 17, 17, 0.08));
}

/* SVG colors (no hardcoded palette, uses your tokens) */
.blob {
  fill: rgba(255, 153, 0, 0.12);
  stroke: rgba(255, 153, 0, 0.18);
  stroke-width: 2;
}

.sparkles circle {
  fill: rgba(18, 18, 18, 0.12);
}

.wire {
  stroke: rgba(18, 18, 18, 0.16);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 6 10;
}

.shadow {
  fill: rgba(18, 18, 18, 0.08);
}

.body {
  fill: rgba(255, 255, 255, 0.86);
  stroke: rgba(18, 18, 18, 0.14);
  stroke-width: 2;
}

.belly {
  fill: none;
  stroke: rgba(18, 18, 18, 0.12);
  stroke-width: 2;
  stroke-linecap: round;
}

.face {
  fill: rgba(255, 255, 255, 0.9);
  stroke: rgba(18, 18, 18, 0.14);
  stroke-width: 2;
}

.earL,
.earR {
  fill: rgba(255, 153, 0, 0.14);
  stroke: rgba(18, 18, 18, 0.12);
  stroke-width: 2;
}

.muzzle {
  fill: none;
  stroke: rgba(18, 18, 18, 0.12);
  stroke-width: 2;
  stroke-linecap: round;
}

.nose {
  fill: rgba(18, 18, 18, 0.86);
}

.eyes circle {
  fill: rgba(18, 18, 18, 0.72);
}
.brow {
  fill: none;
  stroke: rgba(18, 18, 18, 0.22);
  stroke-width: 2;
  stroke-linecap: round;
}

.collar {
  fill: none;
  stroke: rgba(255, 153, 0, 0.7);
  stroke-width: 4;
  stroke-linecap: round;
}
.tag {
  fill: rgba(255, 153, 0, 0.7);
  stroke: rgba(18, 18, 18, 0.12);
  stroke-width: 2;
}

.big404 text {
  font-size: 74px;
  font-weight: 950;
  fill: rgba(18, 18, 18, 0.08);
  letter-spacing: -2px;
}

/* Layout text */
.nfText {
  display: grid;
  gap: 12px;
}

.nfActions {
  margin-top: 6px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hint {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px 14px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  box-shadow: 0 10px 22px rgba(17, 17, 17, 0.05);
}
.dot {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.55);
  border: 1px solid rgba(255, 153, 0, 0.22);
}
.hintText {
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.5;
}

/* Animations */
.dogGroup {
  transform-origin: 50% 85%;
  animation: floaty 3.4s ease-in-out infinite;
}

.tail {
  fill: none;
  stroke: rgba(18, 18, 18, 0.14);
  stroke-width: 5;
  stroke-linecap: round;
  transform-origin: 252px 160px;
  animation: wag 0.9s ease-in-out infinite;
}

.head {
  transform-origin: 90px 110px;
  animation: nod 2.4s ease-in-out infinite;
}

.sparkles {
  animation: twinkle 2.2s ease-in-out infinite;
  transform-origin: center;
}

@keyframes floaty {
  0%,
  100% {
    transform: translate(120px, 92px) translateY(0px);
  }
  50% {
    transform: translate(120px, 92px) translateY(-6px);
  }
}

@keyframes wag {
  0%,
  100% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-18deg);
  }
}

@keyframes nod {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(2px) rotate(-2deg);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

/* Responsive */
@media (min-width: 980px) {
  .nf {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
  }
  .nfArt {
    justify-items: start;
  }
}
</style>
