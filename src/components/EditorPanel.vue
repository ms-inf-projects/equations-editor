<template>
  <div class="">
    <div class="section-header">editor</div>
    <b-row>
      <!-- TODO - try to refactor: foreach - list of symbols and methods -->
      <!-- TODO - correct display in buttons -->
      <math-symbol-button mathSymbol="&int;" v-on:buttonClick="insertIntegral()"></math-symbol-button>
      <math-symbol-button mathSymbol="&sum;" v-on:buttonClick="insertSum()"></math-symbol-button>
    </b-row>
    <div class="editor" v-on:click="finishActivation()">
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

export default {
  name: "EditorPanel",
  components: {
    MathSymbolButton,
    EquationInput,
    Integral,
    Sum
  },
  data() {
    return {};
  },
  methods: {
    finishActivation() {
      this.$store.dispatch("finishActivation");
    },

    // TODO - when no active input the error occure
    // TODO - try to make inserting methods more DRY or consider moving them to separate file
    insertIntegral() {
      console.log("Inserting integral");
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        var ComponentClass = Vue.extend(Integral);
        var instance = new ComponentClass({ parent: activeInput });
        instance.$mount(); // pass nothing
        activeInput.$refs.equationInput.appendChild(instance.$el);
      }
    },
    insertSum() {
      if (activeInput) {
        let activeInput = this.$store.getters.getActiveInput;
        var ComponentClass = Vue.extend(Sum);
        var instance = new ComponentClass({ parent: activeInput });
        instance.$mount(); // pass nothing
        activeInput.$refs.equationInput.appendChild(instance.$el);
      }
    }
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
