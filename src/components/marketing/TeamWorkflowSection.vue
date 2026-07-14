<template>
  <section class="sb-section sb-section--soft team-workflow">
    <div class="sb-container team-workflow__inner">
      <div class="team-workflow__copy">
        <p class="sb-eyebrow">Team workflow</p>
        <h2 class="sb-section-title">A practical workflow from Vix.cpp to Cloud.</h2>
        <p class="sb-section-text">
          The CLI integration links local work to shared operational records without moving compilation into the cloud.
        </p>
      </div>

      <div class="team-workflow__steps">
        <article v-for="step in steps" :key="step.title">
          <span>{{ step.number }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </article>
      </div>

      <pre aria-label="Verified Vix Cloud commands"><code>$ vix login
$ vix cloud init
$ vix cloud lockfile upload
$ vix cloud publish
$ vix doctor --cloud</code></pre>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: "01",
    title: "Create and build locally",
    text: "Use Vix.cpp for local project creation, builds, runs, and diagnostics.",
  },
  {
    number: "02",
    title: "Link the project",
    text: "Connect the local project to a Softadastra Cloud workspace and project record.",
  },
  {
    number: "03",
    title: "Publish package records",
    text: "Publish private package metadata and package versions for the workspace.",
  },
  {
    number: "04",
    title: "Upload lockfiles and reports",
    text: "Store vix.lock and locally generated build report records where the team can inspect them.",
  },
  {
    number: "05",
    title: "Manage team access",
    text: "Use members, invitations, roles, permissions, and tokens around the workspace.",
  },
];
</script>

<style scoped>
.team-workflow__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1fr);
  gap: 26px;
  align-items: start;
}

.team-workflow__copy {
  grid-row: span 2;
}

.team-workflow__steps {
  display: grid;
  gap: 10px;
}

.team-workflow__steps article {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.team-workflow__steps span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: var(--sb-radius-sm);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 760;
}

.team-workflow__steps h3 {
  color: var(--sb-text);
  font-size: 0.96rem;
}

.team-workflow__steps p {
  margin-top: 4px;
  color: var(--sb-text-soft);
  font-size: 0.9rem;
  line-height: 1.55;
}

.team-workflow pre {
  overflow-x: auto;
  margin: 0;
  padding: 16px;
  border-radius: var(--sb-radius-md);
  background: #111417;
  color: #f3f5f7;
  font-size: 0.84rem;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .team-workflow__inner {
    grid-template-columns: 1fr;
  }

  .team-workflow__copy {
    grid-row: auto;
  }
}
</style>
