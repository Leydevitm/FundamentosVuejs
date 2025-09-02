<script setup lang="ts">
import type { Post } from "@/interfaces/post.type"
const {data:posts }= await  useFetch<Post[]>("http://jsonplaceholder.typicode.com/posts");

</script>
<template>
    <h1>POST PAGE</h1>
    <CardMain
    v-for="{id,body,title} in posts || []"
    :key="id" 
    :title="title"
    :body="body"
    :id="id"
     />
</template>