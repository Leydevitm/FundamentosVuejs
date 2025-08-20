<script lang="ts" setup>
import {useUserStore} from '../stores/user'
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
const userStore = useUserStore();

const formState = reactive<FormState>({
  email: '',
  password: '',
  repassword: '',
});

const validatePass = async(_rulee,value)=>{
    if(value===''){
        return Promise.reject('Repeat password is required');
    }
    if(value !== formState.password){
        return Promise.reject('Passwords do not match');
    }
    return Promise.resolve();
}

const onFinish = async (values: any) => {
  console.log('Success:', values);
   const respuesta = await userStore.registerUser(formState.email, formState.password)
   if(!respuesta){
    return message.success("Verification email sent!")
  }
  switch(respuesta){
     case 'auth/email-already-in-use':
        message.error('Email already in use');
        break;
      default:
        message.error('An error occurred');
        break;
  }
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


</script>

<template>
  <h1 class="text-center">Register</h1>
    <a-row>
      <a-col :xs="{span:24}" :sm="{span:12, offset:6}">

     
       <a-form 
       :model="formState"
        name="basicLogin"
        autocomplete="off"
        layout="vertical"
        @finish="onFinish"
  @finishFailed="onFinishFailed"
        >
        <a-form-item
        name="email"
        label="Email"
        :rules="[{required:true,type:'email', whitespace:true,message:'Please input yur email!'}]"
        >
        <a-input v-model:value="formState.email">
            <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
        </a-input>
        </a-form-item>

        <a-form-item
        name="password"
        label="password"
        :rules="[{required:true,min:6,whitespace:true,message:'Please input yur password!'}]"
        >
        <a-input-password v-model:value="formState.password">
            <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
        </a-input-password>
        </a-form-item>

         <a-form-item
        name="repassword"
        label="repeat password"
        :rules="[{validator:validatePass}]"
        >
        <a-input-password v-model:value="formState.repassword">
            <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
        </a-input-password>
        </a-form-item>


        <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Ingresar</a-button>
        </a-form-item>

       </a-form>
        </a-col>
       </a-row>
   

</template>