/**
 *
 *  @file agentHelpers.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

export function agentDisplayName(agent) {
  if (!agent) {
    return "Unknown agent";
  }

  return agent.name || agent.id || "Unknown agent";
}

export function agentLastSeenLabel(agent) {
  if (!agent || !agent.lastSeenAt) {
    return "Never seen";
  }

  return "Seen before";
}

export function agentStatus(agent) {
  if (!agent || !agent.lastSeenAt) {
    return "offline";
  }

  const lastSeen = Number(agent.lastSeenAt);

  if (!Number.isFinite(lastSeen) || lastSeen <= 0) {
    return "offline";
  }

  const fiveMinutesMs = 5 * 60 * 1000;
  const age = Date.now() - lastSeen;

  if (age <= fiveMinutesMs) {
    return "online";
  }

  return "idle";
}

export function agentStatusLabel(agent) {
  const status = agentStatus(agent);

  if (status === "online") {
    return "Online";
  }

  if (status === "idle") {
    return "Idle";
  }

  return "Offline";
}

export function agentStatusClass(agent) {
  const status = agentStatus(agent);

  if (status === "online") {
    return "success";
  }

  if (status === "idle") {
    return "warning";
  }

  return "danger";
}

export function findAgentById(agents, agentId) {
  if (!Array.isArray(agents) || !agentId) {
    return null;
  }

  return agents.find((agent) => agent.id === agentId) || null;
}

export function makeAgentMap(agents) {
  const map = new Map();

  if (!Array.isArray(agents)) {
    return map;
  }

  agents.forEach((agent) => {
    if (agent?.id) {
      map.set(agent.id, agent);
    }
  });

  return map;
}

export function agentNameFromMap(agentMap, agentId) {
  if (!agentMap || !agentId) {
    return "Unknown agent";
  }

  const agent = agentMap.get(agentId);

  return agentDisplayName(agent);
}

export function filterAgentsByProject(agents, projectId) {
  if (!Array.isArray(agents)) {
    return [];
  }

  if (!projectId) {
    return agents;
  }

  return agents.filter((agent) => agent.projectId === projectId);
}

export function validateAgentForm(form) {
  const errors = {};

  if (!form?.projectId) {
    errors.projectId = "Project is required.";
  }

  if (!form?.name || !form.name.trim()) {
    errors.name = "Agent name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Agent name must contain at least 2 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function maskAgentApiKey(apiKey) {
  if (!apiKey) {
    return "";
  }

  if (apiKey.length <= 16) {
    return apiKey;
  }

  return `${apiKey.slice(0, 12)}...${apiKey.slice(-6)}`;
}
