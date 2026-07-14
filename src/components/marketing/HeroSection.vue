<template>
  <section id="product" class="cloud-hero">
    <div class="sb-container cloud-hero__inner">
      <div class="cloud-hero__copy">
        <p class="sb-eyebrow">Softadastra Cloud for Vix.cpp</p>

        <h1>
          Keep C++ development local.
          <span>Keep project operations shared.</span>
        </h1>

        <p class="cloud-hero__description">
          Softadastra Cloud gives C++ teams one place to organize project
          metadata, private packages, lockfiles, build reports, permissions, and
          activity. Vix.cpp continues to build and run everything on the
          developer's machine.
        </p>

        <div class="cloud-hero__actions">
          <BaseButton href="https://cloud.softadastra.com" size="lg">
            Open Softadastra Cloud
          </BaseButton>

          <BaseButton href="#workflow" variant="secondary" size="lg">
            Explore the workflow
          </BaseButton>
        </div>

        <dl class="cloud-hero__principles">
          <div>
            <dt>Execution</dt>
            <dd>Local</dd>
          </div>

          <div>
            <dt>Project state</dt>
            <dd>Shared</dd>
          </div>

          <div>
            <dt>Team access</dt>
            <dd>Controlled</dd>
          </div>
        </dl>
      </div>

      <div
        class="cloud-hero__visual"
        role="img"
        aria-label="A local Vix.cpp workflow sharing project state with a Softadastra Cloud workspace"
      >
        <header class="cloud-hero__visual-header">
          <div>
            <span class="cloud-hero__status-dot" aria-hidden="true"></span>

            <span>Workspace connected</span>
          </div>

          <strong>cpp-platform</strong>
        </header>

        <div class="cloud-hero__workflow">
          <section class="workflow-side workflow-side--local">
            <header class="workflow-side__header">
              <span class="workflow-side__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 22h8" />
                  <path d="M12 18v4" />
                </svg>
              </span>

              <div>
                <span>Developer machine</span>
                <strong>Local workflow</strong>
              </div>
            </header>

            <div class="local-terminal">
              <div class="local-terminal__bar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>

                <small>vix</small>
              </div>

              <div class="local-terminal__body">
                <p>
                  <span>$</span>
                  vix build --report
                </p>

                <p class="terminal-success">
                  <span>✓</span>
                  Build completed locally
                </p>

                <p class="terminal-sync">
                  <span>→</span>
                  Project report ready
                </p>
              </div>
            </div>

            <div class="local-artifacts">
              <article>
                <span aria-hidden="true">
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
                  </svg>
                </span>

                <div>
                  <strong>vix.lock</strong>
                  <small>Dependency state</small>
                </div>
              </article>

              <article>
                <span aria-hidden="true">
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
                  <strong>Build report</strong>
                  <small>Local diagnostics</small>
                </div>
              </article>
            </div>
          </section>

          <div class="workflow-connector" aria-hidden="true">
            <span>Project state</span>

            <div>
              <i></i>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          </div>

          <section class="workflow-side workflow-side--cloud">
            <header class="workflow-side__header">
              <span class="workflow-side__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M17.5 19H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 9a5 5 0 0 1-.5 10Z"
                  />
                </svg>
              </span>

              <div>
                <span>Softadastra Cloud</span>
                <strong>Shared workspace</strong>
              </div>
            </header>

            <div class="cloud-resources">
              <article>
                <span class="cloud-resource__icon" aria-hidden="true">
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
                  <span>Registry</span>
                  <strong>Private packages</strong>
                </div>

                <small>3 versions</small>
              </article>

              <article>
                <span class="cloud-resource__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    <rect x="5" y="10" width="14" height="11" rx="2" />
                  </svg>
                </span>

                <div>
                  <span>Dependencies</span>
                  <strong>Lockfile history</strong>
                </div>

                <small>Current</small>
              </article>

              <article>
                <span class="cloud-resource__icon" aria-hidden="true">
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
                  <span>Diagnostics</span>
                  <strong>Build reports</strong>
                </div>

                <small>Passing</small>
              </article>

              <article>
                <span class="cloud-resource__icon" aria-hidden="true">
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
                  <span>Workspace</span>
                  <strong>Roles and access</strong>
                </div>

                <small>4 members</small>
              </article>
            </div>
          </section>
        </div>

        <footer class="cloud-hero__visual-footer">
          <span> Builds stay on the developer machine. </span>

          <strong> Team context stays organized. </strong>
        </footer>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.cloud-hero {
  --cloud-accent: #f97316;
  --cloud-accent-soft: rgba(249, 115, 22, 0.1);
  --cloud-accent-line: rgba(249, 115, 22, 0.34);
  --cloud-success: #22c55e;
  --cloud-success-soft: rgba(34, 197, 94, 0.1);

  padding: clamp(72px, 8vw, 112px) 0 88px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.cloud-hero__inner {
  display: grid;
  grid-template-columns:
    minmax(0, 0.92fr)
    minmax(500px, 1.08fr);
  align-items: center;
  gap: clamp(48px, 7vw, 92px);
}

.cloud-hero__copy {
  min-width: 0;
}

.cloud-hero h1 {
  max-width: 790px;
  margin-top: 14px;
  color: var(--sb-text);
  font-size: clamp(3.15rem, 5.8vw, 5.4rem);
  font-weight: 690;
  line-height: 0.96;
  letter-spacing: -0.055em;
}

.cloud-hero h1 span {
  display: block;
  color: var(--cloud-accent);
}

.cloud-hero__description {
  max-width: 670px;
  margin-top: 24px;
  color: var(--sb-text-soft);
  font-size: 1.05rem;
  line-height: 1.75;
}

.cloud-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 31px;
}

