import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutIndex from "@/layout/LayoutIndex.vue";

const abc: RouteRecordRaw[] = [
  {
    path: "/",
    name: "LayoutIndex",
    component: LayoutIndex,
    children: [
      {
        path: "",
        name: "Demo",
        component: () => import("@/views/Demo.vue"),
      },
    ],
  },
];

const routes: RouteRecordRaw[] = [...abc];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
