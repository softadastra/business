/**
 *
 *  @file projectsApi.js
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

function normalizeProject(project = {}) {
  return {
    id: project.id || "",
    name: project.name || "",
    slug: project.slug || "",
    description: project.description || "",
    baseUrl: project.base_url || "",
    createdAt: project.created_at || 0,
    updatedAt: project.updated_at || 0,
  };
}

function normalizeProjectList(payload) {
  const data = payload?.data || {};
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    items: items.map(normalizeProject),
    total: Number(data.total || 0),
    count: Number(data.count || items.length),
    limit: Number(data.limit || 20),
    offset: Number(data.offset || 0),
  };
}

function normalizeProjectPayload(payload) {
  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    project: normalizeProject(payload?.data || {}),
  };
}

export async function listProjects({ limit = 20, offset = 0 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  const payload = await apiClient.get(`/api/projects?${params.toString()}`);

  return normalizeProjectList(payload);
}

export async function createProject({ name, description = "", baseUrl = "" }) {
  const payload = await apiClient.post("/api/projects", {
    name,
    description,
    base_url: baseUrl,
  });

  return normalizeProjectPayload(payload);
}

export async function getProject(projectId) {
  const payload = await apiClient.get(
    `/api/projects/${encodeURIComponent(projectId)}`,
  );

  return normalizeProjectPayload(payload);
}

export async function updateProject(
  projectId,
  { name, description = "", baseUrl = "" },
) {
  const payload = await apiClient.put(
    `/api/projects/${encodeURIComponent(projectId)}`,
    {
      name,
      description,
      base_url: baseUrl,
    },
  );

  return normalizeProjectPayload(payload);
}

export async function deleteProject(projectId) {
  const payload = await apiClient.delete(
    `/api/projects/${encodeURIComponent(projectId)}`,
  );

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    data: payload?.data || {},
  };
}