.cloud-hero__principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 610px;
  margin: 34px 0 0;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.cloud-hero__principles div {
  display: grid;
  min-width: 0;
  gap: 5px;
  padding: 14px 16px;
  border-right: 1px solid var(--sb-border);
}

.cloud-hero__principles div:first-child {
  padding-left: 0;
}

.cloud-hero__principles div:last-child {
  border-right: 0;
}

.cloud-hero__principles dt {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.cloud-hero__principles dd {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 650;
}

/* ========================================================
   PRODUCT VISUAL
   ======================================================== */

.cloud-hero__visual {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.cloud-hero__visual-header {
  display: flex;
  min-height: 53px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 17px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.cloud-hero__visual-header > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cloud-hero__visual-header span {
  color: var(--sb-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
}

.cloud-hero__visual-header strong {
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.75rem;
  font-weight: 650;
}

.cloud-hero__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cloud-success);
}

.cloud-hero__workflow {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    74px
    minmax(0, 1fr);
  align-items: stretch;
  padding: 16px;
}

.workflow-side {
  display: grid;
  min-width: 0;
  align-content: start;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.workflow-side--cloud {
  border-color: var(--cloud-accent-line);
}

.workflow-side__header {
  display: grid;
  grid-template-columns: 37px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  min-height: 64px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.workflow-side__icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 8px;
  color: var(--sb-text-muted);
}

.workflow-side--cloud .workflow-side__icon {
  border-color: var(--cloud-accent-line);
  background: var(--cloud-accent-soft);
  color: var(--cloud-accent);
}

.workflow-side__icon svg {
  width: 17px;
  height: 17px;
}

.workflow-side__header > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.workflow-side__header span {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
}

.workflow-side__header strong {
  overflow: hidden;
  color: var(--sb-text);
  font-size: 0.82rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ========================================================
   LOCAL SIDE
   ======================================================== */

.local-terminal {
  margin: 12px 12px 0;
  overflow: hidden;
  border: 1px solid #242a30;
  border-radius: var(--sb-radius-md);
  background: #111417;
}

.local-terminal__bar {
  display: flex;
  min-height: 30px;
  align-items: center;
  gap: 5px;
  padding: 0 9px;
  border-bottom: 1px solid #242a30;
}

.local-terminal__bar > span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #454c54;
}

.local-terminal__bar small {
  margin-left: auto;
  color: #737b84;
  font-family: var(--sb-font-mono);
  font-size: 0.65rem;
}

.local-terminal__body {
  display: grid;
  gap: 7px;
  padding: 13px 12px;
}

.local-terminal__body p {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: #dfe4e8;
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  line-height: 1.45;
}

.local-terminal__body p > span {
  color: #89929b;
}

.local-terminal__body .terminal-success {
  color: #a7e9b6;
}

.local-terminal__body .terminal-success > span {
  color: var(--cloud-success);
}

.local-terminal__body .terminal-sync {
  color: #fdba74;
}

.local-terminal__body .terminal-sync > span {
  color: var(--cloud-accent);
}

.local-artifacts {
  display: grid;
  gap: 7px;
  padding: 12px;
}

.local-artifacts article {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  padding: 9px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
}

.local-artifacts article > span {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  color: var(--sb-text-muted);
}

.local-artifacts svg {
  width: 15px;
  height: 15px;
}

.local-artifacts article > div {
  display: grid;
  gap: 2px;
}

.local-artifacts strong {
  color: var(--sb-text);
  font-size: 0.75rem;
}

.local-artifacts small {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
}

/* ========================================================
   CONNECTOR
   ======================================================== */

.workflow-connector {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 9px;
}

.workflow-connector > span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.64rem;
  font-weight: 650;
  text-align: center;
  text-transform: uppercase;
}

.workflow-connector > div {
  position: relative;
  display: grid;
  width: 100%;
  height: 28px;
  place-items: center;
  color: var(--cloud-accent);
}

.workflow-connector i {
  position: absolute;
  right: 6px;
  left: 6px;
  height: 1px;
  background: var(--cloud-accent-line);
}

.workflow-connector svg {
  position: relative;
  width: 22px;
  height: 22px;
  padding: 4px;
  background: var(--sb-surface);
}

/* ========================================================
   CLOUD SIDE
   ======================================================== */

.cloud-resources {
  display: grid;
  gap: 7px;
  padding: 12px;
}

.cloud-resources article {
  display: grid;
  min-width: 0;
  grid-template-columns: 31px minmax(0, 1fr) auto;
  align-items: center;
  gap: 9px;
  padding: 9px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.cloud-resource__icon {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--cloud-accent-line);
  border-radius: 7px;
  background: var(--cloud-accent-soft);
  color: var(--cloud-accent);
}

.cloud-resource__icon svg {
  width: 15px;
  height: 15px;
}

.cloud-resources article > div {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.cloud-resources article div > span {
  color: var(--sb-text-muted);
  font-size: 0.65rem;
}

.cloud-resources article strong {
  overflow: hidden;
  color: var(--sb-text);
  font-size: 0.73rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cloud-resources article > small {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.64rem;
  white-space: nowrap;
}

/* ========================================================
   VISUAL FOOTER
   ======================================================== */

.cloud-hero__visual-footer {
  display: flex;
  min-height: 49px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 17px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.cloud-hero__visual-footer span {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
}

.cloud-hero__visual-footer strong {
  color: var(--cloud-accent);
  font-size: 0.72rem;
  font-weight: 650;
  text-align: right;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1080px) {
  .cloud-hero__inner {
    grid-template-columns:
      minmax(0, 0.82fr)
      minmax(460px, 1.18fr);
    gap: 42px;
  }

  .cloud-hero__workflow {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .workflow-connector {
    grid-template-columns: auto minmax(0, 1fr);
    justify-items: stretch;
    padding-inline: 12px;
  }

  .workflow-connector > span {
    text-align: left;
  }

  .workflow-connector > div {
    transform: rotate(90deg);
  }
}

@media (max-width: 900px) {
  .cloud-hero__inner {
    grid-template-columns: 1fr;
  }

  .cloud-hero__copy {
    max-width: 790px;
  }

  .cloud-hero__visual {
    max-width: 760px;
  }

  .cloud-hero__workflow {
    grid-template-columns:
      minmax(0, 1fr)
      74px
      minmax(0, 1fr);
    gap: 0;
  }

  .workflow-connector {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0;
  }

  .workflow-connector > span {
    text-align: center;
  }

  .workflow-connector > div {
    transform: none;
  }
}

@media (max-width: 680px) {
  .cloud-hero {
    padding: 56px 0 62px;
  }

  .cloud-hero h1 {
    font-size: clamp(2.7rem, 13vw, 4rem);
  }

  .cloud-hero__description {
    font-size: 0.98rem;
  }

  .cloud-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .cloud-hero__principles {
    grid-template-columns: 1fr;
  }

  .cloud-hero__principles div,
  .cloud-hero__principles div:first-child {
    padding: 11px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .cloud-hero__principles div:last-child {
    border-bottom: 0;
  }

  .cloud-hero__workflow {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 12px;
  }

  .workflow-connector {
    grid-template-columns: auto minmax(0, 1fr);
    justify-items: stretch;
    padding-inline: 10px;
  }

  .workflow-connector > span {
    text-align: left;
  }

  .workflow-connector > div {
    transform: rotate(90deg);
  }

  .cloud-hero__visual-footer {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-block: 11px;
  }

  .cloud-hero__visual-footer strong {
    text-align: left;
  }
}

@media (max-width: 430px) {
  .cloud-hero__visual-header {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-block: 10px;
  }

  .cloud-resources article {
    grid-template-columns: 31px minmax(0, 1fr);
  }

  .cloud-resources article > small {
    grid-column: 2;
  }
}
</style>
