<template>
  <main class="sa-page">
    <!-- Hero -->
    <section class="sa-section">
      <div class="sa-container">
        <div class="pageHero">
          <div>
            <div class="sa-badge">
              Transparent starting points • Fast WhatsApp quote
            </div>

            <h1 class="sa-title" style="font-size: clamp(26px, 3.2vw, 44px)">
              Pricing
            </h1>

            <p class="sa-subtitle" style="max-width: 860px">
              Pricing depends on scope, timeline, and requirements. These tiers
              are starting points to help you choose the right direction — we
              can confirm a quote quickly on WhatsApp.
            </p>

            <div class="actions">
              <a
                class="sa-btn sa-btn--accent"
                :href="site.buildWhatsAppLink('general')"
                target="_blank"
                rel="noopener"
              >
                Get a quote on WhatsApp →
              </a>
              <a class="sa-btn" :href="emailHref">Email inquiry</a>
            </div>

            <div class="note">
              <div class="dot" aria-hidden="true"></div>
              <div class="noteText">
                {{ site.pricing.note }}
              </div>
            </div>
          </div>

          <div class="sa-card">
            <div class="sa-card__inner side">
              <div class="sideTitle">Best fit</div>
              <div class="sideText">
                If you need offline-first (works without stable internet), or
                enterprise deployment (on-prem/private), choose
                <strong>Enterprise</strong> and we’ll scope it precisely.
              </div>

              <div class="quickLinks">
                <a
                  class="qLink qLink--accent"
                  :href="site.buildWhatsAppLink('offline_first')"
                  target="_blank"
                  rel="noopener"
                >
                  Offline-first quote →
                </a>
                <a
                  class="qLink"
                  :href="site.buildWhatsAppLink('online')"
                  target="_blank"
                  rel="noopener"
                >
                  Platform quote →
                </a>
                <a
                  class="qLink"
                  :href="site.buildWhatsAppLink('website')"
                  target="_blank"
                  rel="noopener"
                >
                  Website quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tiers -->
    <section class="sa-section" id="tiers">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Tiers
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          Start with a tier, then we tailor the final scope. Every project can
          include WhatsApp conversion, performance, and clean delivery.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article
            v-for="t in tiers"
            :key="t.key"
            class="sa-card"
            :class="{ 'tier--highlight': t.key === highlightKey }"
          >
            <div class="sa-card__inner tier">
              <div class="tierTop">
                <div class="tierName">{{ t.title }}</div>
                <div v-if="t.key === highlightKey" class="tierChip">
                  Most selected
                </div>
              </div>

              <div class="tierPrice">
                <span class="from">From</span>
                <span class="amount"
                  >{{ currencySymbol }}{{ formatMoney(t.priceFrom) }}</span
                >
                <span class="unit">{{ site.pricing.currency }}</span>
              </div>

              <div class="tierFor">{{ t.bestFor }}</div>

              <ul class="tierList">
                <li v-for="(b, i) in t.bullets" :key="i">{{ b }}</li>
              </ul>

              <div class="tierActions">
                <a
                  class="tierBtn tierBtn--accent"
                  :href="quoteLinkForTier(t.key)"
                  target="_blank"
                  rel="noopener"
                >
                  Start on WhatsApp →
                </a>
                <router-link class="tierBtn" to="/contact"
                  >More details →</router-link
                >
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="sa-section" id="faq">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          FAQ
        </h2>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article class="sa-card">
            <div class="sa-card__inner faq">
              <div class="q">How fast can you deliver?</div>
              <div class="a">
                Depends on scope. Small websites can be fast. Platforms and
                offline-first systems need proper scoping + testing. We optimize
                for reliability, not rushed hacks.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner faq">
              <div class="q">Do you support enterprise deployments?</div>
              <div class="a">
                Yes. Cloud, on-prem, or hybrid. We can provide deployment plans,
                security practices, and training.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner faq">
              <div class="q">What does “offline-first” mean?</div>
              <div class="a">
                The system works locally without stable internet, then syncs
                safely when the connection returns (retry + resilience +
                conflict strategy).
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="sa-section">
      <div class="sa-container">
        <div class="final sa-card">
          <div class="sa-card__inner finalInner">
            <div>
              <div class="finalBadge">Fastest path</div>
              <div class="finalTitle">
                Send your idea on WhatsApp — get a clear plan.
              </div>
              <div class="finalText">
                Share scope + deadline + budget range. We’ll reply with the best
                tier and next steps.
              </div>
            </div>

            <div class="finalActions">
              <a
                class="sa-btn sa-btn--accent"
                :href="site.buildWhatsAppLink('general')"
                target="_blank"
                rel="noopener"
              >
                WhatsApp →
              </a>
              <a class="sa-btn" :href="emailHref">Email →</a>
              <router-link class="sa-btn" to="/services">Services</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "PricingPage",
  data() {
    return {
      site,
      highlightKey: "pro",
    };
  },
  computed: {
    tiers() {
      return this.site?.pricing?.tiers || [];
    },
    currencySymbol() {
      const c = (this.site?.pricing?.currency || "").toUpperCase();
      if (c === "USD") return "$";
      if (c === "EUR") return "€";
      if (c === "GBP") return "£";
      return "";
    },
    emailHref() {
      const to = (this.site.brand?.email || "").trim();
      const subject = encodeURIComponent(
        "Softadastra Business — Pricing inquiry"
      );
      const body = encodeURIComponent(
        "Hi Softadastra Business,\n\nMy name is:\nI’m interested in:\nTier (Starter/Pro/Enterprise):\nBudget range:\nDeadline:\n\nDetails:\n"
      );
      return to ? `mailto:${to}?subject=${subject}&body=${body}` : "mailto:";
    },
  },
  methods: {
    formatMoney(n) {
      const num = Number(n || 0);
      return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
    },
    quoteLinkForTier(tierKey) {
      // Map tiers to the best WhatsApp template intent in site.js
      if (tierKey === "starter") return this.site.buildWhatsAppLink("website");
      if (tierKey === "pro") return this.site.buildWhatsAppLink("online");
      return this.site.buildWhatsAppLink("offline_first");
    },
  },
};
</script>

