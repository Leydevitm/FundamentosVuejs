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
    poke.value=null;
  }
}

getData();
</script>

<template>
    <div v-if="poke">
         <img :src="poke.sprites?.front_default">
    <h1>Poke name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>
No existe el pokemon
    </h1>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>