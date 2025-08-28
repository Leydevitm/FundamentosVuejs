<template>
    <h3>Login {{ userStore.token }}</h3>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js';

const userStore = useUserStore();
</script>