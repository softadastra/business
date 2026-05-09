<!--
 *
 *  @file AppEmptyState.vue
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
  <div class="empty-state">
    <div class="empty-state-icon" aria-hidden="true">
      <slot name="icon">∅</slot>
    </div>

    <h3 class="empty-state-title">{{ title }}</h3>
    <p class="empty-state-description">{{ description }}</p>

    <div v-if="$slots.action" class="empty-state-action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Nothing here yet',
  },
  description: {
    type: String,
    default: 'Create your first item to start seeing data here.',
  },
})
</script>

<style scoped>
.empty-state {
  display: grid;
  place-items: center;
  border: 1px dashed var(--sa-border-strong);
  border-radius: var(--sa-radius-lg);
  padding: 42px 22px;
  background: rgba(15, 23, 42, 0.42);
  text-align: center;
}

.empty-state-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid rgba(56, 189, 248, 0.26);
  border-radius: 18px;
  background: rgba(56, 189, 248, 0.09);
  color: var(--sa-primary);
  font-size: 1.2rem;
  font-weight: 900;
}

.empty-state-title {
  margin-bottom: 8px;
  color: var(--sa-text);
  font-size: 1.1rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}

.empty-state-description {
  max-width: 460px;
  margin: 0;
  color: var(--sa-text-muted);
}

.empty-state-action {
  margin-top: 18px;
}
</style>
