<template>
  <div class="symbol">
    Suma
    <sup><equation-input></equation-input></sup>
    <sub><equation-input></equation-input></sub>
  </div>
</template>

<script>
// import EquationInput from "./EquationInput.vue";

export default {
  name: "Sum",
  components: {
    // EquationInput
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
