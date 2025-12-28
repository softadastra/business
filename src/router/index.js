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

const SITE_URL = "https://business.softadastra.com";

const routes = [
  { path: "/home", redirect: "/" },

  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "Softadastra Business",
      description:
        "Build reliable digital systems, SaaS platforms, and offline-first solutions designed for real-world conditions.",
      canonical: `${SITE_URL}/`,
    },
  },

  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
    meta: {
      title: "Products — Softadastra Business",
      description:
        "Explore Softadastra Business products: modern tools and platforms to help companies run faster and smarter.",
      canonical: `${SITE_URL}/products`,
    },
  },
  {
    path: "/products/:key",
    name: "Product",
    component: ProductPage,
    meta: {
      title: "Product — Softadastra Business",
      description:
        "Product details, features, and benefits. Discover how Softadastra Business helps teams build and scale.",
    },
  },

  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
    meta: {
      title: "Solutions & Services — Softadastra Business",
      description:
        "From websites to SaaS and offline-first systems: we design, build, and deploy reliable digital solutions for businesses.",
      canonical: `${SITE_URL}/services`,
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: PricingPage,
    meta: {
      title: "Pricing — Softadastra Business",
      description:
        "Transparent pricing for building business software, SaaS platforms, and digital products. Choose the right plan to start.",
      canonical: `${SITE_URL}/pricing`,
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      title: "About — Softadastra Business",
      description:
        "Learn about Softadastra: our mission, approach, and why we build software that works even with unstable networks.",
      canonical: `${SITE_URL}/about`,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 — Softadastra Business",
      description: "This page could not be found.",
      canonical: `${SITE_URL}/404`,
    },
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

function upsertMeta(name, content, attr = "name") {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

router.afterEach((to) => {
  document.title = to.meta?.title || "Softadastra Business";

  const description =
    to.meta?.description ||
    "Softadastra Business helps companies build reliable digital systems, SaaS platforms and offline-first solutions.";
  upsertMeta("description", description, "name");

  let canonical = to.meta?.canonical;
  if (!canonical && to.name === "Product" && to.params?.key) {
    canonical = `${SITE_URL}/products/${encodeURIComponent(to.params.key)}`;
  }
  upsertLink("canonical", canonical || `${SITE_URL}${to.fullPath}`);

  upsertMeta("og:title", document.title, "property");
  upsertMeta("og:description", description, "property");
  upsertMeta("og:type", "website", "property");
  upsertMeta("og:url", canonical || `${SITE_URL}${to.fullPath}`, "property");

  upsertMeta("twitter:card", "summary_large_image", "name");
  upsertMeta("twitter:title", document.title, "name");
  upsertMeta("twitter:description", description, "name");
});

export default router;
