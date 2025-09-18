<template>
  <v-layout>
    <v-flex>
        <v-card>
            <v-card-tex>
                <h3>Bienvenido {{ usuario.nombre }}</h3>
            </v-card-tex>

            <v-card-text>
                <div class="text-xs-right">
                 <v-chip close>
                    <v-avatar>
                        <img :src="usuario.foto" alt="">
                    </v-avatar>Mensaje de chat 
                 </v-chip>
                 <p class="caption mr-2">18 Febrero 2025</p>
                </div>
            </v-card-text>
            <v-form @submit.prevent="enviarMensaje">
                <v-text-field v-model="mensaje" label="Escribe un mensaje" >

                </v-text-field>

            </v-form>

            <v-card-text>

            </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
            return{
                mensaje: ''

            }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        enviarMensaje(){
            console.log('enviar mensaje: ');
        }
    }

}
</script>

<style>

</style>