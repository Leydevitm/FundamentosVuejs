<template>
  <div>
    <h1>App Tareas</h1>

    <TareaForm></TareaForm>
    <TareaItem
    v-for="tarea in tareas" :key="tarea.id"
    :tarea="tarea"></TareaItem>

    <div 
    class="alert alert-dark mt-3"
    v-if="tareas.length === 0"> Sin tareas Pendientes</div>

    <p>  {{ tareas }}</p>

  </div>
</template>

<script>
import TareaItem from './TareaItem.vue'
import TareaForm from './TareaForm.vue'
import { provide, ref, watchEffect } from 'vue';

export default {
    components:{
        TareaForm,
        TareaItem,
    },
   setup(){

    const tareas = ref([])

    provide('tareas', tareas)
    if(localStorage.getItem('tareas')){
        tareas.value = JSON.parse(localStorage.getItem('tareas'))
    }
     watchEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas.value))
    })

    return{tareas}
   }
}
</script>

<style>

</style>