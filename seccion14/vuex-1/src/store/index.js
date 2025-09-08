import { createStore } from 'vuex'

export default createStore({
  state: {
    contador:150
  },
  getters: {
  },
  mutations: {
    // modifica al state
    incrementar(state){
    state.contador+=10
    },
    disminuir(state,payload){
    state.contador-= payload
    }
  },
  actions: {
    //acciona una conmutacion
    accionIncrementar({commit}){
    commit('incrementar')
    },
    accionDisminuir({commit}, numero){
      
      commit('disminuir',numero)

    }
  },
  modules: {
  }
})
