<!--
 *
 *  @file DashboardTopbar.vue
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
  <header class="dashboard-topbar">
    <div class="topbar-left">
      <h1 class="topbar-title">{{ title }}</h1>
      <p v-if="subtitle" class="topbar-subtitle">{{ subtitle }}</p>
    </div>

    <div class="topbar-actions">
      <slot name="actions">
        <RouterLink to="/" class="topbar-link">Public site</RouterLink>
      </slot>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Dashboard',
  },
  subtitle: {
    type: String,
    default: 'Monitor reliability runs, reports and agent activity.',
  },
})
</script>

<style scoped>
.topbar-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 0 14px;
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text-muted);
  font-size: 0.86rem;
  font-weight: 750;
  transition:
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.topbar-link:hover {
  transform: translateY(-1px);
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.82);
  color: var(--sa-text);
}
</style>
