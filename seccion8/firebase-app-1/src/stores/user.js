import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore',{
    state:()=>({
        userData:'bluweb@test.com',
    }),
    getter:{
        minuscula(){
            return state.userData.toLowerCase();
        },
    },
    actions: {
        registerUser(name){
            this.userData=name;
        }

    },
        

});