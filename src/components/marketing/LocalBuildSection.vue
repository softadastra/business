<template>
  <section class="sb-section local-build" id="local-builds">
    <div class="sb-container local-build__inner">
      <div>
        <p class="sb-eyebrow">Local builds</p>
        <h2 class="sb-section-title">Your builds stay local.</h2>
        <p class="sb-section-text">
          Vix.cpp continues to build and run the application on the developer's machine or existing infrastructure. Softadastra Cloud receives the operational records the team needs to organize projects, packages, lockfiles, and build reports.
        </p>
      </div>

      <div class="local-build__card">
        <h3>What remains local</h3>
        <ul>
          <li>The C++ toolchain and compilation workflow.</li>
          <li>Application execution during development.</li>
          <li>Existing infrastructure used by the team.</li>
        </ul>
        <h3>What Cloud organizes</h3>
        <ul>
          <li>Workspace and project metadata.</li>
          <li>Private package versions and lockfiles.</li>
          <li>Build report records, permissions, members, and tokens.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.local-build__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.8fr);
  gap: clamp(30px, 5vw, 68px);
  align-items: start;
}

.local-build__card {
  padding: 20px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
}

.local-build__card h3 {
  margin: 0 0 10px;
  color: var(--sb-text);
  font-size: 1rem;
}

.local-build__card h3 + ul {
  margin-bottom: 18px;
}

.local-build__card ul {
  display: grid;
  gap: 8px;
  padding-left: 18px;
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}

@media (max-width: 820px) {
  .local-build__inner {
    grid-template-columns: 1fr;
  }
}
</style>
