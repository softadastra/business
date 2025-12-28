<template>
  <div class="sa-app">
    <SiteHeader />
    <main class="sa-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "App",
  components: { SiteHeader, SiteFooter },
};
</script>

<style scoped>
.sa-main {
  min-height: 70vh;
}
</style>
