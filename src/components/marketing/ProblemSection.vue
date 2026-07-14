<template>
  <section class="sb-section sb-section--soft problem-section">
    <div class="sb-container problem-section__inner">
      <div>
        <p class="sb-eyebrow">The problem</p>
        <h2 class="sb-section-title">C++ project operations are often fragmented.</h2>
      </div>
      <p>
        Packages, lockfiles, build diagnostics, project access, and team
        metadata are frequently spread across unrelated tools and manual
        processes. Softadastra Cloud brings these operational records together
        without replacing the local C++ development workflow.
      </p>
    </div>
  </section>
</template>

<style scoped>
.problem-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.problem-section p:not(.sb-eyebrow) {
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

@media (max-width: 820px) {
  .problem-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
