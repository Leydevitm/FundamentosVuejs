import {collection,getDocs, query,where} from 'firebase/firestore/lite';
import { defineStore } from 'pinia';
import {db} from '../firebaseConfig';
import {auth} from '../firebaseConfig' 


export const useDatabaseStore = defineStore('database', {
    state: () => ({
        documents: []
    }),
    actions: {
        async getUrls() {
            
            try {
                const q = query(
                    collection(db, 'urls'),
                    where("user","==",auth.currentUser.uid)
                );
                const querySnapShot = (await getDocs(q))
                querySnapShot.forEach(doc => {
                   console.log(doc.id,doc.data());
                   this.documents.push({
                    id:doc.id,
                    ...doc.data()
                });
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
});