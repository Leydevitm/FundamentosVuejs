<template>
 <div>
    <Titulo texto="Ruta con parametros"></Titulo>
    <h2>Parametro: {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components:{
        Titulo,
    }

}
</script>

<style>

</style>