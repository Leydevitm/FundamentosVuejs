<template>
 <div>
   <form @submit.prevent="procesarFormulario">
     <Input :tarea="tarea"></Input>
   </form>
    <hr>
     <lista-tareas></lista-tareas>
 </div>
</template>

<script>
import Input from '../components/Input.vue'
import ListaTareas from '../components/ListaTareas.vue'
import {mapActions} from 'vuex'
const  shortid = require( 'shortid')
export default {
  name: 'HomeView',
  components:{
  Input,
  ListaTareas
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
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim()===""){
         console.log('Campo vacio');
         return
      }
      console.log('No esta vacio')
     //geenrar id 
     this.tarea.id=shortid.generate()
    console.log(this.tarea.id)
    //enviar los datos 
    this.setTareas(this.tarea)
   //limpiar datos

      this.tarea={
        id:'',
         nombre: '',
        categorias:[],
        estado:'',
        numero:0
      }
    }
  },
  
}
</script>
