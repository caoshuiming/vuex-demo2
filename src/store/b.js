export default {
  // 命名空间开启
  namespaced:true,
  state: {
    name:'小B'
  },
  mutations: {
    changeName(state){
      state.name = '小小B'
    }
  },
  actions: {
    changeNameTimeOut(action){
      setTimeout(() => {
        action.commit('changeName')
      },1000)
    }
  },
  getters: {
    addSuffix(state){
      return state.name + '下士';
    }
  }
};