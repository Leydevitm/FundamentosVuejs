<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar bg-dark navbar-dark fixed-top">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      PokeAPI
    </RouterLink>
    <div>
      
      <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-primary" to="/Pokeemons">Pokeemons</RouterLink>
    </div>
  </div>
</nav>
  <div class="container text-center" style="padding-top: 70px;">
    <RouterView />
  </div>
 
</template>


