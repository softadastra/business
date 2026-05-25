<template>
  <component
    :is="tag"
    :href="href || undefined"
    :to="to || undefined"
    :class="[
      'base-card',
      `base-card--${padding}`,
      {
        'base-card--interactive': interactive,
      },
    ]"
  >
    <slot />
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
  padding: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  interactive: {
    type: Boolean,
    default: false,
  },
});

const tag = computed(() => {
  if (props.to) {
    return "RouterLink";
  }

  if (props.href) {
    return "a";
  }

  return "div";
});
</script>

<style scoped>
.base-card {
  display: block;
  border: 1px solid var(--sb-border);
  border-radius: var(--sb-radius-lg);
  background: rgba(15, 23, 36, 0.72);
  color: inherit;
  text-decoration: none;
  box-shadow: var(--sb-shadow-sm);
}

.base-card--sm {
  padding: 16px;
}

.base-card--md {
  padding: 22px;
}

.base-card--lg {
  padding: 28px;
}

.base-card--interactive {
  transition: background var(--sb-transition-fast),
    border-color var(--sb-transition-fast), transform var(--sb-transition-fast);
}

.base-card--interactive:hover {
  border-color: var(--sb-border-strong);
  background: rgba(19, 29, 45, 0.9);
  transform: translateY(-2px);
}
</style>
