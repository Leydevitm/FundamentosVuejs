import {defineStore} from 'pinia'
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword
        , signOut,
        onAuthStateChanged
} from 'firebase/auth'
import {auth,db} from '../firebaseConfig';
import router from '../router';
import { useDatabaseStore } from './database';
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
let unsubscribe = null;

export const useUserStore = defineStore('userStore',{
    state:()=>({
        userData:null,
        loadingUser:false,
        loadingUserSession:false
    }),
    actions: {
        async registerUser(email,password){
            this.loadingUser = true;
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
               //this.userData={email:auth.currentUser.email,uid:auth.currentUser.uid}
               router.push('/login');
            } catch (error) {
                console.log(error.code);
                return error.code
            }finally {
                this.loadingUser = false;
            }
        },
        async setUser(user){
            try {
                  const docRef= doc(db,"users",user.uid);
            const docSpan = await getDoc(docRef);
            if(docSpan.exists()){
               
                 this.userData={...docSpan.data()}
            }else{
               
                await setDoc(docRef,{
                    email:user.email,
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL:user.photoURL
                });
                this.userData={
                    email:user.email,
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL:user.photoURL
                }
            }
            } catch (error) {
                console.log(error)
            }

        },
        async loginUser(email,password){
            this.loadingUser = true;
            try {
            await signInWithEmailAndPassword(auth,email,password)
            // this.setUser(user);
              router.push('/');
            } catch (error) {
                console.log(error.code)
                 return error.code
            }finally {
                this.loadingUser = false;
            }
        },
        async logoutUser(){
            const databaseStore = useDatabaseStore();
            databaseStore.$reset();
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        },
        currentUser(){
  return new Promise((resolve,reject) => {
     unsubscribe = onAuthStateChanged(
      auth, 
     async (user) => {
        if(user){
          await this.setUser(user);
        }else{
          this.userData = null;
          const databaseStore = useDatabaseStore();
          databaseStore.$reset();
        }
        resolve(user);
      }, 
      e => reject(e)
    );

    // unsubscribe();
  });
},
if (unsubscribe) {
  unsubscribe(); 
}

    },

});