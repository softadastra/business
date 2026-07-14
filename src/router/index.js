import { createRouter, createWebHistory } from "vue-router";

import MarketingLayout from "../layouts/MarketingLayout.vue";
import HomePage from "../pages/marketing/HomePage.vue";

const siteTitle = "Softadastra Cloud | Project operations for modern C++ teams";

const routes = [
  {
    path: "/",
    component: MarketingLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
        meta: {
          title: siteTitle,
        },
      },
      {
        path: "product",
        redirect: { path: "/", hash: "#product" },
      },
      {
        path: "docs",
        redirect: { path: "/", hash: "#workflow" },
      },
      {
        path: "contact",
        redirect: { path: "/", hash: "#cta" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 72,
      };
    }

    return {
      top: 0,
    };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || siteTitle;
});

export default router;
