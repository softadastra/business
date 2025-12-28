// src/config/site.js
// Single source of truth for Softadastra Business (static marketing → WhatsApp + Email conversion)

const encode = (s) => encodeURIComponent(String(s || "").trim());
const WHATSAPP_PHONE_E164 = "256790220177";

// ----------------------------
// Brand (GLOBAL positioning)
// ----------------------------
const brand = {
  name: "Softadastra Business",
  tagline:
    "Products, enterprise deployments, and reliable software — online or offline.",
  shortDescription:
    "We build an offline-first product ecosystem (Drive, Vix.cpp, Ivi.php, Rix) and deliver enterprise-ready deployments, integrations, and business platforms.",
  location: "Global", // keep it neutral
  website: "https://softadastra.com",
};

// ----------------------------
// Social / Contact links
// ----------------------------
const social = {
  whatsappPhoneE164: WHATSAPP_PHONE_E164,
  whatsappBaseUrl: `https://wa.me/${WHATSAPP_PHONE_E164}`,

  github: "https://github.com/softadastra",
  linkedin: "",
  x: "",
  facebook: "",
};

// ----------------------------
// Products (Showcase layer)
// ----------------------------
const products = [
  {
    key: "vix",
    title: "Vix.cpp",
    subtitle: "Ultra-fast backend runtime for modern APIs.",
    tags: ["C++", "Performance", "APIs"],
    bullets: [
      "High throughput, low latency",
      "Modular architecture",
      "Middleware pipeline",
      "Production-ready deployment patterns",
    ],
    ctaLabel: "Ask about Vix.cpp",
    whatsappIntent: "vix",
  },
  {
    key: "ivi",
    title: "Ivi.php",
    subtitle: "Modern PHP framework for clean, expressive systems.",
    tags: ["PHP", "DX", "Modular"],
    bullets: [
      "Minimal core, clear structure",
      "Fast routing and APIs",
      "Designed for maintainability",
      "Great for business platforms",
    ],
    ctaLabel: "Ask about Ivi.php",
    whatsappIntent: "ivi",
  },
  {
    key: "rix",
    title: "Rix",
    subtitle: "Modular C++ utilities for modern development.",
    tags: ["C++", "Utilities", "Modern"],
    bullets: [
      "Header-only building blocks",
      "Small, composable modules",
      "Optimized for performance",
      "Used across Softadastra stack",
    ],
    ctaLabel: "Ask about Rix",
    whatsappIntent: "rix",
  },

  {
    key: "market",
    title: "Softadastra Market",
    subtitle: "Commerce and business tooling built for real-world reliability.",
    tags: ["Commerce", "SMEs", "Operations"],
    bullets: [
      "Business workflows and marketplace foundations",
      "Designed for practical operations and scale",
      "Reliability-first architecture",
      "Built to integrate across the ecosystem",
    ],
    ctaLabel: "Ask about Market",
    whatsappIntent: "market",
  },
];

// ----------------------------
// Solutions (Commercial layer)
// This is what you deliver to customers.
// Keep it global + outcome-based.
// ----------------------------
const solutions = [
  {
    key: "enterprise",
    title: "Enterprise Deployment & Integration",
    subtitle: "On-prem, cloud, or hybrid — with support and security.",
    bullets: [
      "Deployment planning and architecture",
      "Migration and system integration",
      "Security, performance, observability",
      "Training, support and maintenance",
    ],
    whatsappIntent: "enterprise",
  },
  {
    key: "offline_first",
    title: "Offline-First Systems",
    subtitle: "Apps that work offline and sync when connectivity returns.",
    bullets: [
      "Local-first data model + background sync",
      "Retry, conflict handling, and resilience",
      "Ideal for field work, education, operations",
      "Online + offline hybrid workflows",
    ],
    whatsappIntent: "offline_first",
  },
  {
    key: "platforms",
    title: "Web Platforms & Business Apps",
    subtitle: "Modern websites, dashboards, portals, and SaaS.",
    bullets: [
      "Responsive UX (mobile-first)",
      "Admin tools, roles & permissions",
      "Payments and integrations (optional)",
      "Performance + SEO best practices",
    ],
    whatsappIntent: "platforms",
  },
  {
    key: "mobile",
    title: "Mobile Apps (APK / optional iOS)",
    subtitle: "Customer apps, internal tools, and product experiences.",
    bullets: [
      "Authentication and notifications",
      "Offline support when needed",
      "APK delivery and distribution",
      "Long-term support options",
    ],
    whatsappIntent: "mobile",
  },
];

