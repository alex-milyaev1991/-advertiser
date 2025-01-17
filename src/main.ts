import { createApp } from "vue";
import "@/styles/index.scss";
import "primeicons/primeicons.css";
import { registerPlugins } from "@/plugins";

import axios from "@/api/axios";
import App from "./App.vue";

const app = createApp(App);
registerPlugins(app);

app.config.globalProperties.$http = axios;

app.mount("#app");
