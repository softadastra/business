<template>
  <section class="cloud-hero" id="product">
    <div class="sb-container cloud-hero__inner">
      <div class="cloud-hero__copy">
        <p class="sb-eyebrow">Softadastra Cloud</p>
        <h1>Project operations for modern C++ teams.</h1>
        <p>
          Softadastra Cloud keeps packages, lockfiles, build reports,
          permissions, and project metadata organized while Vix.cpp keeps the
          development and build workflow local.
        </p>
        <div class="cloud-hero__actions">
          <BaseButton href="https://cloud.softadastra.com" size="lg">
            Open Softadastra Cloud
          </BaseButton>
          <BaseButton href="#workflow" variant="secondary" size="lg">
            See how it works
          </BaseButton>
        </div>
      </div>

      <div class="cloud-hero__visual" aria-label="Softadastra Cloud product summary" role="group">
        <div class="cloud-hero__window">
          <div class="cloud-hero__bar">
            <span>Workspace</span>
            <strong>cpp-platform</strong>
          </div>
          <div class="cloud-hero__grid">
            <article>
              <span>Project</span>
              <strong>native-app</strong>
              <small>linked through .vix/cloud.json</small>
            </article>
            <article>
              <span>Lockfile</span>
              <strong>vix.lock</strong>
              <small>uploaded from local workflow</small>
            </article>
            <article>
              <span>Build report</span>
              <strong>vix build</strong>
              <small>locally generated diagnostics</small>
            </article>
            <article>
              <span>Access</span>
              <strong>roles + tokens</strong>
              <small>workspace permissions</small>
            </article>
          </div>
        </div>
        <pre><code>$ vix cloud init
$ vix cloud lockfile upload
$ vix cloud publish</code></pre>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.cloud-hero {
  padding: 72px 0 76px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg);
}

.cloud-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(380px, 0.84fr);
  gap: clamp(36px, 6vw, 72px);
  align-items: center;
}

.cloud-hero h1 {
  max-width: 760px;
  margin-top: 12px;
  color: var(--sb-text);
  font-size: clamp(3rem, 5.6vw, 5.1rem);
  font-weight: 690;
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.cloud-hero__copy > p:not(.sb-eyebrow) {
  max-width: 650px;
  margin-top: 22px;
  color: var(--sb-text-soft);
  font-size: 1.08rem;
  line-height: 1.7;
}

.cloud-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.cloud-hero__visual {
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: linear-gradient(180deg, var(--sb-cloud-soft), var(--sb-surface));
  box-shadow: var(--sb-shadow-md);
}

.cloud-hero__window {
  margin: 16px;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: var(--sb-surface);
}

.cloud-hero__bar {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.cloud-hero__bar span,
.cloud-hero__grid span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 760;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cloud-hero__bar strong {
  color: var(--sb-text);
  font-size: 0.86rem;
}

.cloud-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 14px;
}

.cloud-hero__grid article {
  min-width: 0;
  padding: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.cloud-hero__grid strong {
  display: block;
  margin-top: 8px;
  color: var(--sb-text);
  font-size: 0.96rem;
}

.cloud-hero__grid small {
  display: block;
  margin-top: 4px;
  color: var(--sb-text-soft);
  font-size: 0.78rem;
  line-height: 1.4;
}

.cloud-hero pre {
  margin: 0 16px 16px;
  padding: 14px;
  border-radius: var(--sb-radius-md);
  background: #111417;
  color: #f3f5f7;
  font-size: 0.82rem;
  line-height: 1.8;
}

@media (max-width: 920px) {
  .cloud-hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .cloud-hero {
    padding: 52px 0 58px;
  }

  .cloud-hero h1 {
    font-size: clamp(2.5rem, 13vw, 3.5rem);
  }

  .cloud-hero__actions {
    flex-direction: column;
  }

  .cloud-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
