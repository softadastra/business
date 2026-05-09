/**
 *
 *  @file projectHelpers.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

export function projectDisplayName(project) {
  if (!project) {
    return "Unknown project";
  }

  return project.name || project.slug || project.id || "Unknown project";
}

export function projectBaseUrl(project) {
  if (!project?.baseUrl) {
    return "No base URL configured";
  }

  return project.baseUrl;
}

export function projectDescription(project) {
  if (!project) {
    return "";
  }

  return project.description || project.slug || "No description";
}

export function projectOptionLabel(project) {
  if (!project) {
    return "Unknown project";
  }

  if (project.baseUrl) {
    return `${projectDisplayName(project)} · ${project.baseUrl}`;
  }

  return projectDisplayName(project);
}

export function findProjectById(projects, projectId) {
  if (!Array.isArray(projects) || !projectId) {
    return null;
  }

  return projects.find((project) => project.id === projectId) || null;
}

export function makeProjectMap(projects) {
  const map = new Map();

  if (!Array.isArray(projects)) {
    return map;
  }

  projects.forEach((project) => {
    if (project?.id) {
      map.set(project.id, project);
    }
  });

  return map;
}

export function projectNameFromMap(projectMap, projectId) {
  if (!projectMap || !projectId) {
    return "Unknown project";
  }

  const project = projectMap.get(projectId);

  return projectDisplayName(project);
}

export function validateProjectForm(form) {
  const errors = {};

  if (!form?.name || !form.name.trim()) {
    errors.name = "Project name is required.";
  }

  if (form?.baseUrl && !isProbablyUrl(form.baseUrl)) {
    errors.baseUrl = "Base URL must start with http:// or https://.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

function isProbablyUrl(value) {
  return /^https?:\/\/.+/i.test(String(value || "").trim());
}
