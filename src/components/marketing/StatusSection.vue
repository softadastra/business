<template>
  <section class="sb-section sb-section--soft status-section">
    <div class="sb-container status-section__inner">
      <div>
        <p class="sb-eyebrow">Availability</p>
        <h2 class="sb-section-title">Softadastra Cloud is an active product surface.</h2>
        <p class="sb-section-text">
          The current application includes authentication, workspaces, projects, packages, package versions, lockfiles, build reports, members, invitations, roles, access scopes, tokens, notifications, feedback, and administrative review.
        </p>
      </div>
      <div class="status-section__note">
        <strong>Current boundary</strong>
        <p>
          Softadastra Cloud stores and organizes operational records. It does not claim hosted CI, remote compilation, source-code hosting, deployment automation, or production monitoring.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.status-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.64fr);
  gap: clamp(28px, 5vw, 60px);
  align-items: start;
}

.status-section__note {
  padding: 20px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-sm);
}

.status-section__note strong {
  color: var(--sb-text);
  font-size: 1rem;
}

.status-section__note p {
  margin-top: 8px;
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  line-height: 1.6;
}

@media (max-width: 820px) {
  .status-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
