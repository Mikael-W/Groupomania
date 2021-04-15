import { createStore } from 'vuex'


const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // use getters to retrieve the access token from vuex 
    // store
    const token = store.getters.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

let user = localStorage.getItem('user');
if (!user) {
  user = {
    userId: -1,
    token: '',
  };
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: "",
    };
  }
}
const store = createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      imageUrl: '',
      bgUrl: '',
    },
    publications: [],
    comments: []
  },
  mutations: {
    SET_STATUS: function (state, status) {
      state.status = status;
      console.log(status);
    },
    LOG_USER: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    USER_INFOS: function (state, userInfos) {
      state.user = userInfos;
    },
    SET_USER: function (state, newInfos) {
      state.userInfos = newInfos;
      console.log(newInfos);
    },
    LOG_OUT: function (state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
    },
    PUBLICATIONS_LIST: function (state, publications) {
      state.publications = publications;
      console.log(publications)
    },
    ADD_PUBLICATION: function (state, newPublication) {
      state.publications.unshift(newPublication);
    },
    UPDATE_PUBLICATION: function (state, modifiedPublication) {
      const publicationIndex = state.publications.findIndex(
        p => p.id === modifiedPublication.id)
      state.publications[publicationIndex] = modifiedPublication
      state.publications = [...state.publications]
      console.log(publicationIndex)
    },
    DELETE_PUBLICATION: function (state, publication) {
      const index = state.publications.findIndex(p => p.id === publication.id && publication.userId === user.id);

      if (index !== -1) {
        state.publications.splice(index, 1);
      }
    },
    COMMENTS_LIST: function (state, comments) {
      state.comments = comments;
      console.log(comments);
    },
    ADD_COMMENT: function (state, newComment) {
      state.comments.unshift(newComment);
    },
    DELETE_COMMENT: function (state, commentId) {
      state.comments.filter(comment => comment.id !== commentId);
    }
  },
  actions: {
    login: ({ commit }, userInfos) => {
      commit('SET_STATUS', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('users/login', userInfos)
          .then(function (response) {
            commit('SET_STATUS', '');
            commit('LOG_USER', response.data);
            resolve(response);
          })
          .catch(function (error) {
            commit('SET_STATUS', 'error_login');
            reject(error);
          });
      });
    },
    createAccount: ({ commit }, userInfos) => {
      return new Promise((resolve, reject) => {
        commit;
        instance.post('users/signup', userInfos)
          .then(function (response) {
            commit('SET_STATUS', 'created');
            resolve(response);
          })
          .catch(function (error) {
            commit('SET_STATUS', 'error_create');
            reject(error);
          });
      });
    },
    getUserInfos: ({ state, commit}) => {
      instance.post(`users/${state.user.user}`)
      //instance.post(`users/${userId ?? state.user.user}`)
        .then(function (response) {
          commit('USER_INFOS', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editUser: ({ state, commit }, file) => {
      instance.put(`users/${state.user.id}`, file, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          console.log(response.data)
          commit('SET_USER', response)
          window.location.reload();
        })
        .catch(error => {
          console.log({ error: error })
        });
    },
    getPublications: ({ commit }) => {
      instance.get('publications/all')
        .then(function (response) {
          console.log(response.data)
          commit('PUBLICATIONS_LIST', response.data);
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    addPublication({ commit }, file) {
      instance.post('publications/add', file, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          console.log(response.data)
          commit('ADD_PUBLICATION', response.data);
          window.location.reload();
        })
        .catch(error => {
          console.log({ error: error })
        })
    },
    UpdatePublication({ commit }, data) {
      instance.put(`publications/${data[1]}`, data[0], { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          console.log(response)
          commit('UPDATE_PUBLICATION', data[0])
        })
        .catch(error => {
          console.log({ error: error })
        })
    },
    deletePublication({ commit }, publication) {
      instance.delete('publications/' + publication.id)
        .then((response) => {
          console.log(response)
          commit('DELETE_PUBLICATION', publication);
          window.location.reload();
        })
        .catch(error => {
          console.log({ error: error })
        })
    },
    getPublicationComments({ commit }, publication) {
      instance.get(`publications/${publication.id}/comments`)
        .then(function (response) {
          commit('COMMENTS_LIST', response.data)
        }).catch(error => {
          console.log({ error: error })
        })
    },
    addComment({ commit }, publication) {
      instance.post(`publications/${publication.id}/comments`, publication)
        .then(function (response) {
          console.log(response)
          commit('ADD_COMMENT', response)
          window.location.reload();
        })
        .catch(error => {
          console.log({ error: error })
        })
    },
    deleteComment({ commit }, publications, comments, commentId) {
      instance.post(`publications/${publications.id}/comments/${comments.id}`)
        .then(() => { commit('DELETE_PUBLICATION', commentId) })
        .catch(error => {
          console.log({ error: error })
        })
    }
  }
})
export default store;