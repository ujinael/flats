import 'reflect-metadata'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { registerModules } from './modules'
import { layoutsPlugin } from './layouts'
import { directivesPlugin } from './directives'
const app = createApp(App)

registerModules(router)
app.use(router)
app.use(createPinia())
app.use(layoutsPlugin)

app.use(directivesPlugin)


app.mount('#app')
