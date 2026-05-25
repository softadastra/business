<template>
  <section class="hero-section">
    <div class="hero-section__inner sb-container">
      <!-- LEFT: Copy -->
      <div class="hero-section__content">
        <h1 class="hero-section__title">
          Test your system before the network breaks it.
        </h1>

        <p class="hero-section__text">
          Converdict verifies data loss, duplicate writes, retry safety, and
          recovery under real network failures.
        </p>

        <div class="hero-section__actions">
          <BaseButton to="/contact" size="lg"> Request a demo </BaseButton>

          <BaseButton to="/product" variant="secondary" size="lg">
            Read the docs
          </BaseButton>
        </div>

        <p class="hero-section__trust">
          Built for critical APIs, queues, sync engines, and distributed
          systems.
        </p>
      </div>

      <!-- RIGHT: Dashboard mock -->
      <aside
        class="dashboard"
        :data-phase="phase.id"
        aria-label="Converdict reliability run dashboard"
      >
        <!-- Header -->
        <header class="dashboard__header">
          <div class="dashboard__brand">
            <span class="dashboard__dot" aria-hidden="true"></span>
            <div>
              <strong>Converdict Reliability Run</strong>
              <span class="dashboard__path">
                run / dist-api-prod / scenario-07
              </span>
            </div>
          </div>

          <div class="dashboard__status" :class="`is-${phase.tone}`">
            <span class="dashboard__status-dot" aria-hidden="true"></span>
            {{ phase.statusLabel }}
          </div>
        </header>

        <div class="dashboard__body">
          <!-- Sidebar -->
          <nav class="dashboard__sidebar" aria-label="Sections">
            <button
              v-for="item in sidebar"
              :key="item.id"
              class="dashboard__nav-item"
              :class="{ 'is-active': item.id === activeNav }"
              type="button"
              tabindex="-1"
            >
              <span class="dashboard__nav-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path :d="item.icon" />
                </svg>
              </span>
              {{ item.label }}
            </button>
          </nav>

          <!-- Main content -->
          <div class="dashboard__main">
            <!-- Metrics row -->
            <div class="dashboard__metrics">
              <div
                v-for="m in metrics"
                :key="m.label"
                class="metric"
                :class="`metric--${m.tone}`"
              >
                <span class="metric__label">{{ m.label }}</span>
                <strong class="metric__value">{{ m.value }}</strong>
              </div>
            </div>

            <!-- Central animation: scenario diagram -->
            <div class="scenario" role="img" :aria-label="phase.aria">
              <!-- Service A node -->
              <div class="node node--service">
                <span class="node__label">Service A</span>
                <span class="node__sub">producer</span>
                <span
                  class="node__pulse"
                  :class="{
                    'is-on': phase.id === 'baseline' || phase.id === 'retry',
                  }"
                  aria-hidden="true"
                ></span>
              </div>

              <!-- WAL / Outbox -->
              <div class="node node--wal">
                <span class="node__label">WAL · Outbox</span>
                <span class="node__sub">{{ outboxCount }} queued</span>
                <div class="node__bar" aria-hidden="true">
                  <span
                    class="node__bar-fill"
                    :style="{ width: outboxFill + '%' }"
                  ></span>
                </div>
              </div>

              <!-- Network link -->
              <svg
                class="link"
                viewBox="0 0 320 80"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="8" y1="40" x2="312" y2="40" class="link__base" />
                <line
                  x1="8"
                  y1="40"
                  x2="312"
                  y2="40"
                  class="link__active"
                  :class="`is-${linkState}`"
                />
                <g v-if="linkState === 'broken'" class="link__break">
                  <line x1="148" y1="28" x2="172" y2="52" />
                  <line x1="172" y1="28" x2="148" y2="52" />
                </g>
                <circle
                  v-for="(p, i) in packets"
                  :key="i"
                  :cx="p.x"
                  cy="40"
                  r="3.5"
                  :class="`packet packet--${p.kind}`"
                />
              </svg>

              <!-- Remote node -->
              <div class="node node--remote">
                <span class="node__label">Remote</span>
                <span class="node__sub">{{ remoteSub }}</span>
                <span
                  class="node__pulse"
                  :class="{
                    'is-on':
                      phase.id === 'baseline' ||
                      phase.id === 'recovery' ||
                      phase.id === 'verdict',
                    'is-off': phase.id === 'failure' || phase.id === 'retry',
                  }"
                  aria-hidden="true"
                ></span>
              </div>

              <!-- Phase badge overlay -->
              <div
                class="scenario__badge"
                :class="`is-${phase.tone}`"
                aria-live="polite"
              >
                {{ phase.badge }}
              </div>

              <!-- Verdict overlay -->
              <transition name="verdict">
                <div v-if="phase.id === 'verdict'" class="verdict">
                  <div class="verdict__title">
                    <svg
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Safe under failure
                  </div>
                  <ul class="verdict__list">
                    <li>No data loss</li>
                    <li>No duplicate writes</li>
                    <li>Converged after recovery</li>
                  </ul>
                </div>
              </transition>
            </div>

            <!-- Timeline -->
            <ol class="timeline" aria-label="Run phases">
              <li
                v-for="(p, i) in phases"
                :key="p.id"
                class="timeline__step"
                :class="{
                  'is-active': p.id === phase.id,
                  'is-done': i < phaseIndex,
                }"
              >
                <span class="timeline__index">{{ i + 1 }}</span>
                <span class="timeline__label">{{ p.shortLabel }}</span>
              </li>
            </ol>

            <!-- Log panel -->
            <div class="logs" aria-label="Run log">
              <div class="logs__head">
                <span class="logs__title">Run log</span>
                <span class="logs__meta">live · scenario-07</span>
              </div>
              <ul class="logs__list">
                <li
                  v-for="line in visibleLogs"
                  :key="line.id"
                  class="logs__line"
                  :class="`logs__line--${line.tone}`"
                >
                  <span class="logs__time">{{ line.t }}</span>
                  <span class="logs__tag">{{ line.tag }}</span>
                  <span class="logs__msg">{{ line.msg }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import BaseButton from "../ui/BaseButton.vue";

/* ---------- Static config ---------- */

const sidebar = [
  {
    id: "overview",
    label: "Overview",
    icon: "M2 3h5v5H2zM9 3h5v5H9zM2 10h5v3H2zM9 10h5v3H9z",
  },
  { id: "failure", label: "Failure tests", icon: "M8 2v7M8 12v2M3 8h2M11 8h2" },
  {
    id: "integrity",
    label: "Data integrity",
    icon: "M3 5l5-2 5 2v4c0 3-2.5 4.5-5 5-2.5-.5-5-2-5-5z",
  },
  {
    id: "retry",
    label: "Retry safety",
    icon: "M3 8a5 5 0 019-3M13 8a5 5 0 01-9 3M11 4l2 1-1 2M5 12l-2-1 1-2",
  },
  { id: "recovery", label: "Recovery", icon: "M2 11l3-3 2 2 5-5 2 2" },
  { id: "reports", label: "Reports", icon: "M3 2h7l3 3v9H3zM10 2v3h3" },
];
const activeNav = "overview";

const phases = [
  {
    id: "baseline",
    statusLabel: "Running test",
    badge: "Baseline · writes accepted",
    shortLabel: "Baseline",
    tone: "neutral",
    aria: "Service A is writing operations. WAL records each one. Remote is healthy.",
  },
  {
    id: "failure",
    statusLabel: "Network failure detected",
    badge: "Network failure",
    shortLabel: "Failure",
    tone: "danger",
    aria: "Network link broken. Writes are queued in the outbox. Remote is unreachable.",
  },
  {
    id: "retry",
    statusLabel: "Retry storm",
    badge: "Idempotency protected",
    shortLabel: "Retry",
    tone: "warning",
    aria: "Multiple retry attempts. Converdict marks duplicate writes as blocked.",
  },
  {
    id: "recovery",
    statusLabel: "Recovery started",
    badge: "Recovery in progress",
    shortLabel: "Recovery",
    tone: "info",
    aria: "Connection restored. Outbox flushes queued operations to remote.",
  },
  {
    id: "verdict",
    statusLabel: "Verdict ready",
    badge: "Verdict ready",
    shortLabel: "Verdict",
    tone: "success",
    aria: "Verdict ready. No data loss, no duplicate writes, system converged.",
  },
];

const metrics = [
  { label: "Data loss", value: "0", tone: "success" },
  { label: "Duplicate writes", value: "0", tone: "success" },
  { label: "Retry safety", value: "Pass", tone: "success" },
  { label: "Recovery time", value: "1.8s", tone: "neutral" },
  { label: "Convergence", value: "Verified", tone: "success" },
];

/* ---------- Animation state ---------- */

const phaseIndex = ref(0);
const phase = computed(() => phases[phaseIndex.value]);

const linkState = computed(() => {
  switch (phase.value.id) {
    case "baseline":
      return "ok";
    case "failure":
      return "broken";
    case "retry":
      return "broken";
    case "recovery":
      return "recovering";
    case "verdict":
      return "ok";
    default:
      return "ok";
  }
});

const outboxCount = computed(() => {
  switch (phase.value.id) {
    case "baseline":
      return 0;
    case "failure":
      return 4;
    case "retry":
      return 7;
    case "recovery":
      return 2;
    case "verdict":
      return 0;
    default:
      return 0;
  }
});

const outboxFill = computed(() => {
  switch (phase.value.id) {
    case "baseline":
      return 8;
    case "failure":
      return 55;
    case "retry":
      return 90;
    case "recovery":
      return 30;
    case "verdict":
      return 5;
    default:
      return 0;
  }
});

const remoteSub = computed(() => {
  switch (phase.value.id) {
    case "baseline":
      return "healthy";
    case "failure":
      return "unreachable";
    case "retry":
      return "unreachable";
    case "recovery":
      return "catching up";
    case "verdict":
      return "converged";
    default:
      return "—";
  }
});

/* Packets travelling on the link, animated independently */
const packets = ref([]);
let packetTimer = null;

function spawnPacket(kind) {
  const id = Math.random();
  packets.value.push({ id, x: 8, kind });
  const startedAt = performance.now();
  const duration = kind === "blocked" ? 900 : 1400;

  const step = (now) => {
    const t = Math.min(1, (now - startedAt) / duration);
    const idx = packets.value.findIndex((p) => p.id === id);
    if (idx === -1) return;

    if (kind === "blocked") {
      // stops mid-way at the break
      packets.value[idx].x = 8 + (160 - 8) * t;
    } else {
      packets.value[idx].x = 8 + (312 - 8) * t;
    }

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      packets.value.splice(idx, 1);
    }
  };
  requestAnimationFrame(step);
}

