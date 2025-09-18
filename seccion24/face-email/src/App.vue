<template>
  <v-app>
    
    <AppNavbar v-if="usuario != '' "></AppNavbar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import { mapState } from "vuex";

export default {
  components: {AppNavbar},
  name: 'App',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
