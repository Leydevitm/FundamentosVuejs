
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDmcLf1AiQPUw6zDm6SilJGxA4kg4mIMyQ",
  authDomain: "vue3-2025-7ca7c.firebaseapp.com",
  projectId: "vue3-2025-7ca7c",
  storageBucket: "vue3-2025-7ca7c.firebasestorage.app",
  messagingSenderId: "21632116124",
  appId: "1:21632116124:web:e6b3c9e1f09cdc5b995459"
};


initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {auth, db};