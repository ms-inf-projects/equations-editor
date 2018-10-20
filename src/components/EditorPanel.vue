<template>
  <div class="">
    <div class="section-header">editor</div>
    <b-row>
      <!-- TODO - try to refactor: foreach - list of symbols and methods -->
      <!-- TODO - correct display in buttons -->
      <math-symbol-button mathSymbolDisplay="&int;" v-on:buttonClick="insertMathSymbol('\u222B')"></math-symbol-button>
      <math-symbol-button mathSymbolDisplay="&sum;" v-on:buttonClick="insertMathSymbol('\u03A3')"></math-symbol-button>
    </b-row>
    <div class="editor" v-on:click="finishActivation()" v-on:keydown="handleKeyboard()">
			<equation-input></equation-input>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import MathSymbolButton from "./MathSymbolButton.vue";
import EquationInput from "./mathSymbols/EquationInput.vue";
import AboveBelowInput from "./mathSymbols/AboveBelowInput.vue";
import Literal from "./mathSymbols/Literal.vue";
import alphanumeric from "../modules/alphanumeric.js";

export default {
  name: "EditorPanel",
  components: {
    MathSymbolButton,
    EquationInput,
    AboveBelowInput,
    Literal
  },
  data() {
    return {};
  },
  methods: {
    finishActivation() {
      this.$store.dispatch("finishActivation");
    },
    handleKeyboard(event) {
      if (alphanumeric.isBakcspaceOrDelete(event.keyCode)) {
        // TODO remove active input
        return;
      }

      if (!alphanumeric.isLiteralSymbol(event.key)) {
        return;
      }

      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        var ComponentClass = Vue.extend(Literal);
        var instance = new ComponentClass({
          parent: activeInput,
          propsData: { data: event.key }
        });
        instance.$mount(); // pass nothing
        activeInput.$refs.equationInput.appendChild(instance.$el);
        activeInput.updateContainerState();
      }
    },

    // TODO - when no active input the error occure
    insertMathSymbol(symbol) {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        var ComponentClass = Vue.extend(AboveBelowInput);
        let instance = new ComponentClass({
          parent: activeInput,
          propsData: { symbol: symbol }
        });
        instance.$mount(); // pass nothing
        activeInput.$refs.equationInput.appendChild(instance.$el);
        activeInput.updateContainerState();
      }
    },
    insertLiteral() {
      return Vue.extend(Literal);
    }
  },

  mounted() {
    let self = this;

    window.addEventListener("keyup", function(ev) {
      self.handleKeyboard(ev); // declared in your component methods
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
  border: 1px solid #000;
  min-height: 200px;
}
</style>
