import Vue from "vue";
import Router from "vue-router";

import PretragaKnjiga from "@/components/PretragaKnjiga";
import Info from "@/components/Info";

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: "/pretragaKnjiga",
        name: "Knjiga",
        component: PretragaKnjiga,
      },
      {
        path: "/info",
        name: "Info",
        component: Info,
      }
    ],
    scrollBehavior () {
      return { x: 0, y: 0 }
    },
});