function startPacketLoop() {
  packetTimer = window.setInterval(() => {
    if (prefersReducedMotion) return;
    const id = phase.value.id;
    if (id === "baseline") spawnPacket("ok");
    else if (id === "failure") spawnPacket("blocked");
    else if (id === "retry") {
      spawnPacket("blocked");
      setTimeout(() => spawnPacket("blocked"), 250);
    } else if (id === "recovery") spawnPacket("flush");
    else if (id === "verdict") spawnPacket("ok");
  }, 700);
}

/* ---------- Logs ---------- */

const logTemplates = {
  baseline: [
    { tag: "write", msg: "write accepted locally", tone: "ok" },
    { tag: "wal", msg: "WAL entry persisted", tone: "ok" },
    { tag: "api", msg: "ack returned to client", tone: "ok" },
  ],
  failure: [
    { tag: "net", msg: "network failure injected", tone: "danger" },
    { tag: "outbox", msg: "operation queued (id 0x4a1f)", tone: "warn" },
    { tag: "remote", msg: "remote node unreachable", tone: "danger" },
  ],
  retry: [
    { tag: "retry", msg: "retry attempt #1 detected", tone: "warn" },
    { tag: "guard", msg: "duplicate write blocked", tone: "ok" },
    { tag: "retry", msg: "retry attempt #2 detected", tone: "warn" },
    { tag: "guard", msg: "duplicate write blocked", tone: "ok" },
  ],
  recovery: [
    { tag: "net", msg: "link restored", tone: "info" },
    { tag: "outbox", msg: "flushing 4 queued operations", tone: "info" },
    { tag: "remote", msg: "remote state catching up", tone: "info" },
  ],
  verdict: [
    { tag: "verify", msg: "remote state converged", tone: "ok" },
    {
      tag: "verdict",
      msg: "verdict generated: safe under failure",
      tone: "ok",
    },
  ],
};

