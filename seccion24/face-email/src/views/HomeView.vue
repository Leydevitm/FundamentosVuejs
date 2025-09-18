<template>
    <div>
       <h3>Bienvenido {{ usuario.nombre }}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['usuario'])
    }
}
</script>

<style>

</style>