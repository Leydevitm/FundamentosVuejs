<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const {data,getData,loading} =useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <h1>Pokeemons</h1>
    <p v-if="loading">Cargando Infromacion...</p>
    <div v-if="data">
         <ul>
        <li v-for="poke in data.results">
            <router-link :to="`/pokeemons/${poke.name}`">
                 {{ poke.name }}
            </router-link>
           
        </li>
    </ul>

    </div>
   
</template>