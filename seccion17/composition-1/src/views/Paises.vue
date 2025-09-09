<template>
<div>
     <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{ pais.name }}
  </p>
</div>
</template>

<script>
import {onMounted, ref } from 'vue'
export default {
setup(){
    const arrayData = ref([])
    onMounted(async ()=>{
        try {
            const res = await fetch('https://api.countrylayer.com/v2/all?access_key=0f4afa846f14a67f4e8ff398451e9157')
            arrayData.value = await res.json()
        } catch (error) {
              console.log(error)
        }
    })

    // const fetchData = async() =>{
    //     try {
    //         const res = await fetch('https://api.countrylayer.com/v2/all?access_key=0f4afa846f14a67f4e8ff398451e9157')
    //         arrayData.value = await res.json()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // fetchData()
    return {arrayData}
}
}
</script>

<style>

</style>