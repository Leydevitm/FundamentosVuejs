<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
</script>

<template>
    <div>
        <h1>Home</h1>
       <pre>{{ userStore.userData?.email }}</pre>
    </div>

</template>