import Vue from "vue";
import VueRouter from "vue-router";
import ConnectionPage from "../views/ConnectionPage";
import MotionControllerPage from "../views/MotionControllerPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ConnectionPage",
    component: ConnectionPage,
  },
  {
    path: "/motion-controller",
    name: "MotionControllerPage",
    component: MotionControllerPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
