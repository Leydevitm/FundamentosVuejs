
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">
               {{ userName }}
            </router-link>
            <div>
                <button class="btn btn-success" 
                @click="signIn"
                v-if="!isAuthenticated"
                >Acceder</button>

            <div v-else>
              <router-link to="/crud"
              class="btn btn-success mx-1">
                CRUD
              </router-link>

               <router-link to="/perfil"
              class="btn btn-success mx-1">
                Perfil
              </router-link>
              </div>

                  <button class="btn btn-danger mx-1" 
                @click="signOut"
              >Salir</button>
                
                
            </div>
        </div>
    </nav>
  </div>

</template>

<script>
import {useUser} from '../composables/useUser.js'
import {useAuth} from '@vueuse/firebase'
import {computed} from 'vue'
export default {

    setup(){
      
    const {signIn,signOut} = useUser()
    const {user,isAuthenticated} = useAuth()
     const userName=computed(()=>{
    return isAuthenticated.value ? user.value.displayName : 'sin Auth'
  })
    return{
        signIn,
        signOut,
        user,isAuthenticated,
        userName
    }
}
 }
</script>

<style>

</style>