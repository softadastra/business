<template>
  <div class="marketing-layout">
    <BusinessHeader />

    <main class="marketing-layout__main">
      <RouterView />
    </main>

    <BusinessFooter />
  </div>
</template>

<script setup>
import BusinessHeader from "../components/marketing/BusinessHeader.vue";
import BusinessFooter from "../components/marketing/BusinessFooter.vue";
</script>

<style scoped>
.marketing-layout {
  min-height: 100vh;
  background: var(--sb-bg);
  color: var(--sb-text);
}

.marketing-layout__main {
  min-height: calc(100vh - var(--sb-header-height));
}
</style>
