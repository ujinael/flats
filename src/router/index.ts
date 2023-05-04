import {type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
export const routes: RouteRecordRaw[] = [
  {
    path:"/",
    redirect:"/flats"
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