let logSeq = 0;
const logs = ref([]);
const VISIBLE_LOG_COUNT = 6;

const visibleLogs = computed(() => logs.value.slice(-VISIBLE_LOG_COUNT));

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function pushLogsFor(phaseId) {
  const tpl = logTemplates[phaseId] || [];
  tpl.forEach((line, i) => {
    setTimeout(() => {
      logs.value.push({
        id: ++logSeq,
        t: nowStamp(),
        tag: line.tag,
        msg: line.msg,
        tone: line.tone,
      });
      // Cap log buffer
      if (logs.value.length > 40) logs.value.splice(0, logs.value.length - 40);
    }, i * 380);
  });
}

/* ---------- Phase loop ---------- */

let phaseTimer = null;
const PHASE_DURATIONS = {
  baseline: 3200,
  failure: 3000,
  retry: 3400,
  recovery: 2800,
  verdict: 3800,
};

function scheduleNextPhase() {
  const current = phase.value.id;
  phaseTimer = window.setTimeout(() => {
    phaseIndex.value = (phaseIndex.value + 1) % phases.length;
    pushLogsFor(phase.value.id);
    scheduleNextPhase();
  }, PHASE_DURATIONS[current]);
}

/* ---------- Reduced motion ---------- */

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Lifecycle ---------- */

