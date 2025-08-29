<script setup>
import { useUserStore } from 'src/stores/user-store.js';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
const $q = useQuasar();
const userStore = useUserStore();
const router = useRouter();

const email = ref("candelaria@gmail.com");
const password = ref("123123");
const repassword = ref("123123");

const handleSubmit = async()=>{
    try {
        console.log("paso las validaciones")
        await userStore.register(email.value, password.value, repassword.value);
        router.push('/');
        email.value = "";
        password.value = "";
    } catch (error) {
        console.log("error", error);
        
        if(error.error){
        alertDialogBackend(error.error);
        }else if(error.error[0].msg){
            alertDialogBackend(error.error[0].msg);
        }else{
            alertDialogBackend();
        }
    }
}
const alertDialogBackend=(message = 'Error en el servidor') =>{
    $q.dialog({
        title: 'Error',
        message, 
    })
}
</script>

<template>
    <q-page padding class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5">
     <h3>Register </h3>
     <q-form @submit.prevent="handleSubmit">

    
     <q-input 
     v-model="email" 
     type="email" 
     label="Email"
     :rules="[
        (val) => (val && val.length > 3) || 'Email must be valid',
     ]"></q-input>

     <q-input v-model="password" type="password" label="Password"
     :rules="[
        (val) => (val && val.length > 5) || 'Password must be at least 6 characters',
     ]"></q-input>

     <q-input v-model="repassword" type="password" label="Repeat Password"
     :rules="[
        (val) => (val && val === password) || 'Passwords must match',
     ]"></q-input>
     <div>
        <q-btn label="Register" type="submit" ></q-btn>
     </div>
      </q-form>
        </div>
       

    </q-page>
    
</template>

