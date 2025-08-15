
<script setup>
import { useUserStore } from './stores/user';
const userStore = useUserStore();
</script>
<template>
  <div>
    <h1>App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <button @click="userStore.logoutUser">Logout</button>
    <router-view></router-view>
    </div>
</template>

