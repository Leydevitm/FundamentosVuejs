<script lang="ts" setup>
import { useUserStore } from '../stores/user'
import { UserOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';

const userStore = useUserStore();
const fileList = ref([]);

const beforeUpload=(file)=>{
    fileList.value=[...fileList.value,file];
    return false;
}
const handleChange = info=>{
    let resFileList = [...info.fileList];
    resFileList=resFileList.slice(-1)
     resFileList=resFileList.map(file=>{
        if(file.response){
            file.url = file.response.url;
        }
        return file;
     });
     fileList.value = resFileList
}

const onFinish = async (values) => {
const respuesta = await userStore.updateUser(userStore.userData.displayName);

fileList.value.forEach(file => {
console.log(file);
});
  if(!respuesta){
    return message.success('User information updated successfully');
  }
  message.error('An error occurred while updating user information');
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
       <a-upload
        :file-list="fileList"
        :before-upload="beforeUpload"
        list-type="picture"
        @change="handleChange"
        >
        <a-button>Subir Foto</a-button>
         </a-upload>
        <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Actualizar Informacion</a-button>
        </a-form-item>

       </a-form>
        </a-col>

       </a-row>
    
</template>

