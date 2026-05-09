<!--
 *
 *  @file AppButton.vue
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
  <button
    class="app-button"
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="app-button-spinner" aria-hidden="true"></span>
    <span class="app-button-content">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'button',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const buttonClasses = computed(() => [
  `app-button-${props.variant}`,
  `app-button-${props.size}`,
  {
    'app-button-loading': props.loading,
    'app-button-block': props.block,
  },
])
</script>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 1px solid transparent;
  border-radius: 999px;
  outline: none;
  font-weight: 800;
  white-space: nowrap;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease,
    opacity 160ms ease,
    box-shadow 160ms ease;
}

.app-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.app-button:focus-visible {
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.16);
}

.app-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.app-button-block {
  width: 100%;
}

.app-button-sm {
  min-height: 36px;
  padding: 0 14px;
  font-size: 0.86rem;
}

.app-button-md {
  min-height: 44px;
  padding: 0 18px;
  font-size: 0.92rem;
}

.app-button-lg {
  min-height: 52px;
  padding: 0 24px;
  font-size: 1rem;
}

.app-button-primary {
  background: linear-gradient(135deg, var(--sa-primary), var(--sa-primary-strong));
  color: #03111d;
  box-shadow: 0 12px 28px rgba(56, 189, 248, 0.22);
}

.app-button-primary:hover:not(:disabled) {
  box-shadow: 0 16px 36px rgba(56, 189, 248, 0.28);
}

.app-button-secondary {
  border-color: var(--sa-border);
  background: rgba(15, 23, 42, 0.78);
  color: var(--sa-text);
}

.app-button-secondary:hover:not(:disabled) {
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.88);
}

.app-button-ghost {
  background: transparent;
  color: var(--sa-text-muted);
}

.app-button-ghost:hover:not(:disabled) {
  background: rgba(148, 163, 184, 0.08);
  color: var(--sa-text);
}

.app-button-danger {
  background: rgba(239, 68, 68, 0.12);
  color: var(--sa-danger);
  border-color: rgba(239, 68, 68, 0.28);
}

.app-button-danger:hover:not(:disabled) {
  background: rgba(239, 68, 68, 0.18);
}

.app-button-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 999px;
  animation: spin 700ms linear infinite;
}

.app-button-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
