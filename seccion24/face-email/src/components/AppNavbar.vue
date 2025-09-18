<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
          <span>Vue</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="cerrarSesion">
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <!-- Avatar -->
      <v-row justify="center" class="mt-5">
        <v-col cols="12" class="text-center">
          <v-avatar size="80">
            <img :src="usuario.foto" alt="avatar">
          </v-avatar>
          <p class="mt-3 white--text">{{ usuario.nombre }}</p>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <!-- Items -->
      <v-list dense>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "AppNavbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "fas fa-home", to: { name: "Home" } },
        { title: "Account", icon: "fas fa-user", to: { name: "Ingreso" } },
        { title: "Admin", icon: "fas fa-cog", to: { name: "Admin" } },
        { title: "Chat", icon: "fas fa-comments", to: { name: "Chat" } }
      ]
    };
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapState(["usuario"])
  }
};
</script>
