<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const pokemons = ref([])
const getData=async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
   
    pokemons.value = data.results
  } catch (error) {
    console.error('Error fetching Pokemons:', error)
  }

}
getData();
</script>

<template>
    <h1>Pokeemons</h1>
    <ul>
        <li v-for="poke in pokemons">
            <router-link :to="`/pokeemons/${poke.name}`">
                 {{ poke.name }}
            </router-link>
           
        </li>
    </ul>
</template>