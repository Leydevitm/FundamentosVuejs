<template>
  <div id="app">
    <nav>
      <router-link to="/" v-if="existeUsuario">Inicio</router-link> |
      <router-link to="/registro" v-if="!existeUsuario">Registro</router-link> |
       <router-link to="/acceso" v-if="!existeUsuario">Acceso</router-link> 
       <button @click="cerrarSesion" v-if="existeUsuario">Cessar Sesion</button>
    </nav>
    <router-view/>
  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
export default{
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>

