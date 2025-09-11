<template>
  <div v-if="isAuthenticated">
    <h1>Perfil</h1>
  <pre>
    {{ user }}
  </pre>
  </div>
</template>

<script>
import {useAuth} from '@vueuse/firebase'
import { computed } from 'vue'
export default {
setup(){
  const {user,isAuthenticated} = useAuth()
   const userName = computed(() => {
      return isAuthenticated.value ? user.value?.displayName : 'Invitado'
    })
 
  return{
 user,
 isAuthenticated, userName
  }
}
}
</script>



