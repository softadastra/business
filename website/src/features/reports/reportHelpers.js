/**
 *
 *  @file reportHelpers.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

export function reportDisplayName(report) {
  if (!report) {
    return "Unknown report";
  }

  return report.summary || report.id || "Unknown report";
}

export function parseReportRawJson(report) {
  if (!report?.rawJson) {
    return null;
  }

  if (typeof report.rawJson !== "string") {
    return report.rawJson;
  }

  try {
    return JSON.parse(report.rawJson);
  } catch {
    return null;
  }
}

export function prettyReportRawJson(report) {
  if (!report?.rawJson) {
    return "{}";
  }

  if (typeof report.rawJson !== "string") {
    return JSON.stringify(report.rawJson, null, 2);
  }

  try {
    return JSON.stringify(JSON.parse(report.rawJson), null, 2);
  } catch {
    return report.rawJson;
  }
}

export function reportScore(report) {
  const raw = parseReportRawJson(report);

  if (!raw || typeof raw !== "object") {
    return null;
  }

  const value = Number(raw.score);

  if (!Number.isFinite(value)) {
    return null;
  }

  return value;
}

export function reportGrade(report) {
  const raw = parseReportRawJson(report);

  if (!raw || typeof raw !== "object") {
    return "";
  }

  return String(raw.grade || "");
}

export function reportRisks(report) {
  const raw = parseReportRawJson(report);

  if (!raw || typeof raw !== "object") {
    return [];
  }

  if (Array.isArray(raw.risks)) {
    return raw.risks.map(String);
  }

  return [];
}

export function reportRiskLabel(report) {
  const risks = reportRisks(report);

  if (risks.length === 0) {
    return "No risks detected";
  }

  return risks.join(", ");
}

export function reportStatusClass(report) {
  const score = reportScore(report);

  if (score === null) {
    return "";
  }

  if (score >= 90) {
    return "success";
  }

  if (score >= 70) {
    return "warning";
  }

  return "danger";
}

export function findReportById(reports, reportId) {
  if (!Array.isArray(reports) || !reportId) {
    return null;
  }

  return reports.find((report) => report.id === reportId) || null;
}

export function findReportByRunId(reports, runId) {
  if (!Array.isArray(reports) || !runId) {
    return null;
  }

  return reports.find((report) => report.runId === runId) || null;
}

export function makeReportMap(reports) {
  const map = new Map();

  if (!Array.isArray(reports)) {
    return map;
  }

  reports.forEach((report) => {
    if (report?.id) {
      map.set(report.id, report);
    }
  });

  return map;
}

export function validateReportForm(form) {
  const errors = {};

  if (!form?.agentApiKey || !form.agentApiKey.trim()) {
    errors.agentApiKey = "Agent API key is required.";
  }

  if (!form?.summary || !form.summary.trim()) {
    errors.summary = "Report summary is required.";
  }

  if (!form?.rawJson || !String(form.rawJson).trim()) {
    errors.rawJson = "Raw JSON is required.";
  } else {
    try {
      JSON.parse(form.rawJson);
    } catch {
      errors.rawJson = "Raw JSON must be valid JSON.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
