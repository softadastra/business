<template>
  <footer class="sa-footer">
    <div class="sa-container sa-footer__inner">
      <!-- Brand -->
      <div class="sa-footer__brand">
        <div class="sa-footer__logo" aria-hidden="true">
          <span class="sa-footer__dot"></span>
        </div>

        <div class="sa-footer__brandText">
          <div class="sa-footer__name">{{ site.brand.name }}</div>
          <div class="sa-footer__tagline">
            {{ site.brand.shortDescription }}
          </div>

          <div class="sa-footer__contact">
            <a
              class="sa-footer__contactLink"
              :href="site.buildWhatsAppLink('general')"
              target="_blank"
              rel="noopener"
            >
              💬 WhatsApp
            </a>

            <span class="sep" aria-hidden="true">•</span>

            <a class="sa-footer__contactLink" :href="emailHref"> ✉️ Email </a>
          </div>

          <div class="sa-footer__meta">
            <span class="sa-footer__metaItem">{{ site.brand.location }}</span>
            <span class="sep" aria-hidden="true">•</span>
            <span class="sa-footer__metaItem">{{ hours }}</span>
          </div>
        </div>
      </div>

      <!-- Links -->
      <div class="sa-footer__cols">
        <div class="sa-footer__col">
          <div class="sa-footer__colTitle">Navigate</div>
          <RouterLink class="sa-footer__link" to="/services"
            >Services</RouterLink
          >
          <RouterLink class="sa-footer__link" to="/pricing">Pricing</RouterLink>
          <RouterLink class="sa-footer__link" to="/portfolio"
            >Portfolio</RouterLink
          >
          <RouterLink class="sa-footer__link" to="/about">About</RouterLink>
          <RouterLink class="sa-footer__link" to="/contact">Contact</RouterLink>
        </div>

        <div class="sa-footer__col">
          <div class="sa-footer__colTitle">Business</div>
          <a
            class="sa-footer__link"
            :href="site.buildWhatsAppLink('general')"
            target="_blank"
            rel="noopener"
          >
            Request a quote
          </a>
          <a
            class="sa-footer__link"
            :href="site.buildWhatsAppLink('offline_first')"
            target="_blank"
            rel="noopener"
          >
            Offline-first deployment
          </a>
          <a
            class="sa-footer__link"
            :href="site.buildWhatsAppLink('online')"
            target="_blank"
            rel="noopener"
          >
            Web platform / SaaS
          </a>
          <a
            class="sa-footer__link"
            :href="site.buildWhatsAppLink('mobile')"
            target="_blank"
            rel="noopener"
          >
            Mobile app (APK)
          </a>
        </div>

        <div class="sa-footer__col">
          <div class="sa-footer__colTitle">Open source</div>
          <a
            v-if="site.social.github"
            class="sa-footer__link"
            :href="site.social.github"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            v-if="site.social.linkedin"
            class="sa-footer__link"
            :href="site.social.linkedin"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            v-if="site.social.x"
            class="sa-footer__link"
            :href="site.social.x"
            target="_blank"
            rel="noopener"
          >
            X (Twitter)
          </a>
          <a
            v-if="site.social.facebook"
            class="sa-footer__link"
            :href="site.social.facebook"
            target="_blank"
            rel="noopener"
          >
            Facebook
          </a>

          <div class="sa-footer__tinyNote">
            We build products and systems that work — even when the internet
            doesn’t.
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="sa-footer__bottom">
      <div class="sa-container sa-footer__bottomInner">
        <div class="sa-footer__copyright">
          © {{ year }} {{ site.brand.name }}. All rights reserved.
        </div>

        <div class="sa-footer__bottomLinks">
          <a class="sa-footer__bottomLink" href="#" @click.prevent="scrollTop()"
            >Back to top ↑</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "SiteFooter",
  data() {
    return {
      site,
      year: new Date().getFullYear(),
    };
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
    hours() {
      return this.site.contact?.workingHours || "Mon–Sat, 09:00–20:00 (EAT)";
    },
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.sa-footer {
  margin-top: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.sa-footer__inner {
  padding: 34px 16px 26px 16px;
  display: grid;
  gap: 18px;
}

.sa-footer__brand {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.sa-footer__logo {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 153, 0, 0.95),
    rgba(255, 153, 0, 0.25)
  );
  box-shadow: 0 12px 34px rgba(255, 153, 0, 0.14);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}

.sa-footer__dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgba(11, 11, 13, 0.92);
  box-shadow: 0 0 0 6px rgba(11, 11, 13, 0.18);
}

.sa-footer__brandText {
  display: grid;
  gap: 10px;
}

.sa-footer__name {
  font-weight: 950;
  letter-spacing: 0.2px;
}

.sa-footer__tagline {
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  max-width: 680px;
}

.sa-footer__contact {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.sa-footer__contactLink {
  font-weight: 900;
  opacity: 0.92;
}

.sa-footer__contactLink:hover {
  opacity: 1;
  text-decoration: underline;
}

.sep {
  opacity: 0.45;
}

.sa-footer__meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
}

/* Columns */
.sa-footer__cols {
  display: grid;
  gap: 14px;
}

.sa-footer__col {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 18px;
  padding: 14px;
}

.sa-footer__colTitle {
  font-weight: 950;
  margin-bottom: 10px;
  letter-spacing: 0.2px;
}

.sa-footer__link {
  display: block;
  padding: 8px 10px;
  border-radius: 14px;
  opacity: 0.86;
  transition: background 120ms ease, opacity 120ms ease, transform 120ms ease;
}

.sa-footer__link:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}

.sa-footer__tinyNote {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 12px;
  line-height: 1.5;
}

/* Bottom bar */
.sa-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 0;
}

.sa-footer__bottomInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 16px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
}

.sa-footer__bottomLink {
  opacity: 0.9;
  font-weight: 900;
}

.sa-footer__bottomLink:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Responsive */
@media (min-width: 860px) {
  .sa-footer__inner {
    grid-template-columns: 1.2fr 1.8fr;
    align-items: start;
  }

  .sa-footer__cols {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
