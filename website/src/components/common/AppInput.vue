<!--
 *
 *  @file AppInput.vue
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
  <label class="app-input">
    <span v-if="label" class="form-label">{{ label }}</span>

    <textarea
      v-if="textarea"
      class="form-textarea"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      @input="emitValue"
    ></textarea>

    <input
      v-else
      class="form-input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @input="emitValue"
    />

    <span v-if="hint && !error" class="form-hint">{{ hint }}</span>
    <span v-if="error" class="form-error">{{ error }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
  },
})

const emit = defineEmits(['update:modelValue'])

function emitValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.app-input {
  display: grid;
  gap: 8px;
}
</style>
