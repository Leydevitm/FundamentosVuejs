<script setup>
import { useUserStore } from '../stores/user';
import {useDatabaseStore} from '../stores/database';
import { useRouter } from 'vue-router';


const  userStore  = useUserStore();
const databaseStore  = useDatabaseStore();
const router = useRouter();
databaseStore.getUrls();

databaseStore.getUrls();
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
        <a-button danger @click="databaseStore.deleteUrl(item.id)">Eliminar</a-button>
       <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
        </a-space>
       </template>
       <p>  {{ item.name }}</p>
    </a-card>
       </a-space>
    </div>

</template>