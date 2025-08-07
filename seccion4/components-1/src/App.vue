<script setup>
import { computed, ref } from 'vue';
import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const posts = ref([]);
const postXpage =10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading=ref(true);

const favorito = ref("");

const cambiarFavorito=(title)=>{
  favorito.value=title;
};

const next=()=>{
  if(fin.value < posts.value.length){
    inicio.value= inicio.value +postXpage;
    fin.value= fin.value +postXpage;
  }
}
const prev=()=>{
  
    inicio.value += - postXpage;
    fin.value += - postXpage;

}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    
    posts.value = data;
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  })
  .finally(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000); // Simulate a delay for loading
  });

  const maxLength = computed(() => posts.value.length);

</script>


<template>
  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <h1>Leivy</h1>
    <h2>Mis Post favoritos: {{ favorito }}</h2>


    <PaginatePost 
    
    @next="next" 
    @prev="prev" 
    :inicio="inicio" 
    :fin="fin" 
    :maxLength="maxLength"
    class="mb-2"
    />
    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
    :body="post.body"
    :cambiarFavorito="cambiarFavorito"
    class="mb-2"
    ></BlogPost>

  </div>
</template>





