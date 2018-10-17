<!-- Handles
  - potega
 -->
<template>
  <div class="">
    <!-- TODO - style -->
    <equation-input ref="base"></equation-input>
    <equation-input ref="index"></equation-input>
  </div>
</template>

<script>
import EquationInput from "./EquationInput.vue";

export default {
  name: "AboveBelowInput",
  components: {
    EquationInput
  },
  props: {
    symbol: String
  },

  methods: {
    toLatex() {
      // TODO - implement
      // parse symbol to latex
      // call to latex on both equation inputs
      // glue it all together
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 5px;
  display: inline-block;
}
</style>
