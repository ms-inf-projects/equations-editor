<!-- Handles
  - single letters
  - single numbers
  - operators
  - special symbols
 -->
<template>
  <div class="basic component" :style="position()">
    <canvas ref="textCanvas" class="textCanvas"></canvas>
    <img ref="textImage" :style="imgStyling">
  </div>
</template>

<script>
import stylingMixins from "../../mixins/stylingMixins.js";
import displayMixins from "../../mixins/displayMixins.js";

export default {
  name: "Basic",
  mixins: [stylingMixins.positioningMixin, displayMixins.textToImageMixin],
  components: {},
  props: {
    component: Object
  },
  computed: {
    basePosition() {
      return this.inputBaseLine - this.component.baseSize.height / 2;
    },
    imgStyling() {
      return {
        position: "absolute",
        maxWidth: this.component.width + "px",
        maxHeight: this.component.height + "px",
        left: 0 + "px",
        bottom: 0 + "%"
      };
    }
  },

  mounted() {
    this.component.innerBaseLine = this.component.height / 2;
    this.$emit("modified");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic {
  display: inline-block;
  text-align: center;
}
</style>
