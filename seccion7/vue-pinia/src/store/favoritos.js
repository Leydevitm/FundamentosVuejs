import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useFavoritosStore = defineStore('favoritos',()=>{
    const favoritos = ref([])

    const add = (poke)=>{
        favoritos.value.push(poke)
    };

    const remove =(id)=>{
        favoritos.value=favoritos.value.filter(item=> item.id != id)
    }

    return {
        favoritos,
        add,
        remove
    };
})
