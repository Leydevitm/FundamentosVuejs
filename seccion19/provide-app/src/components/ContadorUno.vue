<template>
  <div>
    <h2>Contador: {{ contador }} </h2>

  </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){
        const contador =inject('contador')

        return{contador}
    }

}
</script>

<style>

</style>