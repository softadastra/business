<template>
  <div class="contact-page sb-marketing-page">
    <section class="contact-page__hero sb-marketing-section">
      <div class="contact-page__inner sb-container">
        <div class="contact-page__content">
          <BaseBadge variant="primary"> Contact </BaseBadge>

          <h1>Get in touch about Converdict.</h1>

          <p>
            Converdict is currently in development. Use this page to register
            interest, ask about the product direction, or discuss reliability
            verification for distributed systems.
          </p>

          <div class="contact-page__notes">
            <BaseAlert title="Product status" variant="info">
              The dashboard, reports, agents, and billing are not public yet.
              Softadastra Business is currently focused on presenting the
              product and collecting serious early interest.
            </BaseAlert>
          </div>
        </div>

        <BaseCard class="contact-page__card" padding="lg">
          <h2>Contact Softadastra</h2>

          <p>
            For now, contact is handled manually while Converdict is being
            built.
          </p>

          <div class="contact-page__methods">
            <a href="mailto:adastrablockchain@gmail.com">
              adastrablockchain@gmail.com
            </a>

            <a href="https://softadastra.com" target="_blank" rel="noreferrer">
              softadastra.com
            </a>
          </div>

          <div class="contact-page__divider"></div>

          <h3>Good topics to mention</h3>

          <ul>
            <li>Your system type</li>
            <li>The failure modes you care about</li>
            <li>Whether you need CLI, dashboard, reports, or agent support</li>
            <li>Your expected reliability verification workflow</li>
          </ul>
        </BaseCard>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import BaseAlert from "../../components/ui/BaseAlert.vue";
import BaseBadge from "../../components/ui/BaseBadge.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import CtaSection from "../../components/marketing/CtaSection.vue";
</script>

<style scoped>
.contact-page__hero {
  padding-top: 104px;
}

.contact-page__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 0.75fr);
  gap: 56px;
  align-items: start;
}

.contact-page__content {
  display: grid;
  justify-items: start;
}

.contact-page__content h1 {
  max-width: 820px;
  margin: 20px 0 0;
  color: var(--sb-text);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 860;
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.contact-page__content > p {
  max-width: 720px;
  margin-top: 22px;
  color: var(--sb-text-soft);
  font-size: 1.05rem;
  line-height: 1.75;
}

.contact-page__notes {
  width: 100%;
  max-width: 720px;
  margin-top: 28px;
}

.contact-page__card h2 {
  margin: 0;
  color: var(--sb-text);
  font-size: 1.45rem;
  font-weight: 780;
  letter-spacing: -0.035em;
}

.contact-page__card > p {
  margin-top: 12px;
  color: var(--sb-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.contact-page__methods {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.contact-page__methods a {
  display: block;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--sb-primary);
  font-size: 0.95rem;
  font-weight: 720;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-page__methods a:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
}

.contact-page__divider {
  height: 1px;
  margin: 28px 0;
  background: var(--sb-border);
}

.contact-page__card h3 {
  margin: 0 0 14px;
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 760;
  letter-spacing: -0.02em;
}

.contact-page__card ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-page__card li {
  display: flex;
  gap: 10px;
  color: var(--sb-text-muted);
  font-size: 0.93rem;
  line-height: 1.55;
}

.contact-page__card li::before {
  content: "";
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--sb-primary);
}

@media (max-width: 920px) {
  .contact-page__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
