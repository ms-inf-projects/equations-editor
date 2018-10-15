<template>
  <div class="symbol">
    <equation-input></equation-input>
    &int;
    <equation-input></equation-input>
  </div>
</template>

<script>
import EquationInput from "./EquationInput.vue";

export default {
  name: "Integral",
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
