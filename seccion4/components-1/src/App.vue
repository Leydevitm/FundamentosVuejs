<script setup>
import { ref } from 'vue';
import BlogPost from './components/BlogPost.vue';
import ButtonCounter from './components/ButtonCounter.vue';

import PaginatePost from './components/PaginatePost.vue';

const posts = ref([]);
const favorito = ref("");
const cambiarFavorito=(title)=>{
  favorito.value=title;
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    
    posts.value = data;
  });

</script>


<template>
  <div class="container">
    <h1>Leivy</h1>
    <h2>Mis Post favoritos: {{ favorito }}</h2>

    <PaginatePost class="mb-2"/>
    <BlogPost
      v-for="post in posts.slice(0, 10)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
    :body="post.body"
    :cambiarFavorito="cambiarFavorito"
    class="mb-2"
    ></BlogPost>

  </div>
</template>





