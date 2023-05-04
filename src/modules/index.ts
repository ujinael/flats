import type{ Router } from "vue-router"

import flats from "./flats"
const modules = {
    flats
}

export const  registerModules =(router:Router)=>{
    Object.entries(modules).forEach(([_,module])=>{
        module.routes(router)
    })
}