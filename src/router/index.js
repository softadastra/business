import { createRouter, createWebHistory } from "vue-router";

import MarketingLayout from "../layouts/MarketingLayout.vue";

import HomePage from "../pages/marketing/HomePage.vue";
import ProductPage from "../pages/marketing/ProductPage.vue";
import DocsPage from "../pages/marketing/DocsPage.vue";
import ContactPage from "../pages/marketing/ContactPage.vue";

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
          title: "Converdict - Softadastra Business",
        },
      },
      {
        path: "product",
        name: "product",
        component: ProductPage,
        meta: {
          title: "Product - Converdict",
        },
      },
      {
        path: "docs",
        name: "docs",
        component: DocsPage,
        meta: {
          title: "Docs - Converdict",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: ContactPage,
        meta: {
          title: "Contact - Converdict",
        },
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
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Converdict - Softadastra Business";
});

export default router;
