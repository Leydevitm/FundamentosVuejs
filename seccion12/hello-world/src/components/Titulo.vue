<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {
    name:'Titulo',
    props:{
        texto:String
    }

}
</script>

<style scope>
h1{
    color:blue;
}
</style>