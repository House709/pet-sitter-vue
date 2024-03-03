import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/home_page/HomePage.vue";
import TestPage from "@/components/TestPage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/test",
      name: "test",
      component: TestPage,
    },
  ],
});

export default router;
