<!-- Opędzi
  - pierwiastek
 -->
<template>
  <div class="symbol">
    <equation-input :equationObject="component.degreeEqObject" 
                    v-on:childUpdate="updateDegreeInput"
                    v-on:deleted="componentDeleted(id)"
                    class="degree">

    </equation-input>
    <div class="root">&#8730;
      <equation-input :equationObject="component.baseEqObject" 
                      v-on:childUpdate="updateBaseInput"
                      v-on:deleted="componentDeleted(id)"
                      class="up-border base">

      </equation-input>
    </div>
  </div>
</template>

<script>
// import EquationInput from "./EquationInput.vue";

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

    updateDegreeInput(childObject) {
      let updatedObject = this.component;
      updatedObject.degreeEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    updateBaseInput(childObject) {
      let updatedObject = this.component;
      updatedObject.baseEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    childUpdate(updatedObject) {
      console.log("Above and belowe event");
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

.root {
  display: inline-block;
  vertical-align: middle;
}

.base {
  display: inline-block;
  vertical-align: top;
  border-top: 1px solid #000;
}

.degree {
  display: inline-block;
  height: 50%;
  vertical-align: top;
}
</style>
