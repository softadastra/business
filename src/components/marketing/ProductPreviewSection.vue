<template>
  <section class="product-preview">
    <div class="sb-container">
      <header class="product-preview__heading">
        <div>
          <p class="sb-eyebrow">Product interface</p>

          <h2 class="sb-section-title">
            Start with the workspace.
            <span>Move into the project that needs attention.</span>
          </h2>
        </div>

        <div class="product-preview__introduction">
          <p class="sb-section-text">
            Softadastra Cloud follows the hierarchy of the work itself.
            Workspace navigation stays stable while project records, registry
            information, diagnostics, and activity remain connected to their
            proper context.
          </p>

          <span class="product-preview__notice">
            Representative product view
          </span>
        </div>
      </header>

      <div
        class="preview-shell"
        aria-label="Interactive Softadastra Cloud interface preview"
      >
        <!-- =================================================
             APPLICATION SIDEBAR
             ================================================= -->
        <aside class="preview-sidebar">
          <header class="preview-sidebar__brand">
            <span aria-hidden="true"> S </span>

            <strong> Softadastra Cloud </strong>
          </header>

          <button
            class="preview-workspace"
            type="button"
            aria-label="Selected workspace: cpp-platform"
          >
            <span class="preview-workspace__avatar"> CP </span>

            <span>
              <small>Workspace</small>
              <strong>cpp-platform</strong>
            </span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m7 9 5 5 5-5" />
            </svg>
          </button>

          <nav
            class="preview-navigation"
            aria-label="Preview application navigation"
          >
            <section v-for="group in navigation" :key="group.label">
              <p>{{ group.label }}</p>

              <button
                v-for="item in group.items"
                :key="item.id"
                type="button"
                :class="{
                  'is-active': activeView === item.view,
                }"
                @click="selectNavigation(item)"
              >
                <span class="preview-navigation__icon" aria-hidden="true">
                  <svg v-if="item.icon === 'dashboard'" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" />

                    <rect x="14" y="3" width="7" height="7" rx="1" />

                    <rect x="3" y="14" width="7" height="7" rx="1" />

                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>

                  <svg v-else-if="item.icon === 'project'" viewBox="0 0 24 24">
                    <path d="M3 7h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />

                    <path d="M3 7V5a2 2 0 0 1 2-2h5l2 2" />
                  </svg>

                  <svg v-else-if="item.icon === 'members'" viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3" />

                    <path d="M3 20a6 6 0 0 1 12 0" />

                    <circle cx="17" cy="9" r="2" />

                    <path d="M16 15a5 5 0 0 1 5 5" />
                  </svg>

                  <svg v-else-if="item.icon === 'package'" viewBox="0 0 24 24">
                    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z" />

                    <path d="m4 7.5 8 4.5 8-4.5" />
                    <path d="M12 12v9" />
                  </svg>

                  <svg v-else-if="item.icon === 'lockfile'" viewBox="0 0 24 24">
                    <path d="M6 2h8l4 4v16H6z" />
                    <path d="M14 2v5h5" />
                    <path d="M9 13h6" />
                    <path d="M9 17h4" />
                  </svg>

                  <svg v-else-if="item.icon === 'report'" viewBox="0 0 24 24">
                    <path d="M4 19V9" />
                    <path d="M10 19V5" />
                    <path d="M16 19v-7" />
                    <path d="M22 19V3" />
                  </svg>

                  <svg v-else-if="item.icon === 'token'" viewBox="0 0 24 24">
                    <circle cx="8" cy="15" r="4" />

                    <path d="m11 12 8-8" />
                    <path d="m15 4 3 3" />
                    <path d="m13 6 3 3" />
                  </svg>

                  <svg v-else viewBox="0 0 24 24">
                    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />

                    <path d="M10 21h4" />
                  </svg>
                </span>

                <span>{{ item.label }}</span>

                <strong v-if="item.count" class="preview-navigation__count">
                  {{ item.count }}
                </strong>
              </button>
            </section>
          </nav>

          <footer class="preview-account">
            <span aria-hidden="true"> GK </span>

            <div>
              <strong>Gaspard</strong>
              <small>Workspace owner</small>
            </div>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="1" />

              <circle cx="12" cy="12" r="1" />

              <circle cx="19" cy="12" r="1" />
            </svg>
          </footer>
        </aside>

        <!-- =================================================
             APPLICATION CONTENT
             ================================================= -->
        <div class="preview-application">
          <header class="preview-topbar">
            <div>
              <span class="preview-topbar__status" aria-hidden="true"></span>

              <p>Workspace connected</p>
            </div>

            <div class="preview-topbar__actions">
              <button type="button" aria-label="Search workspace">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />

                  <path d="m20 20-4-4" />
                </svg>
              </button>

              <button type="button" aria-label="Open notifications">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />

                  <path d="M10 21h4" />
                </svg>

                <span aria-hidden="true"></span>
              </button>
            </div>
          </header>

          <div class="preview-content">
            <header class="preview-page-heading">
              <div>
                <p>{{ currentView.eyebrow }}</p>
                <h3>{{ currentView.title }}</h3>
                <span>{{ currentView.description }}</span>
              </div>

              <div class="preview-page-heading__actions">
                <span class="preview-context-badge">
                  {{ currentView.context }}
                </span>

                <button type="button">
                  {{ currentView.action }}

                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </header>

            <div
              class="preview-tabs"
              role="tablist"
              aria-label="Product preview views"
            >
              <button
                v-for="view in views"
                :id="`preview-tab-${view.id}`"
                :key="view.id"
                type="button"
                role="tab"
                :aria-selected="activeView === view.id"
                :aria-controls="`preview-panel-${view.id}`"
                :class="{
                  'is-active': activeView === view.id,
                }"
                @click="activeView = view.id"
              >
                {{ view.label }}
              </button>
            </div>

            <!-- =============================================
                 PROJECT VIEW
                 ============================================= -->
            <section
              v-if="activeView === 'project'"
              id="preview-panel-project"
              class="preview-panel"
              role="tabpanel"
              aria-labelledby="preview-tab-project"
            >
              <div class="project-overview">
                <article class="project-identity">
                  <header>
                    <div class="project-identity__mark">NA</div>

                    <div>
                      <span>Linked Vix project</span>
                      <h4>native-app</h4>
                      <p>github.com/example/native-app</p>
                    </div>
                  </header>

                  <dl>
                    <div>
                      <dt>Cloud link</dt>
                      <dd class="is-success">Active</dd>
                    </div>

                    <div>
                      <dt>Default branch</dt>
                      <dd>main</dd>
                    </div>

                    <div>
                      <dt>Project access</dt>
                      <dd>Workspace members</dd>
                    </div>
                  </dl>

                  <footer>
                    <code>.vix/cloud.json</code>

                    <span> Updated 4 minutes ago </span>
                  </footer>
                </article>

                <div class="project-summary">
                  <article>
                    <span>Latest build</span>
                    <strong class="is-success"> Passing </strong>
                    <small>debug · GCC 14</small>
                  </article>

                  <article>
                    <span>Current lockfile</span>
                    <strong>vix.lock</strong>
                    <small>42 dependencies</small>
                  </article>

                  <article>
                    <span>Project members</span>
                    <strong>4</strong>
                    <small>3 active roles</small>
                  </article>
                </div>
              </div>

              <div class="project-records">
                <article class="build-report-panel">
                  <header class="panel-heading">
                    <div>
                      <span>Local build report</span>
                      <h4>Latest diagnostics</h4>
                    </div>

                    <span class="status-pill status-pill--success">
                      Passed
                    </span>
                  </header>

                  <dl class="build-report-details">
                    <div>
                      <dt>Target</dt>
                      <dd>native-app</dd>
                    </div>

                    <div>
                      <dt>Profile</dt>
                      <dd>debug</dd>
                    </div>

                    <div>
                      <dt>Toolchain</dt>
                      <dd>GCC 14.3</dd>
                    </div>

                    <div>
                      <dt>Duration</dt>
                      <dd>3.8s</dd>
                    </div>

                    <div>
                      <dt>Warnings</dt>
                      <dd>2</dd>
                    </div>

                    <div>
                      <dt>Errors</dt>
                      <dd class="is-success">0</dd>
                    </div>
                  </dl>

                  <footer>
                    <div>
                      <span>Commit</span>
                      <code>71a8c4d</code>
                    </div>

                    <time datetime="2026-07-14T16:22:00Z">
                      Today at 16:22
                    </time>
                  </footer>
                </article>

                <article class="project-activity-panel">
                  <header class="panel-heading">
                    <div>
                      <span>Project records</span>
                      <h4>Recent changes</h4>
                    </div>

                    <button type="button">View activity</button>
                  </header>

                  <div class="record-list">
                    <article>
                      <span class="record-list__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M4 19V9" />
                          <path d="M10 19V5" />
                          <path d="M16 19v-7" />
                          <path d="M22 19V3" />
                        </svg>
                      </span>

                      <div>
                        <strong> Build report uploaded </strong>

                        <p>debug · native-app</p>
                      </div>

                      <time>4m</time>
                    </article>

                    <article>
                      <span class="record-list__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M6 2h8l4 4v16H6z" />
                          <path d="M14 2v5h5" />
                          <path d="M9 13h6" />
                          <path d="M9 17h4" />
                        </svg>
                      </span>

                      <div>
                        <strong> Lockfile updated </strong>

                        <p>vix.lock · 42 dependencies</p>
                      </div>

                      <time>2h</time>
                    </article>

                    <article>
                      <span class="record-list__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <circle cx="9" cy="8" r="3" />

                          <path d="M3 20a6 6 0 0 1 12 0" />
                          <circle cx="17" cy="9" r="2" />

                          <path d="M16 15a5 5 0 0 1 5 5" />
                        </svg>
                      </span>

                      <div>
                        <strong> Member access changed </strong>

                        <p>Viewer access granted</p>
                      </div>

                      <time>1d</time>
                    </article>
                  </div>
                </article>
              </div>
            </section>

            <!-- =============================================
                 REGISTRY VIEW
                 ============================================= -->
            <section
              v-else-if="activeView === 'registry'"
              id="preview-panel-registry"
              class="preview-panel"
              role="tabpanel"
              aria-labelledby="preview-tab-registry"
            >
              <div class="registry-summary">
                <article>
                  <span>Private packages</span>
                  <strong>6</strong>
                  <small>Inside cpp-platform</small>
                </article>

                <article>
                  <span>Published versions</span>
                  <strong>18</strong>
                  <small>Across all packages</small>
                </article>

                <article>
                  <span>Latest publication</span>
                  <strong>core 1.4.0</strong>
                  <small>Published today</small>
                </article>
              </div>

              <div class="registry-table-wrapper">
                <table class="registry-table">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Latest version</th>
                      <th>Visibility</th>
                      <th>Status</th>
                      <th>Updated</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="entry in registryEntries" :key="entry.name">
                      <td>
                        <div class="package-identity">
                          <span aria-hidden="true">
                            {{ entry.initials }}
                          </span>

                          <div>
                            <strong>{{ entry.name }}</strong>
                            <small>{{ entry.namespace }}</small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <code>{{ entry.version }}</code>
                      </td>

                      <td>
                        {{ entry.visibility }}
                      </td>

                      <td>
                        <span class="status-pill status-pill--success">
                          {{ entry.status }}
                        </span>
                      </td>

                      <td>
                        {{ entry.updated }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <footer class="registry-footer">
                <div>
                  <span
                    class="registry-footer__status"
                    aria-hidden="true"
                  ></span>

                  <p>Package versions retain checksum and archive metadata.</p>
                </div>

                <code>vix cloud publish</code>
              </footer>
            </section>

            <!-- =============================================
                 ACTIVITY VIEW
                 ============================================= -->
            <section
              v-else
              id="preview-panel-activity"
              class="preview-panel"
              role="tabpanel"
              aria-labelledby="preview-tab-activity"
            >
              <div class="activity-layout">
                <section class="activity-stream">
                  <header class="panel-heading">
                    <div>
                      <span>Workspace timeline</span>
                      <h4>Recent operational activity</h4>
                    </div>

                    <span class="status-pill"> All projects </span>
                  </header>

                  <div class="activity-list">
                    <article
                      v-for="activity in activities"
                      :key="`${activity.title}-${activity.time}`"
                    >
                      <span
                        class="activity-list__marker"
                        aria-hidden="true"
                      ></span>

                      <div>
                        <header>
                          <strong>{{ activity.title }}</strong>
                          <time>{{ activity.time }}</time>
                        </header>

                        <p>{{ activity.description }}</p>

                        <div class="activity-list__context">
                          <span>{{ activity.project }}</span>
                          <code>{{ activity.reference }}</code>
                        </div>
                      </div>
                    </article>
                  </div>
                </section>

                <aside class="activity-context">
                  <header>
                    <span>Workspace access</span>
                    <h4>Controlled participation</h4>
                  </header>

                  <dl>
                    <div>
                      <dt>Owners</dt>
                      <dd>1</dd>
                    </div>

                    <div>
                      <dt>Builders</dt>
                      <dd>2</dd>
                    </div>

                    <div>
                      <dt>Viewers</dt>
                      <dd>1</dd>
                    </div>

                    <div>
                      <dt>Active CLI tokens</dt>
                      <dd>3</dd>
                    </div>
                  </dl>

                  <footer>
                    <span aria-hidden="true"></span>

                    <p>Every protected action follows workspace permissions.</p>
                  </footer>
                </aside>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer class="product-preview__footer">
        <div>
          <span>01</span>

          <p>Workspace navigation provides a stable global context.</p>
        </div>

        <div>
          <span>02</span>

          <p>Projects own their lockfiles and local build history.</p>
        </div>

        <div>
          <span>03</span>

          <p>
            Registry and team activity remain available without duplicating
            project navigation.
          </p>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const activeView = ref("project");

const views = [
  {
    id: "project",
    label: "Project overview",
    eyebrow: "Projects / native-app",
    title: "native-app",
    description: "Operational state for one linked Vix project.",
    context: "Project",
    action: "Open project",
  },
  {
    id: "registry",
    label: "Private registry",
    eyebrow: "Registry / Packages",
    title: "Private packages",
    description: "Package identity, versions, integrity, and visibility.",
    context: "Workspace",
    action: "Publish package",
  },
  {
    id: "activity",
    label: "Team activity",
    eyebrow: "Activity / Workspace",
    title: "Workspace activity",
    description: "Changes across projects, packages, access, and diagnostics.",
    context: "Workspace",
    action: "View notifications",
  },
];

const currentView = computed(
  () => views.find((view) => view.id === activeView.value) ?? views[0],
);

const navigation = [
  {
    label: "Workspace",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "dashboard",
        view: "project",
      },
      {
        id: "projects",
        label: "Projects",
        icon: "project",
        view: "project",
      },
      {
        id: "members",
        label: "Members",
        icon: "members",
        view: "activity",
      },
    ],
  },
  {
    label: "Registry",
    items: [
      {
        id: "packages",
        label: "Packages",
        icon: "package",
        view: "registry",
      },
      {
        id: "lockfiles",
        label: "Lockfiles",
        icon: "lockfile",
        view: "project",
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        id: "reports",
        label: "Build reports",
        icon: "report",
        view: "project",
      },
      {
        id: "tokens",
        label: "CLI tokens",
        icon: "token",
        view: "activity",
      },
    ],
  },
  {
    label: "Activity",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        icon: "notifications",
        view: "activity",
        count: "3",
      },
    ],
  },
];

