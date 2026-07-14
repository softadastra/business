<template>
  <component
    :is="tag"
    :href="isLink ? href : undefined"
    :to="isRouterLink ? to : undefined"
    :type="isButton ? type : undefined"
    :disabled="isButton ? disabled : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
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
const isExternal = computed(() => isLink.value && /^https?:\/\//.test(props.href));

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
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background var(--sb-transition-fast),
    border-color var(--sb-transition-fast),
    color var(--sb-transition-fast),
    transform var(--sb-transition-fast),
    box-shadow var(--sb-transition-fast);
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
  min-height: 48px;
  padding: 0 20px;
  font-size: 0.98rem;
}

.base-button--primary {
  border-color: var(--sb-primary);
  background: var(--sb-primary);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.base-button--primary:hover {
  border-color: var(--sb-primary-hover);
  background: var(--sb-primary-hover);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.base-button--secondary {
  border-color: var(--sb-border-strong);
  background: var(--sb-surface);
  color: var(--sb-text);
}

.base-button--secondary:hover {
  background: var(--sb-bg-muted);
}

.base-button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--sb-text-soft);
}

.base-button--ghost:hover {
  background: var(--sb-bg-muted);
  color: var(--sb-text);
}

.base-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
