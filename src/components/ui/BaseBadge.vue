<template>
  <span
    :class="['base-badge', `base-badge--${variant}`, `base-badge--${size}`]"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "neutral",
    validator: (value) =>
      ["neutral", "primary", "success", "warning", "danger", "info"].includes(
        value,
      ),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md"].includes(value),
  },
});
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid var(--sb-border);
  border-radius: 999px;
  font-family: var(--sb-font-mono);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}

.base-badge--sm {
  padding: 5px 8px;
  font-size: 0.65rem;
}

.base-badge--md {
  padding: 6px 10px;
  font-size: 0.72rem;
}

.base-badge--neutral {
  background: rgba(255, 255, 255, 0.04);
  color: var(--sb-text-muted);
}

.base-badge--primary {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary-soft);
  color: var(--sb-primary);
}

.base-badge--success {
  border-color: rgba(47, 212, 156, 0.28);
  background: var(--sb-success-soft);
  color: var(--sb-success);
}

.base-badge--warning {
  border-color: rgba(248, 193, 74, 0.28);
  background: var(--sb-warning-soft);
  color: var(--sb-warning);
}

.base-badge--danger {
  border-color: rgba(255, 95, 109, 0.28);
  background: var(--sb-danger-soft);
  color: var(--sb-danger);
}

.base-badge--info {
  border-color: rgba(104, 167, 255, 0.28);
  background: var(--sb-info-soft);
  color: var(--sb-info);
}
</style>