const registryEntries = [
  {
    initials: "CO",
    name: "core",
    namespace: "cpp-platform/core",
    version: "1.4.0",
    visibility: "Private",
    status: "Published",
    updated: "Today",
  },
  {
    initials: "NT",
    name: "network",
    namespace: "cpp-platform/network",
    version: "0.8.2",
    visibility: "Private",
    status: "Published",
    updated: "2 days ago",
  },
  {
    initials: "UI",
    name: "native-ui",
    namespace: "cpp-platform/native-ui",
    version: "0.3.1",
    visibility: "Private",
    status: "Published",
    updated: "1 week ago",
  },
];

const activities = [
  {
    title: "Build report uploaded",
    description:
      "A passing debug build was recorded from the local Vix workflow.",
    project: "native-app",
    reference: "71a8c4d",
    time: "4 minutes ago",
  },
  {
    title: "Package version published",
    description: "The core package received a new private registry version.",
    project: "core",
    reference: "1.4.0",
    time: "2 hours ago",
  },
  {
    title: "Lockfile state updated",
    description:
      "The current dependency record was attached to the native application.",
    project: "native-app",
    reference: "vix.lock",
    time: "Yesterday",
  },
  {
    title: "Workspace access changed",
    description: "Viewer access was granted to a new workspace member.",
    project: "cpp-platform",
    reference: "viewer",
    time: "2 days ago",
  },
];

