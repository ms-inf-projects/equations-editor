<!-- Handles
  - single letters
  - single numbers
 -->
<template>
  <div class="literal">
    {{data}}
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

}
</style>
