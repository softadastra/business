<template>
  <main class="sa-page">
    <section class="sa-section">
      <div class="sa-container">
        <!-- Page hero -->
        <div class="pageHero">
          <div>
            <div class="sa-badge">
              Solutions • Delivery • Offline-first systems
            </div>

            <h1 class="sa-title" style="font-size: clamp(26px, 3.2vw, 44px)">
              Services & Solutions
            </h1>

            <p class="sa-subtitle" style="max-width: 860px">
              Softadastra Business delivers reliable systems: websites, mobile
              apps, online platforms, and offline-first software that continues
              to work even under unstable connectivity. We don’t just “build
              apps” — we ship maintainable, scalable solutions.
            </p>

            <div class="actions">
              <a
                class="sa-btn sa-btn--accent"
                :href="site.buildWhatsAppLink('general')"
                target="_blank"
                rel="noopener"
              >
                WhatsApp inquiry →
              </a>
              <a class="sa-btn" :href="emailHref">Email inquiry</a>
            </div>

            <div class="meta">
              <div class="metaItem">
                <span class="k">Best for</span>
                <span class="v"
                  >Enterprises • Institutions • SMEs • Startups</span
                >
              </div>
              <div class="metaItem">
                <span class="k">Approach</span>
                <span class="v"
                  >Offline-first + performance + clean architecture</span
                >
              </div>
            </div>
          </div>

          <!-- right card -->
          <div class="sa-card">
            <div class="sa-card__inner rightCard">
              <div class="rightTitle">What we can deliver</div>
              <ul class="rightList">
                <li>Business websites & landing pages</li>
                <li>Mobile apps (Android-first, iOS optional)</li>
                <li>Online platforms (SaaS, admin systems)</li>
                <li>Offline-first software with sync (WhatsApp-like)</li>
                <li>Enterprise deployment (on-prem / private cloud)</li>
                <li>Integration, migration, training & support</li>
              </ul>

              <router-link class="rightLink" to="/contact">
                Contact →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offers grid from site.js -->
    <section class="sa-section" id="offers">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Core services
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          Choose a service category below. Each entry point is optimized for
          fast scoping and clear delivery.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article v-for="o in site.offers" :key="o.key" class="sa-card">
            <div class="sa-card__inner">
              <div class="offerTop">
                <div class="offerTitle">{{ o.title }}</div>
                <div class="offerSub">{{ o.subtitle }}</div>
              </div>

              <ul class="offerBullets">
                <li v-for="(b, i) in o.bullets" :key="i">{{ b }}</li>
              </ul>

              <div class="offerLinks">
                <a
                  class="offerLink offerLink--accent"
                  :href="site.buildWhatsAppLink(o.whatsappIntent || 'general')"
                  target="_blank"
                  rel="noopener"
                >
                  Ask on WhatsApp →
                </a>
                <router-link class="offerLink" to="/contact"
                  >Email / details →</router-link
                >
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="sa-section" id="process">
      <div class="sa-container">
        <div class="processHead">
          <div>
            <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
              How it works
            </h2>
            <p class="sa-subtitle" style="max-width: 860px">
              A predictable process. Clear scope, clean delivery, and support
              when needed.
            </p>
          </div>
        </div>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">01</div>
              <div class="stepT">Scope</div>
              <div class="stepD">
                We clarify your goal, users, features, timeline, and budget
                range. We propose a minimal, reliable plan (MVP-first).
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">02</div>
              <div class="stepT">Build</div>
              <div class="stepD">
                We implement with professional standards: structure,
                performance, security, and maintainability. Regular updates +
                demos.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">03</div>
              <div class="stepT">Launch & Support</div>
              <div class="stepD">
                Deployment (cloud/on-prem/hybrid), documentation, and optional
                maintenance. For offline-first, we validate sync behavior under
                realistic network conditions.
              </div>
            </div>
          </article>
        </div>

        <div class="processNote">
          <div class="dot" aria-hidden="true"></div>
          <div class="text">
            For enterprise and institutions, we can deliver a deployment plan:
            environments, security, monitoring, and training.
          </div>
        </div>
      </div>
    </section>

    <!-- Packages (non-cheap wording) -->
    <section class="sa-section" id="packages">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Delivery packages
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          These packages help you choose a starting point. Final pricing depends
          on scope and requirements.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article class="sa-card">
            <div class="sa-card__inner pack">
              <div class="packTop">
                <div class="packName">Launch</div>
                <div class="packTag">Fast delivery</div>
              </div>
              <ul class="packList">
                <li>Website / landing page</li>
                <li>WhatsApp conversion optimized</li>
                <li>Performance + basic SEO</li>
                <li>Clean handoff + small docs</li>
              </ul>
              <a
                class="packLink"
                :href="site.buildWhatsAppLink('website')"
                target="_blank"
                rel="noopener"
              >
                Start on WhatsApp →
              </a>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner pack pack--accent">
              <div class="packTop">
                <div class="packName">Platform</div>
                <div class="packTag packTag--accent">Most requested</div>
              </div>
              <ul class="packList">
                <li>Online system (admin + roles)</li>
                <li>API-first architecture</li>
                <li>Security and scalability</li>
                <li>Deployment + optional monitoring</li>
              </ul>
              <a
                class="packLink"
                :href="site.buildWhatsAppLink('online')"
                target="_blank"
                rel="noopener"
              >
                Discuss your platform →
              </a>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner pack">
              <div class="packTop">
                <div class="packName">Offline-first</div>
                <div class="packTag">Sync like WhatsApp</div>
              </div>
              <ul class="packList">
                <li>Works offline by default</li>
                <li>Background sync + retry</li>
                <li>Conflict handling strategy</li>
                <li>Designed for field & unstable networks</li>
              </ul>
              <a
                class="packLink"
                :href="site.buildWhatsAppLink('offline_first')"
                target="_blank"
                rel="noopener"
              >
                Build offline-first →
              </a>
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
              <div class="finalBadge">Ready to start?</div>
              <div class="finalTitle">
                Tell us what you need — we reply fast.
              </div>
              <div class="finalText">
                WhatsApp is best for quick estimates. Email is ideal for
                enterprise requirements and documents.
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
              <router-link class="sa-btn" to="/pricing">Pricing</router-link>
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
  name: "ServicesPage",
  data() {
    return { site };
  },
  computed: {
    emailHref() {
      const to = (this.site.brand?.email || "").trim();
      const subject = encodeURIComponent("Softadastra Business — Inquiry");
      const body = encodeURIComponent(
        "Hi Softadastra Business,\n\nMy name is:\nI’m interested in:\nBudget (approx):\nDeadline:\n\nDetails:\n"
      );
      return to ? `mailto:${to}?subject=${subject}&body=${body}` : "mailto:";
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

.meta {
  margin-top: 16px;
  display: grid;
  gap: 8px;
  color: var(--sa-muted);
  font-size: 13px;
}
.metaItem {
  display: flex;
  gap: 10px;
}
.metaItem .k {
  opacity: 0.7;
  min-width: 78px;
}
.metaItem .v {
  font-weight: 850;
  color: rgba(18, 18, 18, 0.72);
}

.rightCard .rightTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
  margin-bottom: 10px;
}

.rightList {
  margin: 0;
  padding-left: 18px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.6;
}
.rightList li {
  margin: 7px 0;
}

.rightLink {
  display: inline-block;
  margin-top: 12px;
  font-weight: 950;
  opacity: 0.9;
}
.rightLink:hover {
  opacity: 1;
  text-decoration: underline;
}

/* offers */
.offerTop {
  display: grid;
  gap: 6px;
}
.offerTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
}
.offerSub {
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.4;
}

