import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@lenna-project/lenna-web/src/views/About.vue";

const routes = [
  {
    path: "/marketplace",
    name: "Marketplace",
    component: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;