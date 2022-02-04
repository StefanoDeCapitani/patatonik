import Vue from "vue";
import VueRouter from "vue-router";
import ConnectionPage from "../views/ConnectionPage";
import MotionControllerPage from "../views/MotionControllerPage";
import BrowserPage from "../views/BrowserPage";
import { mobileCheck, isStandalone } from "./MobileCheck";

Vue.use(VueRouter);

const routes = [
  {
    path: "/connection-page",
    name: "ConnectionPage",
    component: ConnectionPage,
    beforeEnter: (to, from, next) => {
      if ((mobileCheck(), isStandalone())) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/motion-controller",
    name: "MotionControllerPage",
    component: MotionControllerPage,
    beforeEnter: (to, from, next) => {
      if (navigator.userAgentData.mobile) {
        next();
      } else {
        next("/desktop");
      }
    },
  },
  {
    path: "/",
    name: "BrowserPage",
    component: BrowserPage,
    /*     beforeEnter: (to, from, next) => {
      if (mobileCheck()) {
        next("/");
      } else {
        next();
      }
    }, */
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
