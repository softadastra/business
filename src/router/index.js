import { createRouter, createWebHistory } from "vue-router";

// Lazy-loaded pages (code splitting)
const HomePage = () =>
  import(/* webpackChunkName: "home" */ "@/views/HomePage.vue");
const AboutPage = () =>
  import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue");
const NotFound = () =>
  import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue");

const ServicesPage = () =>
  import(/* webpackChunkName: "services" */ "@/views/ServicesPage.vue");
const PricingPage = () =>
  import(/* webpackChunkName: "pricing" */ "@/views/PricingPage.vue");
const ProductPage = () =>
  import(/* webpackChunkName: "product" */ "@/views/ProductPage.vue");
const ProductsPage = () =>
  import(/* webpackChunkName: "products" */ "@/views/ProductsPage.vue");

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
