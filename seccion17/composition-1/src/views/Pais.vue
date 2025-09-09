<template>
 <div>
     <!-- <h1>Detalles: {{ $route.params.nombre }}</h1> -->
   <h1>Detalle: {{ nombre }}</h1>
   <p v-for="(pais, index) in arrayData" :key="index"> {{ pais.name }} -- {{ pais.region }}</p>
 </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'
export default {
    props:['nombre'],

setup(props){
    // console.log(props.nombre)
    const nombreParams = useRoute()
    // console.log(nombreParams.params.nombre)

    const {arrayData} = useFetch(`https://api.countrylayer.com/v2/name/${nombreParams.params.nombre}?access_key=0f4afa846f14a67f4e8ff398451e9157`)
    return {arrayData}
}
}
</script>

<style>

</style>