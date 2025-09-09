<template>
  <div class="about">
   <Titulo :contador="contador" :color="color"></Titulo>
   <!-- <h1 :style="{'color':color}">Contador: {{ contador }}</h1> -->
    <!-- <button @click="aumentar()">+</button>
     <button @click="disminir()">-</button> -->
     <hr>
     <Btn :textoBoton="'Aumentar'" @accion="aumentar"></Btn>
      <Btn :textoBoton="'Disminuir'" @accion="disminuir"></Btn>
     <input type="text" v-model="texto">
     <p>{{ texto }}</p>
  </div>
</template>

<script >
import Titulo from '../components/Titulo.vue'
import Btn from '../components/Btn.vue'
import {computed, ref} from 'vue'
 export default{
  components:{
    Titulo,
    Btn
  },
  setup(){
    
    const contador = ref(0);
    const texto = ref('')
    const aumentar =()=>{
      contador.value++
    }
    const disminuir =()=>{
      contador.value--
    }

    const color = computed(()=>{
    if(contador.value <= 0){
      return 'red'
    }else{
      return 'blue'
    }
    })

  return {contador,aumentar,disminuir,color,texto}
    }
  
  }
 
</script>