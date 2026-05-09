/**
 *
 *  @file httpError.js
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
 * Normalizes API errors into a single frontend-friendly shape.
 */

export class HttpError extends Error {
  constructor(message, options = {}) {
    super(message || "Request failed");

    this.name = "HttpError";
    this.status = options.status || 0;
    this.code = options.code || "request_failed";
    this.payload = options.payload || null;
  }
}

export function normalizeHttpError(error) {
  if (error instanceof HttpError) {
    return error;
  }

  if (error instanceof Error) {
    return new HttpError(error.message, {
      code: "request_failed",
      payload: error,
    });
  }

  return new HttpError("Request failed", {
    code: "request_failed",
    payload: error,
  });
}

export function messageFromApiPayload(payload, fallback = "Request failed") {
  if (!payload || typeof payload !== "object") {
    return fallback;
  }

  if (typeof payload.message === "string" && payload.message.trim() !== "") {
    return payload.message;
  }

  if (typeof payload.error === "string" && payload.error.trim() !== "") {
    return payload.error;
  }

  return fallback;
}

export function codeFromApiPayload(payload, fallback = "request_failed") {
  if (!payload || typeof payload !== "object") {
    return fallback;
  }

  if (typeof payload.error === "string" && payload.error.trim() !== "") {
    return payload.error;
  }

  return fallback;
}
