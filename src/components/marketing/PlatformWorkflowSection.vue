<template>
  <section id="workflow" class="platform-section">
    <div class="sb-container">
      <header class="platform-section__heading">
        <p class="sb-eyebrow">One workflow, clear ownership</p>

        <h2 class="sb-section-title">
          Vix.cpp runs the project locally.
          <span>Softadastra Cloud organizes what the team shares.</span>
        </h2>

        <p class="sb-section-text">
          The products are connected, but they do not compete for the same
          responsibilities. The local toolchain remains the source of execution,
          while Cloud keeps selected operational records available to the
          workspace.
        </p>
      </header>

      <div
        class="workflow-map"
        aria-label="Relationship between Vix.cpp and Softadastra Cloud"
      >
        <!-- =================================================
             LOCAL WORKFLOW
             ================================================= -->
        <article class="workflow-product workflow-product--local">
          <header class="workflow-product__header">
            <span class="workflow-product__mark" aria-hidden="true"> V </span>

            <div>
              <span>Local foundation</span>
              <strong>Runs on the developer machine</strong>
            </div>
          </header>

          <div class="workflow-product__body">
            <p class="workflow-product__eyebrow">Development and execution</p>

            <h3>Vix.cpp</h3>

            <p class="workflow-product__description">
              Creates, builds, runs, tests, and diagnoses modern C++
              applications without moving the development environment into a
              remote platform.
            </p>

            <ul class="local-capabilities">
              <li>
                <span aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 17 10 11 4 5" />
                    <path d="M12 19h8" />
                  </svg>
                </span>

                <div>
                  <strong>Application workflow</strong>
                  <small>Create, build, run, and develop locally.</small>
                </div>
              </li>

              <li>
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
                  <strong>Local diagnostics</strong>
                  <small>Warnings, errors, targets, and build results.</small>
                </div>
              </li>

              <li>
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
                    <path d="M9 13h6" />
                    <path d="M9 17h4" />
                  </svg>
                </span>

                <div>
                  <strong>Project state</strong>
                  <small>Manifests, packages, and lockfile information.</small>
                </div>
              </li>
            </ul>
          </div>

          <footer class="workflow-product__footer">
            <span class="status-indicator" aria-hidden="true"></span>

            <p>Source code and compilation stay local.</p>
          </footer>
        </article>

        <!-- =================================================
             HANDOFF
             ================================================= -->
        <div class="workflow-handoff">
          <p class="workflow-handoff__label">Selected project records</p>

          <div class="workflow-handoff__direction" aria-hidden="true">
            <span></span>

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

          <ul class="handoff-records">
            <li v-for="(record, index) in sharedRecords" :key="record.title">
              <span>
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <div>
                <strong>{{ record.title }}</strong>
                <small>{{ record.detail }}</small>
              </div>
            </li>
          </ul>
        </div>

        <!-- =================================================
             CLOUD WORKSPACE
             ================================================= -->
        <article class="workflow-product workflow-product--cloud">
          <header class="workflow-product__header">
            <span class="workflow-product__mark" aria-hidden="true"> S </span>

            <div>
              <span>Team operations</span>
              <strong>Available to the workspace</strong>
            </div>
          </header>

          <div class="workflow-product__body">
            <p class="workflow-product__eyebrow">Shared project context</p>

            <h3>Softadastra Cloud</h3>

            <p class="workflow-product__description">
              Keeps the operational history around Vix projects organized
              without becoming the environment where the application is built or
              executed.
            </p>

            <div class="cloud-capabilities">
              <article v-for="area in cloudAreas" :key="area.title">
                <span class="cloud-capabilities__icon" aria-hidden="true">
                  <svg
                    v-if="area.icon === 'workspace'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M8 4v16" />
                  </svg>

                  <svg
                    v-else-if="area.icon === 'package'"
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

                  <svg
                    v-else-if="area.icon === 'history'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 12a9 9 0 1 0 3-6.7" />
                    <path d="M3 4v5h5" />
                    <path d="M12 7v5l3 2" />
                  </svg>

                  <svg
                    v-else
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
                  <strong>{{ area.title }}</strong>
                  <small>{{ area.detail }}</small>
                </div>
              </article>
            </div>
          </div>

          <footer class="workflow-product__footer">
            <span class="status-indicator" aria-hidden="true"></span>

            <p>Only authorized workspace members receive access.</p>
          </footer>
        </article>
      </div>

      <!-- ===================================================
           OPTIONAL RIX LAYER
           =================================================== -->
      <aside class="rix-layer">
        <div class="rix-layer__identity">
          <span class="rix-layer__mark" aria-hidden="true"> R </span>

          <div>
            <p>Optional application layer</p>
            <h3>Rix</h3>
          </div>
        </div>

        <p class="rix-layer__description">
          Rix provides reusable userland libraries for Vix applications. Teams
          can use it when useful, publish packages through their existing
          workflow, and organize private versions in Softadastra Cloud.
        </p>

        <ul class="rix-layer__capabilities">
          <li>Reusable C++ libraries</li>
          <li>Vix-compatible packages</li>
          <li>Optional by design</li>
        </ul>
      </aside>

      <!-- ===================================================
           BOUNDARIES
           =================================================== -->
      <div class="workflow-boundaries">
        <article>
          <span>01</span>

          <div>
            <strong>Cloud does not compile the application.</strong>

            <p>
              Vix remains responsible for the local build and runtime workflow.
            </p>
          </div>
        </article>

        <article>
          <span>02</span>

          <div>
            <strong>Not every local file becomes cloud data.</strong>

            <p>Only selected project records are uploaded to the workspace.</p>
          </div>
        </article>

        <article>
          <span>03</span>

          <div>
            <strong>Rix is useful, but not required.</strong>

            <p>Vix projects can use Cloud whether or not they depend on Rix.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const sharedRecords = [
  {
    title: "Project metadata",
    detail: "Workspace and project identity",
  },
  {
    title: "Package versions",
    detail: "Published registry records",
  },
  {
    title: "Lockfile state",
    detail: "Dependency history",
  },
  {
    title: "Build reports",
    detail: "Local build diagnostics",
  },
];

