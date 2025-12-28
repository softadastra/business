<template>
  <section id="use-cases" class="sa-section">
    <div class="sa-container">
      <div class="head">
        <div>
          <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
            Use cases
          </h2>
          <p class="sa-subtitle" style="max-width: 860px">
            Built for environments where reliability matters: offline workflows,
            predictable performance, and long-term maintainability.
          </p>
        </div>
      </div>

      <div class="sa-grid sa-grid--3" style="margin-top: 18px">
        <article v-for="u in useCases" :key="u.key" class="sa-card">
          <div class="sa-card__inner">
            <div class="cardTop">
              <div class="icon" aria-hidden="true">
                <component :is="u.icon" />
              </div>

              <div class="titleWrap">
                <div class="title">{{ u.title }}</div>
                <div class="subtitle">{{ u.subtitle }}</div>
              </div>
            </div>

            <p class="desc">{{ u.desc }}</p>

            <div class="tags" v-if="u.tags && u.tags.length">
              <span v-for="t in u.tags" :key="t" class="tag">{{ t }}</span>
            </div>

            <router-link class="learn" to="/services"
              >See solutions →</router-link
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import site from "@/config/site.js";

const IconCap = {
  name: "IconCap",
  template: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 9.73L5.06 9 12 5.27 18.94 9 12 12.73ZM5 12.2v4.3c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.3l-7 3.82-7-3.82Z"/></svg>`,
};
const IconStore = {
  name: "IconStore",
  template: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4V6Zm0 4h20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Zm6 3v2h4v-2h-4Z"/></svg>`,
};
const IconField = {
  name: "IconField",
  template: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 4.4-5.3 11.2-6.6 12.9a.5.5 0 0 1-.8 0C10.3 20.2 5 13.4 5 9a7 7 0 0 1 7-7Zm0 9.2A2.2 2.2 0 1 0 12 6.8a2.2 2.2 0 0 0 0 4.4Z"/></svg>`,
};
const IconOrg = {
  name: "IconOrg",
  template: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 21v-2h16v2H4Zm2-4V3h12v14H6Zm2-2h8V5H8v10Z"/></svg>`,
};
const IconDev = {
  name: "IconDev",
  template: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M8.7 16.3 4.4 12l4.3-4.3L7.3 6.3 1.6 12l5.7 5.7 1.4-1.4Zm6.6 0 1.4 1.4 5.7-5.7-5.7-5.7-1.4 1.4 4.3 4.3-4.3 4.3ZM14 4l-4 16 2 .5 4-16L14 4Z"/></svg>`,
};

export default {
  name: "UseCaseSection",
  data() {
    return {
      site,
      useCases: [
        {
          key: "universities",
          icon: IconCap,
          title: "Education",
          subtitle: "Reliable access to course materials and portals",
          desc: "Offline-first access to files and internal tools, with safe sync when connectivity returns.",
          tags: ["Offline-first", "Sync", "Documents"],
        },
        {
          key: "retail",
          icon: IconStore,
          title: "Retail operations",
          subtitle: "Stock, sales, and multi-branch continuity",
          desc: "Keep critical workflows running during outages, then reconcile data automatically.",
          tags: ["Reliability", "Hybrid", "Analytics"],
        },
        {
          key: "field",
          icon: IconField,
          title: "Field teams",
          subtitle: "Data capture and secure synchronization",
          desc: "Collect data anywhere, prevent loss, and sync securely once the network is available.",
          tags: ["Mobile", "Offline", "Security"],
        },
        {
          key: "org",
          icon: IconOrg,
          title: "Institutions",
          subtitle: "Private deployments and controlled environments",
          desc: "Deploy on-prem or hybrid systems with predictable performance and long-term support.",
          tags: ["On-prem", "Private cloud", "Support"],
        },
        {
          key: "dev",
          icon: IconDev,
          title: "Developers",
          subtitle: "High-performance building blocks",
          desc: "Use modern tooling and fast runtimes to ship reliable services and offline-capable apps.",
          tags: ["Runtime", "Tooling", "Architecture"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.head {
  display: grid;
  gap: 10px;
}

.cardTop {
  display: flex;
  gap: 12px;
  align-items: center;
}

.icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 153, 0, 0.1);
  border: 1px solid rgba(255, 153, 0, 0.22);
  color: rgba(18, 18, 18, 0.86);
  flex: 0 0 auto;
}

.titleWrap {
  display: grid;
  gap: 3px;
}

.title {
  font-weight: 800;
  letter-spacing: -0.1px;
}

.subtitle {
  color: var(--sa-text-muted);
  font-size: 13px;
  line-height: 1.35;
}

.desc {
  margin: 12px 0 0 0;
  color: var(--sa-text-muted);
  font-size: 13px;
  line-height: 1.65;
}

.tags {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 12px;
  font-weight: 700;
  color: rgba(31, 41, 51, 0.78);
  border: 1px solid var(--sa-border);
  background: rgba(31, 41, 51, 0.03);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.learn {
  margin-top: 14px;
  display: inline-flex;
  font-weight: 800;
  color: rgba(31, 41, 51, 0.9);
  text-decoration: none;
}

.learn:hover {
  text-decoration: underline;
}
</style>
