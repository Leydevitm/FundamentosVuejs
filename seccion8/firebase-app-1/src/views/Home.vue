<script setup>
import { useUserStore } from '../stores/user';
import {useDatabaseStore} from '../stores/database';
const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls();
</script>

<template>
    <div>
        <h1>Home</h1>
       <pre>{{ userStore.userData?.email }}</pre>
    </div>

</template>