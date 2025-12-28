<template>
  <section id="products" class="sa-section productsWrap">
    <div class="sa-container">
      <div class="productsHead">
        <h2 class="sa-title productsTitle">Products</h2>
        <p class="sa-subtitle productsSub">
          Core building blocks of the Softadastra ecosystem — designed for
          reliability, performance, and long-term maintainability.
        </p>
      </div>

      <div class="sa-grid sa-grid--3 productsGrid">
        <article v-for="p in site.products" :key="p.key" class="sa-card pCard">
          <div class="sa-card__inner pInner">
            <div class="pTop">
              <div class="pName">{{ p.title }}</div>

              <div class="pTags" v-if="p.tags && p.tags.length">
                <span v-for="t in p.tags.slice(0, 2)" :key="t" class="pTag">
                  {{ t }}
                </span>
              </div>
            </div>

            <p class="pDesc">{{ p.subtitle }}</p>

            <router-link class="pCta" :to="`/products/${p.key}`">
              Learn more <span class="arrow" aria-hidden="true">→</span>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "ProductsSection",
  data() {
    return { site };
  },
};
</script>

<style scoped>
.productsWrap {
  background: radial-gradient(
    700px 420px at 10% 0%,
    rgba(255, 153, 0, 0.06),
    transparent 60%
  );
}

.productsHead {
  display: grid;
  gap: 10px;
}

.productsTitle {
  font-size: clamp(26px, 3.2vw, 44px);
  margin: 0;
}

.productsSub {
  max-width: 860px;
}

.productsGrid {
  margin-top: 18px;
}

.pCard {
  border-radius: 14px;
}

.pInner {
  display: grid;
  gap: 12px;
}

.pTop {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.pName {
  font-weight: 800;
  letter-spacing: -0.1px;
  font-size: 15px;
  line-height: 1.25;
  color: var(--sa-text);
}

.pTags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.pTag {
  font-size: 12px;
  font-weight: 700;
  color: rgba(30, 30, 30, 0.82);
  border: 1px solid var(--sa-border);
  background: var(--sa-surface-muted);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.pDesc {
  margin: 0;
  color: var(--sa-text-muted);
  font-size: 14px;
  line-height: 1.55;
}

.pCta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--sa-text);
  opacity: 0.9;
  margin-top: 2px;
}

.pCta:hover {
  opacity: 1;
  text-decoration: underline;
}

.arrow {
  opacity: 0.7;
}

@media (max-width: 520px) {
  .pTags {
    display: none;
  }
}
</style>