// ----------------------------
// Use cases (Global, not geographic)
// ----------------------------
const useCases = [
  {
    key: "universities",
    title: "Universities & Schools",
    subtitle: "Reliable access to learning materials and internal tools.",
  },
  {
    key: "field_teams",
    title: "Field Teams & NGOs",
    subtitle: "Capture data offline, sync later, reduce downtime.",
  },
  {
    key: "retail",
    title: "Retail & Operations",
    subtitle: "Inventory, sales, and workflows that survive outages.",
  },
  {
    key: "smes",
    title: "SMEs & Startups",
    subtitle: "From launch to scale: websites, apps, platforms.",
  },
];

// ----------------------------
// Pricing (optional, keep flexible)
// If you prefer not to show prices yet: set enabled=false.
// ----------------------------
const pricing = {
  enabled: true,
  currency: "USD",
  note: "Pricing depends on scope and timeline. Message us on WhatsApp for a quick estimate.",
  tiers: [
    {
      key: "starter",
      title: "Starter",
      priceFrom: 150,
      bestFor: "Launch fast (simple website / basic setup)",
      bullets: [
        "Single-page or small site",
        "WhatsApp + contact integration",
        "Basic SEO setup",
      ],
    },
    {
      key: "pro",
      title: "Pro",
      priceFrom: 500,
      bestFor: "Growing teams (platform features + integrations)",
      bullets: [
        "Multi-page or dashboard",
        "Performance & SEO boost",
        "Integrations (optional)",
      ],
    },
    {
      key: "enterprise",
      title: "Enterprise",
      priceFrom: 1500,
      bestFor: "Products, deployments, offline-first systems",
      bullets: [
        "Architecture + security",
        "Offline-first sync options",
        "Support & maintenance",
      ],
    },
  ],
};

// ----------------------------
// Portfolio (you can keep it empty)
// ----------------------------
const portfolio = {
  note: "We can share demos and private builds on request. Public portfolio is growing.",
  items: [],
};

// ----------------------------
// Contact meta
// ----------------------------
const contact = {
  workingHours: "Mon–Sat, 09:00–20:00 (EAT)",
  responseTime: "Typical response: within 30–60 minutes.",
  primaryCTA: "Chat on WhatsApp",
};

// ----------------------------
// WhatsApp templates (GLOBAL wording)
// Keep them short + structured.
// ----------------------------
const whatsappTemplates = {
  general:
    "Hi Softadastra Business! I’m interested in your products/solutions.\n\nName:\nWhat do you need:\nTimeline:\nBudget (approx):\nNotes:",

  // Products
  drive:
    "Hi Softadastra Business! I want to learn more about Softadastra Drive.\n\nName:\nUse case (team/education/ops/etc):\nOffline needs:\nUsers (approx):\nTimeline:\nNotes:",
  vix: "Hi Softadastra Business! I’m interested in Vix.cpp.\n\nName:\nWhat are you building (API/service):\nTraffic/scale (optional):\nDeployment (cloud/on-prem):\nNotes:",
  ivi: "Hi Softadastra Business! I’m interested in Ivi.php.\n\nName:\nProject type (API/platform):\nTimeline:\nNotes:",
  rix: "Hi Softadastra Business! I’m interested in Rix.\n\nName:\nUse case:\nNotes:",

  // Solutions
  enterprise:
    "Hi Softadastra Business! I need an enterprise deployment/integration.\n\nName:\nOrganization:\nWhat system:\nDeployment (cloud/on-prem/hybrid):\nTimeline:\nBudget (approx):\nNotes:",
  offline_first:
    "Hi Softadastra Business! I need an offline-first system.\n\nName:\nIndustry/use case:\nOffline requirements:\nData to sync:\nTimeline:\nBudget (approx):\nNotes:",
  platforms:
    "Hi Softadastra Business! I need a web platform/business app.\n\nName:\nProblem to solve:\nMain features:\nTimeline:\nBudget (approx):\nNotes:",
  mobile:
    "Hi Softadastra Business! I need a mobile app.\n\nName:\nIdea (short):\nUsers (who will use it?):\nOffline needs (yes/no):\nTimeline:\nBudget (approx):\nNotes:",
};

function buildWhatsAppLink(intentKey = "general") {
  const tpl = whatsappTemplates[intentKey] || whatsappTemplates.general;
  return `${social.whatsappBaseUrl}?text=${encode(tpl)}`;
}

export const site = {
  brand,
  social,

  products,
  solutions,
  useCases,

  pricing,
  portfolio,
  contact,

  whatsappTemplates,
  buildWhatsAppLink,
};

export default site;
