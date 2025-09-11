import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'

Vue.use(Vuex)
export default new Vuex.Store({
 state: {
    tareas: [],
    tarea: {nombre:'',id: ''}
},
mutations: {
    setTareas(state, payload){
        state.tareas = payload
    },
     setTarea(state, payload){
        state.tarea = payload
    },
    setEliminarTarea(state, payload){
        const tareasFiltradas= state.tareas.filter(item => item.id !== payload)
    state.tareas=tareasFiltradas
}
},
actions: {
    getTareas({commit}){
        const tareas = []
        db.collection('tareas').get()
        .then(res => {
            res.forEach(doc => {
                console.log(doc.id)
                console.log(doc.data())
                let tarea = doc.data()
                tarea.id = doc.id
                tareas.push(tarea)
            })
            commit('setTareas', tareas)
        })
    },

    async getTarea({commit},idTarea){
        try {
        const doc = await db.collection('tareas').doc(idTarea).get()
        if (doc.exists) {
          commit('setTarea', {
            id: doc.id,
            ...doc.data()
          })
        } else {
          console.warn('No existe la tarea con id', idTarea)
        }
      } catch (e) {
        console.error('Error al obtener tarea:', e)
      }
    },


    async editarTarea({commit}, tarea){
      try {
        await db.collection('tareas').doc(tarea.id).update({
          nombre: tarea.nombre
        })
        router.push('/')
      } catch (e) {
        console.error('Error al editar tarea:', e)
      }
    },

    agregarTarea({commit}, nombreTarea){
          db.collection('tareas').add({
        nombre: nombreTarea
    })
    .then(doc => {
        // console.log(doc.id)
        router.push('/')
    })
    },
    eliminarTarea({commit},id ){
         db.collection('tareas').doc(id).delete()
    .then(() => {
        // dispatch('getTareas')
        commit('setEliminarTarea', id)
    })
    }
    
    

}
})
