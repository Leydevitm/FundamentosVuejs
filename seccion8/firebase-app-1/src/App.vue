
<script lang="ts" setup>
import { useUserStore } from './stores/user';
import { ref,watch} from 'vue';
import {useRoute} from 'vue-router';

const userStore = useUserStore();
const selectedKeys = ref<string['']>([]);

const router = useRoute();
watch(
  () =>router.name,
  () =>selectedKeys.value = [router.name]
);
</script >
<template >
  <a-layout >
   <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" v-if="!userStore.loadingUserSession">
    <a-menu
    v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="home" v-if="userStore.userData"> <router-link to="/" >Home</router-link></a-menu-item>
      <a-menu-item key="perfil" v-if="userStore.userData"> <router-link to="/perfil" >Perfil</router-link></a-menu-item>
      <a-menu-item key="login" v-if="!userStore.userData"> <router-link to="/login" v-if="!userStore.userData">Login</router-link> </a-menu-item>  
      <a-menu-item key="register" v-if="!userStore.userData"> <router-link to="/register" v-if="!userStore.userData">Register</router-link> </a-menu-item>
      <a-menu-item key="logout" @click="userStore.logoutUser" v-if="userStore.userData"> Logout</a-menu-item>
  </a-menu>
    <nav>
   
    
    
    
    </nav>
    </a-layout-header>
   
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
     <div class="container">
     <div v-if="userStore.loadingUserSession">loading user...</div>
     <router-view v-else></router-view>
     </div>
    </a-layout-content>
   

    </a-layout>
</template>

<!-- <style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style> -->

<style>
.container {
  padding: 24px;
  background-color: #fff;
  min-height: calc(100vh - 64px);
}
.text-center{
  text-align: center;
}
</style>