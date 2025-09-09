<template>
 <div>
<Navbar></Navbar>
<div class="container"></div>
    <router-view/>
 </div>

</template>

<script>

import {mapActions} from 'vuex'
import Navbar from './components/Navbar.vue'
export default{
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
 
}
</script>