import { createRouter, createWebHistory } from "vue-router";

import Counter from "../views/Counter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/counter",
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    component: () => import("../views/Budget.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
