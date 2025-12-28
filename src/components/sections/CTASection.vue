<template>
  <section id="cta" class="sa-section">
    <div class="sa-container">
      <div class="wrap sa-card">
        <div class="sa-card__inner inner">
          <div class="left">
            <div class="badge">
              Fast response • Clear process • Professional delivery
            </div>

            <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 36px)">
              Let’s build something reliable.
            </h2>

            <p class="sa-subtitle" style="max-width: 720px">
              Tell us what you’re building — website, mobile app, online
              platform, or offline-first system. We’ll reply quickly and propose
              the simplest path to a solid result.
            </p>

            <div class="meta">
              <div class="metaItem">
                <span class="k">Response</span>
                <span class="v">{{ site.contact.responseTime }}</span>
              </div>
              <div class="metaItem">
                <span class="k">Hours</span>
                <span class="v">{{ site.contact.workingHours }}</span>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="panel">
              <div class="panelTitle">Choose a fast entry point</div>

              <div class="buttons">
                <a
                  class="btn btn--accent"
                  :href="site.buildWhatsAppLink('general')"
                  target="_blank"
                  rel="noopener"
                >
                  💬 Chat on WhatsApp
                </a>

                <a class="btn" :href="emailHref"> ✉️ Email inquiry </a>

                <router-link class="btn btn--ghost" to="/services">
                  View services
                </router-link>
              </div>

              <div class="hint">
                Tip: WhatsApp works best for quick estimates. Email is ideal for
                enterprise requirements and documents.
              </div>
            </div>

            <div class="mini">
              <div class="miniTitle">What to send</div>
              <ul class="miniList">
                <li>What you want to build (website/app/platform)</li>
                <li>Main features + target users</li>
                <li>Timeline and budget range</li>
                <li>Reference links (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import site from "@/config/site.js";

export default {
  name: "CTASection",
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
.wrap {
  overflow: hidden;
  position: relative;
}

.inner {
  display: grid;
  gap: 18px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 153, 0, 0.22);
  background: rgba(255, 153, 0, 0.12);
  font-weight: 950;
  font-size: 12px;
  color: rgba(18, 18, 18, 0.82);
  width: fit-content;
}

.meta {
  margin-top: 14px;
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

.panel {
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(255, 255, 255, 0.75);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 10px 22px rgba(17, 17, 17, 0.06);
}

.panelTitle {
  font-weight: 950;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
}

.buttons {
  display: grid;
  gap: 10px;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.03);
  font-weight: 950;
  transition: transform 120ms ease, background 120ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  background: rgba(18, 18, 18, 0.05);
}

.btn--accent {
  background: rgba(255, 153, 0, 0.14);
  border-color: rgba(255, 153, 0, 0.22);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.9);
}

.hint {
  margin-top: 10px;
  color: rgba(18, 18, 18, 0.62);
  font-size: 12px;
  line-height: 1.5;
}

.mini {
  margin-top: 12px;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  background: rgba(18, 18, 18, 0.02);
}

.miniTitle {
  font-weight: 950;
  margin-bottom: 10px;
}

.miniList {
  margin: 0;
  padding-left: 18px;
  color: rgba(18, 18, 18, 0.7);
  font-size: 13px;
  line-height: 1.6;
}

.miniList li {
  margin: 7px 0;
}

@media (min-width: 980px) {
  .inner {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: stretch;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
