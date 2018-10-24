<!-- Opędzi
  - calka oznaczona
  - suma itp.
  - ulamek
 -->
<template>
  <div class="symbol">
    <equation-input :equationObject="upEqObject" ></equation-input>
    {{symbol}}
    <equation-input :equationObject="downEqObject" ></equation-input>
  </div>
</template>

<script>
// import EquationInput from "./EquationInput.vue";

export default {
  name: "AboveBelowInput",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    symbol: String,
    upEqObject: Object,
    downEqObject: Object
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

function mapSymbolToLatex(symbol) {
  // TODO - use some const map
  return "int_";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}
</style>
