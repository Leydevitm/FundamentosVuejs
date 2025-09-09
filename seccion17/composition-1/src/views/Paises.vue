<template>
<div>
     <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    <router-link :to="`/paises/${pais.name}`">{{ pais.name }}</router-link>
  </p>
</div>
</template>

<script>
import {useFetch} from '../hooks/useFetch'
import {onMounted, ref } from 'vue'
export default {
setup(){
    return {...useFetch('https://api.countrylayer.com/v2/all?access_key=0f4afa846f14a67f4e8ff398451e9157')}
}
}
</script>

