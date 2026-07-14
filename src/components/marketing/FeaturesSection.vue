<template>
  <section id="features" class="features-section">
    <div class="sb-container features-section__inner">
      <header class="features-section__heading">
        <p class="sb-eyebrow">Core capabilities</p>

        <h2 class="sb-section-title">
          One shared operational layer
          <span>around every local Vix project.</span>
        </h2>

        <p class="sb-section-text">
          Softadastra Cloud does not divide the product into unrelated tools. It
          connects project organization, private distribution, operational
          history, and controlled access inside the same workspace.
        </p>

        <div class="features-section__boundary">
          <span class="features-section__boundary-icon" aria-hidden="true">
            <svg
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
          </span>

          <div>
            <strong>
              Cloud stores project records, not the development environment.
            </strong>

            <p>
              Source code, compilation, execution, and local tooling remain on
              the developer machine.
            </p>
          </div>
        </div>
      </header>

      <div class="capability-system">
        <article
          v-for="capability in capabilities"
          :key="capability.number"
          class="capability"
        >
          <header class="capability__header">
            <div class="capability__identity">
              <span class="capability__number">
                {{ capability.number }}
              </span>

              <div>
                <p>{{ capability.eyebrow }}</p>
                <h3>{{ capability.title }}</h3>
              </div>
            </div>

            <span class="capability__result">
              {{ capability.result }}
            </span>
          </header>

          <div class="capability__content">
            <div class="capability__summary">
              <p>
                {{ capability.description }}
              </p>

              <dl>
                <div v-for="fact in capability.facts" :key="fact.label">
                  <dt>{{ fact.label }}</dt>
                  <dd>{{ fact.value }}</dd>
                </div>
              </dl>
            </div>

            <div class="capability__features">
              <article
                v-for="feature in capability.features"
                :key="feature.title"
              >
                <span class="capability__feature-icon" aria-hidden="true">
                  <svg
                    v-if="feature.icon === 'workspace'"
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
                    v-else-if="feature.icon === 'members'"
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

                  <svg
                    v-else-if="feature.icon === 'package'"
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
                    v-else-if="feature.icon === 'token'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="8" cy="15" r="4" />

                    <path d="m11 12 8-8" />
                    <path d="m15 4 3 3" />
                    <path d="m13 6 3 3" />
                  </svg>

                  <svg
                    v-else-if="feature.icon === 'lockfile'"
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
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.text }}</p>
                </div>
              </article>
            </div>
          </div>

          <footer class="capability__footer">
            <span> Included records </span>

            <ul>
              <li v-for="record in capability.records" :key="record">
                {{ record }}
              </li>
            </ul>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = [
  {
    number: "01",
    eyebrow: "Project organization",
    title: "Keep projects and people inside one workspace.",
    result: "Shared ownership",
    description:
      "Workspaces establish the boundary around related C++ projects. Members, roles, invitations, and project access then define who can view or change the operational records inside that boundary.",
    facts: [
      {
        label: "Primary boundary",
        value: "Workspace",
      },
      {
        label: "Managed objects",
        value: "Projects and members",
      },
      {
        label: "Access model",
        value: "Roles and scopes",
      },
    ],
    features: [
      {
        icon: "workspace",
        title: "Workspaces and projects",
        text: "Group related Vix projects under a shared organizational context.",
      },
      {
        icon: "members",
        title: "Members and permissions",
        text: "Manage invitations, roles, access scopes, and project-level participation.",
      },
    ],
    records: [
      "Workspace metadata",
      "Linked projects",
      "Member roles",
      "Access scopes",
    ],
  },
  {
    number: "02",
    eyebrow: "Private distribution",
    title: "Publish internal C++ packages with controlled access.",
    result: "Managed delivery",
    description:
      "The private registry keeps package identity, versions, checksums, archives, visibility, and lifecycle status organized. CLI and API tokens provide controlled machine access for supported publishing and installation workflows.",
    facts: [
      {
        label: "Primary boundary",
        value: "Private registry",
      },
      {
        label: "Managed objects",
        value: "Packages and versions",
      },
      {
        label: "Machine access",
        value: "Scoped tokens",
      },
    ],
    features: [
      {
        icon: "package",
        title: "Private packages and versions",
        text: "Maintain package metadata, version history, checksums, archives, visibility, and status.",
      },
      {
        icon: "token",
        title: "CLI and API access",
        text: "Create and revoke credentials used by supported Cloud and registry workflows.",
      },
    ],
    records: [
      "Package metadata",
      "Version history",
      "Archive checksums",
      "Access tokens",
    ],
  },
  {
    number: "03",
    eyebrow: "Operational history",
    title: "Preserve the state produced by local development.",
    result: "Shared evidence",
    description:
      "Vix continues to generate dependency and build information locally. Cloud stores selected lockfile records and build reports so the team can inspect what happened without moving compilation into a hosted environment.",
    facts: [
      {
        label: "Primary source",
        value: "Local Vix workflow",
      },
      {
        label: "Managed objects",
        value: "Lockfiles and reports",
      },
      {
        label: "Build execution",
        value: "Remains local",
      },
    ],
    features: [
      {
        icon: "lockfile",
        title: "Lockfile records",
        text: "Upload and inspect vix.lock state associated with linked projects.",
      },
      {
        icon: "report",
        title: "Local build reports",
        text: "Store target, profile, branch, commit, toolchain, duration, warnings, errors, and diagnostics.",
      },
    ],
    records: [
      "Dependency state",
      "Build target",
      "Toolchain",
      "Warnings and errors",
    ],
  },
];
</script>

