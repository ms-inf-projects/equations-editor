<!-- Handles
  - single letters
  - single numbers
  - operators
  - special symbols
 -->
<template>
  <div class="basic component" :style="position()">
    <span class="basic-data" :class="component.symbol.kind">{{component.symbol.text}}</span>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
import stylingMixins from "../../mixins/stylingMixins.js";

export default {
  name: "Basic",
  mixins: [stylingMixins.positioningMixin],
  components: {},
  props: {
    component: Object
  },
  computed: {
    basePosition() {
      console.log(this.inputBaseLine - this.component.baseSize.height / 2);
      return this.inputBaseLine - this.component.baseSize.height / 2;
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
  /* vertical-align: 110%; */
  /* height: 100px; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* height: 30%; */
  /* width: 50%; */
  /* margin: -15% 0 0 -25%; */
}

/* TODO - different font for operators */
.operator {
  font-size: 0.7em;
}
</style>
