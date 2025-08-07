<script setup>
defineProps(["inicio", "fin", "maxLength"]);
const emit = defineEmits(['next', 'prev']);
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button 
        @click="emit('prev')" 
        type="button" 
        class="btn btn-outline-secondary" 
        :disabled="inicio===0">
        Previous {{ inicio }}
    </button>
        <button 
        @click="emit('next')" 
        type="button"
         class="btn btn-outline-secondary"
         :disabled="fin >= maxLength"> <!-- Assuming posts.length is the total number of posts -->
         Next {{ fin }}
        </button>
    </div>
</template>

<style>
.btn-group {
  margin-bottom: 1rem;
}
.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
