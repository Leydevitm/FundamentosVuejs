<script setup>
import BlogPost from './components/BlogPost.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: 'Post 1', body: 'Descripción del post 1' },
  { id: 2, title: 'Post 2', body: 'Descripción del post 2' },
  { id: 3, title: 'Post 3', body: 'Descripción del post 3' }
]);
const favorito = ref("");
const cambiarFavorito=(title)=>{
  favorito.value=title;
}
</script>


<template>
  <div class="container">
    <h1>Leivy</h1>
    <h2>Mis Post favoritos: {{ favorito }}</h2>
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
    :body="post.body"
    @cambiarFavorito="cambiarFavorito"
    ></BlogPost>

  </div>
</template>





