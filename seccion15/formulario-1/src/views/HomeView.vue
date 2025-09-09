<template>
 <div>
   <form action="">
     <input 
       type="text"
       class="form-control my-2"
       placeholder="Ingrese nombre"
       v-model="tarea.nombre">
   </form>
   <p>{{ tarea }}</p>
 </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      texto: '',
      tarea:{
        nombre: ''
      }
    }
  }
}
</script>
