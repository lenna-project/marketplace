import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

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
    path: "/marketplace/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;