<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <!-- <span v-if="isEmpty">[_]</span> -->
  []
  <!-- {{this.embededSymbols.length}} -->
  </div>
</template>

<script>
export default {
  name: "EquationInput",
  components: {},
  data() {
    return {
      isMounted: false,
      parent: Object,
      embededSymbols: new Array(10)
    };
  },
  props: {},
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };
      console.log(this.$refs);

      this.$store.dispatch("activateEquationInput", payload);
    }

    // TODO - not sure how to remove component when it is deleted
    // addSymbol(newSymbol) {
    //   this.embededSymbols.push(newSymbol);
    // }
  },
  computed: {
    isEmpty: function() {
      return this.embededSymbols.length;
      // return true;
    }
  },

  mounted() {
    this.embededSymbols = this.$refs.equationInput.$children;
  },

  updated() {
    console.log("updated");
    this.embededSymbols = this.$refs.equationInput.$children;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
