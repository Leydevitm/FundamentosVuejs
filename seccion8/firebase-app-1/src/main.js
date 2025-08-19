import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'


// import 'ant-design-vue/dist/reset.css';
import { Button } from 'ant-design-vue';




createApp(App).use(router).use(createPinia()).mount('#app');

