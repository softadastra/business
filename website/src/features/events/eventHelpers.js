/**
 *
 *  @file eventHelpers.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

export function eventDisplayName(event) {
  if (!event) {
    return "Unknown event";
  }

  return event.eventType || event.id || "Unknown event";
}

export function eventSeverity(event) {
  return String(event?.severity || "info").toLowerCase();
}

export function eventSeverityLabel(event) {
  const severity = eventSeverity(event);

  if (severity === "critical") {
    return "Critical";
  }

  if (severity === "error") {
    return "Error";
  }

  if (severity === "warning") {
    return "Warning";
  }

  return "Info";
}

export function eventSeverityClass(event) {
  const severity = eventSeverity(event);

  if (severity === "critical" || severity === "error") {
    return "danger";
  }

  if (severity === "warning") {
    return "warning";
  }

  return "success";
}

export function eventPayloadText(event) {
  if (!event?.payload) {
    return "";
  }

  if (typeof event.payload !== "string") {
    return JSON.stringify(event.payload, null, 2);
  }

  try {
    return JSON.stringify(JSON.parse(event.payload), null, 2);
  } catch {
    return event.payload;
  }
}

export function parseEventPayload(value) {
  if (!value || !String(value).trim()) {
    return {};
  }

  try {
    return JSON.parse(value);
  } catch {
    return String(value);
  }
}

export function filterEventsByRun(events, runId) {
  if (!Array.isArray(events)) {
    return [];
  }

  if (!runId) {
    return events;
  }

  return events.filter((event) => event.runId === runId);
}

export function findEventById(events, eventId) {
  if (!Array.isArray(events) || !eventId) {
    return null;
  }

  return events.find((event) => event.id === eventId) || null;
}

export function makeEventMap(events) {
  const map = new Map();

  if (!Array.isArray(events)) {
    return map;
  }

  events.forEach((event) => {
    if (event?.id) {
      map.set(event.id, event);
    }
  });

  return map;
}

export function validateEventForm(form) {
  const errors = {};

  if (!form?.agentApiKey || !form.agentApiKey.trim()) {
    errors.agentApiKey = "Agent API key is required.";
  }

  if (!form?.eventType || !form.eventType.trim()) {
    errors.eventType = "Event type is required.";
  }

  if (!form?.severity || !form.severity.trim()) {
    errors.severity = "Severity is required.";
  }

  if (form?.payload && String(form.payload).trim()) {
    try {
      JSON.parse(form.payload);
    } catch {
      errors.payload = "Payload must be valid JSON.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
