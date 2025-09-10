<template>
  <div>
    <h1>App Tareas</h1>
    <TareaForm></TareaForm>
  <p>  {{ tareas }}</p>
  </div>
</template>

<script>
import TareaForm from './TareaForm.vue'
import { provide, ref } from 'vue';

export default {
    components:{
        TareaForm,
    },
   setup(){

    const tareas = ref([])

    provide('tareas', tareas)

    return{tareas}
   }
}
</script>

<style>

</style>