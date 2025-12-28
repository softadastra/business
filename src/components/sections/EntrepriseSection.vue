<template>
  <section id="enterprise" class="sa-section enterpriseWrap">
    <div class="sa-container">
      <div class="head">
        <div>
          <h2 class="sa-title enterpriseTitle">Enterprise & Institutions</h2>
          <p class="sa-subtitle enterpriseSub">
            Deploy offline-first systems across teams and campuses — with
            predictable performance and long-term maintainability.
          </p>
        </div>

        <div class="actions">
          <router-link class="sa-btn sa-btn--primary" to="/contact">
            Request deployment <span class="arrow" aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>

      <div class="sa-grid sa-grid--3 enterpriseGrid">
        <article class="sa-card eCard">
          <div class="sa-card__inner eInner">
            <div class="k">Deployment</div>
            <ul class="list">
              <li>Cloud, on-prem, or hybrid</li>
              <li>Private environments (VPC)</li>
              <li>Security constraints supported</li>
            </ul>
          </div>
        </article>

        <article class="sa-card eCard">
          <div class="sa-card__inner eInner">
            <div class="k">Offline-first architecture</div>
            <ul class="list">
              <li>Local writes + background sync</li>
              <li>Retry & resilience built-in</li>
              <li>Conflict strategies when needed</li>
            </ul>
          </div>
        </article>

        <article class="sa-card eCard">
          <div class="sa-card__inner eInner">
            <div class="k">Delivery & support</div>
            <ul class="list">
              <li>Architecture review</li>
              <li>Integration & migration</li>
              <li>Training and maintenance</li>
            </ul>
          </div>
        </article>
      </div>

      <div class="note">
        <div class="dot" aria-hidden="true"></div>
        <div class="noteText">
          For universities, NGOs, enterprises, and public sector teams — built
          for reliability first.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EntrepriseSection",
};
</script>

<style scoped>
.enterpriseWrap {
  background: radial-gradient(
    700px 420px at 85% 0%,
    rgba(255, 153, 0, 0.05),
    transparent 60%
  );
}

.head {
  display: grid;
  gap: 12px;
  align-items: end;
}

.enterpriseTitle {
  font-size: clamp(22px, 2.6vw, 34px);
  margin: 0;
}

.enterpriseSub {
  max-width: 860px;
}

.actions {
  display: flex;
  justify-content: flex-start;
}

.arrow {
  opacity: 0.7;
}

.enterpriseGrid {
  margin-top: 18px;
}

.eCard {
  border-radius: 14px;
}

.eInner {
  display: grid;
  gap: 10px;
}

.k {
  font-weight: 800;
  letter-spacing: -0.1px;
  color: var(--sa-text);
}

.list {
  margin: 0;
  padding-left: 18px;
  color: var(--sa-text-muted);
  font-size: 13px;
  line-height: 1.65;
}

.list li {
  margin: 7px 0;
}

.note {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px 14px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.78);
  border-radius: 14px;
  box-shadow: var(--sa-shadow);
}

.dot {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  background: rgba(255, 153, 0, 0.7);
  box-shadow: 0 0 0 6px rgba(255, 153, 0, 0.1);
  flex: 0 0 auto;
}

.noteText {
  color: rgba(30, 30, 30, 0.72);
  font-weight: 600;
  font-size: 13px;
  line-height: 1.5;
}

@media (min-width: 980px) {
  .head {
    grid-template-columns: 1.2fr 0.8fr;
  }
  .actions {
    justify-content: flex-end;
  }
}
</style>
