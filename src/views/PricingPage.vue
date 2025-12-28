<template>
  <main class="sa-page">
    <section class="sa-section">
      <div class="sa-container">
        <div class="pageHero">
          <div>
            <div class="sa-badge">Clear tiers • Fast WhatsApp response</div>

            <h1 class="sa-title" style="font-size: clamp(26px, 3.2vw, 44px)">
              Pricing
            </h1>

            <p class="sa-subtitle" style="max-width: 760px">
              Start with a tier. We refine scope and delivery to match your
              deadline and budget.
            </p>

            <div class="heroMeta">
              <div class="replyBadge">
                <span class="replyDot" aria-hidden="true"></span>
                Typically replies in minutes
              </div>

              <div class="note">
                <div class="dot" aria-hidden="true"></div>
                <div class="noteText">{{ site.pricing.note }}</div>
              </div>
            </div>
          </div>

          <div class="sa-card">
            <div class="sa-card__inner side">
              <div class="sideTitle">Choose the right fit</div>

              <div class="sideList">
                <div class="sideItem">
                  <div class="sideK">Starter</div>
                  <div class="sideV">Websites • MVPs</div>
                </div>

                <div class="sideItem">
                  <div class="sideK">Pro</div>
                  <div class="sideV">Platforms • APIs</div>
                </div>

                <div class="sideItem">
                  <div class="sideK">Enterprise</div>
                  <div class="sideV">Offline-first • On-prem</div>
                </div>
              </div>

              <div class="sideCta">
                <a
                  class="sideBtn"
                  :href="whatsAppHref"
                  target="_blank"
                  rel="noopener"
                  @click.prevent="openWhatsApp('general')"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sa-section" id="tiers">
      <div class="sa-container">
        <div class="sectionHead">
          <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
            Tiers
          </h2>
          <p class="sa-subtitle" style="max-width: 860px">
            Pick a starting point. We confirm features, timeline, and delivery
            plan on WhatsApp.
          </p>
        </div>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article
            v-for="t in tiers"
            :key="t.key"
            class="sa-card tierCard"
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
                  :href="whatsappTierLink(t.key)"
                  target="_blank"
                  rel="noopener"
                  @click.prevent="openWhatsAppTier(t.key)"
                >
                  WhatsApp →
                </a>

                <router-link class="tierBtn" to="/services">
                  View services →
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div class="miniRow">
          <div class="miniCard">
            <div class="miniK">Fast estimate</div>
            <div class="miniV">Share scope + deadline → we reply quickly.</div>
          </div>
          <div class="miniCard">
            <div class="miniK">Clean delivery</div>
            <div class="miniV">Architecture, performance, and handoff.</div>
          </div>
          <div class="miniCard">
            <div class="miniK">Flexible</div>
            <div class="miniV">Scope adjusts to budget and timeline.</div>
          </div>
        </div>
      </div>
    </section>

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
                Depends on scope. Small sites move fast. Platforms and
                offline-first systems require proper scoping and rollout.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner faq">
              <div class="q">Do you support on-prem or hybrid?</div>
              <div class="a">
                Yes. We support cloud, on-prem, or hybrid deployments with
                security and deployment planning.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner faq">
              <div class="q">What does “offline-first” mean?</div>
              <div class="a">
                The system keeps working without stable internet using local
                data + background sync with retries and conflict strategy.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="sa-section">
      <div class="sa-container">
        <div class="final sa-card">
          <div class="sa-card__inner finalInner">
            <div>
              <div class="finalBadge">Next step</div>
              <div class="finalTitle">Send scope + deadline + budget.</div>
              <div class="finalText">
                We reply with a clear plan and the right tier.
              </div>
            </div>

            <div class="finalActions">
              <a
                class="sa-btn sa-btn--accent waCta"
                :href="whatsAppHref"
                target="_blank"
                rel="noopener"
                @click.prevent="openWhatsApp('general')"
              >
                WhatsApp →
                <span class="waPulse" aria-hidden="true"></span>
              </a>

              <a
                class="sa-btn waBtn"
                :href="whatsAppHref"
                target="_blank"
                rel="noopener"
                @click.prevent="openWhatsApp('general')"
              >
                WhatsApp →
              </a>

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
    return { site, highlightKey: "pro" };
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
    whatsAppHref() {
      return this.site.buildWhatsAppLink("general");
    },
  },
  methods: {
    formatMoney(n) {
      const num = Number(n || 0);
      return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
    },
    isMobileDevice() {
      const ua = navigator.userAgent || "";
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const smallScreen = window.matchMedia("(max-width: 980px)").matches;
      return (
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(ua) ||
        (hasTouch && smallScreen)
      );
    },
    openWhatsApp(intent = "general") {
      const phone = (this.site?.social?.whatsappPhoneE164 || "").trim();
      const msg =
        this.site?.whatsappTemplates?.[intent] ||
        this.site?.whatsappTemplates?.general ||
        "";
      const encoded = encodeURIComponent(String(msg));
      const webUrl = phone
        ? `https://wa.me/${phone}?text=${encoded}`
        : this.site.buildWhatsAppLink(intent);

      if (!phone) {
        window.open(webUrl, "_blank", "noopener");
        return;
      }

      if (this.isMobileDevice()) {
        const appUrl = `whatsapp://send?phone=${phone}&text=${encoded}`;
        window.location.href = appUrl;
        window.setTimeout(() => {
          window.open(webUrl, "_blank", "noopener");
        }, 650);
        return;
      }

      window.open(webUrl, "_blank", "noopener");
    },
    whatsappTierLink(tierKey) {
      const t = (this.tiers || []).find((x) => x.key === tierKey);
      const tierName = (t?.title || tierKey || "").trim();
      const currency = (this.site?.pricing?.currency || "USD").trim();
      const priceFrom =
        t?.priceFrom != null ? `${t.priceFrom} ${currency}` : "";

      const text =
        `Hi Softadastra Business! I want a pricing estimate.\n\n` +
        `Name:\n` +
        `Project type:\n` +
        `Tier: ${tierName}${priceFrom ? ` (from ${priceFrom})` : ""}\n` +
        `Budget range:\n` +
        `Deadline:\n\n` +
        `Details:\n`;

      const phone = (this.site?.social?.whatsappPhoneE164 || "").trim();
      if (!phone) return this.site.buildWhatsAppLink("general");
      return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    },
    openWhatsAppTier(tierKey) {
      const link = this.whatsappTierLink(tierKey);
      const phone = (this.site?.social?.whatsappPhoneE164 || "").trim();
      if (!phone) {
        window.open(link, "_blank", "noopener");
        return;
      }

      if (this.isMobileDevice()) {
        const text = link.split("?text=")[1] || "";
        const appUrl = `whatsapp://send?phone=${phone}&text=${text}`;
        window.location.href = appUrl;
        window.setTimeout(() => {
          window.open(link, "_blank", "noopener");
        }, 650);
        return;
      }

      window.open(link, "_blank", "noopener");
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

.heroMeta {
  margin-top: 14px;
  display: grid;
  gap: 10px;
  max-width: 760px;
}

.replyBadge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 20px rgba(17, 17, 17, 0.04);
  font-weight: 950;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.78);
}

