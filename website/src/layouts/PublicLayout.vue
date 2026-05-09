<!--
 *
 *  @file DashboardLayout.vue
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
  <div class="dashboard-layout">
    <DashboardSidebar :user="user" />

    <div class="dashboard-shell">
      <DashboardTopbar :title="title" :subtitle="subtitle">
        <template #actions>
          <slot name="actions">
            <RouterLink to="/dashboard/settings" class="dashboard-topbar-action">
              Settings
            </RouterLink>
          </slot>
        </template>
      </DashboardTopbar>

      <main class="dashboard-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import DashboardSidebar from '../components/dashboard/DashboardSidebar.vue'
import DashboardTopbar from '../components/dashboard/DashboardTopbar.vue'

defineProps({
  title: {
    type: String,
    default: 'Dashboard',
  },
  subtitle: {
    type: String,
    default: 'Monitor reliability runs, reports and agent activity.',
  },
  user: {
    type: Object,
    default: () => ({
      name: 'Gaspard',
      email: 'gaspard@example.com',
    }),
  },
})
</script>

<style scoped>
.dashboard-topbar-action {
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
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease;
}

.dashboard-topbar-action:hover {
  transform: translateY(-1px);
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.82);
  color: var(--sa-text);
}
</style>
