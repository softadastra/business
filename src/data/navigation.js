export const links = {
  marketing: "https://business.softadastra.com/",
  cloud: "https://cloud.softadastra.com",
  softadastra: "https://softadastra.com",
  vix: "https://vixcpp.com",
};

export const marketingNavigation = [
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Vix.cpp", href: links.vix, external: true },
  { label: "Softadastra", href: links.softadastra, external: true },
  { label: "Sign in", href: links.cloud, external: true },
];

export const marketingActions = {
  primary: {
    label: "Open Softadastra Cloud",
    href: links.cloud,
  },
  secondary: {
    label: "See how it works",
    href: "#workflow",
  },
};

export const footerNavigation = [
  {
    title: "Product",
    links: [
      { label: "Workflow", href: "#workflow" },
      { label: "Features", href: "#features" },
      { label: "Local builds", href: "#local-builds" },
      { label: "Open Cloud", href: links.cloud, external: true },
    ],
  },
  {
    title: "Softadastra",
    links: [
      { label: "Company", href: links.softadastra, external: true },
      { label: "Vix.cpp", href: links.vix, external: true },
      { label: "Softadastra Cloud app", href: links.cloud, external: true },
    ],
  },
];
