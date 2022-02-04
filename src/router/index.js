import Vue from "vue";
import Router from "vue-router";

import Naslovna from "@/components/Naslovna";
import Anketa from "@/components/Anketa";
import Vino from "@/components/Vino";
import Dostava from "@/components/Dostava";
import Placanje from "@/components/Placanje";
import Submit from "@/components/Submit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/naslovna",
      name: "Naslovna",
      component: Naslovna,
    },
    {
      path: "/submit",
      name: "Submit",
      component: Submit,
    },
    {
      path: "/anketa",
      name: "Anketa",
      component: Anketa,
    },
    {
      path: "/vino",
      name: "Vino",
      component: Vino,
    },
    {
      path: "/dostava",
      name: "Dostava",
      component: Dostava,
    },
    {
      path: "/placanje",
      name: "Placanje",
      component: Placanje,
    },
  ],
});
