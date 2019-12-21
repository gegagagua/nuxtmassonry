import Vuex from 'vuex'
import API from '~/api'

const createStore = () => {
  return new Vuex.Store({
    state: {
      about: [],
      contact: {
        telephone: '',
        email: ''
      },
      gallery: []
    },
    mutations: {
      setAbout: (state, about) => {
        state.about = about
      },
      setContact: (state, contact) => {
        state.contact = contact
      },
      setGallery: (state, gallery) => {
        state.gallery = gallery
      }
    },
    actions: {
      async getAbout ({ commit }) {
        await API.getBiography().then((response) => {
          commit('setAbout', response.data)
        })
      },
      async getContactData ({ commit }) {
        await API.getAbout().then((response) => {
          commit('setContact', response.data)
        })
      },
      async getGallery ({ commit }) {
        await API.getGallery().then((response) => {
          commit('setGallery', response.data)
        })
      },
      async nuxtServerInit ({ commit }) {
        await API.getBiography().then((response) => {
          commit('setAbout', response.data)
        })
        await API.getAbout().then((response) => {
          commit('setContact', response.data)
        })
        await API.getGallery().then((response) => {
          commit('setGallery', response.data)
        })
      }
    }
  })
}

export default createStore
