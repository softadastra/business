<!--
 *
 *  @file StatCard.vue
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
  <article class="stat-card">
    <p class="stat-card-label">{{ label }}</p>

    <h3 class="stat-card-value">
      {{ value }}
    </h3>

    <p v-if="helper" class="stat-card-helper">
      {{ helper }}
    </p>
  </article>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    default: 0,
  },
  helper: {
    type: String,
    default: '',
  },
})
</script>
