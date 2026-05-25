<template>
  <div :class="['base-alert', `base-alert--${variant}`]" role="status">
    <div class="base-alert__marker" aria-hidden="true"></div>

    <div class="base-alert__content">
      <p v-if="title" class="base-alert__title">
        {{ title }}
      </p>

      <p v-if="$slots.default" class="base-alert__text">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "info",
    validator: (value) =>
      ["info", "success", "warning", "danger"].includes(value),
  },
});
</script>

<style scoped>
.base-alert {
  display: flex;
  gap: 14px;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-md);
  padding: 16px;
  background: rgba(15, 23, 36, 0.72);
}

.base-alert__marker {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  margin-top: 7px;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 6px currentColor;
  opacity: 0.18;
}

.base-alert__content {
  min-width: 0;
}

.base-alert__title {
  margin: 0;
  color: var(--sb-text);
  font-size: 0.95rem;
  font-weight: 760;
  letter-spacing: -0.01em;
}

.base-alert__text {
  margin: 6px 0 0;
  color: var(--sb-text-soft);
  font-size: 0.92rem;
  line-height: 1.65;
}

.base-alert--info {
  border-color: rgba(104, 167, 255, 0.28);
  background: var(--sb-info-soft);
  color: var(--sb-info);
}

.base-alert--success {
  border-color: rgba(47, 212, 156, 0.28);
  background: var(--sb-success-soft);
  color: var(--sb-success);
}

.base-alert--warning {
  border-color: rgba(248, 193, 74, 0.28);
  background: var(--sb-warning-soft);
  color: var(--sb-warning);
}

.base-alert--danger {
  border-color: rgba(255, 95, 109, 0.28);
  background: var(--sb-danger-soft);
  color: var(--sb-danger);
}
</style>
