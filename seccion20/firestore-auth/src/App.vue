<template>
<div>
  <Cargando v-if="loading" class="mt-5"></Cargando>
  <div v-else>
     <Navbar></Navbar>
  <div class="container">
    
  <router-view/>
  </div>

  </div>
   
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cargando from './components/Cargando.vue'
import {firebase} from '@/firebase'
import { onMounted,ref } from 'vue'

export default{
  components:{
    Navbar,
    Cargando
  },
  setup(){
    const loading = ref(false)
    onMounted(async()=>{
      loading.value = true
      await firebase.getCurrentUser()
      loading.value = false
    })
    return{
      loading
    }
  }
}
</script>

