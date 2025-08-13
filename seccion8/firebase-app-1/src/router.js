import {createRouter,createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import login from './views/Login.vue'
import Register from './views/Register.vue'

const routes =[
    {path: '/', component:Home},
    {path: '/login', component:login},
    {path: '/register', component:Register}
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;