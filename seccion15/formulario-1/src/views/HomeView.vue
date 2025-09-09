<template>
 <div>
   <form @submit.prevent="procesarFormulario">
     <Input :tarea="tarea"></Input>
   </form>
    <hr>
     <p>{{ tarea }}</p>
 </div>
</template>

<script>
import Input from '../components/Input.vue'
export default {
  name: 'HomeView',
  components:{
  Input
  },
  data() {
    return {
      tarea:{
        id:'',
        nombre: '',
        categorias:[],
        estado:'',
        numero:0

      }
    }
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim()===""){
         console.log('Campo vacio');
         return
      }
      console.log('No esta vacio')
      this.tarea={
         nombre: '',
        categorias:[],
        estado:'',
        numero:0
      }
    }
  },
  
}
</script>
