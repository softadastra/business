/**
 *
 *  @file useProjects.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { computed, reactive } from "vue";

import {
  createProject,
  deleteProject,
  getProject,
  listProjects,
  updateProject,
} from "../../api/projectsApi";

import { normalizeHttpError } from "../../utils/httpError";

const state = reactive({
  items: [],
  current: null,
  total: 0,
  count: 0,
  limit: 20,
  offset: 0,
  loading: false,
  saving: false,
  deleting: false,
  error: "",
});

function setListResult(result) {
  state.items = result.items || [];
  state.total = Number(result.total || 0);
  state.count = Number(result.count || state.items.length);
  state.limit = Number(result.limit || 20);
  state.offset = Number(result.offset || 0);
}

function setError(error) {
  const normalized = normalizeHttpError(error);
  state.error = normalized.message;
  return normalized;
}

async function loadProjects(options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listProjects({
      limit: options.limit ?? state.limit,
      offset: options.offset ?? state.offset,
    });

    setListResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function loadProject(projectId) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getProject(projectId);

    state.current = result.project;

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function saveProject(payload) {
  state.saving = true;
  state.error = "";

  try {
    const result = await createProject(payload);

    state.current = result.project;

    await loadProjects({
      limit: state.limit,
      offset: 0,
    });

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.saving = false;
  }
}

async function editProject(projectId, payload) {
  state.saving = true;
  state.error = "";

  try {
    const result = await updateProject(projectId, payload);

    state.current = result.project;

    const index = state.items.findIndex((project) => project.id === projectId);

    if (index !== -1) {
      state.items[index] = result.project;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.saving = false;
  }
}

async function removeProject(projectId) {
  state.deleting = true;
  state.error = "";

  try {
    const result = await deleteProject(projectId);

    state.items = state.items.filter((project) => project.id !== projectId);

    if (state.current?.id === projectId) {
      state.current = null;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.deleting = false;
  }
}

export function useProjects() {
  return {
    state,

    projects: computed(() => state.items),
    currentProject: computed(() => state.current),
    total: computed(() => state.total),
    count: computed(() => state.count),
    limit: computed(() => state.limit),
    offset: computed(() => state.offset),
    loading: computed(() => state.loading),
    saving: computed(() => state.saving),
    deleting: computed(() => state.deleting),
    error: computed(() => state.error),

    loadProjects,
    loadProject,
    saveProject,
    editProject,
    removeProject,
  };
}
