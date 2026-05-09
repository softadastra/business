/**
 *
 *  @file scoreHelpers.js
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
 * Score helpers for reliability reports.
 *
 * These helpers are intentionally independent from the API layer.
 * They can work with raw report JSON, parsed report objects, or simple
 * score values extracted from the backend.
 */

export function normalizeScore(value) {
  const score = Number(value);

  if (!Number.isFinite(score)) {
    return null;
  }

  if (score < 0) {
    return 0;
  }

  if (score > 100) {
    return 100;
  }

  return Math.round(score);
}

export function gradeFromScore(value) {
  const score = normalizeScore(value);

  if (score === null) {
    return "";
  }

  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  if (score >= 70) {
    return "C";
  }

  if (score >= 60) {
    return "D";
  }

  return "F";
}

export function scoreStatus(value) {
  const score = normalizeScore(value);

  if (score === null) {
    return "unknown";
  }

  if (score >= 90) {
    return "excellent";
  }

  if (score >= 75) {
    return "good";
  }

  if (score >= 60) {
    return "risky";
  }

  return "critical";
}

export function scoreStatusLabel(value) {
  const status = scoreStatus(value);

  if (status === "excellent") {
    return "Excellent";
  }

  if (status === "good") {
    return "Good";
  }

  if (status === "risky") {
    return "Risky";
  }

  if (status === "critical") {
    return "Critical";
  }

  return "Unknown";
}

export function scoreStatusClass(value) {
  const status = scoreStatus(value);

  if (status === "excellent" || status === "good") {
    return "success";
  }

  if (status === "risky") {
    return "warning";
  }

  if (status === "critical") {
    return "danger";
  }

  return "";
}

export function scoreDescription(value) {
  const status = scoreStatus(value);

  if (status === "excellent") {
    return "The system appears reliable under the tested failure scenario.";
  }

  if (status === "good") {
    return "The system handled the scenario, but some risks should be reviewed.";
  }

  if (status === "risky") {
    return "The system shows reliability risks that may affect production behavior.";
  }

  if (status === "critical") {
    return "The system shows serious reliability risks and needs attention.";
  }

  return "No reliability score is available yet.";
}

export function extractScoreFromRawJson(rawJson) {
  if (!rawJson) {
    return null;
  }

  let data = rawJson;

  if (typeof rawJson === "string") {
    try {
      data = JSON.parse(rawJson);
    } catch {
      return null;
    }
  }

  if (!data || typeof data !== "object") {
    return null;
  }

  return normalizeScore(data.score);
}

export function extractGradeFromRawJson(rawJson) {
  if (!rawJson) {
    return "";
  }

  let data = rawJson;

  if (typeof rawJson === "string") {
    try {
      data = JSON.parse(rawJson);
    } catch {
      return "";
    }
  }

  if (!data || typeof data !== "object") {
    return "";
  }

  if (typeof data.grade === "string" && data.grade.trim() !== "") {
    return data.grade.trim().toUpperCase();
  }

  return gradeFromScore(data.score);
}

export function extractRisksFromRawJson(rawJson) {
  if (!rawJson) {
    return [];
  }

  let data = rawJson;

  if (typeof rawJson === "string") {
    try {
      data = JSON.parse(rawJson);
    } catch {
      return [];
    }
  }

  if (!data || typeof data !== "object") {
    return [];
  }

  if (Array.isArray(data.risks)) {
    return data.risks.map(String);
  }

  return [];
}

export function riskCount(rawJson) {
  return extractRisksFromRawJson(rawJson).length;
}

export function hasCriticalRisk(rawJson) {
  const risks = extractRisksFromRawJson(rawJson);

  return risks.some((risk) => {
    const value = String(risk).toLowerCase();

    return (
      value.includes("data_loss") ||
      value.includes("data loss") ||
      value.includes("duplicate") ||
      value.includes("corruption") ||
      value.includes("critical")
    );
  });
}

export function reliabilitySummaryFromRawJson(rawJson) {
  const score = extractScoreFromRawJson(rawJson);
  const grade = extractGradeFromRawJson(rawJson);
  const risks = extractRisksFromRawJson(rawJson);

  return {
    score,
    grade,
    risks,
    riskCount: risks.length,
    status: scoreStatus(score),
    statusLabel: scoreStatusLabel(score),
    statusClass: scoreStatusClass(score),
    description: scoreDescription(score),
    hasCriticalRisk: hasCriticalRisk(rawJson),
  };
}