const cloudAreas = [
  {
    icon: "workspace",
    title: "Workspaces and projects",
    detail: "Shared project organization",
  },
  {
    icon: "package",
    title: "Private registry",
    detail: "Packages and version history",
  },
  {
    icon: "history",
    title: "Operational history",
    detail: "Lockfiles and build reports",
  },
  {
    icon: "members",
    title: "Members and access",
    detail: "Roles, permissions, and tokens",
  },
];
</script>

<style scoped>
.platform-section {
  padding: clamp(80px, 9vw, 124px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.platform-section__heading {
  display: grid;
  max-width: 860px;
  gap: 10px;
}

.platform-section__heading h2 {
  color: var(--sb-text);
  font-size: clamp(2.4rem, 4.8vw, 4.6rem);
  font-weight: 680;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.platform-section__heading h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-soft);
}

.platform-section__heading .sb-section-text {
  max-width: 730px;
  margin-top: 8px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

/* ========================================================
   WORKFLOW MAP
   ======================================================== */

.workflow-map {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(170px, 0.35fr)
    minmax(0, 1.05fr);
  gap: 18px;
  align-items: stretch;
  margin-top: 46px;
}

.workflow-product {
  display: grid;
  min-width: 0;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.workflow-product--cloud {
  border-color: var(--sb-primary-border);
}

.workflow-product__header {
  display: grid;
  min-height: 67px;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 11px 14px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.workflow-product__mark,
.rix-layer__mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 9px;
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.82rem;
  font-weight: 760;
}

.workflow-product--cloud .workflow-product__mark {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.workflow-product__header > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.workflow-product__header span {
  color: var(--sb-text-muted);
  font-size: 0.69rem;
}

.workflow-product__header strong {
  overflow: hidden;
  color: var(--sb-text);
  font-size: 0.79rem;
  font-weight: 620;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workflow-product__body {
  display: grid;
  min-width: 0;
  align-content: start;
  padding: 23px 20px 21px;
}

.workflow-product__eyebrow {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.workflow-product__body > h3 {
  margin-top: 7px;
  color: var(--sb-text);
  font-size: 1.8rem;
  font-weight: 680;
  letter-spacing: -0.035em;
}

.workflow-product__description {
  margin-top: 11px;
  color: var(--sb-text-soft);
  font-size: 0.86rem;
  line-height: 1.65;
}

.workflow-product__footer {
  display: flex;
  min-height: 51px;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.workflow-product__footer p {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.45;
}

.status-indicator {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

/* ========================================================
   LOCAL CAPABILITIES
   ======================================================== */

.local-capabilities {
  display: grid;
  gap: 8px;
  margin: 21px 0 0;
  padding: 0;
  list-style: none;
}

.local-capabilities li {
  display: grid;
  min-width: 0;
  grid-template-columns: 33px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
}

.local-capabilities li > span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  color: var(--sb-text-muted);
}

.local-capabilities svg {
  width: 17px;
  height: 17px;
}

.local-capabilities li > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.local-capabilities strong {
  color: var(--sb-text);
  font-size: 0.77rem;
  font-weight: 620;
}

.local-capabilities small {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
  line-height: 1.4;
}

/* ========================================================
   HANDOFF
   ======================================================== */

.workflow-handoff {
  display: grid;
  min-width: 0;
  align-content: center;
  justify-items: center;
  gap: 13px;
}

.workflow-handoff__label {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
}

.workflow-handoff__direction {
  position: relative;
  display: grid;
  width: 100%;
  height: 30px;
  place-items: center;
  color: var(--sb-primary-hover);
}

.workflow-handoff__direction > span {
  position: absolute;
  right: 7px;
  left: 7px;
  height: 1px;
  background: var(--sb-primary-border);
}

.workflow-handoff__direction svg {
  position: relative;
  width: 25px;
  height: 25px;
  padding: 4px;
  background: var(--sb-bg);
}

.handoff-records {
  display: grid;
  width: 100%;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.handoff-records li {
  display: grid;
  min-width: 0;
  grid-template-columns: 27px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.handoff-records li > span {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.62rem;
  font-weight: 750;
}

.handoff-records li > div {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.handoff-records strong {
  color: var(--sb-text);
  font-size: 0.68rem;
  font-weight: 620;
}

.handoff-records small {
  color: var(--sb-text-muted);
  font-size: 0.61rem;
  line-height: 1.35;
}

/* ========================================================
   CLOUD CAPABILITIES
   ======================================================== */

.cloud-capabilities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 21px;
}

.cloud-capabilities article {
  display: grid;
  min-width: 0;
  grid-template-columns: 33px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  padding: 10px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
}

.cloud-capabilities__icon {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 8px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.cloud-capabilities__icon svg {
  width: 16px;
  height: 16px;
}

.cloud-capabilities article > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.cloud-capabilities strong {
  color: var(--sb-text);
  font-size: 0.72rem;
  font-weight: 620;
  line-height: 1.35;
}

.cloud-capabilities small {
  color: var(--sb-text-muted);
  font-size: 0.64rem;
  line-height: 1.4;
}

/* ========================================================
   RIX
   ======================================================== */

.rix-layer {
  display: grid;
  grid-template-columns:
    minmax(190px, 0.45fr)
    minmax(0, 1fr)
    auto;
  align-items: center;
  gap: 24px;
  margin-top: 18px;
  padding: 18px 20px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-bg-soft);
}

.rix-layer__identity {
  display: grid;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
}

.rix-layer__identity > div {
  display: grid;
  gap: 3px;
}

.rix-layer__identity p {
  color: var(--sb-text-muted);
  font-size: 0.67rem;
}

.rix-layer__identity h3 {
  color: var(--sb-text);
  font-size: 1.15rem;
  font-weight: 660;
}

.rix-layer__description {
  color: var(--sb-text-soft);
  font-size: 0.78rem;
  line-height: 1.6;
}

.rix-layer__capabilities {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.rix-layer__capabilities li {
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  background: var(--sb-surface);
  color: var(--sb-text-muted);
  padding: 6px 9px;
  font-size: 0.64rem;
  font-weight: 620;
  white-space: nowrap;
}

/* ========================================================
   BOUNDARIES
   ======================================================== */

.workflow-boundaries {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 36px;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.workflow-boundaries article {
  display: grid;
  min-width: 0;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 11px;
  padding: 22px 20px;
  border-right: 1px solid var(--sb-border);
}

.workflow-boundaries article:first-child {
  padding-left: 0;
}

.workflow-boundaries article:last-child {
  border-right: 0;
  padding-right: 0;
}

.workflow-boundaries article > span {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 750;
}

.workflow-boundaries article > div {
  display: grid;
  gap: 6px;
}

.workflow-boundaries strong {
  color: var(--sb-text);
  font-size: 0.8rem;
  font-weight: 630;
  line-height: 1.4;
}

.workflow-boundaries p {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.55;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1040px) {
  .workflow-map {
    grid-template-columns: 1fr;
    max-width: 780px;
  }

  .workflow-handoff {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    justify-items: stretch;
    padding: 6px 18px;
  }

  .workflow-handoff__label {
    text-align: left;
  }

  .workflow-handoff__direction {
    grid-column: 1 / -1;
    max-width: 180px;
    justify-self: center;
    transform: rotate(90deg);
  }

  .handoff-records {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .rix-layer {
    grid-template-columns: minmax(190px, 0.45fr) minmax(0, 1fr);
  }

  .rix-layer__capabilities {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .platform-section {
    padding: 64px 0;
  }

  .platform-section__heading h2 {
    font-size: clamp(2.25rem, 11vw, 3.5rem);
  }

  .cloud-capabilities {
    grid-template-columns: 1fr;
  }

  .workflow-boundaries {
    grid-template-columns: 1fr;
  }

  .workflow-boundaries article,
  .workflow-boundaries article:first-child,
  .workflow-boundaries article:last-child {
    padding: 19px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .workflow-boundaries article:last-child {
    border-bottom: 0;
  }
}

@media (max-width: 560px) {
  .workflow-product__body {
    padding: 20px 15px;
  }

  .handoff-records {
    grid-template-columns: 1fr;
  }

  .rix-layer {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 17px;
  }

  .rix-layer__capabilities {
    grid-column: auto;
  }
}
</style>
