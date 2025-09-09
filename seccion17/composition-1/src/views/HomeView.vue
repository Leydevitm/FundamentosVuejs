<template>
  <div class="home">
   <h1 :style="{'color':color}">Contador: {{ contador }}</h1>
   <button @click="aumentar()">Amentar</button>
   <button @click="disminuir()">Disminuir</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return{
      contador: 0
    }
  },
  computed:{
   color(){
    if(this.contador <= 0){
      return 'red'
    }else{
      return 'green'
    }
   }
  },
  methods:{
    aumentar(){
      this.contador ++ 
    },
    disminuir(){
      this.contador--
    }
  }
  
}
</script>
