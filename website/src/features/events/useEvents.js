/**
 *
 *  @file useEvents.js
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
  createEventForRun,
  getEvent,
  listEvents,
  listEventsForRun,
} from "../../api/eventsApi";

import { normalizeHttpError } from "../../utils/httpError";

const state = reactive({
  items: [],
  current: null,
  total: 0,
  count: 0,
  limit: 50,
  offset: 0,
  loading: false,
  saving: false,
  error: "",
});

function setListResult(result) {
  state.items = result.items || [];
  state.total = Number(result.total || 0);
  state.count = Number(result.count || state.items.length);
  state.limit = Number(result.limit || 50);
  state.offset = Number(result.offset || 0);
}

function setEventResult(result) {
  state.current = result.event || null;
}

function setError(error) {
  const normalized = normalizeHttpError(error);
  state.error = normalized.message;
  return normalized;
}

async function loadEvents(options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listEvents({
      runId: options.runId || "",
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

async function loadEventsForRun(runId, options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listEventsForRun(runId, {
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

async function loadEvent(eventId) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getEvent(eventId);

    setEventResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function saveEventForRun(runId, payload) {
  state.saving = true;
  state.error = "";

  try {
    const result = await createEventForRun(runId, payload);

    setEventResult(result);

    await loadEventsForRun(runId, {
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

export function useEvents() {
  return {
    state,

    events: computed(() => state.items),
    currentEvent: computed(() => state.current),
    total: computed(() => state.total),
    count: computed(() => state.count),
    limit: computed(() => state.limit),
    offset: computed(() => state.offset),
    loading: computed(() => state.loading),
    saving: computed(() => state.saving),
    error: computed(() => state.error),

    loadEvents,
    loadEventsForRun,
    loadEvent,
    saveEventForRun,
  };
}
