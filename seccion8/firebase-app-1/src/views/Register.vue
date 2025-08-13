<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'

const userStore = useUserStore();
const email = ref('ley@gmail.com')
const password = ref('123456')

const handleSubmit = ()=>{
    if(!email.value || password.value.length<6){
        return alert('llena los campos');
    }
    userStore.registerUser(email.value,password.value)
}
</script>

<template>
    <div>
        <h1>Register</h1>
       <form @submit.prevent="handleSubmit" action="">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Submit</button>
       </form>
    </div>

</template>