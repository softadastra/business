export const links = {
  marketing: "https://business.softadastra.com",
  cloud: "https://cloud.softadastra.com",
  cloudRegister: "https://cloud.softadastra.com/register",
  cloudLogin: "https://cloud.softadastra.com/login",
  softadastra: "https://softadastra.com",
  vix: "https://vixcpp.com",
  rix: "https://rix.vixcpp.com",
};

export const marketingNavigation = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "Workflow",
    href: "#workflow",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Local builds",
    href: "#local-builds",
  },
  {
    label: "Availability",
    href: "#availability",
  },
];

export const marketingActions = {
  primary: {
    label: "Create an account",
    href: links.cloudRegister,
  },
  secondary: {
    label: "Explore the workflow",
    href: "#workflow",
  },
};

export const footerNavigation = [
  {
    title: "Product",
    links: [
      {
        label: "Product overview",
        href: "#product",
      },
      {
        label: "Platform workflow",
        href: "#workflow",
      },
      {
        label: "Core capabilities",
        href: "#features",
      },
      {
        label: "Local builds",
        href: "#local-builds",
      },
      {
        label: "Product status",
        href: "#availability",
      },
    ],
  },
  {
    title: "Platform",
    links: [
      {
        label: "Open Softadastra Cloud",
        href: links.cloud,
        external: true,
      },
      {
        label: "Create an account",
        href: links.cloudRegister,
        external: true,
      },
      {
        label: "Sign in",
        href: links.cloudLogin,
        external: true,
      },
      {
        label: "Vix.cpp",
        href: links.vix,
        external: true,
      },
      {
        label: "Rix",
        href: links.rix,
        external: true,
      },
      {
        label: "Softadastra",
        href: links.softadastra,
        external: true,
      },
    ],
  },
];
