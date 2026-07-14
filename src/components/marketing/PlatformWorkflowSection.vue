<template>
  <section class="sb-section platform-section" id="workflow">
    <div class="sb-container">
      <div class="platform-section__head">
        <p class="sb-eyebrow">Platform workflow</p>
        <h2 class="sb-section-title">Vix.cpp, Rix, and Softadastra Cloud work as one path.</h2>
        <p class="sb-section-text">
          Each product owns a clear layer of the wider Softadastra C++ tooling platform.
        </p>
      </div>

      <div class="platform-section__flow" aria-label="Softadastra Cloud platform relationship">
        <article v-for="item in items" :key="item.title">
          <span>{{ item.step }}</span>
          <strong>{{ item.title }}</strong>
          <h3>{{ item.name }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    step: "01",
    title: "Develop locally",
    name: "Vix.cpp",
    text: "Local application creation, builds, development, runtime workflows, and diagnostics.",
  },
  {
    step: "02",
    title: "Extend the application",
    name: "Rix",
    text: "Reusable application libraries and packages for Vix.cpp applications.",
  },
  {
    step: "03",
    title: "Organize with the team",
    name: "Softadastra Cloud",
    text: "Workspaces, private packages, versions, lockfiles, build reports, permissions, and team organization.",
  },
];
</script>

<style scoped>
.platform-section__head {
  max-width: 760px;
  margin-bottom: 30px;
}

.platform-section__flow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
}

.platform-section__flow article {
  position: relative;
  padding: 22px;
  border-right: 1px solid var(--sb-border);
}

.platform-section__flow article:last-child {
  border-right: 0;
}

.platform-section__flow span {
  display: inline-grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: var(--sb-radius-sm);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 760;
}

.platform-section__flow strong {
  display: block;
  margin-top: 16px;
  color: var(--sb-text-soft);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.platform-section__flow h3 {
  margin-top: 8px;
  color: var(--sb-text);
  font-size: 1.35rem;
  letter-spacing: -0.025em;
}

.platform-section__flow p {
  margin-top: 8px;
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  line-height: 1.6;
}

@media (max-width: 820px) {
  .platform-section__flow {
    grid-template-columns: 1fr;
  }

  .platform-section__flow article {
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .platform-section__flow article:last-child {
    border-bottom: 0;
  }
}
</style>
