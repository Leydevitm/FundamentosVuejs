import { defineStore } from "pinia";
import {ref} from 'vue';
import {api} from "src/boot/axios"
export const useUserStore = defineStore("user",()=> {
  
     const token =ref(null);
     const expiresIn =ref(null);

    const access = async (email,password) => {
  try{

const res = await api.post('/auth/login',{
  email: email,
  password: password
 });

 token.value = res.data.token;
 expiresIn.value = res.data.expiresIn;
sessionStorage.setItem('user', true);
 setTime()
}catch(error){
if (error.response) {
        // console.log(error.response.data);
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

   const register = async (email,password, repassword) => {
  try{

const res = await api.post('/auth/register',{
  email: email,
  password: password,
  repassword:repassword
 });

 token.value = res.data.token;
 expiresIn.value = res.data.expiresIn;
sessionStorage.setItem('user', true);
 setTime()
}catch(error){
  if(error.response){
    console.log(error.response.data);
    return error.response.data;
    // console.log(error.response.status);
    // console.log(error.response.headers);
  }else if(error.request){
    console.log(error.request);
  }else{
    console.log('Error', error.message);
  }
  console.log(error.config);
}
};

const refreshToken = async () => {
  console.log('RefreshToken');
  try{
    const res = await api.get('/auth/refresh');
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
    sessionStorage.setItem("user",true);
   setTime();
  }catch(e){
    console.log(e);
    sessionStorage.removeItem("user");
  }
};


const logout =async()=>{
    try {
        await api.get('/auth/logout');

    } catch (error) {
        console.log(error);
    }finally{
      resetStore()
      sessionStorage.removeItem('user');
    }
}



const setTime =()=>{
  setTimeout(()=>{
    console.log("Token renovado") 
    refreshToken()
  },expiresIn.value * 1000 - 6000);
}

const resetStore=()=>{
    token.value =null;
    expiresIn.value =null;

}

     return {
       token,
       expiresIn,
       access,
       refreshToken,
       logout,
       register,

     };
});