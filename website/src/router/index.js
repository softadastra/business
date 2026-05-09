/**
 *
 *  @file index.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { createRouter, createWebHistory } from "vue-router";

import { getAuthToken } from "../api/client";

import HomePage from "../pages/public/HomePage.vue";
import PricingPage from "../pages/public/PricingPage.vue";
import DocsPage from "../pages/public/DocsPage.vue";

import LoginPage from "../pages/auth/LoginPage.vue";
import RegisterPage from "../pages/auth/RegisterPage.vue";

import DashboardHome from "../pages/dashboard/DashboardHome.vue";
import ProjectsPage from "../pages/dashboard/ProjectsPage.vue";
import ProjectDetailPage from "../pages/dashboard/ProjectDetailPage.vue";
import AgentsPage from "../pages/dashboard/AgentsPage.vue";
import RunsPage from "../pages/dashboard/RunsPage.vue";
import RunDetailPage from "../pages/dashboard/RunDetailPage.vue";
import ReportsPage from "../pages/dashboard/ReportsPage.vue";
import SettingsPage from "../pages/dashboard/SettingsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "Softadastra Cloud",
      public: true,
    },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingPage,
    meta: {
      title: "Pricing",
      public: true,
    },
  },
  {
    path: "/docs",
    name: "docs",
    component: DocsPage,
    meta: {
      title: "Docs",
      public: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      title: "Login",
      public: true,
      guestOnly: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
    meta: {
      title: "Register",
      public: true,
      guestOnly: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardHome,
    meta: {
      title: "Dashboard",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/projects",
    name: "dashboard-projects",
    component: ProjectsPage,
    meta: {
      title: "Projects",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/projects/:id",
    name: "dashboard-project-detail",
    component: ProjectDetailPage,
    meta: {
      title: "Project details",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/agents",
    name: "dashboard-agents",
    component: AgentsPage,
    meta: {
      title: "Agents",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/runs",
    name: "dashboard-runs",
    component: RunsPage,
    meta: {
      title: "Runs",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/runs/:id",
    name: "dashboard-run-detail",
    component: RunDetailPage,
    meta: {
      title: "Run details",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/reports",
    name: "dashboard-reports",
    component: ReportsPage,
    meta: {
      title: "Reports",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/settings",
    name: "dashboard-settings",
    component: SettingsPage,
    meta: {
      title: "Settings",
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to) => {
  const hasToken = Boolean(getAuthToken());

  if (to.meta.requiresAuth && !hasToken) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  }

  if (to.meta.guestOnly && hasToken) {
    return {
      name: "dashboard",
    };
  }

  return true;
});

router.afterEach((to) => {
  const suffix = "Softadastra Cloud";
  const title = typeof to.meta.title === "string" ? to.meta.title : "";

  document.title = title ? `${title} · ${suffix}` : suffix;
});

export default router;
