import Vue from "vue";
import VueRouter from "vue-router";
import ConnectionPage from "../views/ConnectionPage";
import MotionControllerPage from "../views/MotionControllerPage";
import BrowserPage from "../views/BrowserPage";
import DesktopPage from "../views/DesktopPage";
import { mobileCheck, isFullScreen } from "./MobileCheck";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ConnectionPage",
    component: ConnectionPage,
    beforeEnter: (to, from, next) => {
      if (mobileCheck() && isFullScreen()) {
        next();
      } else {
        next("/add-to-home");
      }
    },
  },
  {
    path: "/motion-controller",
    name: "MotionControllerPage",
    component: MotionControllerPage,
    beforeEnter: (to, from, next) => {
      if (mobileCheck() && isFullScreen()) {
        next();
      } else {
        next("/add-to-home");
      }
    },
  },
  {
    path: "/add-to-home",
    name: "BrowserPage",
    component: BrowserPage,
    beforeEnter: (to, from, next) => {
      if (mobileCheck()) {
        next();
      } else {
        next("/desktop");
      }
    },
  },
  {
    path: "/desktop",
    name: "DesktopPage",
    component: DesktopPage,
    beforeEnter: (to, from, next) => {
      if (mobileCheck()) {
        next("/add-to-page");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
