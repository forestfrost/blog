import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavbarShow:true,
  },
  mutations: {
    changeNavbarShow(state,data){
      state.isNavbarShow=data;
    }
  },
  actions: {
  },
  modules: {
  }
})
