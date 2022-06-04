import { createRouter, createWebHashHistory } from "vue-router";
import EventsList from "../views/EventsList.vue";
import AboutView from "../views/AboutView";
import EventDetails from "../views/EventDetails";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventsList,
  },
  {
    path: "/event/:id",
    props: true,
    name: "EventDetails",
    component: EventDetails,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
