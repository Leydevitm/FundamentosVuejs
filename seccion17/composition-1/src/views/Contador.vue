<template>
  <div>
    <h1>contador: {{ contador }}</h1>
 <Btn :textoBoton="'Aumentar'"   @accion="aumentar"></Btn>
  <Btn :textoBoton="'Disminuir'" @accion="disminuir"></Btn>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue'
import {useContador} from '../hooks/useContador'

export default {
    components:{
     Btn,
    },
setup(){
    return{...useContador()}
}
}
</script>

<style>

</style>