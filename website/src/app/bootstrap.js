/**
 *
 *  @file bootstrap.js
 *  @author Gaspard Kirira
 *
 *  Copyright 2026, Softadastra.
 *  All rights reserved.
 *  https://github.com/softadastra/softadastra-site
 *
 *  Softadastra Site
 *
 */

import { createApp } from "vue";

import AppShell from "./AppShell.vue";
import router from "../router";

import "../styles/base.css";
import "../styles/layout.css";
import "../styles/forms.css";
import "../styles/dashboard.css";

export function bootstrap() {
  const app = createApp(AppShell);

  app.use(router);

  app.mount("#app");

  return app;
}

bootstrap();
