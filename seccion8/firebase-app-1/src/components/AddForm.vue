<script setup>
import { reactive } from 'vue';
import {useDatabaseStore} from '../stores/database';
import {message} from 'ant-design-vue';
const databaseStore = useDatabaseStore();

const formState=reactive({
    url:''
})

const onFinish = async(value) => {
    console.log('Success:', value);
    const respuesta = await  databaseStore.addUrl(formState.url);
    if(!respuesta){
        formState.url='';
        return message.success('URL added successfully');
    }
    switch(respuesta){
     default:
        message.error('An error occurred');
        break;
  }
    
};

</script>

<template>
<a-form
name="addForm"
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
    :disabled = "databaseStore.loading">Agregar URL</a-button>
</a-form-item>


</a-form>
</template>

