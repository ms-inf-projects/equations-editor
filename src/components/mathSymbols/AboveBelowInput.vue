<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div class="symbol">
    <equation-input v-if="component.upEqObject"
                    :equationObject="component.upEqObject" 
                    v-on:childUpdate="updateUpInput">
    </equation-input>
    {{symbol}}
    <equation-input v-if="component.downEqObject"
                    :equationObject="component.downEqObject" 
                    v-on:childUpdate="updateDownInput">
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}
</style>
