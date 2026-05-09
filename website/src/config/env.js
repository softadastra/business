/**
 *
 *  @file env.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

/**
 * Centralized frontend environment configuration.
 *
 * Vite exposes environment variables through import.meta.env.
 * All frontend modules should read API URLs and app metadata from here
 * instead of accessing import.meta.env directly.
 */

const DEFAULT_API_BASE_URL = "http://127.0.0.1:8080";

function trimTrailingSlash(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\/+$/, "");
}

function readEnvString(key, fallback = "") {
  const value = import.meta.env[key];

  if (typeof value !== "string" || value.trim() === "") {
    return fallback;
  }

  return value.trim();
}

export const env = Object.freeze({
  appName: readEnvString("VITE_APP_NAME", "Softadastra Cloud"),

  appEnvironment: readEnvString(
    "VITE_APP_ENVIRONMENT",
    import.meta.env.MODE || "development",
  ),

  apiBaseUrl: trimTrailingSlash(
    readEnvString("VITE_API_BASE_URL", DEFAULT_API_BASE_URL),
  ),

  isDevelopment: import.meta.env.DEV === true,
  isProduction: import.meta.env.PROD === true,
});

export function apiUrl(path = "") {
  const cleanPath = String(path).startsWith("/") ? String(path) : `/${path}`;

  return `${env.apiBaseUrl}${cleanPath}`;
}
