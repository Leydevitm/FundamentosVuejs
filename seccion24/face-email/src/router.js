import Vue from 'vue'
import Router from 'vue-router'


import  {auth} from "@/firebase"
Vue.use(Router)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ingreso',
      name: 'Ingreso',
      component: () => import('./views/IngresoView.vue')
    },

  ]
})

router.beforeEach((to,from,next) => {
  const user = auth.currentUser;
//   const requiereAuth = to.matched.some(record => record.meta.requiresAuth);

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(user){
      next();
    }else{
      next({name: 'Ingreso'})
    }
}else{
    next();
}
})

export default router;