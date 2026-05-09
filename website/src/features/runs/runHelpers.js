/**
 *
 *  @file runHelpers.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

export function runDisplayName(run) {
  if (!run) {
    return "Unknown run";
  }

  return run.id || "Unknown run";
}

export function runTargetLabel(run) {
  if (!run?.targetUrl) {
    return "No target URL";
  }

  return run.targetUrl;
}

export function runStatus(run) {
  return String(run?.status || "unknown").toLowerCase();
}

export function runStatusLabel(run) {
  const status = runStatus(run);

  if (status === "running") {
    return "Running";
  }

  if (status === "finished") {
    return "Finished";
  }

  if (status === "failed") {
    return "Failed";
  }

  if (status === "created") {
    return "Created";
  }

  return "Unknown";
}

export function runStatusClass(run) {
  const status = runStatus(run);

  if (status === "finished") {
    return "success";
  }

  if (status === "running" || status === "created") {
    return "warning";
  }

  if (status === "failed") {
    return "danger";
  }

  return "";
}

export function runDurationMs(run) {
  if (!run?.startedAt) {
    return 0;
  }

  const startedAt = Number(run.startedAt);
  const finishedAt = Number(run.finishedAt || Date.now());

  if (!Number.isFinite(startedAt) || !Number.isFinite(finishedAt)) {
    return 0;
  }

  if (finishedAt < startedAt) {
    return 0;
  }

  return finishedAt - startedAt;
}

export function formatRunDuration(run) {
  const duration = runDurationMs(run);

  if (duration <= 0) {
    return "0 ms";
  }

  if (duration < 1000) {
    return `${duration} ms`;
  }

  const seconds = duration / 1000;

  if (seconds < 60) {
    return `${seconds.toFixed(1)} s`;
  }

  const minutes = seconds / 60;

  return `${minutes.toFixed(1)} min`;
}

export function findRunById(runs, runId) {
  if (!Array.isArray(runs) || !runId) {
    return null;
  }

  return runs.find((run) => run.id === runId) || null;
}

export function makeRunMap(runs) {
  const map = new Map();

  if (!Array.isArray(runs)) {
    return map;
  }

  runs.forEach((run) => {
    if (run?.id) {
      map.set(run.id, run);
    }
  });

  return map;
}

export function filterRunsByProject(runs, projectId) {
  if (!Array.isArray(runs)) {
    return [];
  }

  if (!projectId) {
    return runs;
  }

  return runs.filter((run) => run.projectId === projectId);
}

export function filterRunsByAgent(runs, agentId) {
  if (!Array.isArray(runs)) {
    return [];
  }

  if (!agentId) {
    return runs;
  }

  return runs.filter((run) => run.agentId === agentId);
}

export function validateRunForm(form) {
  const errors = {};

  if (!form?.projectId) {
    errors.projectId = "Project is required.";
  }

  if (!form?.agentId) {
    errors.agentId = "Agent is required.";
  }

  if (!form?.agentApiKey || !form.agentApiKey.trim()) {
    errors.agentApiKey = "Agent API key is required.";
  }

  if (!form?.targetUrl || !form.targetUrl.trim()) {
    errors.targetUrl = "Target URL is required.";
  } else if (!isProbablyUrl(form.targetUrl)) {
    errors.targetUrl = "Target URL must start with http:// or https://.";
  }

  if (!form?.method || !form.method.trim()) {
    errors.method = "HTTP method is required.";
  }

  if (!form?.scenario || !form.scenario.trim()) {
    errors.scenario = "Scenario is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function normalizeHttpMethod(method) {
  const value = String(method || "GET")
    .trim()
    .toUpperCase();

  if (!value) {
    return "GET";
  }

  return value;
}

function isProbablyUrl(value) {
  return /^https?:\/\/.+/i.test(String(value || "").trim());
}
