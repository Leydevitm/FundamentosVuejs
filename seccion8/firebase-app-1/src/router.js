import {createRouter,createWebHistory} from 'vue-router'
import { useUserStore } from './stores/user'

import Home from './views/Home.vue'
import login from './views/Login.vue'
import Register from './views/Register.vue'

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    const user = await userStore.currentUser();
    if (user) {
        next();
    } else {
        next('/login');
    }
};

const routes = [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: login },
    { path: '/register', component: Register }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;