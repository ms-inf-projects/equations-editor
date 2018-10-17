<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <span v-if="isEmpty">[_]</span>
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
      isEmpty: true,
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
    },

    updateContainerState() {
      console.log(this);
      if (this.$refs.equationInput.children.length > 0) this.isEmpty = false;
      else this.isEmpty = true;
    },

    toLatex() {
      // TODO - call toLatex on all of the components
      // glue the result
    }

    // TODO - not sure how to remove component when it is deleted
    // addSymbol(newSymbol) {
    //   this.embededSymbols.push(newSymbol);
    // }
  },
  computed: {
    // isEmpty: function() {
    //   return this.embededSymbols.length;
    //   // return true;
    // }
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
.equation-input {
  /* display: inline-block;
  vertical-align: top; */
}
</style>
