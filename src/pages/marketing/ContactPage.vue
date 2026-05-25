<template>
  <div class="contact-page">
    <section class="contact-page__hero">
      <div class="contact-page__inner">
        <div class="contact-page__content">
          <p class="contact-page__eyebrow">Contact</p>

          <h1>Talk to Softadastra about Converdict.</h1>

          <p>
            Converdict is in development. Reach out if you want early access,
            want to discuss reliability verification, or want to test how your
            system behaves under failures.
          </p>

          <div class="contact-page__notice">
            <span>Product status</span>

            <p>
              The public dashboard, reports, agents, and billing are not open
              yet. Softadastra is currently collecting serious early interest.
            </p>
          </div>
        </div>

        <aside class="contact-page__card">
          <div class="contact-page__card-head">
            <span>Manual contact</span>
            <h2>Contact Softadastra</h2>
            <p>
              Send a short message with your system type and the failure modes
              you want to verify.
            </p>
          </div>

          <div class="contact-page__methods">
            <a href="mailto:softadastra@gmail.com">
              <span>Email</span>
              <strong>softadastra@gmail.com</strong>
            </a>

            <a href="https://softadastra.com" target="_blank" rel="noreferrer">
              <span>Website</span>
              <strong>softadastra.com</strong>
            </a>
          </div>

          <div class="contact-page__divider"></div>

          <div class="contact-page__topics">
            <h3>Good topics to mention</h3>

            <ul>
              <li>Your system type</li>
              <li>The failure modes you care about</li>
              <li>Your current retry or recovery workflow</li>
              <li>Whether you need CLI, dashboard, reports, or agents</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import CtaSection from "../../components/marketing/CtaSection.vue";
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: var(--sb-bg);
  color: var(--sb-text);
}

.contact-page__hero {
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.contact-page__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 460px);
  gap: clamp(40px, 5vw, 72px);
  align-items: start;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
  padding: 104px 0 96px;
}

.contact-page__content {
  display: grid;
  justify-items: start;
  max-width: 840px;
}

.contact-page__eyebrow {
  margin: 0 0 16px;
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-page__content h1 {
  max-width: 860px;
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2.6rem, 5.4vw, 5.2rem);
  font-weight: 840;
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.contact-page__content > p {
  max-width: 720px;
  margin-top: 24px;
  color: var(--sb-text-soft);
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.75;
}

.contact-page__notice {
  display: grid;
  gap: 8px;
  max-width: 680px;
  margin-top: 30px;
  border: 1px solid var(--sb-border);
  border-radius: 16px;
  padding: 18px 20px;
  background: var(--sb-surface);
}

.contact-page__notice span {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-page__notice p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.contact-page__card {
  border: 1px solid var(--sb-border);
  border-radius: 20px;
  padding: 28px;
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-md);
}

.contact-page__card-head {
  display: grid;
  gap: 10px;
}

.contact-page__card-head span {
  color: var(--sb-primary);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-page__card h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.45rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contact-page__card-head p {
  margin: 0;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.contact-page__methods {
  display: grid;
  gap: 10px;
  margin-top: 26px;
}

.contact-page__methods a {
  display: grid;
  gap: 5px;
  border: 1px solid var(--sb-border);
  border-radius: 14px;
  padding: 15px 16px;
  background: var(--sb-bg-soft);
  text-decoration: none;
  transition:
    border-color var(--sb-transition-base),
    background var(--sb-transition-base),
    transform var(--sb-transition-base);
}

.contact-page__methods a:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-surface-soft);
  transform: translateY(-1px);
}

.contact-page__methods span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-page__methods strong {
  color: var(--sb-primary);
  font-size: 0.96rem;
  font-weight: 760;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.contact-page__divider {
  height: 1px;
  margin: 28px 0;
  background: var(--sb-border);
}

.contact-page__topics h3 {
  margin: 0 0 14px;
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 760;
  letter-spacing: -0.02em;
}

.contact-page__topics ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-page__topics li {
  display: flex;
  gap: 10px;
  color: var(--sb-text-muted);
  font-size: 0.93rem;
  line-height: 1.55;
}

.contact-page__topics li::before {
  content: "";
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--sb-primary);
}

@media (max-width: 980px) {
  .contact-page__inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 76px 0 72px;
  }

  .contact-page__card {
    max-width: 680px;
  }
}

@media (max-width: 620px) {
  .contact-page__inner {
    width: min(100% - 24px, 1440px);
    padding: 56px 0;
  }

  .contact-page__card {
    padding: 24px;
  }
}
</style>
