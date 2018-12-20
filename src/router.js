import Vue from "vue";
import Router from "vue-router";
import CardsList from "./views/CardsList.vue";
import Room from "./views/Room.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/cards",
      name: "cards",
      component: () => {
        return import(/* webpackChunkName: "cards" */ "@/views/CardsList.vue")
      }
    },
    {
      path: "/room",
      name: "room",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
        return import(/* webpackChunkName: "room" */ "@/views/Room.vue")
      }
    }
  ]
});
