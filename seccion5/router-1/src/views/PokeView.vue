<script setup>

import axios from 'axios'
import { ref } from 'vue'

const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    // pokemons.value = data.results
    console.log(data);
  } catch (error) {
    console.error('Error fetching Pokemons:', error)
  }
}

getData();
</script>

<template>
    <h1>Poke name: {{ $route.params.name }}</h1>
</template>