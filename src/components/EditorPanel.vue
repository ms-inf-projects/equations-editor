<template>
  <div class="">
    <div class="section-header">editor</div>
    <b-row>
      <!-- TODO - try to refactor: foreach - list of symbols and methods -->
      <!-- TODO - correct display in buttons -->
      <math-symbol-button mathSymbolDisplay="&int;" v-on:buttonClick="insertMathSymbol('\u222B', symbols.aboveBelow)"></math-symbol-button>
      <math-symbol-button mathSymbolDisplay="&sum;" v-on:buttonClick="insertMathSymbol('\u03A3', symbols.aboveBelow)"></math-symbol-button>
    </b-row>
    <div class="editor" v-on:click="finishActivation()" v-on:keydown="handleKeyboard()">
			<equation-input :equationObject="equationObject" 
                      id="mainInput"
                      :rootInput="true"
                      v-on:updateRoot="updateRoot">

      </equation-input>
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
import mathComponents from "../modules/mathComponents.js";

export default {
  name: "EditorPanel",
  components: {
    MathSymbolButton,
    EquationInput,
    AboveBelowInput,
    Literal
  },
  data() {
    return {
      symbols: mathComponents.symbolTypes,
      equationObject: this.$store.getters.getEquationObject
      // eqObj: this.$store.getters.getEquationObject
    };
  },

  // computed: {
  //   equationObjectCmp() {
  //     console.log("Recalculated  ");
  //     let obj = ;
  //     console.log(obj);

  //     if (!this.equationObject.components) {
  //       obj.components = [];
  //     }
  //     console.log(obj);

  //     return this.$store.getters.getEquationObject;
  //   }
  // },

  methods: {
    updateRoot(eqObj) {
      console.log("Updating root");
      console.log(eqObj);
      let payload = {
        equationObject: eqObj
      };

      this.$store.dispatch("updateEquationObject", payload);
      this.equationObject = this.$store.getters.getEquationObject;
    },

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

      this.insertMathSymbol(event.key, this.symbols.literal);
    },

    removeActiveInput() {},

    // TODO - when no active input the error occure
    insertMathSymbol(symbol, type) {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        let uuid = this.$store.getters.getUUID;

        let component = {};

        if (type == this.symbols.aboveBelow) {
          component = {
            type: type,
            uuid: uuid,
            symbol: symbol,
            upEqObject: {
              components: []
            },
            downEqObject: {
              components: []
            }
          };
        }

        activeInput.addEmbededComponent(component);
      }
    },

    insertLiteral() {
      return Vue.extend(Literal);
    },

    insertAboveBelowInput() {
      return Vue.extend(AboveBelowInput);
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

#mainInput {
  font-size: 2em;
}
</style>