onMounted(() => {
  // Seed initial logs
  pushLogsFor(phase.value.id);

  if (prefersReducedMotion) {
    // Show the verdict (most informative state) and stop.
    phaseIndex.value = phases.length - 1;
    pushLogsFor(phase.value.id);
    return;
  }

  scheduleNextPhase();
  startPacketLoop();
});

onBeforeUnmount(() => {
  if (phaseTimer) clearTimeout(phaseTimer);
  if (packetTimer) clearInterval(packetTimer);
  packets.value = [];
});
</script>

<style scoped>
/* ==========================================================================
   Hero layout
   ========================================================================== */

.hero-section {
  min-height: calc(100vh - var(--sb-header-height));
  padding: 72px 0;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.hero-section__inner {
  display: grid;
  grid-template-columns: minmax(320px, 0.68fr) minmax(760px, 1.32fr);
  gap: clamp(40px, 4vw, 72px);
  align-items: start;
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
}

.hero-section__content {
  display: grid;
  justify-items: start;
  max-width: 520px;
  padding-top: 132px;
}

.hero-section__title {
  margin: 0;
  color: var(--sb-text);
  font-size: clamp(2.1rem, 3.2vw, 3.4rem);
  font-weight: 780;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.hero-section__text {
  max-width: 460px;
  margin-top: 22px;
  color: var(--sb-text-soft);
  font-size: clamp(0.98rem, 1.15vw, 1.08rem);
  line-height: 1.65;
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero-section__trust {
  max-width: 440px;
  margin-top: 26px;
  color: var(--sb-text-muted);
  font-size: 0.84rem;
  line-height: 1.55;
}

/* ==========================================================================
   Dashboard shell
   ========================================================================== */

.dashboard {
  display: grid;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #1f2330;
  border-radius: 16px;
  background: #0e1117;
  color: #d6d9e0;
  font-family: var(--sb-font-mono, ui-monospace, SFMono-Regular, monospace);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 28px 80px -32px rgba(0, 0, 0, 0.72),
    0 12px 28px -14px rgba(0, 0, 0, 0.54);
}

.dashboard__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;
  padding: 12px 16px;
  border-bottom: 1px solid #1f2330;
  background: #11151d;
}

.dashboard__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.dashboard__dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #ff6a00;
  box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.15);
}

