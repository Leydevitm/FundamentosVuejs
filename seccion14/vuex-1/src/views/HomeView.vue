<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 
    :style="colorContador"
    >{{ titulo }}: {{ contador }}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir></BtnDisminuir>
  </div>
</template>

<script>
import BtnDisminuir from '../components/btnDisminuir.vue'
import {mapState, mapMutations,mapActions} from 'vuex'
export default {

  name: 'HomeView',
  components: {
    BtnDisminuir
  
  },
  data(){
    return{
    titulo: 'Mi contador Vuex'
    }
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return  [this.contador > 100 ? {'color':'green'} : {'color':'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
