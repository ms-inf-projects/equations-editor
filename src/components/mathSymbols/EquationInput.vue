<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <span v-if="isEmpty">[_]</span>
    <div class="component-container" v-for="(elem, index) in embededSymbols.symbols" :key="index">
      <above-below-input v-if="elem.type == types.aboveBelow" 
        :symbol="elem.symbol"
        :id="elem.id"
        v-on:deleted="componentDeleted(id)"
        v-on:parseToLatex="saveLatex(id, latexData)">
      </above-below-input>
      <literal v-if="elem.type == types.literal" 
        :symbol="elem.symbol"
        :id="elem.id"
        v-on:deleted="componentDeleted(id)"
        v-on:parseToLatex="saveLatex(id, latexData)">
      </literal>
    </div>
  </div>
</template>

<script>
import mathComponents from "../../modules/mathComponents.js";
import AboveBelowInput from "./AboveBelowInput.vue";
import Literal from "./Literal.vue";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Literal
  },
  data() {
    return {
      // TODO - consider storing different array for different types
      embededSymbols: {
        symbols: []
      },
      types: mathComponents.symbolTypes
    };
  },
  props: {},
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };
      console.log(this.$refs);

      this.$store.dispatch("activateEquationInput", payload);
    },

    componentDeleted(id) {
      // TODO - remove component from the array
    },

    saveLatex(id, latexData) {
      this.embededSymbols.filter(x => x.id == id)[0].latexData = latexData;
    },

    toLatex() {
      // TODO - call toLatex on all of the components
      // TODO -call toLatex based on type?
      // glue the result
    },

    addEmbededComponent(componentData) {
      debugger;

      if (
        !this.embededSymbols.symbols ||
        this.embededSymbols.symbols.length == 0
      ) {
        componentData.id = 1;
        this.$set(this.embededSymbols, "symbols", [componentData]);
      } else {
        let lastIndex = this.embededSymbols.symbols[
          this.embededSymbols.symbols.length - 1
        ].id;
        componentData.id = lastIndex + 1;
        this.embededSymbols.symbols.push(componentData);
        this.$set(this.embededSymbols, "symbols", this.embededSymbols.symbols);
      }
    }

    // TODO - not sure how to remove component when it is deleted
    // addSymbol(newSymbol) {
    //   this.embededSymbols.push(newSymbol);
    // }
  },

  computed: {
    isEmpty() {
      if (
        !this.embededSymbols.symbols ||
        this.embededSymbols.symbols.length == 0
      ) {
        return true;
      }

      return false;
    }
  },

  updated() {
    console.log("updated");
    // this.embededSymbols = this.$refs.equationInput.$children;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equation-input {
  font-size: 0.8em;
  line-height: normal;
  /* display: inline-block;
  vertical-align: top; */
}

.component-container {
  display: inline-block;
}
</style>
