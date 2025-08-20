<script setup>
import { useUserStore } from '../stores/user';
import {useDatabaseStore} from '../stores/database';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';

const  userStore  = useUserStore();
const databaseStore  = useDatabaseStore();
const router = useRouter();
databaseStore.getUrls();

databaseStore.getUrls();
const confirm =async (id) => {
const respuesta =  await databaseStore.deleteUrl(id)
if(!respuesta) return  message.success('Se elimino con exito');
return message.error(error);
 
};
const cancel = (id) => {
  message.error('No eliminado');
};
</script>

<template>
    <div>
        <h1>Home</h1>
       <p>{{ userStore.userData?.email }}</p>

       <add-form></add-form>

       <p v-if="databaseStore.loadingDoc">Cargando...</p>
       <a-space direction="vertical" v-if="!databaseStore.loadingDoc"  style="width:100%">
         <a-card
       v-for="item of databaseStore.documents" :key="item.id"
       :title="item.short"
      
       >
       <template #extra>
      <a-space>
        <a-popconfirm title="Are you sure you want to delete this URL?"
        ok-text="si"
        cancel-text="no"
        @confirm="confirm(item.id)"
        @cancel="cancel">
        <a-button danger :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Eliminar</a-button>
    </a-popconfirm>
       <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
        </a-space>
       </template>
       <p>  {{ item.name }}</p>
    </a-card>
       </a-space>
    </div>

</template>