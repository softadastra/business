import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import NotFound from "@/views/NotFound.vue";

import ServicesPage from "@/views/ServicesPage.vue";
import PricingPage from "@/views/PricingPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";

const routes = [
  { path: "/home", redirect: "/" },

  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "Softadastra Business" },
  },

  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
    meta: { title: "Products — Softadastra Business" },
  },
  {
    path: "/products/:key",
    name: "Product",
    component: ProductPage,
    meta: { title: "Product — Softadastra Business" },
  },

  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
    meta: { title: "Solutions & Services — Softadastra Business" },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: PricingPage,
    meta: { title: "Pricing — Softadastra Business" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { title: "About — Softadastra Business" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    meta: { title: "Contact — Softadastra Business" },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "404 — Softadastra Business" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta?.title || "Softadastra Business";
});

export default router;
