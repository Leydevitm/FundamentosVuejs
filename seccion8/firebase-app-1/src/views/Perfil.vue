<script lang="ts" setup>
import { useUserStore } from '../stores/user'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
const userStore = useUserStore();
const onFinish = async (values) => {
  // console.log('Success:', values);
//   const respuesta = await userStore.loginUser(formState.email, formState.password);
}
</script>
<template>
    
        <h1>Perfil de usuario</h1>
           <a-row>
      <a-col :xs="{span:24}" :sm="{span:12, offset:6}">

       <a-form
       :model="userStore.userData"
        name="basicPerfil"
        autocomplete="off"
        layout="vertical"
        @finish="onFinish"
        >
        <a-form-item
        name="email"
        label="No modificar"
        
        :rules="[{required:true,type:'email', whitespace:true,message:'Please input yur email!'}]"
        >
        <a-input disabled v-model:value="userStore.userData.email">
            <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
        </a-input>
        </a-form-item>

         <a-form-item
        name="displayName"
        label="nickName"
        :rules="[{required:true,whitespace:true,message:'Please input your nickName!'}]"
        >
        <a-input v-model:value="userStore.userData.displayName">
            <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
        </a-input>
        </a-form-item>

        

        <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Actualizar Informacion</a-button>
        </a-form-item>

       </a-form>
        </a-col>

       </a-row>
    
</template>

