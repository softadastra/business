<template>
  <main class="sa-page">
    <!-- Hero -->
    <section class="sa-section">
      <div class="sa-container">
        <div class="pageHero">
          <div>
            <div class="sa-badge">Solutions • Delivery • Reliability</div>

            <h1 class="sa-title" style="font-size: clamp(26px, 3.2vw, 44px)">
              Services & Solutions
            </h1>

            <p class="sa-subtitle" style="max-width: 860px">
              We deliver reliable systems: websites, mobile apps, platforms, and
              offline-first software that keeps working under unstable
              connectivity. Clean architecture, predictable delivery.
            </p>

            <div class="actions">
              <router-link class="sa-btn sa-btn--accent" to="/contact">
                Request a quote →
              </router-link>
              <router-link class="sa-btn" to="/pricing">Pricing</router-link>
            </div>

            <div class="meta">
              <div class="metaItem">
                <span class="k">Best for</span>
                <span class="v">Enterprises • Institutions • SMEs</span>
              </div>
              <div class="metaItem">
                <span class="k">Approach</span>
                <span class="v"
                  >Reliability-first • Performance • Maintainable</span
                >
              </div>
            </div>
          </div>

          <!-- right card -->
          <div class="sa-card">
            <div class="sa-card__inner rightCard">
              <div class="rightTitle">What we deliver</div>
              <ul class="rightList">
                <li>Business websites & landing pages</li>
                <li>Mobile apps</li>
                <li>Online platforms (SaaS, admin systems)</li>
                <li>Offline-first software with sync</li>
                <li>Enterprise deployments (on-prem / private cloud)</li>
              </ul>

              <router-link class="rightLink" to="/contact">
                Contact →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offers -->
    <!-- <section class="sa-section" id="offers">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Core services
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          Choose a category below. Each one is an entry point for scoping and
          delivery.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article v-for="o in site.offers" :key="o.key" class="sa-card offer">
            <div class="sa-card__inner">
              <div class="offerTop">
                <div class="offerTitle">{{ o.title }}</div>
                <div class="offerSub">{{ o.subtitle }}</div>
              </div>

              <ul class="offerBullets" v-if="o.bullets?.length">
                <li v-for="(b, i) in o.bullets" :key="i">{{ b }}</li>
              </ul>

              <div class="offerLinks">
                <router-link class="offerLink offerLink--accent" to="/contact">
                  Request this service →
                </router-link>
                <router-link class="offerLink" to="/pricing">
                  Pricing →
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section> -->

    <!-- Process -->
    <section class="sa-section" id="process">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          How it works
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          A predictable flow: scope, build, launch. Clear milestones and clean
          handoff.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">01</div>
              <div class="stepT">Scope</div>
              <div class="stepD">
                We clarify goals, users, features, timeline, and budget range.
                Then we propose a minimal reliable plan (MVP-first).
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">02</div>
              <div class="stepT">Build</div>
              <div class="stepD">
                We implement with structure and standards: performance,
                security, and maintainability. Regular demos.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner step">
              <div class="stepN">03</div>
              <div class="stepT">Launch</div>
              <div class="stepD">
                Deployment (cloud/on-prem/hybrid), documentation, and optional
                maintenance. Offline-first projects include real network tests.
              </div>
            </div>
          </article>
        </div>

        <div class="processNote">
          <div class="dot" aria-hidden="true"></div>
          <div class="text">
            For enterprises and institutions: we can include deployment
            planning, security practices, and training.
          </div>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section class="sa-section" id="packages">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Delivery packages
        </h2>
        <p class="sa-subtitle" style="max-width: 860px">
          Starting points only. Final pricing depends on scope and requirements.
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
                <li>Performance + basic SEO</li>
                <li>Clean handoff</li>
              </ul>
              <router-link class="packLink" to="/contact?tier=starter">
                Request Launch →
              </router-link>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner pack pack--accent">
              <div class="packTop">
                <div class="packName">Platform</div>
                <div class="packTag packTag--accent">Most requested</div>
              </div>
              <ul class="packList">
                <li>Admin + roles</li>
                <li>API-first architecture</li>
                <li>Security + scalability</li>
              </ul>
              <router-link class="packLink" to="/contact?tier=pro">
                Request Platform →
              </router-link>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner pack">
              <div class="packTop">
                <div class="packName">Offline-first</div>
                <div class="packTag">Local + sync</div>
              </div>
              <ul class="packList">
                <li>Works offline by default</li>
                <li>Background sync + retry</li>
                <li>Conflict strategy</li>
              </ul>
              <router-link class="packLink" to="/contact?tier=enterprise">
                Request Offline-first →
              </router-link>
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
              <div class="finalTitle">Share your scope — we reply fast.</div>
              <div class="finalText">
                If you already know your tier, send it with your deadline and
                budget range.
              </div>
            </div>

            <div class="finalActions">
              <router-link class="sa-btn sa-btn--accent" to="/contact">
                Request a quote →
              </router-link>
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

/* right card */
.rightTitle {
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
.offer {
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.offer:hover {
  transform: translateY(-2px);
}
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
  opacity: 0.92;
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
  opacity: 0.92;
}
.packLink:hover {
  opacity: 1;
  text-decoration: underline;
}
.pack--accent {
  box-shadow: 0 16px 28px rgba(255, 153, 0, 0.12);
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
