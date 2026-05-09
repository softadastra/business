<!--
 *
 *  @file AppLoading.vue
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
-->

<template>
  <div class="app-loading" :class="{ 'app-loading-center': center }">
    <span class="app-loading-spinner" aria-hidden="true"></span>
    <p v-if="message" class="app-loading-message">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Loading...',
  },
  center: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.app-loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--sa-text-muted);
}

.app-loading-center {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 180px;
}

.app-loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(148, 163, 184, 0.24);
  border-top-color: var(--sa-primary);
  border-radius: 999px;
  animation: spin 720ms linear infinite;
}

.app-loading-message {
  margin: 0;
  color: var(--sa-text-muted);
  font-size: 0.92rem;
  font-weight: 650;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
