/**
 *
 *  @file runsApi.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { apiClient } from "./client";

const AGENT_API_KEY_HEADER = "x-agent-api-key";

function agentHeaders(agentApiKey) {
  if (!agentApiKey) {
    return {};
  }

  return {
    [AGENT_API_KEY_HEADER]: agentApiKey,
  };
}

function normalizeRun(run = {}) {
  return {
    id: run.id || "",
    projectId: run.project_id || "",
    agentId: run.agent_id || "",
    status: run.status || "",
    targetUrl: run.target_url || "",
    method: run.method || "",
    scenario: run.scenario || "",
    startedAt: run.started_at || 0,
    finishedAt: run.finished_at || 0,
    createdAt: run.created_at || 0,
    updatedAt: run.updated_at || 0,
  };
}

function normalizeRunList(payload) {
  const data = payload?.data || {};
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    items: items.map(normalizeRun),
    total: Number(data.total || 0),
    count: Number(data.count || items.length),
    limit: Number(data.limit || 20),
    offset: Number(data.offset || 0),
  };
}

function normalizeRunPayload(payload) {
  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    run: normalizeRun(payload?.data || {}),
  };
}

export async function listRuns({
  projectId = "",
  agentId = "",
  limit = 20,
  offset = 0,
  agentApiKey = "",
} = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  if (projectId) {
    params.set("project_id", projectId);
  }

  if (agentId) {
    params.set("agent_id", agentId);
  }

  const payload = await apiClient.get(`/api/runs?${params.toString()}`, {
    headers: agentHeaders(agentApiKey),
  });

  return normalizeRunList(payload);
}

export async function createRun({
  projectId,
  agentId,
  targetUrl,
  method = "GET",
  scenario,
  agentApiKey = "",
}) {
  const payload = await apiClient.post(
    "/api/runs",
    {
      project_id: projectId,
      agent_id: agentId,
      target_url: targetUrl,
      method,
      scenario,
    },
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeRunPayload(payload);
}

export async function getRun(runId, { agentApiKey = "" } = {}) {
  const payload = await apiClient.get(
    `/api/runs/${encodeURIComponent(runId)}`,
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeRunPayload(payload);
}

export async function updateRunStatus(runId, { status, agentApiKey = "" }) {
  const payload = await apiClient.post(
    `/api/runs/${encodeURIComponent(runId)}/status`,
    {
      status,
    },
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeRunPayload(payload);
}

export async function finishRun(
  runId,
  { status = "finished", agentApiKey = "" } = {},
) {
  const payload = await apiClient.post(
    `/api/runs/${encodeURIComponent(runId)}/finish`,
    {
      status,
    },
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeRunPayload(payload);
}

export async function deleteRun(runId, { agentApiKey = "" } = {}) {
  const payload = await apiClient.delete(
    `/api/runs/${encodeURIComponent(runId)}`,
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    data: payload?.data || {},
  };
}
