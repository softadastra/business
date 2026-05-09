/**
 *
 *  @file authApi.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { apiClient, clearAuthToken, saveAuthToken } from "./client";

function normalizeAuthPayload(payload) {
  const data = payload?.data || {};

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    token: data.token || "",
    user: data.user || {
      user_id: data.user_id || "",
      email: data.email || "",
      name: data.name || "",
    },
  };
}

export async function registerUser({ name, email, password }) {
  const payload = await apiClient.post("/api/auth/register", {
    name,
    email,
    password,
  });

  return normalizeAuthPayload(payload);
}

export async function loginUser({ email, password }) {
  const payload = await apiClient.post("/api/auth/login", {
    email,
    password,
  });

  const normalized = normalizeAuthPayload(payload);

  if (normalized.token) {
    saveAuthToken(normalized.token);
  }

  return normalized;
}

export async function getCurrentUser() {
  const payload = await apiClient.get("/api/auth/me");
  const data = payload?.data || {};

  return {
    ok: payload?.ok === true,
    message: payload?.message || "",
    user: data,
  };
}

export function logoutUser() {
  clearAuthToken();
}
