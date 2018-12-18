<!-- Handles
  - brackets
 -->
<template>
  <div class="component" :style="position()">
    <canvas ref="textCanvas" class="textCanvas"></canvas>
    
    <img ref="leftBracketImage" class="absolute-bottom" :style="leftBracketStyle">

    <div class="input-container" :style="mainInputPosition">
      <equation-input
        v-if="component.mainEqObject"
        class="nested-input"
        :equationObject="component.mainEqObject"
        v-on:modified="reScale"
        v-on:baseLineRecalculation="updateMainInputBaseLine"
      ></equation-input>
    </div>

    <img ref="rightBracketImage" class="absolute-bottom" :style="rightBracketStyle">
  </div>
</template>

<script>
import stylingMixins from "../../mixins/stylingMixins.js";
import displayMixins from "../../mixins/displayMixins.js";

export default {
  name: "Brackets",
  mixins: [stylingMixins.positioningMixin, displayMixins.bracketsToImageMixin],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object
  },
  data() {
    return {
      mainInputBaseLine: this.component.mainEqObject.height / 2
    };
  },
  computed: {
    basePosition() {
      return (
        this.inputBaseLine -
        this.component.baseSize.height / 2 -
        this.mainInputBaseLine
      );
    },
    mainInputPosition() {
      return {
        left: this.component.baseSize.width / 2 + "px",
        bottom: 0 + this.component.baseSize.height / 2 + "px"
      };
    },
    leftBracketStyle() {
      return {
        left: 0 + "%",
        height: this.component.height + "px",
        maxWidth: 25 + "px"
      };
    },
    rightBracketStyle() {
      return {
        right: 0 + "%",
        height: this.component.height + "px",
        maxWidth: 25 + "px"
      };
    }
  },
  methods: {
    reScale() {
      let extraHeight = 0;
      let extraWidth = 0;
      if (this.component.mainEqObject) {
        (extraHeight = this.component.mainEqObject.height),
          (extraWidth = this.component.mainEqObject.width);
      }

      this.component.height = this.component.baseSize.height + extraHeight;
      this.component.width = this.component.baseSize.width + extraWidth;

      if (this.component.mainEqObject.components.length > 0) {
        this.component.innerBaseLine =
          this.mainInputBaseLine - this.component.baseSize.height;
      } else {
        this.component.innerBaseLine = this.component.height / 2;
      }

      this.$emit("modified");
    },

    updateMainInputBaseLine(baseLine) {
      this.mainInputBaseLine = baseLine;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bracket-image {
  position: absolute;
}
</style>
