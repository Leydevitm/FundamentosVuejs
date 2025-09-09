<template>
 <div>
<Navbar></Navbar>
<div class="container"></div>
    <router-view/>
 </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
export default{
  components:{
    Navbar
  },
 
}
</script>