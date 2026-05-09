/**
 *
 *  @file eventsApi.js
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

function normalizeEvent(event = {}) {
  return {
    id: event.id || "",
    runId: event.run_id || "",
    eventType: event.event_type || "",
    severity: event.severity || "",
    message: event.message || "",
    payload: event.payload || "",
    createdAt: event.created_at || 0,
  };
}

function normalizeEventList(payload) {
  const data = payload?.data || {};
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    items: items.map(normalizeEvent),
    total: Number(data.total || 0),
    count: Number(data.count || items.length),
    limit: Number(data.limit || 50),
    offset: Number(data.offset || 0),
  };
}

function normalizeEventPayload(payload) {
  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    event: normalizeEvent(payload?.data || {}),
  };
}

export async function listEvents({ runId = "", limit = 50, offset = 0 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  if (runId) {
    params.set("run_id", runId);
  }

  const payload = await apiClient.get(`/api/events?${params.toString()}`);

  return normalizeEventList(payload);
}

export async function listEventsForRun(
  runId,
  { limit = 50, offset = 0, agentApiKey = "" } = {},
) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  const payload = await apiClient.get(
    `/api/runs/${encodeURIComponent(runId)}/events?${params.toString()}`,
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeEventList(payload);
}

export async function createEventForRun(
  runId,
  {
    eventType,
    severity = "info",
    message = "",
    payload = {},
    agentApiKey = "",
  },
) {
  const response = await apiClient.post(
    `/api/runs/${encodeURIComponent(runId)}/events`,
    {
      event_type: eventType,
      severity,
      message,
      payload,
    },
    {
      headers: agentHeaders(agentApiKey),
    },
  );

  return normalizeEventPayload(response);
}

export async function getEvent(eventId) {
  const payload = await apiClient.get(
    `/api/events/${encodeURIComponent(eventId)}`,
  );

  return normalizeEventPayload(payload);
}
