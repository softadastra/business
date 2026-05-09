<!--
 *
 *  @file RegisterPage.vue
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
        <span class="sa-badge">Start testing</span>

        <h1 class="auth-title">Create your account.</h1>
        <p class="auth-description">
          Set up your dashboard and start tracking reliability runs.
        </p>

        <form class="form-stack" @submit.prevent="submitRegister">
          <AppInput
            v-model="form.name"
            label="Name"
            autocomplete="name"
            placeholder="Gaspard"
            :disabled="loading"
          />

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
            autocomplete="new-password"
            placeholder="At least 8 characters"
            hint="Use at least 8 characters."
            :disabled="loading"
          />

          <p v-if="error" class="form-error">
            {{ error }}
          </p>

          <p v-if="success" class="register-success">
            {{ success }}
          </p>

          <div class="form-actions">
            <AppButton
              type="submit"
              size="lg"
              :loading="loading"
              block
            >
              Create account
            </AppButton>
          </div>
        </form>

        <p class="auth-switch">
          Already have an account?
          <RouterLink to="/login">
            Login
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
  register,
} = useAuth()

const error = ref('')
const success = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
})

async function submitRegister() {
  error.value = ''
  success.value = ''

  if (!form.name || !form.email || !form.password) {
    error.value = 'Name, email and password are required.'
    return
  }

  if (form.password.length < 8) {
    error.value = 'Password must contain at least 8 characters.'
    return
  }

  try {
    await register({
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
    })

    success.value = 'Account created. You can now log in.'

    setTimeout(() => {
      router.push('/login')
    }, 700)
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
.register-success {
  margin: 0;
  color: var(--sa-success);
  font-size: 0.9rem;
  font-weight: 700;
}
</style>
