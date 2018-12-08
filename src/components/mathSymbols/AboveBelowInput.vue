<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div
    class="symbol"
    ref="rootRef"
    :style="{left: positionX + 'px', width: component.width+'px', height: component.height+'px'}"
  >
    <!-- <div :style="{left: 'calc(0%+'+ positionLeft + 'px'}"></div> -->
    <equation-input
      v-if="component.upEqObject"
      class="nested-input"
      :equationObject="component.upEqObject"
      ref="upInput"
    ></equation-input>

    <div>
      <div v-if="component.symbol.imagePath" class="img-wrap">
        <img :src="component.symbol.imagePath" class="symbol-img">
      </div>
      <span v-else>{{ component.symbol.text }}</span>
    </div>

    <equation-input
      v-if="component.downEqObject"
      class="nested-input"
      :equationObject="component.downEqObject"
      ref="downInput"
    ></equation-input>
  </div>
</template>

<script>
import sizeMixins from "../../mixins/sizeMixins.js";
import innerBaseLineMixin from "../../mixins/innerBaseLineMixin.js";

export default {
  name: "AboveBelowInput",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object,
    positionX: 0
  },
  mixins: [sizeMixins.componentSizeMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  position: absolute;
  /* bottom: 0%; */

  /* display: inline-block; */
  /* vertical-align: middle; */

  bottom: 50%;
}

/* .img-wrap {
} */

.symbol-img {
  display: block;
}

.nested-input {
  font-size: 0.75em;
}
</style>
