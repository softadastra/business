<template>
  <section id="cta" class="final-cta">
    <div class="sb-container">
      <div class="final-cta__panel">
        <div class="final-cta__copy">
          <p class="sb-eyebrow">Start with one workspace</p>

          <h2>
            Give your Vix projects
            <span>a shared operational home.</span>
          </h2>

          <p class="final-cta__description">
            Create a Softadastra Cloud account, organize the first workspace,
            and connect a local C++ project when you are ready. Builds remain
            local while the useful project state becomes available to the team.
          </p>

          <div class="final-cta__actions">
            <BaseButton href="https://cloud.softadastra.com/register" size="lg">
              Create a Cloud account
            </BaseButton>

            <BaseButton
              href="https://cloud.softadastra.com/login"
              variant="secondary"
              size="lg"
            >
              Sign in
            </BaseButton>
          </div>

          <p class="final-cta__account-note">
            Already using Vix.cpp? You can connect an existing local project
            after creating the workspace.
          </p>
        </div>

        <aside class="getting-started" aria-labelledby="getting-started-title">
          <header class="getting-started__header">
            <span class="getting-started__icon" aria-hidden="true">
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
              <p>Getting started</p>

              <h3 id="getting-started-title">
                From account to connected project
              </h3>
            </div>
          </header>

          <ol class="getting-started__steps">
            <li v-for="step in steps" :key="step.number">
              <span>{{ step.number }}</span>

              <div>
                <strong>{{ step.title }}</strong>
                <p>{{ step.text }}</p>
              </div>
            </li>
          </ol>

          <div class="getting-started__command">
            <header>
              <span class="command-status" aria-hidden="true"></span>

              <p>Connect the local project</p>
            </header>

            <code>
              <span aria-hidden="true">$</span>
              vix cloud init
            </code>
          </div>

          <footer class="getting-started__footer">
            <div>
              <span aria-hidden="true"></span>

              <p>Compilation and application execution remain local.</p>
            </div>

            <a href="https://vixcpp.com">
              Explore Vix.cpp

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </footer>
        </aside>
      </div>

      <div class="final-cta__principles">
        <article v-for="principle in principles" :key="principle.number">
          <span>{{ principle.number }}</span>

          <div>
            <strong>{{ principle.title }}</strong>
            <p>{{ principle.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";

const steps = [
  {
    number: "01",
    title: "Create your account",
    text: "Use one personal identity across your Softadastra Cloud workspaces.",
  },
  {
    number: "02",
    title: "Open a workspace",
    text: "Create the shared boundary for projects, packages, members, and access.",
  },
  {
    number: "03",
    title: "Connect a Vix project",
    text: "Link the local project and publish only the records the team needs.",
  },
];

const principles = [
  {
    number: "01",
    title: "Local development",
    text: "Your compiler, source code, builds, and runtime remain on existing infrastructure.",
  },
  {
    number: "02",
    title: "Explicit sharing",
    text: "Project records are uploaded or published through deliberate Cloud operations.",
  },
  {
    number: "03",
    title: "Controlled access",
    text: "Workspace members, roles, scopes, and tokens protect shared information.",
  },
];
</script>

<style scoped>
.final-cta {
  padding: clamp(82px, 9vw, 128px) 0 72px;
  background: var(--sb-bg);
}

/* ========================================================
   MAIN PANEL
   ======================================================== */

.final-cta__panel {
  display: grid;
  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(380px, 0.92fr);
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.final-cta__copy {
  display: grid;
  min-width: 0;
  align-content: center;
  justify-items: start;
  padding: clamp(38px, 6vw, 76px) clamp(30px, 6vw, 72px);
}

.final-cta h2 {
  max-width: 760px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.7rem, 5vw, 5rem);
  font-weight: 690;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.final-cta h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-primary-hover);
}

.final-cta__description {
  max-width: 680px;
  margin-top: 23px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.final-cta__account-note {
  max-width: 610px;
  margin-top: 17px;
  color: var(--sb-text-muted);
  font-size: 0.76rem;
  line-height: 1.55;
}

/* ========================================================
   GETTING STARTED
   ======================================================== */

.getting-started {
  display: grid;
  min-width: 0;
  align-content: start;
  border-left: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.getting-started__header {
  display: grid;
  min-height: 84px;
  grid-template-columns: 43px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--sb-border);
}

.getting-started__icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.getting-started__icon svg {
  width: 19px;
  height: 19px;
}

.getting-started__header > div {
  display: grid;
  gap: 4px;
}

.getting-started__header p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.getting-started__header h3 {
  color: var(--sb-text);
  font-size: 0.92rem;
  font-weight: 650;
  line-height: 1.4;
}

.getting-started__steps {
  display: grid;
  margin: 0;
  padding: 5px 18px;
  list-style: none;
}

.getting-started__steps li {
  display: grid;
  grid-template-columns: 35px minmax(0, 1fr);
  gap: 11px;
  padding: 17px 0;
  border-bottom: 1px solid var(--sb-border);
}

.getting-started__steps li:last-child {
  border-bottom: 0;
}

.getting-started__steps li > span {
  display: grid;
  width: 33px;
  height: 33px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 8px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 760;
}

.getting-started__steps li > div {
  display: grid;
  gap: 4px;
}

.getting-started__steps strong {
  color: var(--sb-text);
  font-size: 0.82rem;
  font-weight: 640;
}

.getting-started__steps p {
  color: var(--sb-text-muted);
  font-size: 0.74rem;
  line-height: 1.5;
}

/* ========================================================
   COMMAND
   ======================================================== */

.getting-started__command {
  display: grid;
  overflow: hidden;
  margin: 12px 18px 18px;
  border: 1px solid #282d32;
  border-radius: var(--sb-radius-md);
  background: #111417;
}

.getting-started__command header {
  display: flex;
  min-height: 34px;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  border-bottom: 1px solid #282d32;
}

.command-status {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

.getting-started__command header p {
  color: #7f8790;
  font-size: 0.66rem;
}

.getting-started__command code {
  display: flex;
  overflow-x: auto;
  align-items: center;
  gap: 8px;
  color: #eef1f3;
  padding: 13px;
  font-family: var(--sb-font-mono);
  font-size: 0.78rem;
  white-space: nowrap;
}

.getting-started__command code span {
  color: var(--sb-primary-hover);
}

/* ========================================================
   GETTING STARTED FOOTER
   ======================================================== */

.getting-started__footer {
  display: flex;
  min-height: 61px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: auto;
  padding: 11px 18px;
  border-top: 1px solid var(--sb-border);
}

.getting-started__footer > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.getting-started__footer div > span {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #22c55e;
}

.getting-started__footer p {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
  line-height: 1.45;
}

.getting-started__footer a {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  color: var(--sb-primary-hover);
  font-size: 0.68rem;
  font-weight: 650;
  text-decoration: none;
}

.getting-started__footer a:hover {
  color: var(--sb-primary);
}

.getting-started__footer svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   PRINCIPLES
   ======================================================== */

.final-cta__principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.final-cta__principles article {
  display: grid;
  min-width: 0;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 11px;
  padding: 21px 19px;
  border-right: 1px solid var(--sb-border);
}

.final-cta__principles article:first-child {
  padding-left: 0;
}

.final-cta__principles article:last-child {
  border-right: 0;
  padding-right: 0;
}

.final-cta__principles article > span {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 760;
}

.final-cta__principles article > div {
  display: grid;
  gap: 5px;
}

.final-cta__principles strong {
  color: var(--sb-text);
  font-size: 0.8rem;
  font-weight: 640;
}

.final-cta__principles p {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  line-height: 1.55;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 920px) {
  .final-cta__panel {
    grid-template-columns: 1fr;
  }

  .getting-started {
    border-top: 1px solid var(--sb-border);
    border-left: 0;
  }

  .getting-started__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0;
  }

  .getting-started__steps li {
    grid-template-columns: 1fr;
    padding: 18px;
    border-right: 1px solid var(--sb-border);
    border-bottom: 0;
  }

  .getting-started__steps li:last-child {
    border-right: 0;
  }
}

@media (max-width: 680px) {
  .final-cta {
    padding: 64px 0 48px;
  }

  .final-cta__copy {
    padding: 36px 24px;
  }

  .final-cta h2 {
    font-size: clamp(2.5rem, 12vw, 3.8rem);
  }

  .final-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .getting-started__steps {
    grid-template-columns: 1fr;
  }

  .getting-started__steps li {
    grid-template-columns: 35px minmax(0, 1fr);
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .getting-started__steps li:last-child {
    border-bottom: 0;
  }

  .final-cta__principles {
    grid-template-columns: 1fr;
  }

  .final-cta__principles article,
  .final-cta__principles article:first-child,
  .final-cta__principles article:last-child {
    padding: 18px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .final-cta__principles article:last-child {
    border-bottom: 0;
  }
}

@media (max-width: 480px) {
  .final-cta__copy {
    padding: 31px 18px;
  }

  .getting-started__footer {
    align-items: flex-start;
    flex-direction: column;
    padding-block: 14px;
  }
}
</style>
