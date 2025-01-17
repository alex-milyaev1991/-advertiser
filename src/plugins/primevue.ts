/**
 * plugins/primevue.ts
 */

import "primeflex/primeflex.css"; // Импортируем стили PrimeFlex
import PrimeVue from "primevue/config"; // Импортируем PrimeVue
import Aura from "@primevue/themes/aura"; // Импортируем тему Aura
import Button from "primevue/button"; // Импортируем кнопку PrimeVue

import type { App } from "vue";

export default {
  install(app: App) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura, // Установка темы
      },
    });

    // Регистрация компонентов PrimeVue
    app.component("Button", Button); // Регистрация компонента Button
    // Вы можете зарегистрировать другие компоненты здесь
  },
};
