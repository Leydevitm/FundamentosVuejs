<template>
  <q-page padding>
   <q-btn @click="userStore.access()">Ingresar</q-btn>
    <q-btn @click="createLink">Crear Link</q-btn>
    <q-btn @click="userStore.logout()">Cerrar Sesion</q-btn>
     <div>
     <p><b>Token:</b> {{ userStore.token }}</p>
     <p><b>Expira en:</b> {{ userStore.expiresIn }}</p>
   </div>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useUserStore } from '../stores/user-store.js';

const userStore = useUserStore();
userStore.refreshToken();

const createLink = async()=>{
  try {
   const res =  await api ({
      method: 'POST',
      url: '/links',
      headers:{
        'Authorization': 'Bearer '+ userStore.token,

      },
      data:{
        longLink: "https://axios-http.com/docs/req_config"
      },
    });
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}


</script>




