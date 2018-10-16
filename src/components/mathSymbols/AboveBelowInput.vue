<!-- Opędzi
  - calka oznaczona
  - suma
  - ulamek

 -->
<template>
  <div class="symbol">
    <equation-input ref="upInput"></equation-input>
    {{symbol}}
    <equation-input ref="downInput"></equation-input>
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