.replyDot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.92);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.16);
  animation: replyPulse 1.65s ease-in-out infinite;
}

@keyframes replyPulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  55% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}

.note {
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

.waCta {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.waCta:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(255, 153, 0, 0.18);
}

.waCta:active {
  transform: translateY(0px);
  filter: brightness(0.98);
}

.waPulse {
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0) 55%
  );
  transform: translateX(-65%) rotate(10deg);
  opacity: 0;
  pointer-events: none;
  animation: waShine 2.4s ease-in-out infinite;
}

@keyframes waShine {
  0% {
    transform: translateX(-70%) rotate(10deg);
    opacity: 0;
  }
  25% {
    opacity: 0.65;
  }
  55% {
    transform: translateX(50%) rotate(10deg);
    opacity: 0;
  }
  100% {
    transform: translateX(50%) rotate(10deg);
    opacity: 0;
  }
}

.waBtn {
  transition: transform 180ms ease, opacity 180ms ease;
}

.waBtn:hover {
  transform: translateY(-1px);
  opacity: 1;
}

.sideTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
}

.sideList {
  margin-top: 10px;
  display: grid;
  gap: 10px;
}

.sideItem {
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  background: rgba(18, 18, 18, 0.02);
}

.sideK {
  font-weight: 950;
  letter-spacing: 0.2px;
  font-size: 12px;
}

.sideV {
  margin-top: 4px;
  color: var(--sa-muted);
  font-weight: 850;
  font-size: 12px;
  line-height: 1.45;
}

.sideCta {
  margin-top: 12px;
  display: flex;
}

.sideBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 11px 12px;
  border-radius: 14px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.03);
  font-weight: 950;
  font-size: 13px;
  opacity: 0.92;
}

.sideBtn:hover {
  opacity: 1;
}

.sectionHead {
  display: grid;
  gap: 8px;
}

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

.tier--highlight {
  transform: translateY(-2px);
}

.tier--highlight .tierBtn--accent {
  box-shadow: 0 16px 28px rgba(255, 153, 0, 0.18);
}

.miniRow {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}

.miniCard {
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 10px 18px rgba(17, 17, 17, 0.03);
}

.miniK {
  font-weight: 950;
  letter-spacing: 0.2px;
  font-size: 12px;
}

.miniV {
  margin-top: 4px;
  color: rgba(18, 18, 18, 0.7);
  font-weight: 850;
  font-size: 12px;
  line-height: 1.45;
}

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

  .miniRow {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .finalInner {
    grid-template-columns: 1.3fr 0.7fr;
  }

  .finalActions {
    justify-content: flex-end;
  }
}

@media (prefers-reduced-motion: reduce) {
  .replyDot,
  .waPulse {
    animation: none;
  }
  .waCta,
  .waBtn {
    transition: none;
  }
}
</style>
