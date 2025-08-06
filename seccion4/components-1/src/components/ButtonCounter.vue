<script setup>
import { ref } from 'vue';


const counter = ref(0);
const increment = () => {
  counter.value++;
};
</script>

<template>
    <button @click="increment">Counter{{ counter }}</button>
</template>

<style>
button {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
</style>