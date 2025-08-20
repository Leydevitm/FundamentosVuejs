<script setup>
import { onMounted,reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
import { message } from 'ant-design-vue';
const databaseStore = useDatabaseStore();
const route = useRoute();


const formState=reactive({
    url:''
})

const onFinish = async(value) => {
    console.log('Success:', value);
    const respuesta = await  databaseStore.updateUrl(route.params.id, formState.url);
    if(!respuesta){
        formState.url='';
        return message.success('URL updated successfully');
    }
    switch(respuesta){
     default:
        message.error('An error occurred');
        break;
  }
    
};

onMounted(async () => {
  formState.url = await databaseStore.leerUrl(route.params.id);
  
});

</script>
<template>
 <div>
        <h1>Editar id: {{route.params.id}}</h1>
          <a-form
name="aditForm"
autocomplete="off"
layout="vertical"
:model="formState"
@finish="onFinish"
>
<a-form-item
name="url"
label="Ingrese URL"
:rules="[{
required: true,
whitespace:true,
pattern:/^https?:\/\/[\w\-]+(\.[\w-]+)+[/#?]?.*$/,
message: 'Por favor ingrese una URL',
}]">
<a-input v-model:value="formState.url"></a-input>
</a-form-item>
<a-form-item>
    <a-button
    type="primary"
    html-type="submit"
    :loading="databaseStore.loading"
    :disabled = "databaseStore.loading">Editar URL</a-button>
</a-form-item>


</a-form>

    </div>

 </template>