<script setup>
import {useUserStore} from '../stores/user'
const userStore = useUserStore()
</script>

<template>
    <div>
        <h1>Register</h1>
        <button @click="userStore.registerUser('Leivy')">Ingresar</button>
    </div>

</template>