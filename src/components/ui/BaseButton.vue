<template>
  <component
    :is="tag"
    :href="isLink ? href : undefined"
    :to="isRouterLink ? to : undefined"
    :type="isButton ? type : undefined"
    :disabled="isButton ? disabled : undefined"
    :class="[
      'base-button',
      `base-button--${variant}`,
      `base-button--${size}`,
      {
        'base-button--block': block,
        'base-button--disabled': disabled,
      },
    ]"
  >
    <span class="base-button__content">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  to: {
    type: [String, Object],
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "ghost"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isRouterLink = computed(() => Boolean(props.to));
const isLink = computed(() => Boolean(props.href) && !isRouterLink.value);
const isButton = computed(() => !isLink.value && !isRouterLink.value);

const tag = computed(() => {
  if (isRouterLink.value) {
    return "RouterLink";
  }

  if (isLink.value) {
    return "a";
  }

  return "button";
});
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border: 1px solid transparent;
  border-radius: var(--sb-radius-sm);
  font-weight: 750;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--sb-transition-fast),
    border-color var(--sb-transition-fast), color var(--sb-transition-fast),
    transform var(--sb-transition-fast);
}

.base-button:hover {
  transform: translateY(-1px);
}

.base-button--disabled,
.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.62;
  transform: none;
}

.base-button--block {
  width: 100%;
}

.base-button--sm {
  min-height: 34px;
  padding: 0 12px;
  font-size: 0.82rem;
}

.base-button--md {
  min-height: 42px;
  padding: 0 16px;
  font-size: 0.92rem;
}

.base-button--lg {
  min-height: 50px;
  padding: 0 22px;
  font-size: 1rem;
}

.base-button--primary {
  border-color: var(--sb-primary-border);
  background: var(--sb-primary);
  color: #04130e;
}

.base-button--primary:hover {
  border-color: rgba(47, 212, 156, 0.6);
  background: #5ce3b6;
  color: #04130e;
}

.base-button--secondary {
  border-color: var(--sb-border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--sb-text);
}

.base-button--secondary:hover {
  border-color: var(--sb-border-strong);
  background: rgba(255, 255, 255, 0.08);
}

.base-button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--sb-text-soft);
}

.base-button--ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--sb-text);
}

.base-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
