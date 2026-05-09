/**
 *
 *  @file useRuns.js
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
  createRun,
  deleteRun,
  finishRun,
  getRun,
  listRuns,
  updateRunStatus,
} from "../../api/runsApi";

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
  updating: false,
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

function setRunResult(result) {
  state.current = result.run || null;
}

function updateRunInList(run) {
  if (!run?.id) {
    return;
  }

  const index = state.items.findIndex((item) => item.id === run.id);

  if (index !== -1) {
    state.items[index] = run;
  }
}

function setError(error) {
  const normalized = normalizeHttpError(error);
  state.error = normalized.message;
  return normalized;
}

async function loadRuns(options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listRuns({
      projectId: options.projectId || "",
      agentId: options.agentId || "",
      limit: options.limit ?? state.limit,
      offset: options.offset ?? state.offset,
      agentApiKey: options.agentApiKey || "",
    });

    setListResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function loadRun(runId, options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getRun(runId, {
      agentApiKey: options.agentApiKey || "",
    });

    setRunResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function saveRun(payload) {
  state.saving = true;
  state.error = "";

  try {
    const result = await createRun(payload);

    setRunResult(result);

    await loadRuns({
      projectId: payload.projectId || "",
      agentId: payload.agentId || "",
      limit: state.limit,
      offset: 0,
      agentApiKey: payload.agentApiKey || "",
    });

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.saving = false;
  }
}

async function changeRunStatus(runId, payload) {
  state.updating = true;
  state.error = "";

  try {
    const result = await updateRunStatus(runId, payload);

    setRunResult(result);
    updateRunInList(result.run);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.updating = false;
  }
}

async function finishCurrentRun(runId, payload = {}) {
  state.updating = true;
  state.error = "";

  try {
    const result = await finishRun(runId, payload);

    setRunResult(result);
    updateRunInList(result.run);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.updating = false;
  }
}

async function removeRun(runId, options = {}) {
  state.deleting = true;
  state.error = "";

  try {
    const result = await deleteRun(runId, {
      agentApiKey: options.agentApiKey || "",
    });

    state.items = state.items.filter((run) => run.id !== runId);

    if (state.current?.id === runId) {
      state.current = null;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.deleting = false;
  }
}

export function useRuns() {
  return {
    state,

    runs: computed(() => state.items),
    currentRun: computed(() => state.current),
    total: computed(() => state.total),
    count: computed(() => state.count),
    limit: computed(() => state.limit),
    offset: computed(() => state.offset),
    loading: computed(() => state.loading),
    saving: computed(() => state.saving),
    updating: computed(() => state.updating),
    deleting: computed(() => state.deleting),
    error: computed(() => state.error),

    loadRuns,
    loadRun,
    saveRun,
    changeRunStatus,
    finishCurrentRun,
    removeRun,
  };
}