.offerBullets {
  margin: 12px 0 0 0;
  padding-left: 18px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.6;
}
.offerBullets li {
  margin: 7px 0;
}

.offerLinks {
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.offerLink {
  font-weight: 950;
  opacity: 0.9;
}
.offerLink:hover {
  opacity: 1;
  text-decoration: underline;
}
.offerLink--accent {
  color: rgba(18, 18, 18, 0.92);
}

/* process */
.stepN {
  font-weight: 950;
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 8px;
}
.stepT {
  font-weight: 950;
  letter-spacing: 0.2px;
}
.stepD {
  margin-top: 10px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.65;
}

.processNote {
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
.processNote .dot {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.55);
  border: 1px solid rgba(255, 153, 0, 0.22);
}
.processNote .text {
  color: rgba(18, 18, 18, 0.72);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.5;
}

/* packages */
.packTop {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}
.packName {
  font-weight: 950;
  letter-spacing: 0.2px;
}
.packTag {
  font-size: 12px;
  color: var(--sa-muted);
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.03);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.packTag--accent {
  border-color: rgba(255, 153, 0, 0.22);
  background: rgba(255, 153, 0, 0.12);
  color: rgba(18, 18, 18, 0.82);
}

.packList {
  margin: 12px 0 0 0;
  padding-left: 18px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.6;
}
.packList li {
  margin: 7px 0;
}

.packLink {
  display: inline-block;
  margin-top: 14px;
  font-weight: 950;
  opacity: 0.9;
}
.packLink:hover {
  opacity: 1;
  text-decoration: underline;
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
