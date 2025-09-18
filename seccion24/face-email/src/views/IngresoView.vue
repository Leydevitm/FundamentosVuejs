<template>
  <div>
    <v-layout justify-center mt-5>
        <v-flex xs12 sm8 md6 xl4>
            <v-card>
                <v-card-text class="display-1 text-uppercase white--text text-xs-center"
                :class="registro ? 'success' : 'accent'">
                    <span v-if="!registro">Ingreso</span>
                    <span v-if="registro">Registro</span>
                </v-card-text>

                <v-card-text>
                    <v-btn block color="error" @click="google">
                        <v-icon left dark>fab fa-google</v-icon>
                        Google</v-btn>

                    <v-btn block color ="info" @click="facebook">
                        <v-icon left dark>fab fa-facebook-f</v-icon>
                        Facebook</v-btn>
                </v-card-text>
                <v-card-text>
                    <v-btn block @click="registro = true" v-if="!registro">¿No tienes una cuenta? Registrate aqui</v-btn>
                     <v-btn block @click="registro = false" v-if="registro">¿Ya tienes una cuenta? Inicia sesion aqui</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {firebase,db} from '@/firebase'
import {mapMutations} from 'vuex';
import router from '@/router';
export default {
    data(){
        return{
            registro: false
        }
    },
    methods:{
        ...mapMutations(['nuevoUsuario']),
        facebook(){
            const provider = new firebase.auth.FacebookAuthProvider();
            this.ingresar(provider);

        },
         google(){
        const provider = new firebase.auth.GoogleAuthProvider();
        this.ingresar(provider);
           
    },
    async ingresar(provider){
         firebase.auth().languageCode = 'es'

            try{
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            console.log(user);
        
            const usuario = {
                uid: user.uid,
                nombre: user.displayName,
                email: user.email,
                foto: user.photoURL
            }
            this.nuevoUsuario(usuario);

            //guardar en firestore
            await db.collection('usuarios').doc(usuario.uid).set(
                usuario)
                console.log('usuario guardado');
                router.push({name:'Home'});

            }catch(error){
            console.log(error);
        }

    }
    },

    

}
</script>
