import Vue from 'vue';
import Vuex from 'vuex';

import authClient from './request/auth';
import client from './request/client';
import config from './config';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearUserData(state) {
      state.idToken = null;
      state.userId = null;
      state.user = null;
    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearUserData');
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, userData) {
      authClient.post('/signupNewUser?key=' + config.apiKey, {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);          
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId', res.data.localId);
          localStorage.setItem('expirationDate', expirationDate);
          dispatch('storeUser', userData);
          router.replace('/dashboard');
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    signin({ commit, dispatch }, userData) {
      authClient.post('/verifyPassword?key=' + config.apiKey, {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);          
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId', res.data.localId);
          localStorage.setItem('expirationDate', expirationDate);
          router.replace('/dashboard');
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(error => console.log(error))
    },
    signout({ commit }) {
      commit('clearUserData');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      router.replace('/');
    },
    trySignIn({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId');
      commit('authUser', {token: token, userId: userId});
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }

      client.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return
      }

      client.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key]
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit('storeUser', users[0]);
        })
        .catch(error => console.log(error))      
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
});