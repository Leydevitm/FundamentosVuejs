<template>
    <div>
        <h2>Tipo de cuenta: {{ cuenta }}</h2>
        <h2>Saldo: {{ saldo }}</h2>
        <h2>Cuenta {{ estado ? 'Activa' : 'Inactiva' }}</h2>
        <div v-for="(servicio,index) in servicios" :key=" index">
           {{ index +1 }}.- {{ servicio }}

        </div>
    </div>
</template>

<script>
export default {
 data(){
    return{
        saldo:1000,
        cuenta :'Visa',
        estado:true,
        servicios:['Transferencias','Giros','Abono']
    }
 }
}
</script>

<style>

</style>