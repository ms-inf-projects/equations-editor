<!-- Handels
  - integral
  - sum
  - product
 -->
<template>
  <div class="symbol component" :style="position()">
    <div class="input-container" :style="upInputPosition">
      <equation-input
        v-if="component.upEqObject"
        class="nested-input"
        :equationObject="component.upEqObject"
        ref="upInput"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <div class="symbol-container" :style="{bottom: symbolPosition + 'px'}">
      <canvas ref="textCanvas" class="textCanvas"></canvas>
      <img ref="textImage" class="absolute-bottom" :style="imgStyling">
    </div>

    <div class="input-container" :style="downInputPosition">
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
import stylingMixins from "../../mixins/stylingMixins.js";
import displayMixins from "../../mixins/displayMixins.js";

export default {
  name: "AboveBelowInput",
  mixins: [
    sizeMixins.componentSizingMixin,
    stylingMixins.positioningMixin,
    displayMixins.textToImageMixin
  ],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object
  },
  computed: {
    downInputPosition() {
      return {
        left:
          this.component.width / 2 -
          this.component.downEqObject.width / 2 +
          "px",
        bottom: 0 + "%"
      };
    },
    upInputPosition() {
      return {
        left:
          this.component.width / 2 - this.component.upEqObject.width / 2 + "px",
        top: 0 + "%"
      };
    },
    symbolPosition() {
      return this.component.downEqObject.height;
    },
    basePosition() {
      return (
        this.inputBaseLine -
        this.component.baseSize.height / 2 -
        this.component.downEqObject.height
      );
    },
    imgStyling() {
      return {
        width: this.component.baseSize.width + "px",
        height: this.component.baseSize.height + "px",
        left:
          this.component.width / 2 - this.component.baseSize.width / 2 + "px"
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
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
