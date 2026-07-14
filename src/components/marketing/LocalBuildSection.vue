<template>
  <section id="local-builds" class="local-build">
    <div class="sb-container">
      <header class="local-build__heading">
        <div>
          <p class="sb-eyebrow">Local-first boundary</p>

          <h2 class="sb-section-title">
            Cloud starts where
            <span>the local build ends.</span>
          </h2>
        </div>

        <p class="sb-section-text">
          Softadastra Cloud does not become the machine that compiles or runs
          the application. Vix.cpp produces the project state locally, and the
          developer decides which operational records are published to the
          workspace.
        </p>
      </header>

      <div
        class="local-build__flow"
        aria-label="Data boundary between the local Vix workflow and Softadastra Cloud"
      >
        <!-- =================================================
             LOCAL ENVIRONMENT
             ================================================= -->
        <article class="boundary-stage boundary-stage--local">
          <header class="boundary-stage__header">
            <span class="boundary-stage__icon" aria-hidden="true">
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
              <span>Developer environment</span>
              <h3>Remains local</h3>
            </div>
          </header>

          <p class="boundary-stage__description">
            The application continues to use the developer's machine, toolchain,
            files, and existing infrastructure.
          </p>

          <ul class="boundary-records">
            <li v-for="item in localRecords" :key="item.title">
              <span aria-hidden="true">
                <svg
                  v-if="item.icon === 'code'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m8 9-4 3 4 3" />
                  <path d="m16 9 4 3-4 3" />
                  <path d="m14 5-4 14" />
                </svg>

                <svg
                  v-else-if="item.icon === 'toolchain'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.2 2.2-3-3Z"
                  />
                </svg>

                <svg
                  v-else-if="item.icon === 'runtime'"
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

                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 19V5" />
                  <path d="M4 12h16" />
                  <path d="M20 5v14" />
                </svg>
              </span>

              <div>
                <strong>{{ item.title }}</strong>
                <small>{{ item.detail }}</small>
              </div>
            </li>
          </ul>

          <footer class="boundary-stage__footer">
            <span class="boundary-status" aria-hidden="true"></span>

            <p>Cloud does not perform these operations.</p>
          </footer>
        </article>

        <!-- =================================================
             EXPLICIT HANDOFF
             ================================================= -->
        <div class="boundary-handoff">
          <div class="boundary-handoff__line" aria-hidden="true">
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

          <div class="boundary-handoff__content">
            <p>Explicit handoff</p>

            <strong>
              Nothing is shared simply because a local build ran.
            </strong>

            <span>
              Records are uploaded or published through supported Vix Cloud
              commands.
            </span>
          </div>

          <div class="boundary-handoff__commands">
            <code>vix build --report</code>
            <code>vix cloud lockfile upload</code>
            <code>vix cloud publish</code>
          </div>
        </div>

        <!-- =================================================
             CLOUD WORKSPACE
             ================================================= -->
        <article class="boundary-stage boundary-stage--cloud">
          <header class="boundary-stage__header">
            <span class="boundary-stage__icon" aria-hidden="true">
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
              <span>Workspace records</span>
              <h3>Organized in Cloud</h3>
            </div>
          </header>

          <p class="boundary-stage__description">
            Cloud preserves selected operational information so authorized
            members can understand the state and history of the project.
          </p>

          <ul class="boundary-records">
            <li v-for="item in cloudRecords" :key="item.title">
              <span aria-hidden="true">
                <svg
                  v-if="item.icon === 'project'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />

                  <path d="M8 4v16" />
                  <path d="M12 9h5" />
                  <path d="M12 13h5" />
                </svg>

                <svg
                  v-else-if="item.icon === 'package'"
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
                  v-else-if="item.icon === 'lockfile'"
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

                <svg
                  v-else
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
                <strong>{{ item.title }}</strong>
                <small>{{ item.detail }}</small>
              </div>
            </li>
          </ul>

          <footer class="boundary-stage__footer">
            <span class="boundary-status" aria-hidden="true"></span>

            <p>Access follows workspace roles and scopes.</p>
          </footer>
        </article>
      </div>

      <!-- ===================================================
           PRODUCT CONTRACT
           =================================================== -->
      <div class="local-build__contract">
        <header>
          <p class="sb-eyebrow">Product boundary</p>

          <h3>
            A shared record around the build, not a hosted replacement for it.
          </h3>
        </header>

        <dl>
          <div v-for="rule in contractRules" :key="rule.label">
            <dt>{{ rule.label }}</dt>
            <dd>{{ rule.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
const localRecords = [
  {
    icon: "code",
    title: "Source code and project files",
    detail: "Remain inside the existing development environment.",
  },
  {
    icon: "toolchain",
    title: "Compiler and toolchain",
    detail: "Use the compiler, SDK, and build tools already installed.",
  },
  {
    icon: "runtime",
    title: "Application execution",
    detail: "Development processes continue running on local infrastructure.",
  },
  {
    icon: "infrastructure",
    title: "Existing infrastructure",
    detail: "Teams keep their current machines, CI, and deployment systems.",
  },
];

const cloudRecords = [
  {
    icon: "project",
    title: "Workspace and project metadata",
    detail: "Project identity, links, members, roles, and access.",
  },
  {
    icon: "package",
    title: "Private package versions",
    detail: "Published package records, archives, checksums, and status.",
  },
  {
    icon: "lockfile",
    title: "Lockfile history",
    detail: "Uploaded dependency state associated with linked projects.",
  },
  {
    icon: "report",
    title: "Build reports",
    detail: "Selected diagnostics and context produced by local builds.",
  },
];

const contractRules = [
  {
    label: "Compilation",
    value: "Local",
  },
  {
    label: "Execution",
    value: "Local",
  },
  {
    label: "Record upload",
    value: "Explicit",
  },
  {
    label: "Workspace access",
    value: "Controlled",
  },
];
</script>

<style scoped>
.local-build {
  padding: clamp(82px, 9vw, 128px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.local-build__heading {
  display: grid;
  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(340px, 0.7fr);
  gap: clamp(42px, 7vw, 88px);
  align-items: end;
}

.local-build__heading > div {
  display: grid;
  min-width: 0;
}

.local-build__heading h2 {
  max-width: 760px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.5rem, 4.8vw, 4.7rem);
  font-weight: 680;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.local-build__heading h2 span {
  display: block;
  margin-top: 5px;
  color: var(--sb-text-soft);
}

.local-build__heading .sb-section-text {
  max-width: 610px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

/* ========================================================
   BOUNDARY FLOW
   ======================================================== */

.local-build__flow {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(190px, 0.42fr)
    minmax(0, 1fr);
  gap: 18px;
  align-items: stretch;
  margin-top: 48px;
}

.boundary-stage {
  display: grid;
  min-width: 0;
  grid-template-rows: auto auto 1fr auto;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.boundary-stage--cloud {
  border-color: var(--sb-primary-border);
}

.boundary-stage__header {
  display: grid;
  min-height: 72px;
  grid-template-columns: 41px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.boundary-stage__icon {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 9px;
  color: var(--sb-text-muted);
}

.boundary-stage--cloud .boundary-stage__icon {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.boundary-stage__icon svg {
  width: 18px;
  height: 18px;
}

.boundary-stage__header > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.boundary-stage__header span {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
}

.boundary-stage__header h3 {
  color: var(--sb-text);
  font-size: 0.94rem;
  font-weight: 650;
}

.boundary-stage__description {
  min-height: 92px;
  padding: 18px 17px 0;
  color: var(--sb-text-soft);
  font-size: 0.82rem;
  line-height: 1.65;
}

.boundary-records {
  display: grid;
  align-content: start;
  gap: 7px;
  margin: 18px 0 20px;
  padding: 0 12px;
  list-style: none;
}

.boundary-records li {
  display: grid;
  min-width: 0;
  grid-template-columns: 35px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
}

.boundary-records li > span {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: var(--sb-text-muted);
}

.boundary-stage--cloud .boundary-records li > span {
  color: var(--sb-primary-hover);
}

.boundary-records svg {
  width: 17px;
  height: 17px;
}

.boundary-records li > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.boundary-records strong {
  color: var(--sb-text);
  font-size: 0.77rem;
  font-weight: 630;
  line-height: 1.4;
}

.boundary-records small {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.45;
}

.boundary-stage__footer {
  display: flex;
  min-height: 52px;
  align-items: center;
  gap: 9px;
  padding: 10px 15px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.boundary-stage__footer p {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  line-height: 1.45;
}

.boundary-status {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

/* ========================================================
   EXPLICIT HANDOFF
   ======================================================== */

.boundary-handoff {
  display: grid;
  min-width: 0;
  align-content: center;
  gap: 18px;
}

.boundary-handoff__line {
  position: relative;
  display: grid;
  width: 100%;
  height: 30px;
  place-items: center;
  color: var(--sb-primary-hover);
}

.boundary-handoff__line > span {
  position: absolute;
  right: 7px;
  left: 7px;
  height: 1px;
  background: var(--sb-primary-border);
}

.boundary-handoff__line svg {
  position: relative;
  width: 25px;
  height: 25px;
  padding: 4px;
  background: var(--sb-bg);
}

.boundary-handoff__content {
  display: grid;
  gap: 7px;
  padding: 14px;
  border-left: 2px solid var(--sb-primary-hover);
  background: var(--sb-bg-soft);
}

.boundary-handoff__content > p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.boundary-handoff__content strong {
  color: var(--sb-text);
  font-size: 0.78rem;
  font-weight: 640;
  line-height: 1.45;
}

.boundary-handoff__content span {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.5;
}

.boundary-handoff__commands {
  display: grid;
  gap: 6px;
}

.boundary-handoff__commands code {
  display: block;
  overflow-x: auto;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-sm);
  background: #111417;
  color: #e6e9ec;
  padding: 8px 9px;
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  line-height: 1.4;
  white-space: nowrap;
}

/* ========================================================
   PRODUCT CONTRACT
   ======================================================== */

.local-build__contract {
  display: grid;
  grid-template-columns:
    minmax(260px, 0.65fr)
    minmax(0, 1.35fr);
  align-items: center;
  gap: clamp(34px, 6vw, 72px);
  margin-top: 40px;
  padding: 25px 0;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.local-build__contract header {
  display: grid;
  gap: 8px;
}

.local-build__contract h3 {
  max-width: 480px;
  color: var(--sb-text);
  font-size: 1.15rem;
  font-weight: 650;
  line-height: 1.45;
  letter-spacing: -0.02em;
}

.local-build__contract dl {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
}

.local-build__contract dl > div {
  display: grid;
  gap: 5px;
  padding: 10px 16px;
  border-right: 1px solid var(--sb-border);
}

.local-build__contract dl > div:last-child {
  border-right: 0;
}

.local-build__contract dt {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.local-build__contract dd {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 640;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1040px) {
  .local-build__flow {
    grid-template-columns: 1fr;
    max-width: 800px;
  }

  .boundary-handoff {
    grid-template-columns:
      minmax(0, 0.7fr)
      minmax(280px, 1.3fr);
    align-items: center;
  }

  .boundary-handoff__line {
    grid-column: 1 / -1;
    max-width: 180px;
    justify-self: center;
    transform: rotate(90deg);
  }

  .boundary-handoff__commands {
    align-self: stretch;
  }
}

@media (max-width: 860px) {
  .local-build__heading {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .local-build__heading .sb-section-text {
    max-width: 720px;
  }

  .local-build__contract {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .local-build {
    padding: 64px 0;
  }

  .local-build__heading h2 {
    font-size: clamp(2.3rem, 11vw, 3.5rem);
  }

  .boundary-handoff {
    grid-template-columns: 1fr;
  }

  .boundary-handoff__line {
    grid-column: auto;
  }

  .local-build__contract dl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .local-build__contract dl > div {
    border-bottom: 1px solid var(--sb-border);
  }

  .local-build__contract dl > div:nth-child(2) {
    border-right: 0;
  }

  .local-build__contract dl > div:nth-last-child(-n + 2) {
    border-bottom: 0;
  }
}

@media (max-width: 460px) {
  .boundary-stage__description {
    min-height: 0;
  }

  .local-build__contract dl {
    grid-template-columns: 1fr;
  }

  .local-build__contract dl > div {
    padding: 11px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .local-build__contract dl > div:nth-child(2) {
    border-right: 0;
  }

  .local-build__contract dl > div:nth-last-child(-n + 2) {
    border-bottom: 1px solid var(--sb-border);
  }

  .local-build__contract dl > div:last-child {
    border-bottom: 0;
  }
}
</style>
