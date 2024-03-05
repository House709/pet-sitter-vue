import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/home_page/HomePage.vue";
import TestPage from "@/components/TestPage.vue";
import SearchPage from "@/components/search_page/SearchPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: "/search",
      name: "search",
      component: SearchPage,
    },
  ],
});

export default router;
