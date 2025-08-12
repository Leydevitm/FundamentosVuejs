<script setup>
import {useCounterStore} from '@/store/counter.js'
const useCounter=useCounterStore()
</script>

<template>
  <h1>HOME counter: {{ useCounter.count }}</h1>
  <h2>Double: {{ useCounter.double}}</h2>
  <button @click="useCounter.increment">Increment</button>
</template>
