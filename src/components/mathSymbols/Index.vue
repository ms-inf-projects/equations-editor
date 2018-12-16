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
import stylingMixins from "../../mixins/stylingMixins.js";

export default {
  name: "Index",
  mixins: [stylingMixins.positioningMixin],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object
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
        top: 0 + "%"
      };
    }
  },
  methods: {
    reScale() {
      let downInputHeight = 0;

      this.component.baseSize = this.component.symbol.baseSize;

      let extraHeight = 0;
      let extraWidth = 0;

      if (this.component.mainEqObject) {
        this.component.baseSize = {
          height: this.component.mainEqObject.height,
          width: this.component.mainEqObject.width
        };
      }

      if (this.component.upEqObject) {
        extraHeight += this.component.upEqObject.height / 2;
        extraWidth = this.component.upEqObject.width;
      }

      if (this.component.downEqObject) {
        downInputHeight = this.component.downEqObject.height;
        extraHeight += downInputHeight / 2;

        if (this.component.downEqObject.width > extraWidth)
          extraWidth = this.component.downEqObject.width;
      }

      this.component.height = this.component.baseSize.height + extraHeight;
      this.component.width = this.component.baseSize.width + extraWidth;
      this.component.innerBaseLine =
        downInputHeight / 2 + this.component.baseSize.height / 2;

      this.$emit("modified");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
