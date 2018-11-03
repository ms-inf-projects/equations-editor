<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div class="symbol">
    <equation-input v-if="component.upEqObject"
                    :equationObject="component.upEqObject">
    </equation-input>
    {{symbol}}
    <equation-input v-if="component.downEqObject"
                    :equationObject="component.downEqObject" >
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
