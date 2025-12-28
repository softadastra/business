<template>
  <div>
    <HeroSection />
    <WhySection />

    <ProductsSection />

    <EntrepriseSection />
    <PortabilitySection />
    <UseCaseSection />
    <CTASection />
  </div>
</template>

<script>
import HeroSection from "@/components/sections/HeroSection.vue";
import WhySection from "@/components/sections/WhySection.vue";
import ProductsSection from "@/components/sections/ProductsSection.vue";
import EntrepriseSection from "@/components/sections/EntrepriseSection.vue";
import PortabilitySection from "@/components/sections/PortabilitySection.vue";
import UseCaseSection from "@/components/sections/UseCaseSection.vue";

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
};
</script>
