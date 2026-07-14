<template>
  <section id="availability" class="status-section">
    <div class="sb-container">
      <header class="status-section__heading">
        <div>
          <p class="sb-eyebrow">Product status</p>

          <h2 class="sb-section-title">
            A working product with
            <span>a deliberately narrow boundary.</span>
          </h2>
        </div>

        <div class="status-section__introduction">
          <p class="sb-section-text">
            Softadastra Cloud is available as an early product for organizing
            the shared operational state around Vix projects. The current
            product already covers the path from workspace creation to project
            records, private packages, team access, and CLI integration.
          </p>

          <div
            class="availability-status"
            aria-label="Softadastra Cloud availability status"
          >
            <span class="availability-status__dot" aria-hidden="true"></span>

            <div>
              <strong>Available now</strong>
              <small>Early product</small>
            </div>
          </div>
        </div>
      </header>

      <div class="status-section__board">
        <!-- =================================================
             AVAILABLE PRODUCT SURFACE
             ================================================= -->
        <section class="availability-panel" aria-labelledby="available-title">
          <header class="panel-header">
            <div>
              <p>Current product surface</p>

              <h3 id="available-title">What teams can use today</h3>
            </div>

            <span class="panel-status"> Active </span>
          </header>

          <div class="availability-list">
            <article v-for="area in availableAreas" :key="area.number">
              <span class="availability-list__number">
                {{ area.number }}
              </span>

              <div>
                <header>
                  <h4>{{ area.title }}</h4>

                  <span>
                    <i aria-hidden="true"></i>
                    Available
                  </span>
                </header>

                <p>{{ area.text }}</p>

                <ul>
                  <li v-for="item in area.items" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <footer class="availability-panel__footer">
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

            <p>
              Supported Vix CLI operations connect local projects to this
              product surface.
            </p>
          </footer>
        </section>

        <!-- =================================================
             CURRENT PRODUCT CONTRACT
             ================================================= -->
        <aside class="boundary-panel">
          <header class="panel-header">
            <div>
              <p>Current product contract</p>

              <h3>What Cloud owns today</h3>
            </div>
          </header>

          <dl class="boundary-table">
            <div v-for="boundary in boundaries" :key="boundary.label">
              <dt>{{ boundary.label }}</dt>

              <dd>
                <strong>{{ boundary.value }}</strong>
                <span>{{ boundary.detail }}</span>
              </dd>
            </div>
          </dl>

          <section class="excluded-scope">
            <header>
              <span class="excluded-scope__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />

                  <path d="M8 12h8" />
                </svg>
              </span>

              <div>
                <p>Outside the current scope</p>
                <h4>
                  Cloud is not being presented as a complete DevOps platform.
                </h4>
              </div>
            </header>

            <ul>
              <li v-for="item in excludedScope" :key="item">
                <span aria-hidden="true"></span>
                {{ item }}
              </li>
            </ul>
          </section>
        </aside>
      </div>

      <!-- ===================================================
           POSITIONING NOTE
           =================================================== -->
      <footer class="status-section__positioning">
        <span class="status-section__positioning-number"> 01 </span>

        <div>
          <strong> This boundary is part of the product strategy. </strong>

          <p>
            Softadastra Cloud focuses first on the shared records and access
            controls that surround local C++ development. Teams keep their
            existing source hosting, machines, CI systems, and deployment
            infrastructure while Cloud provides one operational view across the
            workspace.
          </p>
        </div>

        <dl>
          <div>
            <dt>Development</dt>
            <dd>Local</dd>
          </div>

          <div>
            <dt>Records</dt>
            <dd>Shared</dd>
          </div>

          <div>
            <dt>Access</dt>
            <dd>Controlled</dd>
          </div>
        </dl>
      </footer>
    </div>
  </section>
</template>

<script setup>
const availableAreas = [
  {
    number: "01",
    title: "Workspace and project organization",
    text: "Create the shared boundary around related C++ projects and the people working with them.",
    items: [
      "Accounts and authentication",
      "Workspaces and linked projects",
      "Members, invitations, and roles",
    ],
  },
  {
    number: "02",
    title: "Private package operations",
    text: "Keep package identity and version records available to authorized workspace members.",
    items: [
      "Private packages and versions",
      "Checksums and archive metadata",
      "Visibility and lifecycle status",
    ],
  },
  {
    number: "03",
    title: "Local project history",
    text: "Preserve selected dependency and diagnostic records produced by the local Vix workflow.",
    items: [
      "Uploaded lockfile records",
      "Local build reports",
      "Warnings, errors, and toolchain context",
    ],
  },
  {
    number: "04",
    title: "Controlled workflow access",
    text: "Connect developers and supported machine workflows without exposing the entire workspace.",
    items: [
      "Roles and access scopes",
      "CLI and API tokens",
      "Notifications and activity",
    ],
  },
];

