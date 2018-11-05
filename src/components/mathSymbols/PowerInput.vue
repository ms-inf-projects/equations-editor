<!-- Handles
  - x to power
 -->
<template>
  <div class="">
    <!-- TODO - style -->
    <equation-input ref="base"></equation-input>
    <equation-input ref="index"></equation-input>
  </div>
</template>

<script>
export default {
  name: "AboveBelowInput",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    symbol: String
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 5px;
  display: inline-block;
}
</style>