<style scoped>
.features-section {
  padding: clamp(82px, 9vw, 128px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.features-section__inner {
  display: grid;
  grid-template-columns:
    minmax(280px, 0.65fr)
    minmax(0, 1.35fr);
  gap: clamp(50px, 8vw, 108px);
  align-items: start;
}

.features-section__heading {
  position: sticky;
  top: 92px;
  display: grid;
  min-width: 0;
  align-content: start;
}

.features-section__heading h2 {
  max-width: 620px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.4rem, 4.4vw, 4.3rem);
  font-weight: 680;
  line-height: 1;
  letter-spacing: -0.05em;
}

.features-section__heading h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-soft);
}

.features-section__heading .sb-section-text {
  max-width: 600px;
  margin-top: 22px;
  color: var(--sb-text-soft);
  font-size: 0.98rem;
  line-height: 1.75;
}

.features-section__boundary {
  display: grid;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: start;
  gap: 12px;
  max-width: 600px;
  margin-top: 30px;
  padding: 15px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.features-section__boundary-icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 9px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.features-section__boundary-icon svg {
  width: 17px;
  height: 17px;
}

.features-section__boundary > div {
  display: grid;
  gap: 5px;
}

.features-section__boundary strong {
  color: var(--sb-text);
  font-size: 0.8rem;
  font-weight: 640;
  line-height: 1.45;
}

.features-section__boundary p {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.55;
}

/* ========================================================
   CAPABILITY SYSTEM
   ======================================================== */

.capability-system {
  display: grid;
  min-width: 0;
  gap: 16px;
}

.capability {
  display: grid;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.capability__header {
  display: flex;
  min-height: 88px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 15px 18px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.capability__identity {
  display: grid;
  min-width: 0;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
}

.capability__number {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 9px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.69rem;
  font-weight: 760;
}

.capability__identity > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.capability__identity p {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.capability__identity h3 {
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 650;
  line-height: 1.4;
}

.capability__result {
  flex: 0 0 auto;
  border: 1px solid var(--sb-primary-border);
  border-radius: 999px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  padding: 6px 9px;
  font-size: 0.66rem;
  font-weight: 650;
  white-space: nowrap;
}

.capability__content {
  display: grid;
  grid-template-columns:
    minmax(0, 0.88fr)
    minmax(280px, 1.12fr);
  min-width: 0;
}

.capability__summary {
  display: grid;
  min-width: 0;
  align-content: start;
  gap: 21px;
  padding: 22px 20px;
  border-right: 1px solid var(--sb-border);
}

.capability__summary > p {
  color: var(--sb-text-soft);
  font-size: 0.82rem;
  line-height: 1.68;
}

.capability__summary dl {
  display: grid;
  margin: 0;
  border-top: 1px solid var(--sb-border);
}

.capability__summary dl > div {
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--sb-border);
}

.capability__summary dt {
  color: var(--sb-text-muted);
  font-size: 0.67rem;
}

.capability__summary dd {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.69rem;
  font-weight: 620;
  text-align: right;
}

.capability__features {
  display: grid;
  align-content: start;
  padding: 12px;
}

.capability__features > article {
  display: grid;
  min-width: 0;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: start;
  gap: 11px;
  padding: 13px;
  border-bottom: 1px solid var(--sb-border);
}

.capability__features > article:last-child {
  border-bottom: 0;
}

.capability__feature-icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 9px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.capability__feature-icon svg {
  width: 17px;
  height: 17px;
}

.capability__features article > div {
  display: grid;
  min-width: 0;
  gap: 5px;
}

.capability__features h4 {
  color: var(--sb-text);
  font-size: 0.82rem;
  font-weight: 640;
  line-height: 1.4;
}

.capability__features p {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.55;
}

.capability__footer {
  display: flex;
  min-height: 55px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 17px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.capability__footer > span {
  flex: 0 0 auto;
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.capability__footer ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.capability__footer li {
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  background: var(--sb-surface);
  color: var(--sb-text-muted);
  padding: 5px 8px;
  font-size: 0.62rem;
  font-weight: 600;
  white-space: nowrap;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1040px) {
  .features-section__inner {
    grid-template-columns: 1fr;
  }

  .features-section__heading {
    position: static;
    max-width: 780px;
  }

  .capability-system {
    max-width: 860px;
  }
}

@media (max-width: 720px) {
  .features-section {
    padding: 64px 0;
  }

  .features-section__heading h2 {
    font-size: clamp(2.25rem, 11vw, 3.5rem);
  }

  .capability__content {
    grid-template-columns: 1fr;
  }

  .capability__summary {
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }
}

@media (max-width: 560px) {
  .capability__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 13px;
  }

  .capability__result {
    margin-left: 51px;
  }

  .capability__summary {
    padding: 19px 15px;
  }

  .capability__features {
    padding-inline: 7px;
  }

  .capability__footer {
    align-items: flex-start;
    flex-direction: column;
    padding-block: 14px;
  }

  .capability__footer ul {
    justify-content: flex-start;
  }
}

@media (max-width: 420px) {
  .capability__identity {
    grid-template-columns: 1fr;
  }

  .capability__result {
    margin-left: 0;
  }

  .capability__summary dl > div {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
    padding: 10px 0;
  }

  .capability__summary dd {
    text-align: left;
  }
}
</style>