function selectNavigation(item) {
  activeView.value = item.view;
}
</script>

<style scoped>
.product-preview {
  padding: clamp(82px, 9vw, 128px) 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

/* ========================================================
   SECTION HEADING
   ======================================================== */

.product-preview__heading {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(340px, 0.65fr);
  gap: clamp(42px, 7vw, 88px);
  align-items: end;
}

.product-preview__heading > div {
  display: grid;
  min-width: 0;
}

.product-preview__heading h2 {
  max-width: 790px;
  margin-top: 13px;
  color: var(--sb-text);
  font-size: clamp(2.5rem, 4.8vw, 4.7rem);
  font-weight: 680;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.product-preview__heading h2 span {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-soft);
}

.product-preview__introduction {
  display: grid;
  justify-items: start;
  gap: 18px;
}

.product-preview__introduction .sb-section-text {
  max-width: 610px;
  color: var(--sb-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.product-preview__notice {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 0 10px;
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 650;
}

/* ========================================================
   APPLICATION SHELL
   ======================================================== */

.preview-shell {
  display: grid;
  min-width: 0;
  min-height: 720px;
  grid-template-columns: 232px minmax(0, 1fr);
  overflow: hidden;
  margin-top: 48px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
}

/* ========================================================
   SIDEBAR
   ======================================================== */

.preview-sidebar {
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-right: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.preview-sidebar__brand {
  display: flex;
  min-height: 61px;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  border-bottom: 1px solid var(--sb-border);
}

.preview-sidebar__brand > span {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 8px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.75rem;
  font-weight: 760;
}

.preview-sidebar__brand strong {
  color: var(--sb-text);
  font-size: 0.8rem;
  font-weight: 650;
}

.preview-workspace {
  display: grid;
  min-width: 0;
  grid-template-columns: 34px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 9px;
  margin: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  outline: 0;
  background: var(--sb-surface);
  color: var(--sb-text);
  padding: 9px;
  font: inherit;
  text-align: left;
  cursor: default;
}

.preview-workspace:hover,
.preview-workspace:focus {
  border-color: var(--sb-border);
  background: var(--sb-surface);
}

.preview-workspace__avatar {
  display: grid;
  width: 33px;
  height: 33px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 8px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
  font-weight: 760;
}

.preview-workspace > span:nth-child(2) {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.preview-workspace small {
  color: var(--sb-text-muted);
  font-size: 0.65rem;
}

.preview-workspace strong {
  overflow: hidden;
  color: var(--sb-text);
  font-size: 0.73rem;
  font-weight: 620;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.preview-workspace svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--sb-text-muted);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.preview-navigation {
  display: grid;
  align-content: start;
  gap: 15px;
  padding: 4px 10px 18px;
}

.preview-navigation section {
  display: grid;
  gap: 3px;
}

.preview-navigation section > p {
  padding: 0 8px 4px;
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.preview-navigation button {
  display: grid;
  min-height: 36px;
  grid-template-columns: 25px minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: 0;
  background: transparent;
  color: var(--sb-text-soft);
  padding: 0 8px;
  font: inherit;
  font-size: 0.72rem;
  font-weight: 580;
  text-align: left;
  cursor: pointer;
}

.preview-navigation button:hover {
  border-color: var(--sb-border);
  background: var(--sb-surface);
  color: var(--sb-text);
}

.preview-navigation button.is-active {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.preview-navigation__icon {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
}

.preview-navigation__icon svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.preview-navigation__count {
  display: grid;
  min-width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  background: var(--sb-primary-hover);
  color: var(--sb-bg);
  padding-inline: 5px;
  font-size: 0.63rem;
}

.preview-account {
  display: grid;
  min-width: 0;
  grid-template-columns: 32px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 9px;
  margin-top: auto;
  padding: 12px 14px;
  border-top: 1px solid var(--sb-border);
}

.preview-account > span {
  display: grid;
  width: 31px;
  height: 31px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 50%;
  color: var(--sb-text-soft);
  font-size: 0.66rem;
  font-weight: 700;
}

.preview-account > div {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.preview-account strong {
  color: var(--sb-text);
  font-size: 0.72rem;
}

.preview-account small {
  color: var(--sb-text-muted);
  font-size: 0.64rem;
}

.preview-account svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  color: var(--sb-text-muted);
}

/* ========================================================
   APPLICATION
   ======================================================== */

.preview-application {
  display: grid;
  min-width: 0;
  grid-template-rows: auto 1fr;
  background: var(--sb-bg);
}

.preview-topbar {
  display: flex;
  min-height: 61px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 18px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-surface);
}

.preview-topbar > div:first-child {
  display: flex;
  align-items: center;
  gap: 8px;
}

.preview-topbar__status {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
}

.preview-topbar p {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
}

.preview-topbar__actions {
  display: flex;
  gap: 6px;
}

.preview-topbar__actions button {
  position: relative;
  display: grid;
  width: 34px;
  height: 34px;
  min-height: 34px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 8px;
  outline: 0;
  background: transparent;
  color: var(--sb-text-muted);
  padding: 0;
  cursor: default;
}

.preview-topbar__actions button:hover {
  border-color: var(--sb-border);
  background: transparent;
  color: var(--sb-text-muted);
}

.preview-topbar__actions svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.preview-topbar__actions button > span {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

.preview-content {
  min-width: 0;
  padding: 22px;
}

.preview-page-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.preview-page-heading > div:first-child {
  display: grid;
  min-width: 0;
  gap: 5px;
}

.preview-page-heading div:first-child > p {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
  font-weight: 700;
}

.preview-page-heading h3 {
  color: var(--sb-text);
  font-size: 1.65rem;
  font-weight: 660;
  letter-spacing: -0.035em;
}

.preview-page-heading div:first-child > span {
  color: var(--sb-text-muted);
  font-size: 0.76rem;
}

.preview-page-heading__actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
}

.preview-context-badge {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 0 10px;
  font-size: 0.68rem;
  font-weight: 620;
}

.preview-page-heading__actions button {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  gap: 7px;
  border: 1px solid var(--sb-primary-border);
  border-radius: var(--sb-radius-sm);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  padding: 0 11px;
  font: inherit;
  font-size: 0.7rem;
  font-weight: 650;
  cursor: default;
}

.preview-page-heading__actions button:hover {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
}

.preview-page-heading__actions svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ========================================================
   PREVIEW TABS
   ======================================================== */

.preview-tabs {
  display: flex;
  overflow-x: auto;
  gap: 4px;
  margin-top: 22px;
  border-bottom: 1px solid var(--sb-border);
}

.preview-tabs button {
  position: relative;
  min-height: 39px;
  flex: 0 0 auto;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--sb-text-muted);
  padding: 0 11px;
  font: inherit;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
}

.preview-tabs button::after {
  content: "";
  position: absolute;
  right: 10px;
  bottom: -1px;
  left: 10px;
  height: 2px;
  background: transparent;
}

.preview-tabs button:hover {
  background: transparent;
  color: var(--sb-text);
}

.preview-tabs button.is-active {
  color: var(--sb-primary-hover);
}

.preview-tabs button.is-active::after {
  background: var(--sb-primary-hover);
}

.preview-panel {
  min-width: 0;
  padding-top: 18px;
}

/* ========================================================
   SHARED PANEL ELEMENTS
   ======================================================== */

.panel-heading {
  display: flex;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 11px 14px;
  border-bottom: 1px solid var(--sb-border);
}

.panel-heading > div {
  display: grid;
  gap: 3px;
}

.panel-heading div > span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
}

.panel-heading h4 {
  color: var(--sb-text);
  font-size: 0.84rem;
  font-weight: 640;
}

.panel-heading button {
  border: 0;
  background: transparent;
  color: var(--sb-primary-hover);
  padding: 5px;
  font: inherit;
  font-size: 0.68rem;
  font-weight: 620;
  cursor: default;
}

.panel-heading button:hover {
  background: transparent;
  color: var(--sb-primary-hover);
}

.status-pill {
  display: inline-flex;
  min-height: 26px;
  align-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 0 8px;
  font-size: 0.65rem;
  font-weight: 650;
}

.status-pill--success {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.08);
  color: #22c55e;
}

.is-success {
  color: #22c55e !important;
}

/* ========================================================
   PROJECT VIEW
   ======================================================== */

.project-overview {
  display: grid;
  grid-template-columns:
    minmax(260px, 0.85fr)
    minmax(0, 1.15fr);
  gap: 12px;
}

.project-identity {
  display: grid;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.project-identity > header {
  display: grid;
  grid-template-columns: 45px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 15px;
  border-bottom: 1px solid var(--sb-border);
}

.project-identity__mark {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 10px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.7rem;
  font-weight: 760;
}

.project-identity header > div:last-child {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.project-identity header span {
  color: var(--sb-text-muted);
  font-size: 0.65rem;
}

.project-identity h4 {
  color: var(--sb-text);
  font-size: 0.92rem;
}

.project-identity header p {
  overflow: hidden;
  color: var(--sb-text-muted);
  font-size: 0.67rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-identity dl {
  display: grid;
  margin: 0;
  padding: 4px 14px;
}

.project-identity dl > div {
  display: flex;
  min-height: 38px;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-bottom: 1px solid var(--sb-border);
}

.project-identity dl > div:last-child {
  border-bottom: 0;
}

.project-identity dt,
.project-identity dd {
  font-size: 0.67rem;
}

.project-identity dt {
  color: var(--sb-text-muted);
}

.project-identity dd {
  margin: 0;
  color: var(--sb-text);
  font-weight: 620;
  text-align: right;
}

.project-identity > footer {
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 14px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.project-identity footer code {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.66rem;
}

.project-identity footer span {
  color: var(--sb-text-muted);
  font-size: 0.63rem;
}

.project-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
}

.project-summary article {
  display: grid;
  min-width: 0;
  align-content: start;
  gap: 7px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
  padding: 15px;
}

.project-summary span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.64rem;
  font-weight: 700;
  text-transform: uppercase;
}

.project-summary strong {
  overflow-wrap: anywhere;
  color: var(--sb-text);
  font-size: 1rem;
  font-weight: 650;
}

.project-summary small {
  color: var(--sb-text-muted);
  font-size: 0.66rem;
  line-height: 1.4;
}

.project-records {
  display: grid;
  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(280px, 0.95fr);
  gap: 12px;
  margin-top: 12px;
}

.build-report-panel,
.project-activity-panel,
.activity-stream,
.activity-context {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.build-report-details {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0;
  padding: 6px 14px;
}

.build-report-details > div {
  display: grid;
  gap: 4px;
  padding: 12px 9px;
  border-bottom: 1px solid var(--sb-border);
}

.build-report-details dt {
  color: var(--sb-text-muted);
  font-size: 0.64rem;
}

.build-report-details dd {
  margin: 0;
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.71rem;
  font-weight: 620;
}

.build-report-panel > footer {
  display: flex;
  min-height: 45px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 9px 14px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.build-report-panel footer > div {
  display: flex;
  align-items: center;
  gap: 7px;
}

.build-report-panel footer span,
.build-report-panel footer time {
  color: var(--sb-text-muted);
  font-size: 0.63rem;
}

.build-report-panel footer code {
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
}

.record-list {
  display: grid;
}

.record-list article {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  min-height: 62px;
  padding: 9px 13px;
  border-bottom: 1px solid var(--sb-border);
}

.record-list article:last-child {
  border-bottom: 0;
}

.record-list__icon {
  display: grid;
  width: 33px;
  height: 33px;
  place-items: center;
  border: 1px solid var(--sb-border);
  border-radius: 8px;
  color: var(--sb-primary-hover);
}

.record-list__icon svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.record-list article > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.record-list strong {
  color: var(--sb-text);
  font-size: 0.72rem;
  font-weight: 620;
}

.record-list p,
.record-list time {
  color: var(--sb-text-muted);
  font-size: 0.64rem;
}

/* ========================================================
   REGISTRY VIEW
   ======================================================== */

.registry-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
}

.registry-summary article {
  display: grid;
  gap: 6px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
  padding: 15px;
}

.registry-summary span {
  color: var(--sb-text-muted);
  font-size: 0.67rem;
}

.registry-summary strong {
  color: var(--sb-text);
  font-size: 1.05rem;
  font-weight: 650;
}

.registry-summary small {
  color: var(--sb-text-muted);
  font-size: 0.64rem;
}

.registry-table-wrapper {
  min-width: 0;
  overflow-x: auto;
  margin-top: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.registry-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

.registry-table th,
.registry-table td {
  padding: 11px 13px;
  border-bottom: 1px solid var(--sb-border);
  text-align: left;
}

.registry-table th {
  background: var(--sb-bg-soft);
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.63rem;
  font-weight: 700;
  text-transform: uppercase;
}

.registry-table td {
  color: var(--sb-text-soft);
  font-size: 0.69rem;
}

.registry-table tbody tr:last-child td {
  border-bottom: 0;
}

.registry-table td code {
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.69rem;
}

.package-identity {
  display: grid;
  grid-template-columns: 33px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
}

.package-identity > span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid var(--sb-primary-border);
  border-radius: 8px;
  background: var(--sb-primary-soft);
  color: var(--sb-primary-hover);
  font-size: 0.63rem;
  font-weight: 750;
}

.package-identity > div {
  display: grid;
  gap: 2px;
}

.package-identity strong {
  color: var(--sb-text);
  font-size: 0.72rem;
}

.package-identity small {
  color: var(--sb-text-muted);
  font-size: 0.62rem;
}

.registry-footer {
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 12px;
  padding: 10px 14px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.registry-footer > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.registry-footer__status {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
}

.registry-footer p {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
}

.registry-footer code {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
}

/* ========================================================
   ACTIVITY VIEW
   ======================================================== */

.activity-layout {
  display: grid;
  grid-template-columns:
    minmax(0, 1.25fr)
    minmax(240px, 0.75fr);
  gap: 12px;
}

.activity-list {
  display: grid;
  padding: 0 14px;
}

.activity-list article {
  display: grid;
  grid-template-columns: 15px minmax(0, 1fr);
  gap: 10px;
  padding: 16px 0;
  border-bottom: 1px solid var(--sb-border);
}

.activity-list article:last-child {
  border-bottom: 0;
}

.activity-list__marker {
  width: 8px;
  height: 8px;
  margin-top: 5px;
  border: 2px solid var(--sb-primary-hover);
  border-radius: 50%;
  background: var(--sb-surface);
}

.activity-list article > div {
  display: grid;
  gap: 7px;
}

.activity-list article header {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.activity-list strong {
  color: var(--sb-text);
  font-size: 0.75rem;
  font-weight: 630;
}

.activity-list time {
  color: var(--sb-text-muted);
  font-size: 0.63rem;
  white-space: nowrap;
}

.activity-list article > div > p {
  color: var(--sb-text-muted);
  font-size: 0.69rem;
  line-height: 1.5;
}

.activity-list__context {
  display: flex;
  align-items: center;
  gap: 7px;
}

.activity-list__context span,
.activity-list__context code {
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  color: var(--sb-text-muted);
  padding: 4px 7px;
  font-size: 0.62rem;
}

.activity-list__context code {
  font-family: var(--sb-font-mono);
}

.activity-context {
  display: grid;
  align-content: start;
}

.activity-context > header {
  display: grid;
  gap: 4px;
  padding: 15px;
  border-bottom: 1px solid var(--sb-border);
}

.activity-context header span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.64rem;
  font-weight: 700;
  text-transform: uppercase;
}

.activity-context h4 {
  color: var(--sb-text);
  font-size: 0.84rem;
}

.activity-context dl {
  display: grid;
  margin: 0;
  padding: 5px 14px;
}

.activity-context dl > div {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid var(--sb-border);
}

.activity-context dl > div:last-child {
  border-bottom: 0;
}

.activity-context dt {
  color: var(--sb-text-muted);
  font-size: 0.68rem;
}

.activity-context dd {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.72rem;
  font-weight: 650;
}

.activity-context > footer {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 13px 14px;
  border-top: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.activity-context footer > span {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  margin-top: 4px;
  border-radius: 50%;
  background: var(--sb-primary-hover);
}

.activity-context footer p {
  color: var(--sb-text-muted);
  font-size: 0.65rem;
  line-height: 1.5;
}

/* ========================================================
   SECTION FOOTER
   ======================================================== */

.product-preview__footer {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 36px;
  border-top: 1px solid var(--sb-border);
  border-bottom: 1px solid var(--sb-border);
}

.product-preview__footer > div {
  display: grid;
  grid-template-columns: 31px minmax(0, 1fr);
  gap: 10px;
  padding: 20px 18px;
  border-right: 1px solid var(--sb-border);
}

.product-preview__footer > div:first-child {
  padding-left: 0;
}

.product-preview__footer > div:last-child {
  border-right: 0;
  padding-right: 0;
}

.product-preview__footer span {
  color: var(--sb-primary-hover);
  font-family: var(--sb-font-mono);
  font-size: 0.67rem;
  font-weight: 750;
}

.product-preview__footer p {
  color: var(--sb-text-muted);
  font-size: 0.72rem;
  line-height: 1.55;
}

/* ========================================================
   RESPONSIVE
   ======================================================== */

@media (max-width: 1040px) {
  .preview-shell {
    grid-template-columns: 194px minmax(0, 1fr);
  }

  .preview-sidebar__brand strong {
    display: none;
  }

  .project-overview,
  .project-records {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .product-preview__heading {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .preview-shell {
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .preview-sidebar {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .preview-sidebar__brand {
    border-bottom: 0;
  }

  .preview-sidebar__brand strong {
    display: block;
  }

  .preview-workspace {
    justify-self: end;
    width: min(260px, calc(100% - 12px));
  }

  .preview-navigation,
  .preview-account {
    display: none;
  }

  .project-summary,
  .registry-summary {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    overflow-x: auto;
  }

  .activity-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .product-preview {
    padding: 64px 0;
  }

  .product-preview__heading h2 {
    font-size: clamp(2.3rem, 11vw, 3.5rem);
  }

  .preview-sidebar {
    grid-template-columns: 1fr;
  }

  .preview-sidebar__brand {
    min-height: 54px;
  }

  .preview-workspace {
    width: auto;
    justify-self: stretch;
    margin-top: 0;
  }

  .preview-topbar {
    min-height: 52px;
    padding-inline: 13px;
  }

  .preview-content {
    padding: 16px 13px;
  }

  .preview-page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .preview-page-heading__actions {
    width: 100%;
    justify-content: space-between;
  }

  .project-summary,
  .registry-summary {
    grid-template-columns: 1fr;
    overflow: visible;
  }

  .build-report-details {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-preview__footer {
    grid-template-columns: 1fr;
  }

  .product-preview__footer > div,
  .product-preview__footer > div:first-child,
  .product-preview__footer > div:last-child {
    padding: 17px 0;
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .product-preview__footer > div:last-child {
    border-bottom: 0;
  }
}

@media (max-width: 460px) {
  .preview-page-heading__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .preview-context-badge,
  .preview-page-heading__actions button {
    justify-content: center;
  }

  .project-identity > footer,
  .build-report-panel > footer,
  .registry-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .build-report-details {
    grid-template-columns: 1fr;
  }

  .activity-list article header {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
