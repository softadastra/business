<!--
 *
 *  @file PublicLayout.vue
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
-->

<template>
  <div class="public-layout">
    <header class="public-header">
      <nav class="public-nav sa-container">
        <RouterLink to="/" class="public-brand">
          <span class="public-brand-mark" aria-hidden="true"></span>
          <span>Softadastra</span>
        </RouterLink>

        <div class="public-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/docs">Docs</RouterLink>
        </div>

        <div class="public-actions">
          <RouterLink to="/login" class="public-login-link">
            Login
          </RouterLink>

          <RouterLink to="/register" class="public-register-link">
            Start testing
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="public-main">
      <slot />
    </main>

    <footer class="public-footer">
      <div class="public-footer-inner sa-container">
        <p>© 2026 Softadastra. Reliability Cloud for real network failures.</p>
        <p>Built for offline-first and failure-aware systems.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.public-login-link,
.public-register-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-radius: 999px;
  padding: 0 15px;
  font-size: 0.9rem;
  font-weight: 800;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease;
}

.public-login-link {
  border: 1px solid var(--sa-border);
  background: rgba(15, 23, 42, 0.7);
  color: var(--sa-text-muted);
}

.public-login-link:hover {
  transform: translateY(-1px);
  border-color: var(--sa-border-strong);
  color: var(--sa-text);
}

.public-register-link {
  border: 1px solid rgba(56, 189, 248, 0.38);
  background: linear-gradient(135deg, var(--sa-primary), var(--sa-primary-strong));
  color: #03111d;
  box-shadow: 0 12px 28px rgba(56, 189, 248, 0.22);
}

.public-register-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 36px rgba(56, 189, 248, 0.3);
}

@media (max-width: 720px) {
  .public-login-link {
    display: none;
  }

  .public-register-link {
    min-height: 38px;
    padding: 0 13px;
    font-size: 0.84rem;
  }
}
</style>
