import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/users'
});

const store =  createStore({
  state: {
  },
  actions: {
    createAccount: ({commit}, userInfos) =>{
      commit;
      instance.post('/signup', userInfos)
      .then(function (response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  }
})
export default store;