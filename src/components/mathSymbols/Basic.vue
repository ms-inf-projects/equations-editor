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
import { EventBus } from "../../event-bus.js";
import stylingMixins from "../../mixins/stylingMixins.js";
import displayMixins from "../../mixins/displayMixins.js";

export default {
  name: "Basic",
  mixins: [stylingMixins.positioningMixin, displayMixins.textToImageMixin],
  components: {},
  props: {
    component: Object,
    inputBaseLine: 0
  },
  computed: {
    basePosition() {
      return this.inputBaseLine - this.component.baseSize.height / 2;
    },
    imgStyling() {
      return {
        position: "absolute",
        width: this.component.width + "px",
        height: this.component.height + "px",
        left: 0 + "px"
      };
    }
  },

  mounted() {
    EventBus.$emit("componentInserted");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic {
  display: inline-block;
  text-align: center;
}

/* TODO - different font for operators */
.operator {
}
</style>
