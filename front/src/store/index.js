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
    },
    publications:{
      id:'',
      userId:'',
      content:''
    },
    comments:{
      id:'',
      userId:'',
      content:''
    }
  },
  mutations: {
    setStatus: function(state, status){
      state.status = status;
    },
    logUser: function(state, user){
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos: function (state,userInfos){
      state.user = userInfos;
    },
    publications: function(state, publications){
      state.publications = publications;
    },
    comments: function(state, comments){
      state.comments = comments;
    },
    logout: function (state){
      state.user = {
        userId: -1,
        token:'',
      }
      localStorage.removeItem('user');
    }
  },
  actions: {
    login: ({commit}, userInfos) =>{
      commit('setStatus', 'loading');
      return new Promise((resolve, reject)=>{
      instance.post('users/login', userInfos)
      .then(function (response){
        commit('setStatus', '');
        commit('logUser', response.data);
        resolve(response);
      })
      .catch(function(error){
        commit('setStatus', 'error_login');
        reject(error);
      });
    });
  },
    createAccount: ({commit}, userInfos) =>{
      return new Promise((resolve, reject)=>{
      commit;
      instance.post('users/signup', userInfos)
      .then(function (response){
        commit('setStatus', 'created');
        resolve(response);
      })
      .catch(function(error){
        commit('setStatus', 'error_create');
        reject(error);
      });
    });
  },
    getUserInfos: ({state, commit}) => {
    instance.post('users/' + state.user.user)
      .then(function (response){
        commit('userInfos', response.data);
      })
      .catch(function(error){
        console.log(error);
      });
    },
    getPublications: ({commit}) => {
      instance.get('publications/all')
        .then(function (response){
          console.log(response.data);
          commit('publications', response.data);
        })
        .catch(function(response){
          console.log(response);
        });
    },
    getComments: ({state, commit}) => {
      instance.get('publications/'+ state.publications.id +'comments/')
        .then(function (response){
          console.log(response.data);
          commit('comments', response.data);
        })
        .catch(function(response){
          console.log(response);
        });
    },

  }
})
export default store;