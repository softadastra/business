<template>
  <main class="sa-page">
    <section class="sa-section">
      <div class="sa-container">
        <div class="hero">
          <div class="hero__left">
            <div class="badge">About</div>

            <h1 class="sa-title" style="font-size: clamp(28px, 3.4vw, 46px)">
              Reliable software for real-world networks.
            </h1>

            <p class="sa-subtitle" style="max-width: 860px">
              Softadastra Business helps teams ship and deploy products that
              stay fast and usable under unreliable connectivity. We focus on
              offline-first architecture, predictable performance, and clean
              delivery for long-term maintainability.
            </p>

            <div class="actions">
              <router-link class="sa-btn sa-btn--primary" to="/services">
                View solutions
              </router-link>

              <router-link class="sa-btn" to="/products">
                Explore products
              </router-link>
            </div>

            <div class="meta">
              <div class="metaItem">
                <div class="k">Focus</div>
                <div class="v">
                  Offline-first • Performance • Maintainability
                </div>
              </div>
              <div class="metaItem">
                <div class="k">Delivery</div>
                <div class="v">Cloud • On-prem • Hybrid</div>
              </div>
            </div>
          </div>

          <div class="hero__right">
            <div class="sa-card">
              <div class="sa-card__inner card">
                <div class="cardTitle">What you get</div>

                <div class="list">
                  <div class="row">
                    <div class="dot"></div>
                    <div class="txt">
                      Offline-first system design and sync patterns for
                      unreliable networks.
                    </div>
                  </div>
                  <div class="row">
                    <div class="dot"></div>
                    <div class="txt">
                      High-performance backend foundations for APIs and
                      real-time workflows.
                    </div>
                  </div>
                  <div class="row">
                    <div class="dot"></div>
                    <div class="txt">
                      Deployment-ready delivery: integration, documentation, and
                      long-term support.
                    </div>
                  </div>
                </div>

                <div class="cardLinks">
                  <router-link class="link" to="/pricing"
                    >Pricing →</router-link
                  >
                  <router-link class="link link--muted" to="/services"
                    >Services →</router-link
                  >
                </div>
              </div>
            </div>

            <div class="mini">
              <div class="miniK">Principle</div>
              <div class="miniV">
                Build for failure modes first, then optimize for scale.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sa-section" id="principles">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          Principles
        </h2>
        <p class="sa-subtitle" style="max-width: 900px">
          A simple baseline for every project: resilience, speed, and
          maintainable delivery.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article class="sa-card">
            <div class="sa-card__inner p">
              <div class="pTitle">Reliability first</div>
              <div class="pText">
                Designed for intermittent networks, latency spikes, and
                operational constraints.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner p">
              <div class="pTitle">Predictable performance</div>
              <div class="pText">
                Efficient architecture and clean code paths to keep latency
                stable and costs controlled.
              </div>
            </div>
          </article>

          <article class="sa-card">
            <div class="sa-card__inner p">
              <div class="pTitle">Clean delivery</div>
              <div class="pText">
                Clear modules, documentation, and handoff-ready code for
                long-term maintainability.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="sa-section" id="ecosystem">
      <div class="sa-container">
        <h2 class="sa-title" style="font-size: clamp(22px, 2.6vw, 34px)">
          The ecosystem
        </h2>
        <p class="sa-subtitle" style="max-width: 900px">
          Products and tooling designed to work together: offline-first sync,
          backends, and developer foundations.
        </p>

        <div class="sa-grid sa-grid--3" style="margin-top: 18px">
          <article v-for="p in products" :key="p.key" class="sa-card">
            <div class="sa-card__inner eco">
              <div class="ecoTop">
                <div class="ecoName">{{ p.title }}</div>
                <div class="ecoTag">{{ p.tag }}</div>
              </div>
              <div class="ecoDesc">{{ p.description }}</div>
              <router-link class="ecoLink" :to="`/products/${p.key}`"
                >View →</router-link
              >
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="sa-section">
      <div class="sa-container">
        <div class="final sa-card">
          <div class="sa-card__inner finalInner">
            <div>
              <div class="finalBadge">How we work</div>
              <div class="finalTitle">
                Products, deployments, and tailored delivery.
              </div>
              <div class="finalText">
                We ship production-ready systems with clear architecture,
                deployment support, and strong defaults for reliability.
              </div>
            </div>

            <div class="finalActions">
              <router-link class="sa-btn sa-btn--primary" to="/services"
                >View solutions</router-link
              >
              <router-link class="sa-btn" to="/pricing">Pricing</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      products: [
        // {
        //   key: "drive",
        //   title: "Softadastra Drive",
        //   tag: "Offline-first sync",
        //   description:
        //     "Cloud storage with offline support and real-time sync for unstable networks.",
        // },
        {
          key: "vix",
          title: "Vix.cpp",
          tag: "High-performance backend",
          description:
            "C++ runtime to build fast APIs, middleware pipelines, and services.",
        },
        {
          key: "ivi",
          title: "Ivi.php",
          tag: "Modern framework layer",
          description:
            "A clean, minimal framework approach for web apps and APIs.",
        },
        {
          key: "rix",
          title: "Rix",
          tag: "C++ building blocks",
          description:
            "Modular utilities to ship lightweight modern C++ systems.",
        },
        {
          key: "market",
          title: "Softadastra Market",
          tag: "Commerce systems",
          description:
            "Practical business tooling designed to be scalable and resilient.",
        },
        // {
        //   key: "map",
        //   title: "Softadastra Map",
        //   tag: "Location & discovery",
        //   description:
        //     "Discovery and mapping features designed for the broader ecosystem.",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.sa-page {
  display: block;
}

