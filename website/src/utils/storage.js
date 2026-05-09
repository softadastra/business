/**
 *
 *  @file storage.js
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
 * Safe localStorage helpers.
 *
 * These helpers prevent direct localStorage usage across the app and make
 * storage access safer in browsers where storage can be unavailable.
 */

const STORAGE_PREFIX = "softadastra_cloud:";

function key(name) {
  return `${STORAGE_PREFIX}${name}`;
}

function isStorageAvailable() {
  try {
    const testKey = key("__test__");

    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);

    return true;
  } catch {
    return false;
  }
}

export function storageGet(name, fallback = null) {
  if (!isStorageAvailable()) {
    return fallback;
  }

  const value = window.localStorage.getItem(key(name));

  return value === null ? fallback : value;
}

export function storageSet(name, value) {
  if (!isStorageAvailable()) {
    return false;
  }

  window.localStorage.setItem(key(name), String(value));

  return true;
}

export function storageRemove(name) {
  if (!isStorageAvailable()) {
    return false;
  }

  window.localStorage.removeItem(key(name));

  return true;
}

export function storageGetJson(name, fallback = null) {
  const value = storageGet(name);

  if (value === null) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function storageSetJson(name, value) {
  try {
    return storageSet(name, JSON.stringify(value));
  } catch {
    return false;
  }
}

export function storageClearApp() {
  if (!isStorageAvailable()) {
    return false;
  }

  const keys = [];

  for (let i = 0; i < window.localStorage.length; i += 1) {
    const currentKey = window.localStorage.key(i);

    if (currentKey && currentKey.startsWith(STORAGE_PREFIX)) {
      keys.push(currentKey);
    }
  }

  keys.forEach((currentKey) => {
    window.localStorage.removeItem(currentKey);
  });

  return true;
}
