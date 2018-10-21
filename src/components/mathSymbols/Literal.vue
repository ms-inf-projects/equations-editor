<!-- Handles
  - single letters
  - single numbers
 -->
<template>
  <div class="literal">
    <span class="literal-data">{{symbol}}</span>
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.literal {
  display: inline-block;
  text-align: center;
  vertical-align: auto;
  /* vertical-align: 110%; */
  /* height: 100px; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* height: 30%; */
  /* width: 50%; */
  /* margin: -15% 0 0 -25%; */
}

.literal-data {
  vertical-align: middle;
}
</style>
