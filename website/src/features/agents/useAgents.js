/**
 *
 *  @file useAgents.js
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
  createAgent,
  deleteAgent,
  getAgent,
  listAgents,
  rotateAgentApiKey,
} from "../../api/agentsApi";

import { normalizeHttpError } from "../../utils/httpError";

const state = reactive({
  items: [],
  current: null,
  lastApiKey: "",
  lastApiKeyWarning: "",
  total: 0,
  count: 0,
  limit: 20,
  offset: 0,
  loading: false,
  saving: false,
  rotating: false,
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

function setAgentResult(result) {
  state.current = result.agent || null;
  state.lastApiKey = result.apiKey || "";
  state.lastApiKeyWarning = result.apiKeyWarning || "";
}

function setError(error) {
  const normalized = normalizeHttpError(error);
  state.error = normalized.message;
  return normalized;
}

function clearGeneratedKey() {
  state.lastApiKey = "";
  state.lastApiKeyWarning = "";
}

async function loadAgents(options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listAgents({
      projectId: options.projectId || "",
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

async function loadAgent(agentId) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getAgent(agentId);

    setAgentResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function saveAgent(payload) {
  state.saving = true;
  state.error = "";
  clearGeneratedKey();

  try {
    const result = await createAgent(payload);

    setAgentResult(result);

    await loadAgents({
      projectId: payload.projectId || "",
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

async function rotateKey(agentId) {
  state.rotating = true;
  state.error = "";
  clearGeneratedKey();

  try {
    const result = await rotateAgentApiKey(agentId);

    setAgentResult(result);

    const index = state.items.findIndex((agent) => agent.id === agentId);

    if (index !== -1 && result.agent) {
      state.items[index] = result.agent;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.rotating = false;
  }
}

async function removeAgent(agentId) {
  state.deleting = true;
  state.error = "";

  try {
    const result = await deleteAgent(agentId);

    state.items = state.items.filter((agent) => agent.id !== agentId);

    if (state.current?.id === agentId) {
      state.current = null;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.deleting = false;
  }
}

export function useAgents() {
  return {
    state,

    agents: computed(() => state.items),
    currentAgent: computed(() => state.current),
    lastApiKey: computed(() => state.lastApiKey),
    lastApiKeyWarning: computed(() => state.lastApiKeyWarning),
    total: computed(() => state.total),
    count: computed(() => state.count),
    limit: computed(() => state.limit),
    offset: computed(() => state.offset),
    loading: computed(() => state.loading),
    saving: computed(() => state.saving),
    rotating: computed(() => state.rotating),
    deleting: computed(() => state.deleting),
    error: computed(() => state.error),

    loadAgents,
    loadAgent,
    saveAgent,
    rotateKey,
    removeAgent,
    clearGeneratedKey,
  };
}
