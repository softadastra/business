<template>
  <section class="sb-section product-preview">
    <div class="sb-container">
      <div class="product-preview__head">
        <p class="sb-eyebrow">Product interface</p>
        <h2 class="sb-section-title">A workspace for project operations.</h2>
        <p class="sb-section-text">
          The interface is organized around the same objects exposed by the Cloud application: workspaces, projects, packages, lockfiles, build reports, members, and tokens.
        </p>
      </div>

      <div class="product-preview__window" aria-label="Softadastra Cloud interface preview" role="group">
        <aside>
          <strong>Softadastra Cloud</strong>
          <span>Workspaces</span>
          <span class="is-active">Projects</span>
          <span>Packages</span>
          <span>Package versions</span>
          <span>Lockfiles</span>
          <span>Build reports</span>
          <span>Members</span>
          <span>Tokens</span>
        </aside>

        <main>
          <div class="product-preview__top">
            <div>
              <span>Workspace</span>
              <h3>cpp-platform</h3>
            </div>
            <em>Owner</em>
          </div>

          <div class="product-preview__cards">
            <article>
              <span>Project</span>
              <strong>native-app</strong>
              <p>Repository metadata and linked project records.</p>
            </article>
            <article>
              <span>Package version</span>
              <strong>core 1.0.0</strong>
              <p>Version metadata, checksum, archive size, and status.</p>
            </article>
            <article>
              <span>Build report</span>
              <strong>debug profile</strong>
              <p>Status, target, toolchain, warnings, errors, and diagnostics.</p>
            </article>
          </div>

          <div class="product-preview__table">
            <div><span>Lockfile</span><strong>vix.lock</strong><em>uploaded</em></div>
            <div><span>Member</span><strong>workspace role</strong><em>active</em></div>
            <div><span>Token</span><strong>Vix CLI</strong><em>managed</em></div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-preview__head {
  max-width: 800px;
  margin-bottom: 30px;
}

.product-preview__window {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-xl);
  background: var(--sb-surface);
  box-shadow: var(--sb-shadow-md);
}

.product-preview aside {
  display: grid;
  align-content: start;
  gap: 6px;
  padding: 16px;
  border-right: 1px solid var(--sb-border);
  background: var(--sb-bg-soft);
}

.product-preview aside strong {
  margin-bottom: 8px;
  color: var(--sb-text);
  font-size: 0.9rem;
}

.product-preview aside span {
  padding: 8px 9px;
  border-radius: var(--sb-radius-sm);
  color: var(--sb-text-soft);
  font-size: 0.82rem;
  font-weight: 640;
}

.product-preview aside .is-active {
  background: var(--sb-surface);
  color: var(--sb-primary-hover);
}

.product-preview main {
  min-width: 0;
  padding: 18px;
}

.product-preview__top {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
}

.product-preview__top span,
.product-preview__cards span,
.product-preview__table span {
  color: var(--sb-text-muted);
  font-family: var(--sb-font-mono);
  font-size: 0.68rem;
  font-weight: 760;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.product-preview__top h3 {
  margin-top: 4px;
  color: var(--sb-text);
  font-size: 1.5rem;
  letter-spacing: -0.03em;
}

.product-preview__top em,
.product-preview__table em {
  width: fit-content;
  padding: 3px 8px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-full);
  background: var(--sb-bg-soft);
  color: var(--sb-text-soft);
  font-size: 0.72rem;
  font-style: normal;
  font-weight: 700;
}

.product-preview__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.product-preview__cards article {
  padding: 14px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  background: var(--sb-surface);
}

.product-preview__cards strong {
  display: block;
  margin-top: 8px;
  color: var(--sb-text);
  font-size: 0.98rem;
}

.product-preview__cards p {
  margin-top: 6px;
  color: var(--sb-text-soft);
  font-size: 0.84rem;
  line-height: 1.5;
}

.product-preview__table {
  display: grid;
  margin-top: 12px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  overflow: hidden;
}

.product-preview__table div {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 11px 12px;
  border-bottom: 1px solid var(--sb-border);
}

.product-preview__table div:last-child {
  border-bottom: 0;
}

.product-preview__table strong {
  color: var(--sb-text);
  font-family: var(--sb-font-mono);
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .product-preview__window {
    grid-template-columns: 1fr;
  }

  .product-preview aside {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-right: 0;
    border-bottom: 1px solid var(--sb-border);
  }

  .product-preview aside strong {
    grid-column: 1 / -1;
  }

  .product-preview__cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .product-preview aside {
    grid-template-columns: 1fr;
  }

  .product-preview__table div {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
