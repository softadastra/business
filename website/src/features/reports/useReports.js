/**
 *
 *  @file useReports.js
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
  deleteReport,
  deleteReportForRun,
  getReport,
  getReportForRun,
  listReports,
  submitReportForRun,
} from "../../api/reportsApi";

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

function setReportResult(result) {
  state.current = result.report || null;
}

function setError(error) {
  const normalized = normalizeHttpError(error);
  state.error = normalized.message;
  return normalized;
}

async function loadReports(options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await listReports({
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

async function loadReport(reportId) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getReport(reportId);

    setReportResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function loadReportForRun(runId, options = {}) {
  state.loading = true;
  state.error = "";

  try {
    const result = await getReportForRun(runId, {
      agentApiKey: options.agentApiKey || "",
    });

    setReportResult(result);

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.loading = false;
  }
}

async function saveReportForRun(runId, payload) {
  state.saving = true;
  state.error = "";

  try {
    const result = await submitReportForRun(runId, payload);

    setReportResult(result);

    await loadReports({
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

async function removeReport(reportId) {
  state.deleting = true;
  state.error = "";

  try {
    const result = await deleteReport(reportId);

    state.items = state.items.filter((report) => report.id !== reportId);

    if (state.current?.id === reportId) {
      state.current = null;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.deleting = false;
  }
}

async function removeReportForRun(runId, options = {}) {
  state.deleting = true;
  state.error = "";

  try {
    const result = await deleteReportForRun(runId, {
      agentApiKey: options.agentApiKey || "",
    });

    state.items = state.items.filter((report) => report.runId !== runId);

    if (state.current?.runId === runId) {
      state.current = null;
    }

    return result;
  } catch (err) {
    throw setError(err);
  } finally {
    state.deleting = false;
  }
}

export function useReports() {
  return {
    state,

    reports: computed(() => state.items),
    currentReport: computed(() => state.current),
    total: computed(() => state.total),
    count: computed(() => state.count),
    limit: computed(() => state.limit),
    offset: computed(() => state.offset),
    loading: computed(() => state.loading),
    saving: computed(() => state.saving),
    deleting: computed(() => state.deleting),
    error: computed(() => state.error),

    loadReports,
    loadReport,
    loadReportForRun,
    saveReportForRun,
    removeReport,
    removeReportForRun,
  };
}
