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
const handdleRemove = file=>{
    const index = fileList.value.indexOf(file);
    const newFileList = fileList.value.slice();
    newFileList.splice(index, 1);
    fileList.value = newFileList;
}
const handleChange = info=>{
    //validar los tipos de imagenes 
    if(info.file.status != 'uploading'){
        // console.log(info.file)
        const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png' || info.file.type === 'image/jpg';
        if(!isJpgOrPng){
            message.error('You can only upload JPG/PNG files!');
            handdleRemove(info.file);
            return;
        }
    const isLt2M = info.file.size / 1024 / 1024 < 2;
    if(!isLt2M){
        message.error('Image must smaller than 2MB!');
        handdleRemove(info.file);
        return;
    }
}
    //validar que sea solo una imagen
    //si el user sube todo otra, se reemplaza
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

const onFinish = async () => {
    
const respuesta = await userStore.updateUser(userStore.userData.displayName);
if(fileList.value[0]){
    const respuesta= await userStore.updateImg(fileList.value[0]);
    if(respuesta){
    return message.success('Problemas al subir tu imagen');
  }
  message.success('User information updated successfully');
}

  if(!respuesta){
    return message.success('User information updated successfully');
  }
  message.error('An error occurred while updating user information');
}

</script>
<template>
        <h1 class="text-center">Perfil de usuario</h1>
        <!-- <p>{{ userStore.userData }}</p> -->
        <div class="text-center mb-5">
           <a-avatar :src="userStore.userData.photoURL" :size="100" ></a-avatar>
          </div>
       
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
        <a-form-item class="mt-5">
            <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Actualizar Informacion</a-button>
        </a-form-item>

       </a-form>
        </a-col>

       </a-row>
    
</template>

<style>
.mb-5{
  margin-bottom: 2rem;
}
.mt-5{
  margin-top: 2rem;
}
</style>