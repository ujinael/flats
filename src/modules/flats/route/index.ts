import type{ Router, RouteRecordRaw } from "vue-router";
import FlatsPage from "../pages/FlatsPage.vue"
import FlatsModule from "../FlatsModule.vue"
 const flatsRoute:RouteRecordRaw =
    {
        path: "/flats",
        name: "task-module",
        component:FlatsModule,
        meta: {
            layout: "main-layout"
           },
        children:[
            {
                path:"",
                name:"flats",
                component:FlatsPage
            }
        ]
    }
export default (router:Router)=>router.addRoute(flatsRoute)