<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div
    class="symbol"
    ref="rootRef"
    :style="{left: positionX + 'px', width: component.width+'px', height: component.height+'px', 
    bottom: basePosition+'px'}"
  >
    <div class="input-container">
      <equation-input
        v-if="component.upEqObject"
        class="nested-input"
        :equationObject="component.upEqObject"
        ref="upInput"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <div class="symbol-container" :style="{bottom: symbolPosition + 'px'}">
      <div v-if="component.symbol.imagePath" class="img-wrap">
        <img :src="component.symbol.imagePath" class="symbol-img">
      </div>
      <span v-else>{{ component.symbol.text }}</span>
    </div>

    <div class="input-container" style="bottom: 0%">
      <equation-input
        v-if="component.downEqObject"
        class="nested-input"
        :equationObject="component.downEqObject"
        ref="downInput"
        v-on:modified="reScale"
      ></equation-input>
    </div>
  </div>
</template>

<script>
import sizeMixins from "../../mixins/sizeMixins.js";
import innerBaseLineMixin from "../../mixins/innerBaseLineMixin.js";

export default {
  name: "AboveBelowInput",
  mixins: [sizeMixins.componentSizingMixin],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object,
    inputBaseLine: 0,
    positionX: 0
  },
  computed: {
    downInputPosition() {},
    upInputPosition() {},
    symbolPosition() {
      return this.component.downEqObject.height;
    },
    basePosition() {
      console.log(this.inputBaseLine - this.component.baseSize.height / 2);
      return (
        this.inputBaseLine -
        this.component.baseSize.height / 2 -
        this.component.downEqObject.height
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  position: absolute;
}

.input-container {
  position: absolute;
}

.symbol-container {
  position: absolute;
}

/* .img-wrap {
} */

.symbol-img {
  display: block;
}

.nested-input {
  font-size: 0.8em;
}
</style>
