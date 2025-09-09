<template>
  <div class="about">
    <h1 :style="{'color':color}">Contador: {{ contador }}</h1>
    <button @click="aumentar()">+</button>
     <button @click="disminir()">-</button>
  </div>
</template>

<script >
import {computed, ref} from 'vue'
 export default{
  setup(){
    
    const contador = ref(0);
    const aumentar =()=>{
      contador.value++
    }
    const disminir =()=>{
      contador.value--
    }

    const color = computed(()=>{
    if(contador.value <= 0){
      return 'red'
    }else{
      return 'blue'
    }
    })

  return {contador,aumentar,disminir,color}
    }
  
  }
 
</script>