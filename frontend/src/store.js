import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const initialState = {
  messages: []
}

const mutations = {
  addMessage (state, msg) {
    state.messages.push(msg)
  },
  setMessages (state, messages) {
    state.messages = messages
  }
}

const actions = {
  send ({ commit }, msg) {
    api.post('/messages', {
      text: msg
    }).then((response) => {
      commit('addMessage', response.data)
    })
  },
  fetch ({ commit }) {
    api.get('/messages').then((response) => {
      commit('setMessages', response.data.messages)
    })
  }
}

export default new Vuex.Store({
  state: initialState,
  mutations: mutations,
  actions: actions
})