const boundaries = [
  {
    label: "Compilation",
    value: "Local",
    detail:
      "Performed by Vix on the developer machine or existing infrastructure.",
  },
  {
    label: "Application execution",
    value: "Local",
    detail: "Development processes remain outside the Cloud application.",
  },
  {
    label: "Operational records",
    value: "Cloud",
    detail:
      "Selected project, package, lockfile, and report records are organized centrally.",
  },
  {
    label: "Record transfer",
    value: "Explicit",
    detail:
      "Uploads and publications occur through supported user or CLI actions.",
  },
  {
    label: "Workspace access",
    value: "Controlled",
    detail: "Members, roles, scopes, and tokens determine protected access.",
  },
];

const excludedScope = [
  "Hosted CI runners",
  "Remote C++ compilation",
  "Source-code hosting",
  "Deployment automation",
  "Production monitoring",
];
</script>

<style scoped>
.status-section {
  padding: clamp(82px, 9vw, 128px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

/* ========================================================
   SECTION HEADING
   ======================================================== */

.status-section__heading {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(340px, 0.65fr);
  gap: clamp(42px, 7vw, 88px);
  align-items: end;
}

.status-section__heading > div:first-child {
  display: grid;
  min-width: 0;
}

.status-section__heading h2 {
  max-width: 790px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.5rem, 4.8vw, 4.7rem);
  font-weight: 680;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.status-section__heading h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-soft);
}

.status-section__introduction {
  display: grid;
  justify-items: start;
  gap: 20px;
}

.status-section__introduction .sb-section-text {
  max-width: 620px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.availability-status {
  display: inline-grid;
  grid-template-columns: 10px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(34, 197, 94, 0.28);
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.07);
  padding: 7px 11px;
}

.availability-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}

.availability-status > div {
  display: flex;
  align-items: center;
  gap: 7px;
}

.availability-status strong {
  color: #15803d;
  font-size: 0.74rem;
  font-weight: 680;
}

.availability-status small {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
}

.availability-status small::before {
  content: "·";
  margin-right: 7px;
}

/* ========================================================
   STATUS BOARD
   ======================================================== */

.status-section__board {
  display: grid;
  grid-template-columns:
    minmax(0, 1.18fr)
    minmax(340px, 0.82fr);
  gap: 18px;
  align-items: start;
  margin-top: 48px;
}

.availability-panel,
.boundary-panel {
  display: grid;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

.panel-header {
  display: flex;
  min-height: 82px;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.panel-header > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.panel-header p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.panel-header h3 {
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 650;
  line-height: 1.4;
}

.panel-status {
  display: inline-flex;
  min-height: 28px;
  flex: 0 0 auto;
  align-items: center;
  border: 1px solid rgba(34, 197, 94, 0.28);
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.07);
  color: #15803d;
  padding: 0 9px;
  font-size: 0.7rem;
  font-weight: 680;
}

/* ========================================================
   AVAILABLE AREAS
   ======================================================== */

.availability-list {
  display: grid;
}

.availability-list > article {
  display: grid;
  min-width: 0;
  grid-template-columns: 43px minmax(0, 1fr);
  gap: 13px;
  padding: 21px 18px;
  border-bottom: 1px solid var(--sb-border);
}

.availability-list > article:last-child {
  border-bottom: 0;
}

.availability-list__number {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 760;
}

.availability-list article > div {
  display: grid;
  min-width: 0;
  gap: 9px;
}

.availability-list article header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.availability-list h4 {
  color: var(--sb-text);
  font-size: 0.9rem;
  font-weight: 650;
  line-height: 1.4;
}

.availability-list article header > span {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  color: #15803d;
  font-size: 0.7rem;
  font-weight: 650;
}

.availability-list article header i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

.availability-list article > div > p {
  max-width: 650px;
  color: var(--sb-text-soft);
  font-size: 0.8rem;
  line-height: 1.6;
}

.availability-list ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.availability-list li {
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  background: var(--sb-bg);
  color: var(--sb-text-muted);
  padding: 5px 8px;
  font-size: 0.68rem;
  line-height: 1.3;
}

.availability-panel__footer {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  padding: 13px 17px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.availability-panel__footer > span {
  display: grid;
  width: 31px;
  height: 31px;
  place-items: center;
  color: var(--sb-primary-hover);
}

.availability-panel__footer svg {
  width: 17px;
  height: 17px;
}

.availability-panel__footer p {
  color: var(--sb-text-muted);
  font-size: 0.74rem;
  line-height: 1.5;
}

/* ========================================================
   BOUNDARY TABLE
   ======================================================== */

.boundary-table {
  display: grid;
  margin: 0;
  padding: 5px 17px;
}

.boundary-table > div {
  display: grid;
  grid-template-columns:
    minmax(110px, 0.55fr)
    minmax(0, 1.45fr);
  gap: 18px;
  padding: 15px 0;
  border-bottom: 1px solid var(--sb-border);
}

.boundary-table > div:last-child {
  border-bottom: 0;
}

.boundary-table dt {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  line-height: 1.45;
}

.boundary-table dd {
  display: grid;
  gap: 4px;
  margin: 0;
}

.boundary-table dd strong {
  color: var(--sb-text);
  font-size: 0.78rem;
  font-weight: 650;
}

.boundary-table dd span {
  color: var(--sb-text-muted);
  font-size: 0.7rem;
  line-height: 1.5;
}

/* ========================================================
   EXCLUDED SCOPE
   ======================================================== */

.excluded-scope {
  display: grid;
  margin: 0 13px 13px;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-bg);
}

.excluded-scope > header {
  display: grid;
  grid-template-columns: 39px minmax(0, 1fr);
  align-items: start;
  gap: 11px;
  padding: 14px;
  border-bottom: 1px solid var(--sb-border);
}

.excluded-scope__icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 9px;
  color: var(--sb-text-muted);
}

