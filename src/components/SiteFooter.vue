<template>
  <footer class="sa-footer">
    <!-- Back to top -->
    <button class="toTop" type="button" @click="scrollTop">Back to top</button>

    <div class="sa-container">
      <!-- Top links (Amazon-like) -->
      <div class="grid">
        <div class="col">
          <div class="h">Get to know us</div>
          <router-link class="l" to="/about">About</router-link>
          <router-link class="l" to="/services">Services</router-link>
          <router-link class="l" to="/pricing">Pricing</router-link>
          <router-link class="l" to="/contact">Contact</router-link>
        </div>

        <div class="col">
          <div class="h">Products</div>
          <a
            class="l"
            href="https://softadastra.com"
            target="_blank"
            rel="noopener"
            >Softadastra Market</a
          >
          <a
            class="l"
            href="https://softadastra.com/map"
            target="_blank"
            rel="noopener"
            >Softadastra Map</a
          >
          <a
            class="l"
            href="https://softadastra.com/blog"
            target="_blank"
            rel="noopener"
            >Blog</a
          >
        </div>

        <div class="col">
          <div class="h">Developer stack</div>
          <a class="l" href="https://vixcpp.com" target="_blank" rel="noopener"
            >Vix.cpp</a
          >
          <a
            class="l"
            href="https://github.com/iviphp/ivi"
            target="_blank"
            rel="noopener"
            >Ivi.php</a
          >
          <a
            class="l"
            href="https://github.com/rixcpp/rix"
            target="_blank"
            rel="noopener"
            >Rix</a
          >
        </div>

        <div class="col">
          <div class="h">Contact</div>
          <a
            class="l"
            :href="site.buildWhatsAppLink('general')"
            target="_blank"
            rel="noopener"
            >WhatsApp</a
          >

          <div class="mini">
            <div class="k">Response time</div>
            <div class="v">Fast on WhatsApp • Detailed on email</div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="bottom">
        <div class="brand">
          <span class="logoDot" aria-hidden="true"></span>
          <div class="bn">
            <div class="b1">Softadastra</div>
            <div class="b2">Business</div>
          </div>
        </div>

        <div class="legal">
          <span>© {{ year }} Softadastra.</span>
          <span class="sep">•</span>
          <span>All rights reserved.</span>
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
      return to ? `mailto:${to}?subject=${subject}` : "mailto:";
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
  margin-top: 42px;
  background: #111827; /* deep slate */
  color: rgba(255, 255, 255, 0.88);
}

/* Back to top (Amazon-like) */
.toTop {
  width: 100%;
  border: 0;
  background: #1f2937;
  color: rgba(255, 255, 255, 0.92);
  padding: 12px 10px;
  font-weight: 900;
  letter-spacing: 0.2px;
  cursor: pointer;
}
.toTop:hover {
  filter: brightness(1.07);
}

.grid {
  padding: 28px 0 18px;
  display: grid;
  gap: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.col {
  display: grid;
  gap: 10px;
}

.h {
  font-weight: 950;
  color: rgba(255, 255, 255, 0.95);
  font-size: 13px;
  letter-spacing: 0.2px;
}

.l {
  display: inline-flex;
  width: fit-content;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 850;
  text-decoration: none;
}
.l:hover {
  color: rgba(255, 255, 255, 0.92);
  text-decoration: underline;
}

.mini {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.mini .k {
  font-weight: 950;
  font-size: 12px;
  opacity: 0.9;
}
.mini .v {
  margin-top: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 850;
  line-height: 1.4;
}

/* Bottom bar */
.bottom {
  padding: 18px 0 26px;
  display: grid;
  gap: 12px;
  align-items: center;
  justify-items: center;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.logoDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--sa-accent);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.15);
}
.bn {
  display: grid;
  line-height: 1.05;
}
.b1 {
  font-weight: 950;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.96);
}
.b2 {
  font-weight: 850;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.legal {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
  font-weight: 850;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.sep {
  opacity: 0.45;
}

@media (min-width: 920px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 28px;
    padding: 34px 0 20px;
  }

  .bottom {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
  }

  .legal {
    justify-content: flex-end;
    justify-self: end;
  }
}
</style>
