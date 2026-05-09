<!--
 *
 *  @file LoginPage.vue
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
  <PublicLayout>
    <section class="auth-page">
      <div class="auth-card">
        <span class="sa-badge">Dashboard access</span>

        <h1 class="auth-title">Welcome back.</h1>
        <p class="auth-description">
          Log in to monitor projects, agents, reliability runs, and reports.
        </p>

        <form class="form-stack" @submit.prevent="submitLogin">
          <AppInput
            v-model="form.email"
            label="Email"
            type="email"
            autocomplete="email"
            placeholder="gaspard@example.com"
            :disabled="loading"
          />

          <AppInput
            v-model="form.password"
            label="Password"
            type="password"
            autocomplete="current-password"
            placeholder="Your password"
            :disabled="loading"
          />

          <p v-if="error" class="form-error">
            {{ error }}
          </p>

          <div class="form-actions">
            <AppButton
              type="submit"
              size="lg"
              :loading="loading"
              block
            >
              Login
            </AppButton>
          </div>
        </form>

        <p class="auth-switch">
          No account yet?
          <RouterLink to="/register">
            Create one
          </RouterLink>
        </p>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '../../components/common/AppButton.vue'
import AppInput from '../../components/common/AppInput.vue'
import { useAuth } from '../../features/auth/useAuth'
import PublicLayout from '../../layouts/PublicLayout.vue'

const router = useRouter()

const {
  loading,
  login,
} = useAuth()

const error = ref('')

const form = reactive({
  email: '',
  password: '',
})

async function submitLogin() {
  error.value = ''

  if (!form.email || !form.password) {
    error.value = 'Email and password are required.'
    return
  }

  try {
    await login({
      email: form.email.trim(),
      password: form.password,
    })

    router.push('/dashboard')
  } catch (err) {
    error.value = err.message
  }
}
</script>
