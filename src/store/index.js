import Vue from "vue";
import Vuex from "vuex";
import moduleA from './a.js';
import moduleB from './b.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'小index'
  },
  mutations: {
    changeName(state){
      state.name = '小小index'
    }
  },
  actions: {
    changeNameTimeOut(action){
      setTimeout(() => {
        action.commit('changeName')
      },1000)
    }
  },
  getters:{
    addSuffix(state){
      return state.name + '下士';
    }
  },
  modules: {
    a:moduleA,
    b:moduleB
  }
});
