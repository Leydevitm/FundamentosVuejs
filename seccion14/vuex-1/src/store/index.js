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
    disminuir(state){
    state.contador-= 10
    }
  },
  actions: {
    //acciona una conmutacion
    accionIncrementar({commit}){
    commit('incrementar')
    },
    accionDisminuir({commit}){
      commit('disminuir')

    }
  },
  modules: {
  }
})
