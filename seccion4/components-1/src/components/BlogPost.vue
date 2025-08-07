<script setup>
//defineProps(['title','id','body']);
defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: 'No description provided'
  },
    cambiarFavorito: Function

});
const emit = defineEmits(['cambiarFavoritoNombre']);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
            {{ id }} -{{ title }}</h5>
            <p class="card-text">
                {{ body }}
            </p>
            <button @click="cambiarFavorito(title)" 
            class="btn btn-outline-primary">
            Favorito</button>
        </div>
    </div>
</template>


<style>
.card {
    margin-bottom: 1rem;
}
.card-body {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
}
.card-title {
    font-size: 1.25rem;
    font-weight: 500;
}
.card-text {
    font-size: 1rem;
    color: #6c757d;
}
</style>