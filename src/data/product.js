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
    eyebrow: "The problem",
    title: "Network failures make systems unreliable in quiet ways.",
    text: "A request can timeout, retry, succeed twice, or disappear without being visible immediately. Converdict focuses on these hidden failure cases before they become production incidents.",
    points: [
      {
        title: "A timeout is not a clear answer",
        text: "The client may think the request failed while the server already changed state.",
      },
      {
        title: "Retries can create duplicates",
        text: "Without strong protection, the same operation can run more than once.",
      },
      {
        title: "Recovery can leave data inconsistent",
        text: "After a crash or network cut, services may come back with different views of the truth.",
      },
    ],
  },

  solution: {
    eyebrow: "What Converdict does",
    title: "It tests your system under real failure scenarios.",
    text: "Converdict runs reliability checks against your system and shows whether critical operations remain safe when the network fails, retries happen, or recovery starts.",
    points: [
      {
        title: "Inject failure scenarios",
        text: "Simulate network cuts, timeouts, crashes, retries, and recovery flows around critical operations.",
      },
      {
        title: "Detect unsafe behavior",
        text: "Find data loss, duplicate writes, broken retry logic, slow recovery, and inconsistent state.",
      },
      {
        title: "Return a clear verdict",
        text: "See whether the system stayed safe, what failed, and which reliability risk needs to be fixed.",
      },
    ],
  },

  proof: {
    eyebrow: "What it verifies",
    title: "The checks that expose silent failure.",
    text: "Converdict focuses on the failure modes that usually stay hidden until production: lost writes, duplicated work, unsafe retries, slow recovery, and inconsistent state.",
    items: [
      "Data loss after failure",
      "Duplicate writes during retries",
      "Unsafe timeout behavior",
      "Idempotency protection",
      "Outbox and queue recovery",
      "Crash recovery safety",
      "Recovery time after failure",
      "Final state convergence",
    ],
  },

  useCases: {
    eyebrow: "Use cases",
    title: "For systems where a bad retry can become a real incident.",
    items: [
      {
        title: "Critical APIs",
        text: "Verify that payment, order, account, and inventory operations stay safe when requests timeout or retry.",
      },
      {
        title: "Queues and workers",
        text: "Check that background jobs do not duplicate work, lose tasks, or corrupt state after worker crashes.",
      },
      {
        title: "Sync engines",
        text: "Test whether local and remote state converge correctly after offline periods and delayed delivery.",
      },
      {
        title: "Distributed platforms",
        text: "Validate recovery behavior across services, regions, edge nodes, and unreliable network paths.",
      },
    ],
  },

  cta: {
    title: "Help shape Converdict before launch.",
    text: "Converdict is in development. Softadastra is looking for engineering teams that want to test reliability under network failures, retries, crashes, and recovery scenarios.",
    primaryAction: {
      label: "Request early access",
      href: "/contact",
    },
    secondaryAction: {
      label: "View product",
      href: "/product",
    },
  },
};
