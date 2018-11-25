<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div class="symbol">
    <equation-input v-if="component.upEqObject"
                    class="nested-input"
                    :equationObject="component.upEqObject">
    </equation-input>

    <div v-if="component.symbol.imagePath" class="img-wrap">
      <img 
          :src="component.symbol.imagePath"
          class="symbol-img"
      />
    </div>
    <span v-else>
      {{ component.symbol.text }}
    </span>

    <equation-input v-if="component.downEqObject"
                    class="nested-input"
                    :equationObject="component.downEqObject">
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

.img-wrap {
}

.symbol-img {
  display: block;
}

.nested-input {
  font-size: 0.75em;
}
</style>
