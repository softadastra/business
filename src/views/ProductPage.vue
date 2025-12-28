<template>
  <section class="sa-section">
    <div class="sa-container">
      <div v-if="product" class="wrap">
        <div class="crumbs">
          <router-link class="crumbLink" to="/">Home</router-link>
          <span class="sep">/</span>
          <router-link class="crumbLink" to="/#products">Products</router-link>
          <span class="sep">/</span>
          <span class="crumbHere">{{ product.title }}</span>
        </div>

        <div class="head">
          <div>
            <h1 class="title">{{ product.title }}</h1>
            <p class="subtitle">{{ product.subtitle }}</p>

            <div class="tagRail" v-if="product.tags?.length">
              <span class="tag" v-for="t in product.tags" :key="t">{{
                t
              }}</span>
            </div>

            <div class="metaRow">
              <span class="metaPill">{{ product.category }}</span>
              <span class="metaPill metaPill--muted">{{ product.stage }}</span>
            </div>
          </div>

          <div class="headActions">
            <a
              v-if="product.href"
              class="sa-btn sa-btn--primary"
              :href="product.href"
              target="_blank"
              rel="noopener"
            >
              Visit {{ product.title }} →
            </a>
          </div>
        </div>

        <div class="content">
          <div class="sa-card">
            <div class="sa-card__inner">
              <div class="heroCard">
                <div class="anim" aria-hidden="true">
                  <span class="glow"></span>
                  <span class="ring"></span>
                  <span class="ring ring--2"></span>
                  <span class="chip">
                    <span class="chip__inner">{{ product.short }}</span>
                  </span>
                </div>

                <div class="heroText">
                  <div class="blockTitle">Overview</div>
                  <p class="blockText">{{ product.overview }}</p>

                  <div class="blockTitle" style="margin-top: 14px">
                    Key points
                  </div>
                  <ul class="bullets" v-if="product.bullets?.length">
                    <li v-for="(b, i) in product.bullets" :key="i">{{ b }}</li>
                  </ul>
                </div>
              </div>

              <div class="ctaRow">
                <router-link class="ctaLink" to="/services"
                  >See solutions →</router-link
                >
                <router-link class="ctaLink ctaLink--muted" to="/pricing"
                  >Pricing →</router-link
                >
              </div>
            </div>
          </div>

          <div class="side">
            <div class="sa-card">
              <div class="sa-card__inner">
                <div class="blockTitle">Typical use</div>
                <div class="mini">
                  <div class="miniRow" v-for="(u, i) in product.use" :key="i">
                    <div class="dot"></div>
                    <div class="miniText">{{ u }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="nf">
        <h1 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Product not found
        </h1>
        <p class="sa-subtitle" style="max-width: 720px">
          This product key doesn’t exist. Go back to the products list.
        </p>
        <router-link
          class="sa-btn sa-btn--primary"
          to="/#products"
          style="margin-top: 14px"
        >
          Back to products →
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "ProductPage",
  data() {
    return { site };
  },
  computed: {
    product() {
      const key = String(this.$route.params.key || "").trim();
      const base = this.site.products.find((p) => p.key === key) || null;
      if (!base) return null;

      const extras = {
        rix: {
          href: "https://github.com/rixcpp/rix",
          category: "Developer tools",
          stage: "Open source",
          short: "R",
          overview:
            "Rix is a modular C++ toolbox that provides lightweight building blocks for modern systems.",
          use: [
            "C++ utility modules for production codebases",
            "Reusable components across services and SDKs",
            "Teams that want a clean header-only style",
          ],
        },
        ivi: {
          href: "https://github.com/iviphp/ivi",
          category: "Framework",
          stage: "Open source",
          short: "I",
          overview:
            "Ivi.php is a minimal framework layer to build clean web apps and APIs with a simple, modern structure.",
          use: [
            "Fast web apps and APIs with clean conventions",
            "Projects that prefer clarity over heavy magic",
            "Teams that want maintainable PHP foundations",
          ],
        },
        vix: {
          href: "https://vixcpp.com",
          category: "Runtime / Backend",
          stage: "Production-oriented",
          short: "V",
          overview:
            "Vix.cpp is a high-performance C++ runtime for building APIs, middleware pipelines, and real-time services.",
          use: [
            "High throughput APIs with predictable latency",
            "Middleware pipelines and edge services",
            "Systems where performance and control matter",
          ],
        },
        map: {
          href: "https://softadastra.com/map",
          category: "Product",
          stage: "In progress",
          short: "M",
          overview:
            "Softadastra Map is a discovery layer for local and global use cases, designed to integrate with the ecosystem.",
          use: [
            "Location-based discovery and listings",
            "Map features inside business platforms",
            "Teams building local-first experiences",
          ],
        },
        blog: {
          href: "https://softadastra.com/blog",
          category: "Updates",
          stage: "Writing",
          short: "B",
          overview:
            "The Softadastra Blog shares product updates, engineering notes, and reliability-first architecture patterns.",
          use: [
            "Product announcements and roadmap updates",
            "Engineering deep-dives and patterns",
            "Practical guides for teams and developers",
          ],
        },
        market: {
          href: "https://softadastra.com",
          category: "Business",
          stage: "Ecosystem",
          short: "S",
          overview:
            "Softadastra Market is the commerce and business layer of the ecosystem, designed for practical operations and scale.",
          use: [
            "Commerce workflows and business tooling",
            "Resilient operations under real constraints",
            "Scalable foundations for growing platforms",
          ],
        },
      };

      const merged = {
        ...base,
        ...extras[base.key],
      };

      return merged;
    },
  },
  watch: {
    product: {
      immediate: true,
      handler(p) {
        if (!p) return;
        document.title = `${p.title} — Softadastra Business`;
      },
    },
  },
};
</script>

