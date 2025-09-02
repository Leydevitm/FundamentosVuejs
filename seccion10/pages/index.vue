import { UiButton } from '../.nuxt/components';
<script setup lang="ts">
useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Home page description' }
    ]
})
</script>
<template>
    <h1>HOME</h1>
    <UiButton />
</template>