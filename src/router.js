import VueRouter from 'vue-router'
import vue from 'vue'

vue.use(VueRouter)

import App from './App'

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: App,
            name: 'Main'
        }
    ]
})

export { router }