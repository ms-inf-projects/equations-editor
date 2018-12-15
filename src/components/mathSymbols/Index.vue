<!-- Handles
  - subscript
  - superscript
  - both at the same time
 -->
<template>
  <div class="component" :style="position()">
    <div class="input-container" :style="upInputPosition">
      <equation-input
        v-if="component.upEqObject"
        class="superscript nested-input"
        :equationObject="component.upEqObject"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <div class="input-container" :style="mainInputPosition">
      <equation-input
        v-if="component.mainEqObject"
        class="nested-input"
        :equationObject="component.mainEqObject"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <div class="input-container" :style="downInputPosition">
      <equation-input
        v-if="component.downEqObject"
        class="subscript nested-input"
        :equationObject="component.downEqObject"
        v-on:modified="reScale"
      ></equation-input>
    </div>
  </div>
</template>

<script>
import sizeMixins from "../../mixins/sizeMixins.js";
import innerBaseLineMixin from "../../mixins/innerBaseLineMixin.js";
import stylingMixins from "../../mixins/stylingMixins.js";

export default {
  name: "Index",
  mixins: [sizeMixins.indexSizingMixin, stylingMixins.positioningMixin],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object,
    inputBaseLine: 0
  },
  computed: {
    downEqObjectHeight() {
      if (this.component.downEqObject)
        return this.component.downEqObject.height;

      return 0;
    },
    basePosition() {
      return (
        this.inputBaseLine -
        this.component.baseSize.height / 2 -
        this.downEqObjectHeight / 2
      );
    },
    mainInputPosition() {
      return {
        left: 0 + "%",
        bottom: this.downEqObjectHeight / 2 + "px"
      };
    },
    downInputPosition() {
      if (!this.component.downEqObject) return 0;
      return {
        left: this.component.baseSize.width + "px",
        bottom: 0 + "px"
      };
    },
    upInputPosition() {
      if (!this.component.upEqObject) return 0;
      return {
        left: this.component.baseSize.width + "px",
        bottom: this.component.height - this.component.upEqObject.height + "px"
      };
    }
  },
  created() {
    console.log(this.component);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
