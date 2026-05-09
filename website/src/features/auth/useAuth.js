/**
 *
 *  @file useAuth.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { computed, reactive } from "vue";

import { getAuthToken, clearAuthToken } from "../../api/client";

import { loginUser, logoutUser, registerUser } from "../../api/authApi";

import {
  storageGetJson,
  storageRemove,
  storageSetJson,
} from "../../utils/storage";

import { normalizeHttpError } from "../../utils/httpError";

const AUTH_USER_KEY = "auth_user";

const state = reactive({
  user: storageGetJson(AUTH_USER_KEY, null),
  token: getAuthToken(),
  loading: false,
  error: "",
});

const isAuthenticated = computed(() => {
  return Boolean(state.token);
});

function setAuthUser(user) {
  state.user = user || null;

  if (state.user) {
    storageSetJson(AUTH_USER_KEY, state.user);
  } else {
    storageRemove(AUTH_USER_KEY);
  }
}

function setAuthToken(token) {
  state.token = token || getAuthToken();
}

function clearAuthState() {
  clearAuthToken();
  storageRemove(AUTH_USER_KEY);

  state.user = null;
  state.token = "";
  state.error = "";
}

async function login(credentials) {
  state.loading = true;
  state.error = "";

  try {
    const result = await loginUser(credentials);

    setAuthUser(result.user);
    setAuthToken(result.token);

    return result;
  } catch (err) {
    const normalized = normalizeHttpError(err);
    state.error = normalized.message;
    throw normalized;
  } finally {
    state.loading = false;
  }
}

async function register(payload) {
  state.loading = true;
  state.error = "";

  try {
    return await registerUser(payload);
  } catch (err) {
    const normalized = normalizeHttpError(err);
    state.error = normalized.message;
    throw normalized;
  } finally {
    state.loading = false;
  }
}

function logout() {
  logoutUser();
  clearAuthState();
}

export function useAuth() {
  return {
    state,
    user: computed(() => state.user),
    token: computed(() => state.token),
    loading: computed(() => state.loading),
    error: computed(() => state.error),
    isAuthenticated,

    login,
    register,
    logout,
    clearAuthState,
    setAuthUser,
  };
}
