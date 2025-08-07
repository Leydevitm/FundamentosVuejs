<script setup>

import axios from 'axios'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const poke=ref({})


const route = useRoute()
const router = useRouter()

const back=()=>{
    router.push('/Pokeemons')
}
const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    // pokemons.value = data.results
    console.log(data);
    poke.value=data;
  } catch (error) {
    console.error('Error fetching Pokemons:', error)
  }
}

getData();
</script>

<template>
    <img :src="poke.sprites?.front_default">
    <h1>Poke name: {{ $route.params.name }}</h1>
    <button @click="back">Volver</button>
</template>