.hero {
  display: grid;
  gap: 18px;
  align-items: start;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface-muted);
  font-weight: 800;
  font-size: 12px;
  color: rgba(31, 41, 51, 0.8);
  width: fit-content;
}

.actions {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.meta {
  margin-top: 16px;
  display: grid;
  gap: 10px;
}

.metaItem {
  display: grid;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: var(--sa-shadow);
}

.k {
  font-size: 12px;
  font-weight: 800;
  color: rgba(31, 41, 51, 0.7);
}

.v {
  font-size: 13px;
  font-weight: 700;
  color: rgba(31, 41, 51, 0.9);
}

.cardTitle {
  font-weight: 900;
  letter-spacing: -0.1px;
}

.list {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 4px;
  background: rgba(255, 153, 0, 0.65);
  border: 1px solid rgba(255, 153, 0, 0.28);
  flex: 0 0 auto;
}

.txt {
  color: rgba(31, 41, 51, 0.82);
  font-weight: 650;
  font-size: 13px;
  line-height: 1.55;
}

.cardLinks {
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.link {
  font-weight: 850;
  color: rgba(31, 41, 51, 0.9);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.link--muted {
  color: rgba(31, 41, 51, 0.68);
}

.mini {
  border-radius: 12px;
  border: 1px solid var(--sa-border);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: var(--sa-shadow);
  padding: 12px 14px;
}

.miniK {
  font-weight: 900;
  font-size: 12px;
  color: rgba(31, 41, 51, 0.72);
}

.miniV {
  margin-top: 6px;
  font-weight: 750;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(31, 41, 51, 0.9);
}

.pTitle {
  font-weight: 900;
  letter-spacing: -0.1px;
}

.pText {
  margin-top: 8px;
  color: rgba(31, 41, 51, 0.72);
  font-size: 13px;
  line-height: 1.6;
  font-weight: 650;
}

.ecoTop {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.ecoName {
  font-weight: 900;
  letter-spacing: -0.1px;
}

.ecoTag {
  font-size: 12px;
  color: rgba(31, 41, 51, 0.72);
  border: 1px solid var(--sa-border);
  background: rgba(31, 41, 51, 0.03);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.ecoDesc {
  margin-top: 10px;
  color: rgba(31, 41, 51, 0.72);
  font-size: 13px;
  line-height: 1.65;
  font-weight: 650;
}

.ecoLink {
  margin-top: 12px;
  display: inline-flex;
  font-weight: 850;
  color: rgba(31, 41, 51, 0.9);
  text-decoration: none;
}

.ecoLink:hover {
  text-decoration: underline;
}

.finalInner {
  display: grid;
  gap: 16px;
  align-items: center;
}

.finalBadge {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--sa-border);
  background: var(--sa-surface-muted);
  font-weight: 900;
  font-size: 12px;
  color: rgba(31, 41, 51, 0.8);
  width: fit-content;
}

.finalTitle {
  margin-top: 10px;
  font-weight: 950;
  letter-spacing: -0.2px;
  font-size: clamp(18px, 2.2vw, 26px);
}

.finalText {
  margin-top: 8px;
  color: rgba(31, 41, 51, 0.72);
  font-weight: 650;
  font-size: 13px;
  line-height: 1.55;
}

.finalActions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

@media (min-width: 980px) {
  .hero {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: stretch;
  }

  .finalInner {
    grid-template-columns: 1.25fr 0.75fr;
  }

  .finalActions {
    justify-content: flex-end;
  }
}
</style>
