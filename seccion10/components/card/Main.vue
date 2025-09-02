import { NuxtLink } from '../../.nuxt/components';
<script setup lang="ts">
interface CardMainProps{
    title: string;
    body: string;
    id: number;
} 
const {title,body,id} = defineProps<CardMainProps>();
</script>

<template>
    <h1> {{ id }} - {{ title }}</h1>
    <p>{{ body }}</p>
    <NuxtLink :to="`/posts/${id}`">Read more</NuxtLink>
</template>