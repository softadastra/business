/**
 *
 *  @file client.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { apiUrl } from "../config/env";
import {
  HttpError,
  codeFromApiPayload,
  messageFromApiPayload,
} from "../utils/httpError";
import { storageGet, storageRemove, storageSet } from "../utils/storage";

const AUTH_TOKEN_KEY = "auth_token";

function buildHeaders(options = {}) {
  const headers = new Headers(options.headers || {});

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options.body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const token = storageGet(AUTH_TOKEN_KEY);

  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
}

function normalizeBody(body) {
  if (body === undefined || body === null) {
    return undefined;
  }

  if (typeof body === "string" || body instanceof FormData) {
    return body;
  }

  return JSON.stringify(body);
}

async function parseResponse(response) {
  const contentType = response.headers.get("Content-Type") || "";

  if (response.status === 204) {
    return null;
  }

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

async function request(path, options = {}) {
  const response = await fetch(apiUrl(path), {
    method: options.method || "GET",
    headers: buildHeaders(options),
    body: normalizeBody(options.body),
    credentials: options.credentials || "include",
  });

  const payload = await parseResponse(response);

  if (!response.ok) {
    throw new HttpError(messageFromApiPayload(payload), {
      status: response.status,
      code: codeFromApiPayload(payload),
      payload,
    });
  }

  return payload;
}

export const apiClient = Object.freeze({
  get(path, options = {}) {
    return request(path, {
      ...options,
      method: "GET",
    });
  },

  post(path, body, options = {}) {
    return request(path, {
      ...options,
      method: "POST",
      body,
    });
  },

  put(path, body, options = {}) {
    return request(path, {
      ...options,
      method: "PUT",
      body,
    });
  },

  patch(path, body, options = {}) {
    return request(path, {
      ...options,
      method: "PATCH",
      body,
    });
  },

  delete(path, options = {}) {
    return request(path, {
      ...options,
      method: "DELETE",
    });
  },
});

export function saveAuthToken(token) {
  if (!token) {
    return false;
  }

  return storageSet(AUTH_TOKEN_KEY, token);
}

export function getAuthToken() {
  return storageGet(AUTH_TOKEN_KEY);
}

export function clearAuthToken() {
  return storageRemove(AUTH_TOKEN_KEY);
}