<style scoped>
.wrap {
  display: grid;
  gap: 14px;
}

.crumbs {
  color: var(--sa-muted);
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.crumbLink {
  font-weight: 850;
  opacity: 0.86;
}
.crumbLink:hover {
  opacity: 1;
  text-decoration: underline;
}
.sep {
  opacity: 0.5;
}
.crumbHere {
  color: rgba(31, 41, 51, 0.9);
  font-weight: 900;
}

.head {
  display: grid;
  gap: 12px;
  align-items: end;
}

.title {
  margin: 0;
  font-size: clamp(26px, 3.2vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.6px;
  font-weight: 950;
}

.subtitle {
  margin: 10px 0 0 0;
  color: var(--sa-muted);
  font-size: 15px;
  max-width: 820px;
}

.tagRail {
  margin-top: 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 12px;
  font-weight: 850;
  border: 1px solid rgba(31, 41, 51, 0.12);
  background: rgba(31, 41, 51, 0.03);
  padding: 6px 10px;
  border-radius: 999px;
}

.metaRow {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.metaPill {
  font-size: 12px;
  font-weight: 850;
  color: rgba(31, 41, 51, 0.86);
  border: 1px solid rgba(31, 41, 51, 0.12);
  background: rgba(255, 255, 255, 0.7);
  padding: 6px 10px;
  border-radius: 999px;
}

.metaPill--muted {
  color: rgba(31, 41, 51, 0.7);
}

.headActions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.content {
  display: grid;
  gap: 14px;
  align-items: start;
}

.heroCard {
  display: grid;
  gap: 14px;
  align-items: start;
}

.anim {
  position: relative;
  height: 180px;
  border-radius: 18px;
  border: 1px solid rgba(31, 41, 51, 0.1);
  background: radial-gradient(
      320px 160px at 30% 20%,
      rgba(255, 153, 0, 0.16),
      transparent 60%
    ),
    radial-gradient(
      340px 180px at 70% 60%,
      rgba(113, 75, 103, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.65);
  overflow: hidden;
}

.glow {
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 180deg,
    rgba(255, 153, 0, 0) 0%,
    rgba(255, 153, 0, 0.22) 22%,
    rgba(113, 75, 103, 0.14) 45%,
    rgba(255, 153, 0, 0.22) 70%,
    rgba(255, 153, 0, 0) 100%
  );
  animation: spin 10s linear infinite;
  filter: blur(10px);
  opacity: 0.9;
}

.ring {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  border: 1px solid rgba(31, 41, 51, 0.14);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring--2 {
  width: 120px;
  height: 120px;
  opacity: 0.75;
}

.chip {
  position: absolute;
  width: 74px;
  height: 74px;
  border-radius: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(31, 41, 51, 0.14);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  display: grid;
  place-items: center;
}

.chip__inner {
  font-weight: 950;
  font-size: 22px;
  letter-spacing: -0.2px;
  color: rgba(31, 41, 51, 0.92);
}

.heroText .blockTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
  margin-bottom: 8px;
}

.blockText {
  margin: 0;
  color: var(--sa-muted);
  font-size: 14px;
  line-height: 1.6;
}

.bullets {
  margin: 0;
  padding-left: 18px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.6;
}

.bullets li {
  margin: 7px 0;
}

.ctaRow {
  margin-top: 14px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.ctaLink {
  font-weight: 900;
  opacity: 0.92;
}
.ctaLink:hover {
  opacity: 1;
  text-decoration: underline;
}

.ctaLink--muted {
  color: rgba(31, 41, 51, 0.68);
}

.side {
  display: grid;
  gap: 12px;
}

.mini {
  display: grid;
  gap: 10px;
}
.miniRow {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.dot {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.65);
  border: 1px solid rgba(255, 153, 0, 0.26);
}

.miniText {
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.5;
}

.quick {
  border: 1px solid rgba(31, 41, 51, 0.1);
  background: rgba(255, 255, 255, 0.72);
  border-radius: 18px;
  box-shadow: 0 10px 22px rgba(17, 17, 17, 0.05);
  padding: 12px 14px;
}

.quickK {
  font-weight: 950;
  font-size: 12px;
  color: rgba(31, 41, 51, 0.72);
}
.quickV {
  margin-top: 4px;
  font-weight: 800;
  font-size: 13px;
  color: rgba(31, 41, 51, 0.9);
  line-height: 1.4;
}

@media (min-width: 980px) {
  .head {
    grid-template-columns: 1.15fr 0.85fr;
  }
  .headActions {
    justify-content: flex-end;
  }
  .content {
    grid-template-columns: 1.25fr 0.75fr;
  }
  .heroCard {
    grid-template-columns: 0.6fr 1.4fr;
    align-items: center;
    gap: 16px;
  }
}

.nf {
  padding: 28px 0;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
