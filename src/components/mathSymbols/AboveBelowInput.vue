<!-- Opędzi
  - calka oznaczona
  - suma itp.
  - ulamek
 -->
<template>
  <div class="symbol">
    <equation-input v-if="component.upEqObject"
                    :equationObject="component.upEqObject" 
                    v-on:childUpdate="updateUpInput"
                    v-on:deleted="componentDeleted(id)">

    </equation-input>
    {{symbol}}
    <equation-input v-if="component.downEqObject"
                    :equationObject="component.downEqObject" 
                    v-on:childUpdate="updateDownInput"
                    v-on:deleted="componentDeleted(id)">

    </equation-input>
  </div>
</template>

<script>
export default {
  name: "AboveBelowInput",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    symbol: String,
    component: Object
  },

  methods: {
    toLatex() {
      // TODO - implement
      // parse symbol to latex
      // call to latex on both equation inputs
      // glue it all together
    },

    updateUpInput(childObject) {
      let updatedObject = this.component;
      updatedObject.upEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    updateDownInput(childObject) {
      let updatedObject = this.component;
      updatedObject.downEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    childUpdate(updatedObject) {
      this.$emit("childUpdate", updatedObject);
    }
  }
};

function mapSymbolToLatex(symbol) {
  // TODO - use some const map
  return "int_";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}
</style>
