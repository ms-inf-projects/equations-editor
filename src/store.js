import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeEquationInput: Object,
    activationSet: false,
  },

  getters: {
    getActiveInput: state => {
      return state.activeEquationInput;
    }
  },

  mutations: {
    setActiveInput: (state, activatedInput) => {
      if (!state.activationSet) {
        state.activeEquationInput = activatedInput;
        state.activationSet = true;
        console.log("Active Input: " + activatedInput)
      }
    },
    finishActivation: (state) => {
      state.activationSet = false;
    }
  },

  actions: {
    activateEquationInput: (context, payload) => {
      context.commit('setActiveInput', payload.activatedInput);
    },
    finishActivation: (context) => {
      context.commit('finishActivation')
    }
  }
})