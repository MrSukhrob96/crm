import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/",
    expect: true,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/categories",
    component: () => import("@/views/Categories.vue"),
  },
  {
    path: "/record",
    component: () => import("@/views/Record.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/detail",
    component: () => import("@/views/DetailRecord.vue"),
  },
  {
    path: "/history",
    component: () => import("@/views/History.vue"),
  },
  {
    path: "/planning",
    component: () => import("@/views/Planning.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
