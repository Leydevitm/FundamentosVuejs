<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import {useRouter} from 'vue-router'

const router = useRouter();
const userStore = useUserStore();

const email = ref('ley@gmail.com')
const password = ref('123456')

const handleSubmit =async ()=>{
    if(!email.value || password.value.length<6){
        return alert('llena los campos');
    }
    await userStore.registerUser(email.value,password.value)
    router.push('/')
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