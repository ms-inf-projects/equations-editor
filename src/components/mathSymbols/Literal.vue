<!-- Handles
  - single letters
  - single numbers
 -->
<template>
  <div class="literal">
    <span>{{data}}</span>
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
    data: String
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
  vertical-align: top;
  height: 100%;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* height: 30%; */
  /* width: 50%; */
  /* margin: -15% 0 0 -25%; */
}
</style>
