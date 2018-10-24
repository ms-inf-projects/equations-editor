import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TODO - decide on approach
    // searching the recursive object 
    // handling with array and parent children references
    equationObject: Object,
    components: Array,
    lastUUID: 1,

    activeInputId: 0,

    equationInputs: Array,
    /*
      equationInput {
        parent: equationInput,
        children: []equationInput,
        id: int,
        
      }
    */

    activeEquationInput: Object,
    activationSet: false,
  },

  getters: {
    getActiveInput: state => {
      return state.activeEquationInput;
    },

    getEquationObject: state => {
      return state.equationObject;
    },

    getUUID: state => {
      state.lastUUID++;
      return state.lastUUID;
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