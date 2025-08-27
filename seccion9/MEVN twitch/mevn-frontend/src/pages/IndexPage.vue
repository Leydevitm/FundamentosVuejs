<template>
  <q-page padding>
   <q-btn @click="access">Ingresar</q-btn>
    <q-btn @click="createLink">Crear Link</q-btn>
     <div>
     <p><b>Token:</b> {{ token }}</p>
     <p><b>Expira en:</b> {{ expiresIn }}</p>
   </div>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import {ref} from 'vue';

const token = ref("");
const expiresIn = ref("");

const access = async () => {
  try{

const res = await api.post('/auth/login',{
  email: "anel@gmail.com",
  password: "123123"
 });

 token.value = res.data.token;
 expiresIn.value = res.data.expiresIn;
 setTime()
}catch(e){
  console.log(e);
}
};

const refreshToken = async () => {
  try{
    const res = await api.get('/auth/refresh');
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
   
  }catch(e){
    console.log(e);
  }
};
refreshToken();


const createLink = async()=>{
  try {
   const res =  await api ({
      method: 'POST',
      url: '/links',
      headers:{
        'Authorization': 'Bearer '+ token.value

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

const setTime =()=>{
  setTimeout(()=>{
    console.log("Token renovado") 
    refreshToken()
  },expiresIn.value * 1000 * 6000);
}
</script>




