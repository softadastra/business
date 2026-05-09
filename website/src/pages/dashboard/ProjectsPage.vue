<!--
 *
 *  @file ProjectsPage.vue
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
  <DashboardLayout
    title="Projects"
    subtitle="Manage the applications and APIs you want to test."
  >
    <section class="dashboard-page-header">
      <div>
        <p class="dashboard-page-kicker">Projects</p>
        <h2 class="dashboard-page-title">Reliability test targets</h2>
        <p class="dashboard-page-description">
          Each project represents one API, backend or product monitored by
          Softadastra Cloud.
        </p>
      </div>

      <AppButton @click="showCreateForm = !showCreateForm">
        {{ showCreateForm ? 'Close form' : 'Create project' }}
      </AppButton>
    </section>

    <AppCard
      v-if="showCreateForm"
      title="Create project"
      description="Add the API or backend you want to test."
      class="projects-form-card"
    >
      <form class="form-stack" @submit.prevent="submitProject">
        <AppInput
          v-model="form.name"
          label="Project name"
          placeholder="PulseGrid API"
          :disabled="creating"
        />

        <AppInput
          v-model="form.description"
          label="Description"
          placeholder="Production monitoring API"
          :disabled="creating"
          textarea
        />

        <AppInput
          v-model="form.baseUrl"
          label="Base URL"
          placeholder="https://api.example.com"
          :disabled="creating"
        />

        <p v-if="formError" class="form-error">
          {{ formError }}
        </p>

        <div class="form-actions">
          <AppButton
            type="submit"
            :loading="creating"
          >
            Save project
          </AppButton>
        </div>
      </form>
    </AppCard>

    <AppLoading v-if="loading" center message="Loading projects..." />

    <AppEmptyState
      v-else-if="projects.length === 0"
      title="No projects yet"
      description="Create your first project to start testing an API under real failure scenarios."
    >
      <template #action>
        <AppButton @click="showCreateForm = true">
          Create project
        </AppButton>
      </template>
    </AppEmptyState>

    <div v-else class="data-table-wrap">
      <div class="data-table-scroll sa-scrollbar">
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Base URL</th>
              <th>Created</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td>
                <RouterLink :to="`/dashboard/projects/${project.id}`">
                  <strong>{{ project.name }}</strong>
                </RouterLink>
                <p class="project-row-description">
                  {{ project.description || project.slug }}
                </p>
              </td>

              <td>
                <span class="project-url">
                  {{ project.baseUrl || 'No base URL' }}
                </span>
              </td>

              <td>{{ formatDateTime(project.createdAt) }}</td>
              <td>{{ formatDateTime(project.updatedAt) }}</td>

              <td>
                <RouterLink
                  :to="`/dashboard/projects/${project.id}`"
                  class="project-row-link"
                >
                  Open
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-if="error" class="form-error projects-error">
      {{ error }}
    </p>
  </DashboardLayout>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'

import AppButton from '../../components/common/AppButton.vue'
import AppCard from '../../components/common/AppCard.vue'
import AppEmptyState from '../../components/common/AppEmptyState.vue'
import AppInput from '../../components/common/AppInput.vue'
import AppLoading from '../../components/common/AppLoading.vue'
import {
  validateProjectForm,
} from '../../features/projects/projectHelpers'
import {
  useProjects,
} from '../../features/projects/useProjects'
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import { formatDateTime } from '../../utils/formatDate'

const {
  projects,
  loading,
  saving,
  error,
  loadProjects,
  saveProject,
} = useProjects()

const showCreateForm = ref(false)
const formError = ref('')

const form = reactive({
  name: '',
  description: '',
  baseUrl: '',
})

function resetForm() {
  form.name = ''
  form.description = ''
  form.baseUrl = ''
}

async function submitProject() {
  formError.value = ''

  const validation = validateProjectForm(form)

  if (!validation.valid) {
    formError.value =
      validation.errors.name ||
      validation.errors.baseUrl ||
      'Invalid project form.'

    return
  }

  try {
    await saveProject({
      name: form.name.trim(),
      description: form.description.trim(),
      baseUrl: form.baseUrl.trim(),
    })

    resetForm()
    showCreateForm.value = false
  } catch (err) {
    formError.value = err.message
  }
}

onMounted(() => {
  loadProjects({
    limit: 50,
    offset: 0,
  })
})
</script>

<style scoped>
.projects-form-card {
  margin-bottom: 22px;
}

.project-row-description {
  margin: 4px 0 0;
  color: var(--sa-text-muted);
  font-size: 0.84rem;
}

.project-url {
  color: var(--sa-text-soft);
  font-size: 0.88rem;
}

.project-row-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border: 1px solid var(--sa-border);
  border-radius: 999px;
  padding: 0 12px;
  background: rgba(15, 23, 42, 0.72);
  color: var(--sa-text);
  font-size: 0.84rem;
  font-weight: 800;
}

.project-row-link:hover {
  border-color: var(--sa-border-strong);
  background: rgba(30, 41, 59, 0.82);
}

.projects-error {
  margin-top: 18px;
}
</style>
