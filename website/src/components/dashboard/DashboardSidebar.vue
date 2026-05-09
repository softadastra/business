<!--
 *
 *  @file DashboardSidebar.vue
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
  <aside class="dashboard-sidebar">
    <RouterLink to="/dashboard" class="dashboard-brand">
      <span class="dashboard-brand-mark" aria-hidden="true"></span>

      <span>
        <strong class="dashboard-brand-name">Softadastra</strong>
        <span class="dashboard-brand-subtitle">Reliability Cloud</span>
      </span>
    </RouterLink>

    <nav class="dashboard-nav" aria-label="Dashboard navigation">
      <p class="dashboard-nav-section">Overview</p>

      <RouterLink
        v-for="item in mainItems"
        :key="item.to"
        :to="item.to"
        class="dashboard-nav-link"
      >
        <span class="dashboard-nav-icon" aria-hidden="true">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </RouterLink>

      <p class="dashboard-nav-section">Workspace</p>

      <RouterLink
        v-for="item in workspaceItems"
        :key="item.to"
        :to="item.to"
        class="dashboard-nav-link"
      >
        <span class="dashboard-nav-icon" aria-hidden="true">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="dashboard-user">
      <p class="dashboard-user-name">{{ userName }}</p>
      <p class="dashboard-user-email">{{ userEmail }}</p>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
})

const mainItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: '⌁',
  },
  {
    label: 'Projects',
    to: '/dashboard/projects',
    icon: '▣',
  },
  {
    label: 'Runs',
    to: '/dashboard/runs',
    icon: '↻',
  },
  {
    label: 'Reports',
    to: '/dashboard/reports',
    icon: '◈',
  },
]

const workspaceItems = [
  {
    label: 'Agents',
    to: '/dashboard/agents',
    icon: '●',
  },
  {
    label: 'Settings',
    to: '/dashboard/settings',
    icon: '⚙',
  },
]

const userName = props.user?.name || 'Gaspard'
const userEmail = props.user?.email || 'gaspard@example.com'
</script>
