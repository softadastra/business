<template>
  <section class="sb-section problem-section">
    <div class="sb-container problem-section__inner">
      <header class="problem-section__heading">
        <p class="sb-eyebrow">The operational gap</p>

        <h2 class="sb-section-title">
          The build may be local and reliable.
          <span>The project context around it often is not.</span>
        </h2>

        <p class="problem-section__description">
          C++ teams can compile, test, and run applications locally while the
          information needed to understand the project remains scattered across
          terminals, repositories, messages, CI systems, and manual records.
        </p>
      </header>

      <div class="problem-section__details">
        <div
          class="fragmentation-panel"
          aria-label="Examples of fragmented C++ project operations"
        >
          <header class="fragmentation-panel__header">
            <div>
              <span
                class="fragmentation-panel__status"
                aria-hidden="true"
              ></span>

              <strong> Project operations </strong>
            </div>

            <small> Spread across unrelated systems </small>
          </header>

          <div class="fragmentation-list">
            <article>
              <span class="fragmentation-list__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z" />
                  <path d="m4 7.5 8 4.5 8-4.5" />
                  <path d="M12 12v9" />
                </svg>
              </span>

              <div>
                <span>Packages and versions</span>

                <strong> Published and tracked separately </strong>
              </div>

              <small> Registry </small>
            </article>

            <article>
              <span class="fragmentation-list__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 2h8l4 4v16H6z" />
                  <path d="M14 2v5h5" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </span>

              <div>
                <span>Dependency state</span>

                <strong> Lockfiles copied without shared history </strong>
              </div>

              <small> Files </small>
            </article>

            <article>
              <span class="fragmentation-list__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 19V9" />
                  <path d="M10 19V5" />
                  <path d="M16 19v-7" />
                  <path d="M22 19V3" />
                </svg>
              </span>

              <div>
                <span>Build diagnostics</span>

                <strong> Results disappear after the local run </strong>
              </div>

              <small> Terminal </small>
            </article>

            <article>
              <span class="fragmentation-list__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20a6 6 0 0 1 12 0" />
                  <circle cx="17" cy="9" r="2" />
                  <path d="M16 15a5 5 0 0 1 5 5" />
                </svg>
              </span>

              <div>
                <span>Members and permissions</span>

                <strong> Access decisions maintained manually </strong>
              </div>

              <small> Messages </small>
            </article>
          </div>
        </div>

        <div class="problem-consequence">
          <span aria-hidden="true"> 01 </span>

          <div>
            <strong> The missing layer is not another build system. </strong>

            <p>
              It is a shared operational record around the existing local
              workflow: which package was published, which lockfile is current,
              what a build produced, and who is allowed to act on the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section {
  padding: clamp(78px, 9vw, 124px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.problem-section__inner {
  display: grid;
  grid-template-columns:
    minmax(0, 0.82fr)
    minmax(480px, 1.18fr);
  gap: clamp(52px, 8vw, 104px);
  align-items: start;
}

.problem-section__heading {
  display: grid;
  min-width: 0;
  align-content: start;
}

.problem-section__heading h2 {
  max-width: 660px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.35rem, 4.2vw, 4.2rem);
  font-weight: 680;
  line-height: 1.01;
  letter-spacing: -0.048em;
}

.problem-section__heading h2 span {
  display: block;
  margin-top: 5px;
  color: var(--sb-text-soft);
}

.problem-section__description {
  max-width: 620px;
  margin-top: 23px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.problem-section__details {
  display: grid;
  min-width: 0;
  gap: 18px;
}

/* ========================================================
   FRAGMENTATION PANEL
   ======================================================== */

.fragmentation-panel {
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.fragmentation-panel__header {
  display: flex;
  min-height: 56px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 17px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.fragmentation-panel__header > div {
  display: flex;
  align-items: center;
  gap: 9px;
}

.fragmentation-panel__status {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sb-text-muted);
}

.fragmentation-panel__header strong {
  color: var(--sb-text);
  font-size: 0.82rem;
  font-weight: 650;
}

.fragmentation-panel__header small {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  text-align: right;
}

.fragmentation-list {
  display: grid;
}

.fragmentation-list article {
  display: grid;
  min-width: 0;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  min-height: 78px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--sb-border);
}

.fragmentation-list article:last-child {
  border-bottom: 0;
}

.fragmentation-list__icon {
  display: grid;
  width: 37px;
  height: 37px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 9px;
  color: var(--sb-text-muted);
}

.fragmentation-list__icon svg {
  width: 17px;
  height: 17px;
}

.fragmentation-list article > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.fragmentation-list article div > span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fragmentation-list article strong {
  overflow-wrap: anywhere;
  color: var(--sb-text);
  font-size: 0.82rem;
  font-weight: 620;
  line-height: 1.4;
}

.fragmentation-list article > small {
  min-width: 68px;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 5px 8px;
  font-family: var(--sb-font-mono);
  font-size: 0.64rem;
  text-align: center;
}

/* ========================================================
   CONSEQUENCE
   ======================================================== */

.problem-consequence {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 15px;
  padding: 19px 20px;
  border-left: 2px solid var(--sb-cloud);
  background: var(--sb-surface);
}

.problem-consequence > span {
  color: var(--sb-cloud);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 750;
}

.problem-consequence > div {
  display: grid;
  gap: 7px;
}

.problem-consequence strong {
  color: var(--sb-text);
  font-size: 0.9rem;
  font-weight: 650;
  line-height: 1.45;
}

.problem-consequence p {
  color: var(--sb-text-soft);
  font-size: 0.82rem;
  line-height: 1.65;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 960px) {
  .problem-section__inner {
    grid-template-columns: 1fr;
  }

  .problem-section__heading {
    max-width: 760px;
  }

  .problem-section__details {
    max-width: 760px;
  }
}

@media (max-width: 620px) {
  .problem-section {
    padding: 62px 0;
  }

  .problem-section__heading h2 {
    font-size: clamp(2.2rem, 11vw, 3.3rem);
  }

  .fragmentation-panel__header {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-block: 13px;
  }

  .fragmentation-panel__header small {
    text-align: left;
  }

  .fragmentation-list article {
    grid-template-columns: 38px minmax(0, 1fr);
  }

  .fragmentation-list article > small {
    grid-column: 2;
    width: fit-content;
    min-width: 0;
  }
}

@media (max-width: 420px) {
  .fragmentation-list article {
    padding-inline: 13px;
  }

  .problem-consequence {
    grid-template-columns: 1fr;
  }
}
</style>
