<template>
  <div>
    <!-- <button @click="$emit('accion')">{{ textoBoton }}</button> -->
    <button @click="accionHijo">{{ textoBoton }}</button>
  </div>

</template>

<script>


export default {
props:['textoBoton'],
setup(props,context){
const accionHijo = () =>{
    context.emit('accion')
}
return {accionHijo}
}
}
</script>

<style>

</style>