/**
 *
 *  @file reportsApi.js
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

function normalizeReport(report = {}) {
  return {
    id: report.id || "",
    runId: report.run_id || "",
    summary: report.summary || "",
    rawJson: report.raw_json || "",
    createdAt: report.created_at || 0,
    updatedAt: report.updated_at || 0,
  };
}

function normalizeReportList(payload) {
  const data = payload?.data || {};
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    items: items.map(normalizeReport),
    total: Number(data.total || 0),
    count: Number(data.count || items.length),
    limit: Number(data.limit || 20),
    offset: Number(data.offset || 0),
  };
}

function normalizeReportPayload(payload) {
  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    report: normalizeReport(payload?.data || {}),
  };
}

export async function listReports({ limit = 20, offset = 0 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  const payload = await apiClient.get(`/api/reports?${params.toString()}`);

  return normalizeReportList(payload);
}

export async function getReport(reportId) {
  const payload = await apiClient.get(
    `/api/reports/${encodeURIComponent(reportId)}`,
  );

  return normalizeReportPayload(payload);
}

export async function getReportForRun(runId, { agentApiKey = "" } = {}) {
  const payload = await apiClient.get(
    `/api/runs/${encodeURIComponent(runId)}/report`,
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeReportPayload(payload);
}

export async function submitReportForRun(
  runId,
  { summary, rawJson, agentApiKey = "" },
) {
  const payload = await apiClient.post(
    `/api/runs/${encodeURIComponent(runId)}/report`,
    {
      summary,
      raw_json: rawJson,
    },
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeReportPayload(payload);
}

export async function deleteReport(reportId) {
  const payload = await apiClient.delete(
    `/api/reports/${encodeURIComponent(reportId)}`,
  );

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    data: payload?.data || {},
  };
}

export async function deleteReportForRun(runId, { agentApiKey = "" } = {}) {
  const payload = await apiClient.delete(
    `/api/runs/${encodeURIComponent(runId)}/report`,
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
