import { createRouter, createWebHistory } from 'vue-router'
import {firebase} from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/crud',
    name: 'Crud',
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue'),
    meta:{
      requiresAuth:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to,from,next)=>{
  const requiresAuth = to.matched.some(record =>record.meta.requiresAuth)
  if(requiresAuth && !(await firebase.getCurrentUser())){
    next('/')
  }else{
    next()
  }
})

export default router
