<template>
  <div class="symbol">
    <div>
      <equation-input></equation-input>
    </div>
    &int;
    <div>
      <equation-input></equation-input>
    </div>
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
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}
</style>
