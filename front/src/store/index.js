import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    createAccount: ({commit}, userInfos) =>{
      commit;
      console.log(userInfos)
    }
  },
  modules: {
  }
})
