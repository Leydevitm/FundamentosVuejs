import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(BootstrapVue3)
app.use(VueAxios, axios)

// Configurar URL base de la API
axios.defaults.baseURL = 'http://localhost:3000/api'

app.mount('#app')
