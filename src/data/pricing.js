export const product = {
  name: "Converdict",
  label: "Softadastra Business",
  status: "In development",
  tagline: "Reliability verification for distributed systems.",
  headline: "Know how your system behaves when the network fails.",
  description:
    "Converdict is the first business product from Softadastra. It is being built to help engineering teams verify how distributed systems behave under failures such as retries, timeouts, crashes, duplicate writes, and unstable networks.",

  hero: {
    eyebrow: "Converdict is in development",
    title:
      "Reliability verification for systems that cannot afford silent failure.",
    text: "Modern systems fail in messy ways. Requests are retried, writes can be duplicated, timeouts hide uncertainty, and recovery paths are often untested. Converdict is being built to make these risks visible before they reach production.",
    primaryAction: {
      label: "Join the waitlist",
      href: "/contact",
    },
    secondaryAction: {
      label: "Explore the product",
      href: "/product",
    },
  },

  problem: {
    eyebrow: "Problem",
    title: "Distributed systems rarely fail cleanly.",
    text: "A service can look healthy while losing data, duplicating writes, or recovering into an inconsistent state. Traditional monitoring often tells you what happened after the damage. Converdict focuses on verifying reliability behavior before failure becomes a business incident.",
    points: [
      {
        title: "Retries can duplicate writes",
        text: "When clients, queues, or workers retry requests, the system must prove that critical operations stay safe.",
      },
      {
        title: "Timeouts create uncertainty",
        text: "A timeout does not always mean failure. It can hide a write that succeeded, failed, or partially completed.",
      },
      {
        title: "Recovery paths are under-tested",
        text: "Crashes, partitions, and restarts often expose bugs that normal happy-path tests never touch.",
      },
    ],
  },

  solution: {
    eyebrow: "Product",
    title: "Converdict verifies reliability under failure conditions.",
    text: "Converdict is designed to test systems with realistic failure scenarios and produce clear verdicts about data loss, duplicate writes, retry safety, recovery behavior, and convergence.",
    points: [
      {
        title: "Failure scenarios",
        text: "Run controlled tests around unstable networks, retries, crashes, and recovery flows.",
      },
      {
        title: "Reliability verdicts",
        text: "Get direct answers about whether the system stayed correct or exposed a critical risk.",
      },
      {
        title: "Engineering reports",
        text: "Turn verification results into reports that teams can understand, discuss, and improve from.",
      },
    ],
  },

  proof: {
    eyebrow: "What it checks",
    title: "Built around the failure modes that matter.",
    items: [
      "Data loss",
      "Duplicate writes",
      "Retry safety",
      "Recovery time",
      "Crash recovery",
      "Network interruption behavior",
      "Deterministic convergence",
      "Auditability of critical operations",
    ],
  },

  useCases: {
    eyebrow: "Use cases",
    title: "For teams building systems where correctness matters.",
    items: [
      {
        title: "Distributed APIs",
        text: "Verify that important API operations stay safe under retries, timeouts, and partial failures.",
      },
      {
        title: "Sync engines",
        text: "Check whether nodes converge correctly after offline periods, interruptions, and delayed delivery.",
      },
      {
        title: "Queues and workers",
        text: "Test whether background processing remains safe when jobs are retried or workers crash.",
      },
      {
        title: "Edge and local-first systems",
        text: "Validate behavior when the network is unstable and local execution must remain correct.",
      },
    ],
  },

  cta: {
    title: "Converdict is currently in development.",
    text: "Softadastra Business will focus on one serious product first: Converdict. The dashboard, reports, agents, and billing system will come later as the product matures.",
    primaryAction: {
      label: "Contact Softadastra",
      href: "/contact",
    },
    secondaryAction: {
      label: "Back to product",
      href: "/product",
    },
  },
};
