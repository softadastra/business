/**
 *
 *  @file formatDate.js
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
 * Date formatting helpers.
 *
 * Backend timestamps are expected to be milliseconds since Unix epoch.
 */

function normalizeTimestamp(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const timestamp = Number(value);

  if (!Number.isFinite(timestamp) || timestamp <= 0) {
    return null;
  }

  return timestamp;
}

export function formatDateTime(value) {
  const timestamp = normalizeTimestamp(value);

  if (timestamp === null) {
    return "Never";
  }

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

export function formatDate(value) {
  const timestamp = normalizeTimestamp(value);

  if (timestamp === null) {
    return "Never";
  }

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(timestamp));
}

export function formatRelativeTime(value) {
  const timestamp = normalizeTimestamp(value);

  if (timestamp === null) {
    return "Never";
  }

  const diffMs = timestamp - Date.now();
  const absMs = Math.abs(diffMs);

  const minutes = Math.round(absMs / 60_000);
  const hours = Math.round(absMs / 3_600_000);
  const days = Math.round(absMs / 86_400_000);

  const rtf = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });

  if (minutes < 60) {
    return rtf.format(diffMs < 0 ? -minutes : minutes, "minute");
  }

  if (hours < 24) {
    return rtf.format(diffMs < 0 ? -hours : hours, "hour");
  }

  return rtf.format(diffMs < 0 ? -days : days, "day");
}