.dashboard__brand strong {
  display: block;
  overflow: hidden;
  color: #f3f4f7;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard__path {
  display: block;
  overflow: hidden;
  color: #6b7384;
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard__status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  border: 1px solid #2a3142;
  border-radius: 999px;
  padding: 6px 11px;
  background: #161b25;
  color: #cbd0db;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.dashboard__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #6b7384;
}

.dashboard__status.is-neutral .dashboard__status-dot {
  background: #94a3b8;
}

.dashboard__status.is-danger {
  border-color: #4a1f24;
  background: #21151a;
  color: #ffb3b3;
}

.dashboard__status.is-danger .dashboard__status-dot {
  background: #ef4444;
  animation: blink 1s infinite;
}

.dashboard__status.is-warning {
  border-color: #4a3217;
  background: #221a10;
  color: #ffd591;
}

.dashboard__status.is-warning .dashboard__status-dot {
  background: #ff9a3c;
  animation: blink 1s infinite;
}

.dashboard__status.is-info {
  border-color: #1f2a4d;
  background: #141a2a;
  color: #b6c8ff;
}

.dashboard__status.is-info .dashboard__status-dot {
  background: #6f87ff;
}

.dashboard__status.is-success {
  border-color: #1f4329;
  background: #131e17;
  color: #b8f0c3;
}

.dashboard__status.is-success .dashboard__status-dot {
  background: #34c759;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }
}

/* ==========================================================================
   Dashboard body
   ========================================================================== */

.dashboard__body {
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr);
  min-height: 540px;
}

.dashboard__sidebar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 8px;
  border-right: 1px solid #1f2330;
  background: #0c0f15;
}

.dashboard__nav-item {
  display: flex;
  align-items: center;
  gap: 9px;
  border: none;
  border-radius: 6px;
  padding: 7px 10px;
  background: transparent;
  color: #8b93a4;
  font-family: inherit;
  font-size: 0.76rem;
  font-weight: 600;
  text-align: left;
  cursor: default;
}

.dashboard__nav-item.is-active {
  background: #1a1f2b;
  color: #f3f4f7;
}

.dashboard__nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: currentColor;
}

.dashboard__nav-icon svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dashboard__nav-item.is-active .dashboard__nav-icon {
  color: #ff8a3c;
}

.dashboard__main {
  display: grid;
  grid-template-rows: auto minmax(230px, 1fr) auto minmax(132px, auto);
  gap: 14px;
  min-width: 0;
  padding: 14px 16px 16px;
}

/* ==========================================================================
   Metrics
   ========================================================================== */

.dashboard__metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(96px, 1fr));
  gap: 8px;
}

.metric {
  display: grid;
  gap: 4px;
  min-width: 0;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 10px 11px;
  background: #11151d;
}

.metric__label {
  overflow: hidden;
  color: #6b7384;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.metric__value {
  overflow: hidden;
  color: #f3f4f7;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.metric--success .metric__value {
  color: #5fe07a;
}

.metric--neutral .metric__value {
  color: #f3f4f7;
}

/* ==========================================================================
   Scenario
   ========================================================================== */

.scenario {
  position: relative;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) minmax(190px, 1.15fr) minmax(
      150px,
      1fr
    );
  align-items: center;
  gap: 14px;
  min-height: 230px;
  border: 1px solid #1f2330;
  border-radius: 12px;
  padding: 24px 18px 28px;
  background: #11151d;
}

.node {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 4px;
  min-width: 0;
  border: 1px solid #2a3142;
  border-radius: 10px;
  padding: 12px 14px;
  background: #161b25;
}

.node--wal {
  background: #1a1f2b;
}

