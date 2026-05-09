/**
 *
 *  @file agentsApi.js
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

function normalizeAgent(agent = {}) {
  return {
    id: agent.id || "",
    projectId: agent.project_id || "",
    name: agent.name || "",
    lastSeenAt: agent.last_seen_at || 0,
    createdAt: agent.created_at || 0,
    updatedAt: agent.updated_at || 0,
  };
}

function normalizeAgentList(payload) {
  const data = payload?.data || {};
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    items: items.map(normalizeAgent),
    total: Number(data.total || 0),
    count: Number(data.count || items.length),
    limit: Number(data.limit || 20),
    offset: Number(data.offset || 0),
  };
}

function normalizeAgentPayload(payload) {
  const data = payload?.data || {};

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    agent: normalizeAgent(data.agent || data),
    apiKey: data.api_key || "",
    apiKeyWarning: data.api_key_warning || "",
  };
}

export async function listAgents({
  projectId = "",
  limit = 20,
  offset = 0,
} = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  if (projectId) {
    params.set("project_id", projectId);
  }

  const payload = await apiClient.get(`/api/agents?${params.toString()}`);

  return normalizeAgentList(payload);
}

export async function createAgent({ projectId, name }) {
  const payload = await apiClient.post("/api/agents", {
    project_id: projectId,
    name,
  });

  return normalizeAgentPayload(payload);
}

export async function getAgent(agentId) {
  const payload = await apiClient.get(
    `/api/agents/${encodeURIComponent(agentId)}`,
  );

  return normalizeAgentPayload(payload);
}

export async function rotateAgentApiKey(agentId) {
  const payload = await apiClient.post(
    `/api/agents/${encodeURIComponent(agentId)}/rotate-key`,
    {},
  );

  return normalizeAgentPayload(payload);
}

export async function deleteAgent(agentId) {
  const payload = await apiClient.delete(
    `/api/agents/${encodeURIComponent(agentId)}`,
  );

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    data: payload?.data || {},
  };
}
