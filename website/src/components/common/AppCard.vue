<!--
 *
 *  @file AppCard.vue
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
  <article class="app-card" :class="{ 'app-card-hover': hover }">
    <header v-if="$slots.header || title || description" class="app-card-header">
      <slot name="header">
        <div>
          <h3 v-if="title" class="app-card-title">{{ title }}</h3>
          <p v-if="description" class="app-card-description">{{ description }}</p>
        </div>
      </slot>
    </header>

    <div class="app-card-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="app-card-footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  hover: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.app-card {
  overflow: hidden;
  border: 1px solid var(--sa-border);
  border-radius: var(--sa-radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent),
    rgba(15, 23, 42, 0.78);
  box-shadow: var(--sa-shadow-sm);
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.app-card-hover:hover {
  transform: translateY(-2px);
  border-color: var(--sa-border-strong);
  box-shadow: var(--sa-shadow-md);
}

.app-card-header {
  border-bottom: 1px solid var(--sa-border);
  padding: 18px 20px;
}

.app-card-title {
  margin: 0;
  color: var(--sa-text);
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}

.app-card-description {
  margin: 5px 0 0;
  color: var(--sa-text-muted);
  font-size: 0.9rem;
}

.app-card-body {
  padding: 20px;
}

.app-card-footer {
  border-top: 1px solid var(--sa-border);
  padding: 16px 20px;
}
</style>
