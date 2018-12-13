<!-- Handels
  - fraction
 -->
<template>
  <div class="symbol component" :style="position()">
    <div class="input-container" :style="upInputPosition">
      <equation-input
        v-if="component.upEqObject"
        class="nested-input"
        :equationObject="component.upEqObject"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <img class="fraction-img" :src="component.symbol.imagePath" :style="imgStyling">

    <div class="input-container" :style="downInputPosition">
      <equation-input
        v-if="component.downEqObject"
        class="nested-input"
        :equationObject="component.downEqObject"
        v-on:modified="reScale"
      ></equation-input>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
import sizeMixins from "../../mixins/sizeMixins.js";
import innerBaseLineMixin from "../../mixins/innerBaseLineMixin.js";
import stylingMixins from "../../mixins/stylingMixins.js";

export default {
  name: "Fraction",
  mixins: [sizeMixins.componentSizingMixin, stylingMixins.positioningMixin],
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
        width: this.component.width + "px",
        height: this.component.baseSize.height + "px",
        left: 0 + "%",
        bottom: this.component.downEqObject.height + "px"
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  display: inline-block;
  vertical-align: middle;
  margin: 1px;
}

.img-wrapper {
  height: 2px;
}

.fraction-img {
  position: absolute;
  padding-bottom: 1px;
  padding-top: 1px;
}

.nested-input {
  font-size: 0.75em;
}
</style>
