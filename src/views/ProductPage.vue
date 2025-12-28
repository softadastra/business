<template>
  <section class="sa-section">
    <div class="sa-container">
      <div v-if="product" class="wrap">
        <!-- Breadcrumb -->
        <div class="crumbs">
          <router-link class="crumbLink" to="/">Home</router-link>
          <span class="sep">/</span>
          <router-link class="crumbLink" to="/#products">Products</router-link>
          <span class="sep">/</span>
          <span class="crumbHere">{{ product.title }}</span>
        </div>

        <!-- Header -->
        <div class="head">
          <div>
            <h1 class="title">{{ product.title }}</h1>
            <p class="subtitle">{{ product.subtitle }}</p>

            <div class="tagRail" v-if="product.tags?.length">
              <span class="tag" v-for="t in product.tags" :key="t">{{
                t
              }}</span>
            </div>
          </div>

          <div class="headActions">
            <a
              class="sa-btn sa-btn--accent"
              :href="
                site.buildWhatsAppLink(product.whatsappIntent || 'general')
              "
              target="_blank"
              rel="noopener"
            >
              Ask on WhatsApp →
            </a>

            <router-link class="sa-btn" to="/contact">
              Business inquiry
            </router-link>
          </div>
        </div>

        <!-- Body -->
        <div class="content">
          <div class="sa-card">
            <div class="sa-card__inner">
              <div class="blockTitle">Overview</div>
              <p class="blockText">
                {{ product.subtitle }}
              </p>

              <div class="blockTitle" style="margin-top: 14px">Key points</div>
              <ul class="bullets" v-if="product.bullets?.length">
                <li v-for="(b, i) in product.bullets" :key="i">{{ b }}</li>
              </ul>

              <div class="ctaRow">
                <router-link class="ctaLink" to="/services"
                  >See solutions & services →</router-link
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
                <div class="blockTitle">Typical use cases</div>
                <div class="mini">
                  <div class="miniRow">
                    <div class="dot"></div>
                    <div class="miniText">
                      Teams and institutions that need reliability
                    </div>
                  </div>
                  <div class="miniRow">
                    <div class="dot"></div>
                    <div class="miniText">
                      Environments with unstable connectivity
                    </div>
                  </div>
                  <div class="miniRow">
                    <div class="dot"></div>
                    <div class="miniText">
                      Modern deployments (cloud / on-prem / hybrid)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="quick">
              <div class="quickK">Need a quote?</div>
              <div class="quickV">
                Message us on WhatsApp with your timeline and scope.
              </div>
              <a
                class="sa-btn sa-btn--accent"
                :href="
                  site.buildWhatsAppLink(product.whatsappIntent || 'general')
                "
                target="_blank"
                rel="noopener"
                style="margin-top: 10px; width: 100%"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Not found -->
      <div v-else class="nf">
        <h1 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Product not found
        </h1>
        <p class="sa-subtitle" style="max-width: 720px">
          This product key doesn’t exist in <code>site.products</code>. Go back
          to the products list.
        </p>
        <router-link
          class="sa-btn sa-btn--accent"
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
      return this.site.products.find((p) => p.key === key) || null;
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

/* Breadcrumb */
.crumbs {
  color: var(--sa-muted);
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.crumbLink {
  font-weight: 950;
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
  color: rgba(18, 18, 18, 0.86);
  font-weight: 950;
}

/* Header */
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
  font-weight: 950;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.03);
  padding: 6px 10px;
  border-radius: 999px;
}

.tag:first-child {
  border-color: rgba(255, 153, 0, 0.24);
  background: rgba(255, 153, 0, 0.12);
}

.headActions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Content */
.content {
  display: grid;
  gap: 14px;
  align-items: start;
}

.blockTitle {
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
  font-weight: 950;
  opacity: 0.92;
}
.ctaLink:hover {
  opacity: 1;
  text-decoration: underline;
}

.ctaLink--muted {
  color: rgba(18, 18, 18, 0.68);
}

/* Side */
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
  background: rgba(255, 153, 0, 0.55);
  border: 1px solid rgba(255, 153, 0, 0.22);
}

.miniText {
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.5;
}

.quick {
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(255, 255, 255, 0.72);
  border-radius: 18px;
  box-shadow: 0 10px 22px rgba(17, 17, 17, 0.05);
  padding: 12px 14px;
}

.quickK {
  font-weight: 950;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.72);
}
.quickV {
  margin-top: 4px;
  font-weight: 900;
  font-size: 13px;
  color: rgba(18, 18, 18, 0.92);
  line-height: 1.4;
}

/* Responsive */
@media (min-width: 980px) {
  .head {
    grid-template-columns: 1.2fr 0.8fr;
  }
  .headActions {
    justify-content: flex-end;
  }
  .content {
    grid-template-columns: 1.25fr 0.75fr;
  }
}

/* Not found */
.nf {
  padding: 28px 0;
}
code {
  font-weight: 950;
}
</style>
