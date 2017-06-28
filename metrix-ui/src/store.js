import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    department: ''
  },
  mutations: {
    switch_department (state, header) {
      state.department = header
    }
  },
  getters: {
    department: state => {
      console.log(state.department)
      return state.department
    }
  }
})
