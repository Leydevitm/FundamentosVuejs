<script setup>
import {useFavoritosStore} from '@/store/favoritos'
import { storeToRefs } from 'pinia'
const useFavoritos=useFavoritosStore()

const {add} = useFavoritos
const {favoritos} = storeToRefs(useFavoritos)
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length ===0">Sin Favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item"
        v-for="poke in favoritos"
        :key="poke.id"
        >{{ poke.name }}</li>
    </ul>
</template>