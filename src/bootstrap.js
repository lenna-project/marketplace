import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import "./index.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(route).use(Toast, {}).mount("#app");
