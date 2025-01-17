/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
// Plugins
import primevue from "./primevue";
import pinia from "../stores";
import router from "../router";
import i18n from "@/plugins/i18n";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(primevue).use(router).use(pinia).use(i18n);
}
