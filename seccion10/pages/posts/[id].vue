<script setup lang="ts">
import type {Post} from '~/interfaces/post.type'
const {id} = useRoute().params

const {data:post } = await useFetch<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`);
</script>

<template>
    <h1>Post id: {{ id }}</h1>
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.body }}</p>
</template>