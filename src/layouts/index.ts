import type{Plugin } from "vue";

import MainLayout from "./main/MainLayout.vue"
 const layouts = {
    'main-layout':MainLayout,
}
export const layoutsPlugin:Plugin = {
    install(app) {
        Object.entries(layouts).map(([key,value])=>{
            app.component(key,value)
        })
    },
}