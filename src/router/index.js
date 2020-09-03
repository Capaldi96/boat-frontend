import Vue from "vue";
import VueRouter from "vue-router";
import Boats from "../views/Boats.vue";
import detailedBoat from "../views/detailedBoat.vue";
import welcome from "../views/welcome.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: welcome
  },
  {
    path: "/boats",
    name: "Boats",
    component: Boats
  },
  {
    path: '/boat/:id',
    name: 'detailedBoat',
    component: detailedBoat,
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/Add.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
