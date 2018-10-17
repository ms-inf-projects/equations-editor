<template>
  <div class="">
    <div class="section-header">editor</div>
    <b-row>
      <!-- TODO - try to refactor: foreach - list of symbols and methods -->
      <!-- TODO - correct display in buttons -->
      <math-symbol-button mathSymbolDisplay="&int;" v-on:buttonClick="insertMathSymbol(insertIntegral)"></math-symbol-button>
      <math-symbol-button mathSymbolDisplay="&sum;" v-on:buttonClick="insertMathSymbol(insertSum)"></math-symbol-button>
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
import Integral from "./mathSymbols/Integral.vue";
import Sum from "./mathSymbols/Sum.vue";
import Literal from "./mathSymbols/Literal.vue";
import alphanumeric from "../modules/alphanumeric.js";

export default {
  name: "EditorPanel",
  components: {
    MathSymbolButton,
    EquationInput,
    Integral,
    Sum,
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

      if (!alphanumeric.isLiteralSymbol(event.keyCode)) {
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
    insertMathSymbol(constructor) {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        var ComponentClass = constructor();
        var instance = new ComponentClass({ parent: activeInput });
        instance.$mount(); // pass nothing
        activeInput.$refs.equationInput.appendChild(instance.$el);
        activeInput.updateContainerState();
      }
    },

    insertIntegral() {
      return Vue.extend(Integral);
    },
    insertSum() {
      return Vue.extend(Sum);
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
