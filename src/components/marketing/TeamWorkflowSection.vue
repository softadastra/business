<template>
  <section class="team-workflow">
    <div class="sb-container">
      <header class="team-workflow__heading">
        <div>
          <p class="sb-eyebrow">Team workflow</p>

          <h2 class="sb-section-title">
            Connect the project once.
            <span>Share its operational state when it matters.</span>
          </h2>
        </div>

        <p class="sb-section-text">
          The Vix CLI provides the bridge between local development and the
          shared workspace. Nothing requires a new build environment or a
          continuous background synchronization process.
        </p>
      </header>

      <div class="team-workflow__layout">
        <!-- =================================================
             WORKFLOW PRINCIPLES
             ================================================= -->
        <aside class="workflow-principles">
          <header>
            <span class="workflow-principles__icon" aria-hidden="true">
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
              <p>CLI-driven workflow</p>
              <h3>Local actions, explicit Cloud updates.</h3>
            </div>
          </header>

          <div class="workflow-principles__list">
            <article v-for="principle in principles" :key="principle.number">
              <span>{{ principle.number }}</span>

              <div>
                <strong>{{ principle.title }}</strong>
                <p>{{ principle.text }}</p>
              </div>
            </article>
          </div>

          <footer>
            <span aria-hidden="true"></span>

            <p>
              Source code and compilation remain outside the Cloud workspace.
            </p>
          </footer>
        </aside>

        <!-- =================================================
             COMMAND WORKFLOW
             ================================================= -->
        <div class="workflow-board">
          <section
            v-for="phase in phases"
            :key="phase.title"
            class="workflow-phase"
          >
            <header class="workflow-phase__header">
              <div>
                <p>{{ phase.frequency }}</p>
                <h3>{{ phase.title }}</h3>
              </div>

              <span>
                {{ phase.steps.length }}
                {{ phase.steps.length === 1 ? "step" : "steps" }}
              </span>
            </header>

            <div class="workflow-phase__steps">
              <article
                v-for="step in phase.steps"
                :key="step.number"
                class="workflow-step"
              >
                <span class="workflow-step__number">
                  {{ step.number }}
                </span>

                <div class="workflow-step__content">
                  <div class="workflow-step__heading">
                    <div>
                      <p>{{ step.label }}</p>
                      <h4>{{ step.title }}</h4>
                    </div>

                    <span>
                      {{ step.owner }}
                    </span>
                  </div>

                  <p class="workflow-step__description">
                    {{ step.text }}
                  </p>

                  <code>
                    <span aria-hidden="true">$</span>
                    {{ step.command }}
                  </code>

                  <div class="workflow-step__result">
                    <span aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <p>
                      {{ step.result }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <!-- ===================================================
           TEAM OUTCOME
           =================================================== -->
      <section class="workspace-outcome">
        <header class="workspace-outcome__heading">
          <div>
            <p class="sb-eyebrow">Inside the workspace</p>

            <h3>
              The team receives a current operational view of the project.
            </h3>
          </div>

          <p>
            Each command updates a specific record. The workspace then gives
            authorized members one place to inspect the shared state without
            requiring access to another developer's machine.
          </p>
        </header>

        <div class="workspace-outcome__records">
          <article v-for="record in workspaceRecords" :key="record.title">
            <span class="workspace-outcome__icon" aria-hidden="true">
              <svg
                v-if="record.icon === 'project'"
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
                v-else-if="record.icon === 'lockfile'"
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
                v-else-if="record.icon === 'package'"
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
              <p>{{ record.label }}</p>
              <h4>{{ record.title }}</h4>
              <span>{{ record.text }}</span>
            </div>
          </article>
        </div>

        <footer class="workspace-outcome__footer">
          <div>
            <span class="workspace-outcome__status" aria-hidden="true"></span>

            <p>
              Workspace access remains controlled by member roles and tokens.
            </p>
          </div>

          <strong>
            Local work becomes shared context, not remote execution.
          </strong>
        </footer>
      </section>
    </div>
  </section>
</template>

<script setup>
const principles = [
  {
    number: "01",
    title: "Connect once",
    text: "Authenticate the developer and link the local project to its Cloud workspace.",
  },
  {
    number: "02",
    title: "Publish deliberately",
    text: "Upload or publish only the records that should become visible to the team.",
  },
  {
    number: "03",
    title: "Review together",
    text: "Authorized members inspect the resulting project state from the workspace.",
  },
];

const phases = [
  {
    frequency: "Initial setup",
    title: "Establish the connection",
    steps: [
      {
        number: "01",
        label: "Authentication",
        title: "Sign in through the Vix CLI",
        owner: "Developer",
        command: "vix login",
        text: "Authenticate the local CLI before accessing protected workspace operations.",
        result:
          "The developer identity becomes available to supported Cloud commands.",
      },
      {
        number: "02",
        label: "Project linking",
        title: "Connect the local project",
        owner: "Project",
        command: "vix cloud init",
        text: "Associate the current local project with the correct workspace and project record.",
        result: "The local project now has a persistent Cloud destination.",
      },
    ],
  },
  {
    frequency: "Ongoing operations",
    title: "Share useful project records",
    steps: [
      {
        number: "03",
        label: "Dependency state",
        title: "Upload the current lockfile",
        owner: "Project",
        command: "vix cloud lockfile upload",
        text: "Send the selected vix.lock record when the dependency state should be available to the team.",
        result: "The workspace receives a project-specific lockfile record.",
      },
      {
        number: "04",
        label: "Package delivery",
        title: "Publish a private package version",
        owner: "Registry",
        command: "vix cloud publish",
        text: "Publish supported package metadata and version information to the private workspace registry.",
        result:
          "Authorized projects can reference the published package record.",
      },
      {
        number: "05",
        label: "Connection check",
        title: "Verify the Cloud configuration",
        owner: "CLI",
        command: "vix doctor --cloud",
        text: "Inspect the local Cloud configuration when diagnosing authentication or project-linking problems.",
        result:
          "The developer receives a clear view of the current Cloud connection state.",
      },
    ],
  },
];

const workspaceRecords = [
  {
    icon: "project",
    label: "Project identity",
    title: "Linked project",
    text: "The workspace knows which local project the uploaded records belong to.",
  },
  {
    icon: "lockfile",
    label: "Dependency history",
    title: "Lockfile record",
    text: "Members can inspect the dependency state associated with the project.",
  },
  {
    icon: "package",
    label: "Private distribution",
    title: "Published package version",
    text: "The registry retains package identity, version, status, and integrity information.",
  },
  {
    icon: "report",
    label: "Build evidence",
    title: "Local build report",
    text: "Selected local diagnostics remain available for project review.",
  },
];
</script>

<style scoped>
.team-workflow {
  padding: clamp(82px, 9vw, 128px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

/* ========================================================
   HEADING
   ======================================================== */

.team-workflow__heading {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(340px, 0.65fr);
  gap: clamp(42px, 7vw, 88px);
  align-items: end;
}

.team-workflow__heading > div {
  display: grid;
  min-width: 0;
}

.team-workflow__heading h2 {
  max-width: 800px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.5rem, 4.8vw, 4.7rem);
  font-weight: 680;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.team-workflow__heading h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-soft);
}

.team-workflow__heading .sb-section-text {
  max-width: 610px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

/* ========================================================
   MAIN LAYOUT
   ======================================================== */

.team-workflow__layout {
  display: grid;
  grid-template-columns:
    minmax(280px, 0.58fr)
    minmax(0, 1.42fr);
  gap: 18px;
  align-items: start;
  margin-top: 48px;
}

/* ========================================================
   PRINCIPLES
   ======================================================== */

.workflow-principles {
  position: sticky;
  top: 92px;
  display: grid;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.workflow-principles > header {
  display: grid;
  min-height: 82px;
  grid-template-columns: 43px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.workflow-principles__icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.workflow-principles__icon svg {
  width: 19px;
  height: 19px;
}

.workflow-principles > header > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.workflow-principles header p {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.workflow-principles header h3 {
  color: var(--sb-text);
  font-size: 0.92rem;
  font-weight: 650;
  line-height: 1.4;
}

.workflow-principles__list {
  display: grid;
  padding: 4px 16px;
}

.workflow-principles__list article {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 11px;
  padding: 17px 0;
  border-bottom: 1px solid var(--sb-border);
}

.workflow-principles__list article:last-child {
  border-bottom: 0;
}

.workflow-principles__list article > span {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 760;
}

.workflow-principles__list article > div {
  display: grid;
  gap: 5px;
}

.workflow-principles__list strong {
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 640;
}

.workflow-principles__list p {
  color: var(--sb-text-muted);
  font-size: 0.78rem;
  line-height: 1.55;
}

.workflow-principles > footer {
  display: flex;
  min-height: 55px;
  align-items: center;
  gap: 9px;
  padding: 11px 16px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.workflow-principles > footer > span {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

.workflow-principles > footer p {
  color: var(--sb-text-muted);
  font-size: 0.74rem;
  line-height: 1.45;
}

/* ========================================================
   WORKFLOW BOARD
   ======================================================== */

.workflow-board {
  display: grid;
  min-width: 0;
  gap: 16px;
}

.workflow-phase {
  display: grid;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.workflow-phase__header {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 13px 17px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.workflow-phase__header > div {
  display: grid;
  gap: 4px;
}

.workflow-phase__header p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.workflow-phase__header h3 {
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 650;
}

.workflow-phase__header > span {
  flex: 0 0 auto;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 6px 9px;
  font-size: 0.7rem;
  font-weight: 600;
}

.workflow-phase__steps {
  display: grid;
}

.workflow-step {
  display: grid;
  min-width: 0;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 13px;
  padding: 20px 18px;
  border-bottom: 1px solid var(--sb-border);
}

.workflow-step:last-child {
  border-bottom: 0;
}

.workflow-step__number {
  display: grid;
  width: 43px;
  height: 43px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.75rem;
  font-weight: 760;
}

.workflow-step__content {
  display: grid;
  min-width: 0;
  gap: 11px;
}

.workflow-step__heading {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.workflow-step__heading > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.workflow-step__heading p {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.workflow-step__heading h4 {
  color: var(--sb-text);
  font-size: 0.92rem;
  font-weight: 650;
  line-height: 1.4;
}

.workflow-step__heading > span {
  flex: 0 0 auto;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 5px 8px;
  font-size: 0.68rem;
  font-weight: 600;
}

.workflow-step__description {
  max-width: 680px;
  color: var(--sb-text-soft);
  font-size: 0.82rem;
  line-height: 1.65;
}

.workflow-step code {
  display: flex;
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
  align-items: center;
  gap: 8px;
  border: 1px solid #282d32;
  border-radius: var(--sb-radius-sm);
  background: #111417;
  color: #eef1f3;
  padding: 9px 11px;
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  line-height: 1.4;
  white-space: nowrap;
}

.workflow-step code > span {
  color: var(--sb-primary-hover);
}

.workflow-step__result {
  display: grid;
  grid-template-columns: 25px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
}

.workflow-step__result > span {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 50%;
  color: var(--sb-primary-hover);
}

.workflow-step__result svg {
  width: 12px;
  height: 12px;
}

.workflow-step__result p {
  color: var(--sb-text-muted);
  font-size: 0.76rem;
  line-height: 1.5;
}

/* ========================================================
   WORKSPACE OUTCOME
   ======================================================== */

.workspace-outcome {
  display: grid;
  margin-top: 48px;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.workspace-outcome__heading {
  display: grid;
  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(320px, 0.7fr);
  gap: clamp(36px, 6vw, 72px);
  align-items: end;
  padding: 30px 0;
}

.workspace-outcome__heading > div {
  display: grid;
  gap: 8px;
}

.workspace-outcome__heading h3 {
  max-width: 690px;
  color: var(--sb-text);
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  font-weight: 670;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.workspace-outcome__heading > p {
  max-width: 590px;
  color: var(--sb-text-soft);
  font-size: 0.88rem;
  line-height: 1.7;
}

.workspace-outcome__records {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--sb-border);
}

.workspace-outcome__records article {
  display: grid;
  min-width: 0;
  grid-template-columns: 41px minmax(0, 1fr);
  align-items: start;
  gap: 11px;
  padding: 22px 18px;
  border-right: 1px solid var(--sb-border);
}

.workspace-outcome__records article:first-child {
  padding-left: 0;
}

.workspace-outcome__records article:last-child {
  border-right: 0;
  padding-right: 0;
}

.workspace-outcome__icon {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 9px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.workspace-outcome__icon svg {
  width: 18px;
  height: 18px;
}

.workspace-outcome__records article > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.workspace-outcome__records article p {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.workspace-outcome__records h4 {
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 640;
  line-height: 1.4;
}

.workspace-outcome__records article div > span {
  color: var(--sb-text-muted);
  font-size: 0.74rem;
  line-height: 1.5;
}

.workspace-outcome__footer {
  display: flex;
  min-height: 62px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--sb-border);
}

.workspace-outcome__footer > div {
  display: flex;
  align-items: center;
  gap: 9px;
}

.workspace-outcome__status {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

.workspace-outcome__footer p {
  color: var(--sb-text-muted);
  font-size: 0.74rem;
}

.workspace-outcome__footer strong {
  color: var(--sb-text);
  font-size: 0.76rem;
  font-weight: 640;
  text-align: right;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1000px) {
  .team-workflow__layout {
    grid-template-columns: 1fr;
  }

  .workflow-principles {
    position: static;
    max-width: 780px;
  }

  .workflow-principles__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0;
  }

  .workflow-principles__list article {
    grid-template-columns: 1fr;
    padding: 17px;
    border-right: 1px solid var(--sb-border);
    border-bottom: 0;
  }

  .workflow-principles__list article:last-child {
    border-right: 0;
  }

  .workspace-outcome__records {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .workspace-outcome__records article {
    border-bottom: 1px solid var(--sb-border);
  }

  .workspace-outcome__records article:nth-child(2) {
    border-right: 0;
  }

  .workspace-outcome__records article:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .workspace-outcome__records article:nth-child(3) {
    padding-left: 0;
  }
}

@media (max-width: 820px) {
  .team-workflow__heading,
  .workspace-outcome__heading {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media (max-width: 680px) {
  .team-workflow {
    padding: 64px 0;
  }

  .team-workflow__heading h2 {
    font-size: clamp(2.3rem, 11vw, 3.5rem);
  }

  .workflow-principles__list {
    grid-template-columns: 1fr;
  }

  .workflow-principles__list article {
    grid-template-columns: 32px minmax(0, 1fr);
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .workflow-principles__list article:last-child {
    border-bottom: 0;
  }

  .workflow-step {
    grid-template-columns: 1fr;
  }

  .workflow-step__heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .workspace-outcome__records {
    grid-template-columns: 1fr;
  }

  .workspace-outcome__records article,
  .workspace-outcome__records article:first-child,
  .workspace-outcome__records article:nth-child(3),
  .workspace-outcome__records article:last-child {
    padding: 19px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .workspace-outcome__records article:last-child {
    border-bottom: 0;
  }

  .workspace-outcome__footer {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
  }

  .workspace-outcome__footer strong {
    text-align: left;
  }
}

@media (max-width: 460px) {
  .workflow-phase__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .workflow-step {
    padding-inline: 14px;
  }

  .workflow-step code {
    width: 100%;
  }
}
</style>
