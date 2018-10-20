<!-- 
    TODO: consider using litteral for as many cases as you can
    For: +,-,=, 
    Maybe: *, >,<, !, Pi and other consts

-->

<template>
  <div class="literal">
    <span class="literal-data">{{data}}</span>
  </div>
</template>

<script>
import EquationInput from "./EquationInput.vue";

export default {
  name: "MathSymbol",
  components: {
    EquationInput
  },
  props: {
    symbol: String
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
