import Vue from 'vue'
import Vuex from 'vuex'
import mathComponents from "./modules/mathComponents.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TODO - decide on approach
    // searching the recursive object 
    // handling with array and parent children references
    // propagating events
    equationObject: {
      uuid: 1,
      components: [],
    },
    components: Array,
    lastUUID: 1,

    activeInputId: 0,

    // equationInputs: Array,


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
    },

    getLatexOutput: state => {
      return mathComponents.processToLatex(state.equationObject);
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
    },
    updateEquationObject: (state, equationObject) => {
      state.equationObject = equationObject;
    }
  },

  actions: {
    activateEquationInput: (context, payload) => {
      context.commit('setActiveInput', payload.activatedInput);
    },
    finishActivation: (context) => {
      context.commit('finishActivation')
    },
    updateEquationObject: (context, payload) => {
      context.commit('updateEquationObject', payload.equationObject)
    }
  }
})