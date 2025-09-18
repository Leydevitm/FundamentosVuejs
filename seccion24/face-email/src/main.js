// import '@babel/polyfill'
// import Vue from 'vue'
// import './plugins/vuetify'
// import App from './App.vue'
//  import router from './router'
//  import store from './store'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@fortawesome/fontawesome-free/css/all.css'

// import { auth } from "@/firebase";

// Vue.config.productionTip = false

// auth.onAuthStateChanged(function(user) {
//   if (user) {
//     store.dispatch('setUsuario', user);  
//   }
//   new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app')
// });


import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // <-- importa el objeto vuetify que creaste
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify, // <-- muy importante pasar la instancia
  render: h => h(App)
}).$mount('#app')


