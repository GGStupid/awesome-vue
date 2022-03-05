import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutIndex from "@/layout/LayoutIndex.vue";

const abc: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    redirect: "/about",
    component: LayoutIndex,
    children: [
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