.node__label {
  overflow: hidden;
  color: #f3f4f7;
  font-size: 0.78rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.node__sub {
  overflow: hidden;
  color: #8b93a4;
  font-size: 0.7rem;
  letter-spacing: 0.01em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.node__bar {
  height: 4px;
  margin-top: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: #1f2330;
}

.node__bar-fill {
  display: block;
  height: 100%;
  background: #ff8a3c;
  transition: width 0.6s ease;
}

.node__pulse {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #2a3142;
}

.node__pulse.is-on {
  background: #34c759;
  box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.18);
  animation: pulse 1.6s ease-in-out infinite;
}

.node__pulse.is-off {
  background: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

.link {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: calc(33.33% - 14px);
  right: calc(33.33% - 14px);
  height: 56px;
  transform: translateY(-50%);
  pointer-events: none;
}

.link__base {
  stroke: #2a3142;
  stroke-width: 2;
  stroke-dasharray: 4 4;
}

.link__active {
  stroke: #34c759;
  stroke-width: 2;
  stroke-linecap: round;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.link__active.is-ok {
  stroke: #34c759;
  opacity: 1;
}

.link__active.is-broken {
  stroke: #ef4444;
  stroke-dasharray: 6 8;
  opacity: 1;
}

.link__active.is-recovering {
  stroke: #ff8a3c;
  stroke-dasharray: 10 6;
  opacity: 1;
  animation: dash 1.2s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -32;
  }
}

.link__break line {
  stroke: #ef4444;
  stroke-width: 2.5;
  stroke-linecap: round;
}

.packet {
  transition: cx 0.05s linear;
}

.packet--ok {
  fill: #34c759;
}

.packet--blocked {
  fill: #ef4444;
}

.packet--flush {
  fill: #ff8a3c;
}

.scenario__badge {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
  border: 1px solid #2a3142;
  border-radius: 999px;
  padding: 4px 10px;
  background: #161b25;
  color: #cbd0db;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.scenario__badge.is-danger {
  border-color: #4a1f24;
  background: #21151a;
  color: #ffb3b3;
}

.scenario__badge.is-warning {
  border-color: #4a3217;
  background: #221a10;
  color: #ffd591;
}

.scenario__badge.is-info {
  border-color: #1f2a4d;
  background: #141a2a;
  color: #b6c8ff;
}

.scenario__badge.is-success {
  border-color: #1f4329;
  background: #131e17;
  color: #b8f0c3;
}

/* ==========================================================================
   Verdict
   ========================================================================== */

.verdict {
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 4;
  display: grid;
  gap: 6px;
  min-width: 240px;
  transform: translateX(-50%);
  border: 1px solid #1f4329;
  border-radius: 8px;
  padding: 8px 12px;
  background: rgba(19, 30, 23, 0.96);
  color: #b8f0c3;
  font-size: 0.72rem;
}

.verdict__title {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5fe07a;
  font-weight: 800;
}

.verdict__list {
  display: grid;
  gap: 2px;
  margin: 0;
  padding-left: 18px;
  color: #cbd0db;
}

.verdict-enter-active,
.verdict-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.verdict-enter-from,
.verdict-leave-to {
  opacity: 0;
  transform: translate(-50%, 6px);
}

/* ==========================================================================
   Timeline
   ========================================================================== */

.timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline__step {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  border: 1px solid #1f2330;
  border-radius: 6px;
  padding: 7px 9px;
  background: #11151d;
  color: #6b7384;
  font-size: 0.7rem;
  font-weight: 700;
}

.timeline__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #1f2330;
  color: #8b93a4;
  font-size: 0.62rem;
}

.timeline__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.timeline__step.is-done {
  border-color: #2a3142;
  color: #cbd0db;
}

.timeline__step.is-done .timeline__index {
  background: #2a3142;
  color: #f3f4f7;
}

.timeline__step.is-active {
  border-color: #ff6a00;
  background: #1f1610;
  color: #ffd591;
}

.timeline__step.is-active .timeline__index {
  background: #ff6a00;
  color: #0e1117;
}

/* ==========================================================================
   Logs
   ========================================================================== */

.logs {
  display: grid;
  gap: 6px;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 10px 12px 12px;
  background: #0c0f15;
}

.logs__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid #1f2330;
  padding-bottom: 6px;
}

