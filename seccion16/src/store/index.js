import { createStore } from 'vuex'
import router from '../router'
export default createStore({
  state: {
    tareas:[],
    tarea:{
      id:'',
       nombre: '',
        categorias:[],
        estado:'',
        numero:0
    },
    usuario:null
  },
  getters: {
  },
  mutations: {
     setUser(state, payload) {
      state.user = payload
    },
    cargar(state,payload){
    state.tareas = payload
    },
    set(state,payload){
    state.tareas.push(payload)
    
    // console.log(state.tareas)
    },
    eliminar(state,payload){
      state.tareas = state.tareas.filter(item => item.id != payload)
    
    },
    tarea(state,payload){
      if(!state.tareas.find(item =>item.id ===payload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item =>item.id ===payload)
    },
    update(state,payload){
      state.tareas = state.tareas.map(item => item.id ===payload.id ? payload : item)
      router.push('/')
   
    }
  },
  actions: {
     cerrarSesion({ commit }) {
      commit('setUser', null)
      router.push('/ingreso')
      localStorage.removeItem('usuario')
    },
    async ingresoUsuario({ commit }, usuario) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log('userDB', userDB)
        if (userDB.error) {
          return console.log(userDB.error)
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async registrarUsuario({ commit }, usuario) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log(userDB)
        if (userDB.error) {
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
   async cargarLocalStorage({commit}){
     try {
      const res = await fetch('https://formularioapi-abc56-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await res.json()
        const arrayTareas = []
        for (let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        commit('cargar', arrayTareas)

     } catch (error) {
      console.log(error)
     }
    },
    async setTareas({commit}, tarea){
      try {
        const res = await fetch(`https://formularioapi-abc56-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method:'PUT',
          headers:{
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTareas({commit}, id){
        try {
        await fetch(`https://formularioapi-abc56-default-rtdb.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE',
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }

    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit} , tarea){
     try {
        const res = await fetch(`https://formularioapi-abc56-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('update', dataDB)
      } catch (error) {
        console.log(error)
      }
    }

  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user
    }
  },
  
  modules: {
  }
})
