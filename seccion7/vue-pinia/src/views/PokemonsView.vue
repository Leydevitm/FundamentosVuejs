<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const {data,getData,loading,error} =useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <h1>Pokeemons</h1>
    <p v-if="loading">Cargando Infromacion...</p>
     <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
         <ul class="list-group">
        <li v-for="poke in data.results"  class="list-group-item">
            <router-link :to="`/pokeemons/${poke.name}`">
                 {{ poke.name }}
            </router-link>
           
        </li>
    </ul>
    <div class="d-flex justify-content-center mb-4">
    <button :disabled="!data.previous" class="btn btn-success  me-2"  @click="getData(data.previous)" >Previous</button>
    <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
     </div>

    </div>
   
</template>

<style>
.btn{
   
    margin-top: 20px;
      margin-bottom: 20px;
}
</style>