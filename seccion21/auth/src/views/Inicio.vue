<template>
    <div>
        <h1>Ruta protegida</h1>
     
         <router-link to='/agregar'>
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>
        <div v-if="carga" class="text-center mt-5" >
            <h3>Cargando contenido...</h3>
            <pulse-loader :loading="carga" :color="'#007bff'" :size="'50px'"></pulse-loader>
            
        </div>
         <ul class="list-group mt-5" v-if="!carga">
            <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
                {{item.id}} - {{item.nombre}}
                <router-link :to="{name: 'Editar', params: {id: item.id}}" class="float-right ml-2">
                    <button class="btn btn-warning">Editar</button>
                </router-link>
                   <button class="btn btn-danger float-right" @click="eliminarTarea(item.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    name: 'Inicio',

    created(){
          this.getTareas()

    },
      methods:{
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed:{
        ...mapState(['usuario', 'tareas','carga'])
    },
    components:{
        PulseLoader
    }

}
</script>