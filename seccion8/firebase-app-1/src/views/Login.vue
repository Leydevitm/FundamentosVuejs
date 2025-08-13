<script setup>
import { computed } from 'vue';
import {useUserStore} from '../stores/user'
const userStore = useUserStore()
const mayuscula= computed(() => userStore.userData.toUpperCase())

</script>

<template>
    <div>
        <h1>Login</h1>
        <p>{{ mayuscula }}</p>
        <p>hola {{ userStore.minuscula }}</p>
    </div>

</template>