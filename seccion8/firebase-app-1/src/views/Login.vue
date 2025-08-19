<script lang="ts" setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
const userStore = useUserStore();

const formState = reactive<FormState>({
  email: 'ley80@gmail.com',
  password: 'candelaria',
});

const onFinish = async (values: any) => {
  console.log('Success:', values);
  const respuesta = await userStore.loginUser(formState.email, formState.password);

  if(!respuesta){
    return 
  }
  switch(respuesta){
     case 'auth/invalid-credential':
        message.error('email and password are incorrect');
        break;
      default:
        message.error('An error occurred');
        break;
  }
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
// const disabled = computed(() => {
//   return !(formState.email && formState.password);
// });


</script>

<template>
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

        <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Ingresar</a-button>
        </a-form-item>

       </a-form>
        </a-col>
       </a-row>
   

</template>