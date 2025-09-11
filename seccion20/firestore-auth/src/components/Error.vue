<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>OCURRIO UN ERROR</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert"
    arial-label="Close" @click="error=null"></button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){
        const error = inject('error')

        return{
            error,
        }
        
    }

}
</script>

<style>

</style>