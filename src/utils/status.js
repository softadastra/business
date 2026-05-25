export const STATUS_VARIANTS = {
  active: "success",
  ready: "success",
  stable: "success",
  passed: "success",
  success: "success",

  pending: "warning",
  planned: "warning",
  "in-development": "warning",
  "in development": "warning",
  experimental: "warning",
  warning: "warning",

  failed: "danger",
  blocked: "danger",
  error: "danger",
  danger: "danger",

  draft: "info",
  early: "info",
  "early-stage": "info",
  info: "info",

  unknown: "neutral",
};

export function normalizeStatus(value) {
  if (!value) {
    return "unknown";
  }

  return String(value).trim().toLowerCase();
}

export function getStatusVariant(value) {
  const status = normalizeStatus(value);

  return STATUS_VARIANTS[status] || "neutral";
}

export function getStatusLabel(value) {
  if (!value) {
    return "Unknown";
  }

  return String(value)
    .trim()
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function isPositiveStatus(value) {
  return getStatusVariant(value) === "success";
}

export function isWarningStatus(value) {
  return getStatusVariant(value) === "warning";
}

export function isDangerStatus(value) {
  return getStatusVariant(value) === "danger";
}
