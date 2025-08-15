<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
//import {useRouter} from 'vue-router'

//const router = useRouter();
const userStore = useUserStore();

const email = ref('ley6@gmail.com')
const password = ref('candelaria')

const handleSubmit =async ()=>{
    if(!email.value || password.value.length<6){
        return alert('llena los campos');
    }
    
    await userStore.loginUser(email.value,password.value)
   // router.push('/')
}
</script>

<template>
    <div>
        <h1>Login</h1>
       <form @submit.prevent="handleSubmit" action="">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
       </form>
    </div>

</template>