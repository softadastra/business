<template>
  <div>
    <!-- Above the fold -->
    <HeroSection />
    <WhySection />

    <!-- Below the fold (lazy) -->
    <section ref="belowFold">
      <template v-if="belowLoaded">
        <ProductsSection />
        <EntrepriseSection />
        <PortabilitySection />
        <UseCaseSection />
      </template>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import HeroSection from "@/components/sections/HeroSection.vue";
import WhySection from "@/components/sections/WhySection.vue";

// Async (code splitting)
const ProductsSection = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "home-products" */ "@/components/sections/ProductsSection.vue"
  )
);
const EntrepriseSection = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "home-entreprise" */ "@/components/sections/EntrepriseSection.vue"
  )
);
const PortabilitySection = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "home-portability" */ "@/components/sections/PortabilitySection.vue"
  )
);
const UseCaseSection = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "home-usecases" */ "@/components/sections/UseCaseSection.vue"
  )
);

export default {
  name: "HomePage",
  components: {
    HeroSection,
    WhySection,
    ProductsSection,
    EntrepriseSection,
    PortabilitySection,
    UseCaseSection,
  },
  data() {
    return {
      belowLoaded: false,
      io: null,
    };
  },
  mounted() {
    const target = this.$refs.belowFold;

    if (!target) {
      this.belowLoaded = true;
      return;
    }

    if (!("IntersectionObserver" in window)) {
      this.belowLoaded = true;
      return;
    }

    this.io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          this.belowLoaded = true;
          this.io.disconnect();
          this.io = null;
        }
      },
      {
        root: null,
        rootMargin: "600px 0px",
        threshold: 0.01,
      }
    );

    this.io.observe(target);
  },
  beforeUnmount() {
    if (this.io) this.io.disconnect();
  },
};
</script>
