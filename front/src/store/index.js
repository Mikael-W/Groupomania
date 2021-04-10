import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

let user = localStorage.getItem('user');
if(!user){
  user = {
    userId: -1,
    token: '',
  };
}else {
  try{
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex){
    user = {
     userId: -1,
      token:"",
    };
  }
}
const store =  createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      id:'',
      firstname:'',
      lastname:'',
      email:'',
      imageUrl: ''
    }
  },
  mutations: {
    SET_STATUS: function(state, status){
      state.status = status;
    },
    LOG_USER: function(state, user){
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    USER_INFOS: function (state,userInfos){
      state.user = userInfos;
    },
    PUBLICATIONS_LIST: function(state, publications){
      state.publications = publications;
    },
    ADD_PUBLICATION: function(state,newPublication){
      state.publications.unshift(newPublication);
    },
    COMMENTS_LIST: function(state, comments){
      state.comments = comments;
    },
    LOG_OUT: function (state){
      state.user = {
        userId: -1,
        token:'',
      }
      localStorage.removeItem('user');
    }
  },
  actions: {
    login: ({commit}, userInfos) =>{
      commit('SET_STATUS', 'loading');
      return new Promise((resolve, reject)=>{
      instance.post('users/login', userInfos)
      .then(function (response){
        commit('SET_STATUS', '');
        commit('LOG_USER', response.data);
        resolve(response);
      })
      .catch(function(error){
        commit('SET_STATUS', 'error_login');
        reject(error);
      });
    });
  },
    createAccount: ({commit}, userInfos) =>{
      return new Promise((resolve, reject)=>{
      commit;
      instance.post('users/signup', userInfos)
      .then(function (response){
        commit('SET_STATUS', 'created');
        resolve(response);
      })
      .catch(function(error){
        commit('SET_STATUS', 'error_create');
        reject(error);
      });
    });
  },
    getUserInfos: ({state, commit}) => {
    instance.post('users/' + state.user.user)
      .then(function (response){
        console.log(response);
        commit('USER_INFOS', response.data);
      })
      .catch(function(error){
        console.log(error);
      });
    },
    getPublications: ({commit}) => {
      instance.get('publications/all')
        .then(function (response){
          commit('PUBLICATIONS_LIST', response.data);
        })
        .catch(function(response){
          console.log(response);
        });
    },
    addPublication ({ commit }, publicationBody) {
      instance.post('publications/add',publicationBody)
        .then(response => {
          commit('ADD_PUBLICATION', response.post)
        })
    }
  }
})
export default store;