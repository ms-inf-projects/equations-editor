<template>
  <div class>
    <div class="section-header">editor</div>
    <div class="editor" v-on:click="finishActivation()" v-on:keydown="handleKeyboard()">
      <equation-input :equationObject="equationObject" id="mainInput" :rootInput="true"></equation-input>
    </div>
    <b-row class="top-space">
      <b-col>
        <b-button v-on:click="processToLatex()">Process to latex</b-button>
      </b-col>
    </b-row>
    <b-row class="top-space">
      <b-col>
        <div class="latex-display">{{ latexData }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import EquationInput from "./mathSymbols/EquationInput.vue";
import alphanumeric from "../modules/alphanumeric.js";
import mathComponents from "../modules/mathComponents.js";
import symbolsDefinitions from "../modules/symbolsDefinitions.js";
import { EventBus } from "../event-bus";

export default {
  name: "EditorPanel",
  components: {
    EquationInput
  },
  data() {
    return {
      inputTypes: symbolsDefinitions.inputTypes,
      symbolKinds: symbolsDefinitions.symbolKinds,
      equationObject: {},
      latexData: ""
    };
  },

  methods: {
    finishActivation() {
      this.$store.dispatch("finishActivation");
    },

    // TODO - improve keyboard handling
    handleKeyboard(event) {
      if (alphanumeric.isDelete(event.keyCode)) {
        this.removeActiveInput();
        return;
      }

      if (alphanumeric.isBackspace(event.keyCode)) {
        this.removeLastFromActiveInput();
        return;
      }

      if (!alphanumeric.isLiteralSymbol(event.key)) {
        return;
      }

      // TODO - determine if letter or number
      let literalSymbol = {
        inputType: this.inputTypes.basic,
        text: event.key,
        kind: this.symbolKinds.letter
      };

      this.insertMathSymbol(literalSymbol);
    },

    removeActiveInput() {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        activeInput.deleteInput();
      }
    },

    removeLastFromActiveInput() {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        activeInput.removeLast();
      }
    },

    // TODO - when no active input the error occure
    insertMathSymbol(symbol) {
      let activeInput = this.$store.getters.getActiveInput;
      if (activeInput) {
        let sizePercentage = activeInput.equationObject.sizePercentage;
        let uuid = this.$store.getters.getUUID;
        let component = mathComponents.createSymbolComponent(
          symbol,
          uuid,
          sizePercentage
        );

        activeInput.addEmbededComponent(component);
      }
    },

    processToLatex() {
      let output = this.$store.getters.getLatexOutput;
      this.latexData = output;
      console.log(output);
    }
  },

  created() {
    EventBus.$on("mastSymbolButtonClick", symbol =>
      this.insertMathSymbol(symbol)
    );

    let payload = {
      equationObject: mathComponents.initialEquationObject()
    };

    this.$store.dispatch("updateEquationObject", payload);

    this.equationObject = this.$store.getters.getEquationObject;
  },

  mounted() {
    let self = this;
    window.addEventListener("keyup", function(ev) {
      self.handleKeyboard(ev);
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

.latex-display {
  text-align: center;
  border: 1px solid #000;
  min-height: 50px;
  font-size: 1.1em;
}

.top-space {
  margin-top: 10px;
}

#mainInput {
  font-size: 2em;
}
</style>
