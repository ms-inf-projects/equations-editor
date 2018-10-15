<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    [_]
  </div>
</template>

<script>
export default {
  name: "EquationInput",
  components: {},
  data() {
    return {};
  },
  props: {},
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };

      this.$store.dispatch("activateEquationInput", payload);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
