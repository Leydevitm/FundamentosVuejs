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

    getTarea({commit,idTarea}){
      db.collection('tareas').doc(idTarea).get()
      .then(doc =>{
        console.log(doc.id)
        console.log(doc.data())
        let tarea = doc.data()
        tarea.id= doc.id
        commit('setTare', tarea)
      })
    },
    editarTarea({commit}, tarea){
        db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
    })
    .then(() => {
        router.push('/')
    })
    },
    agregarTarea({commit}, nombreTarea){
          db.collection('tareas').add({
        nombre: nombreTarea
    })
    .then(doc => {
        console.log(doc.id)
        router.push('/')
    })
    }
    
    

}
})