.logs__title {
  color: #cbd0db;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.logs__meta {
  color: #6b7384;
  font-size: 0.68rem;
}

.logs__list {
  display: grid;
  gap: 3px;
  min-height: 120px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs__line {
  display: grid;
  grid-template-columns: 64px 64px minmax(0, 1fr);
  gap: 8px;
  align-items: baseline;
  font-size: 0.74rem;
  line-height: 1.4;
  animation: logIn 0.25s ease;
}

@keyframes logIn {
  from {
    opacity: 0;
    transform: translateY(2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logs__time {
  color: #6b7384;
  font-size: 0.68rem;
}

.logs__tag {
  color: #8b93a4;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.logs__msg {
  min-width: 0;
  overflow: hidden;
  color: #cbd0db;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.logs__line--ok .logs__tag {
  color: #5fe07a;
}

.logs__line--warn .logs__tag {
  color: #ff9a3c;
}

.logs__line--danger .logs__tag {
  color: #ef4444;
}

.logs__line--info .logs__tag {
  color: #6f87ff;
}

/* ==========================================================================
   Responsive
   ========================================================================== */

@media (min-width: 1500px) {
  .hero-section__inner {
    grid-template-columns: minmax(340px, 0.62fr) minmax(860px, 1.38fr);
  }

  .hero-section__content {
    padding-top: 142px;
  }

  .dashboard__body {
    min-height: 560px;
  }

  .scenario {
    min-height: 250px;
  }
}

@media (max-width: 1320px) {
  .hero-section__inner {
    grid-template-columns: minmax(300px, 0.66fr) minmax(680px, 1.34fr);
    gap: 40px;
  }

  .hero-section__content {
    padding-top: 118px;
  }

  .hero-section__title {
    font-size: clamp(2rem, 3vw, 3rem);
  }

  .dashboard__body {
    min-height: 520px;
  }
}

@media (max-width: 1160px) {
  .hero-section {
    min-height: auto;
    padding: 64px 0;
  }

  .hero-section__inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .hero-section__content {
    max-width: 720px;
    padding-top: 0;
  }

  .dashboard {
    width: 100%;
  }

  .dashboard__body {
    min-height: 520px;
  }
}

@media (max-width: 860px) {
  .hero-section {
    padding: 56px 0 52px;
  }

  .hero-section__inner {
    width: min(100% - 32px, 1440px);
  }

  .hero-section__title {
    font-size: clamp(2.1rem, 9vw, 3rem);
  }

  .dashboard__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .dashboard__body {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .dashboard__sidebar {
    flex-direction: row;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid #1f2330;
    padding: 8px;
  }

  .dashboard__nav-item {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .dashboard__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scenario {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 58px 14px 18px;
  }

  .link {
    display: none;
  }

  .scenario__badge {
    top: 14px;
  }

  .node--wal {
    order: 2;
  }

  .node--remote {
    order: 3;
  }

  .timeline {
    grid-template-columns: repeat(5, minmax(40px, 1fr));
  }

  .timeline__label {
    display: none;
  }

  .timeline__step {
    justify-content: center;
    padding: 7px 6px;
  }

  .logs__line {
    grid-template-columns: 54px 54px minmax(0, 1fr);
  }
}

@media (max-width: 520px) {
  .hero-section {
    padding: 48px 0;
  }

  .hero-section__actions {
    width: 100%;
    flex-direction: column;
  }

  .hero-section__actions :deep(.base-button) {
    width: 100%;
  }

  .dashboard__main {
    padding: 12px;
  }

  .dashboard__metrics {
    grid-template-columns: 1fr;
  }

  .logs__line {
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 4px 0;
  }

  .logs__msg {
    white-space: normal;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dashboard__status-dot,
  .node__pulse.is-on,
  .link__active.is-recovering,
  .logs__line {
    animation: none;
  }
}
</style>