<style scoped>
.sa-page {
  display: block;
}

.pageHero {
  display: grid;
  gap: 18px;
  align-items: start;
}

.actions {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.note {
  margin-top: 16px;
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
.noteText {
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.5;
}

/* side card */
.sideTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
  margin-bottom: 8px;
}
.sideText {
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.6;
}
.quickLinks {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}
.qLink {
  font-weight: 950;
  opacity: 0.9;
}
.qLink:hover {
  opacity: 1;
  text-decoration: underline;
}
.qLink--accent {
  color: rgba(18, 18, 18, 0.92);
}

/* tier card */
.tierTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.tierName {
  font-weight: 950;
  letter-spacing: 0.2px;
}
.tierChip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 153, 0, 0.22);
  background: rgba(255, 153, 0, 0.12);
  font-weight: 950;
}

.tierPrice {
  margin-top: 12px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.tierPrice .from {
  opacity: 0.65;
  font-weight: 850;
  font-size: 12px;
}
.tierPrice .amount {
  font-weight: 950;
  font-size: 28px;
  letter-spacing: -0.2px;
}
.tierPrice .unit {
  opacity: 0.65;
  font-weight: 850;
  font-size: 12px;
}

.tierFor {
  margin-top: 6px;
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.45;
}

.tierList {
  margin: 12px 0 0 0;
  padding-left: 18px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.6;
}
.tierList li {
  margin: 7px 0;
}

.tierActions {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tierBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.03);
  font-weight: 950;
  font-size: 13px;
  opacity: 0.92;
}
.tierBtn:hover {
  opacity: 1;
}

.tierBtn--accent {
  background: rgba(255, 153, 0, 0.14);
  border-color: rgba(255, 153, 0, 0.22);
  color: rgba(18, 18, 18, 0.92);
}

/* highlight */
.tier--highlight {
  transform: translateY(-2px);
}
.tier--highlight .tierBtn--accent {
  box-shadow: 0 16px 28px rgba(255, 153, 0, 0.18);
}

/* FAQ */
.faq .q {
  font-weight: 950;
  letter-spacing: 0.2px;
}
.faq .a {
  margin-top: 10px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.65;
}

/* final */
.finalInner {
  display: grid;
  gap: 16px;
  align-items: center;
}
.finalBadge {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 153, 0, 0.22);
  background: rgba(255, 153, 0, 0.12);
  font-weight: 950;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.82);
  width: fit-content;
}
.finalTitle {
  margin-top: 10px;
  font-weight: 950;
  letter-spacing: 0.2px;
  font-size: clamp(18px, 2.2vw, 26px);
}
.finalText {
  margin-top: 6px;
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.5;
}
.finalActions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

@media (min-width: 980px) {
  .pageHero {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: stretch;
  }
  .finalInner {
    grid-template-columns: 1.3fr 0.7fr;
  }
  .finalActions {
    justify-content: flex-end;
  }
}
</style>
