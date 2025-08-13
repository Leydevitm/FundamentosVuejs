import { RouterView } from 'vue-router';
<script setup>

</script>
<template>
  <div>
    <h1>App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <button>Logout</button>
    <router-view></router-view>
    </div>
</template>