.excluded-scope__icon svg {
  width: 17px;
  height: 17px;
}

.excluded-scope header > div {
  display: grid;
  gap: 4px;
}

.excluded-scope header p {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.excluded-scope h4 {
  color: var(--sb-text);
  font-size: 0.8rem;
  font-weight: 640;
  line-height: 1.45;
}

.excluded-scope ul {
  display: grid;
  margin: 0;
  padding: 6px 14px;
  list-style: none;
}

.excluded-scope li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-height: 37px;
  border-bottom: 1px solid var(--sb-border);
  color: var(--sb-text-muted);
  font-size: 0.72rem;
}

.excluded-scope li:last-child {
  border-bottom: 0;
}

.excluded-scope li > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sb-text-muted);
}

/* ========================================================
   POSITIONING NOTE
   ======================================================== */

.status-section__positioning {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  margin-top: 38px;
  padding: 24px 0;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.status-section__positioning-number {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.72rem;
  font-weight: 760;
}

.status-section__positioning > div {
  display: grid;
  max-width: 720px;
  gap: 6px;
}

.status-section__positioning strong {
  color: var(--sb-text);
  font-size: 0.9rem;
  font-weight: 650;
}

.status-section__positioning p {
  color: var(--sb-text-soft);
  font-size: 0.78rem;
  line-height: 1.65;
}

.status-section__positioning dl {
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  margin: 0;
}

.status-section__positioning dl > div {
  display: grid;
  gap: 4px;
  padding: 7px 14px;
  border-right: 1px solid var(--sb-border);
}

.status-section__positioning dl > div:last-child {
  border-right: 0;
}

.status-section__positioning dt {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
}

.status-section__positioning dd {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.78rem;
  font-weight: 650;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1000px) {
  .status-section__board {
    grid-template-columns: 1fr;
  }

  .boundary-panel {
    max-width: 820px;
  }

  .status-section__positioning {
    grid-template-columns: 42px minmax(0, 1fr);
  }

  .status-section__positioning dl {
    grid-column: 2;
    justify-self: start;
    margin-top: 8px;
  }
}

@media (max-width: 820px) {
  .status-section__heading {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media (max-width: 680px) {
  .status-section {
    padding: 64px 0;
  }

  .status-section__heading h2 {
    font-size: clamp(2.3rem, 11vw, 3.5rem);
  }

  .availability-list article header {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }

  .status-section__positioning {
    grid-template-columns: 1fr;
  }

  .status-section__positioning dl {
    grid-column: auto;
    width: 100%;
  }
}

@media (max-width: 500px) {
  .availability-list > article {
    grid-template-columns: 1fr;
    padding-inline: 14px;
  }

  .boundary-table > div {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .status-section__positioning dl {
    grid-template-columns: 1fr;
  }

  .status-section__positioning dl > div {
    padding: 10px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .status-section__positioning dl > div:last-child {
    border-bottom: 0;
  }
}
</style>
