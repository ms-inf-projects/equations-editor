<!-- Handles
  - root
 -->
<template>
  <div class="symbol component" ref="root" :style="position()">
    <div class="input-container" style="top: 0%">
      <equation-input
        :equationObject="component.degreeEqObject"
        class="degree"
        v-on:modified="reScale"
      ></equation-input>
    </div>

    <img
      :src="component.symbol.imagePath"
      class="root-img"
      v-bind:style="{height: component.baseEqObject.height+4*component.sizePercentage +'px', width: component.baseSize.width+'px', left: baseXPosition+'px'}"
    >

    <div class="input-container" :style="{top: 0+'%', left: baseInputXPosition+'px'}">
      <equation-input
        :equationObject="component.baseEqObject"
        class="base"
        v-on:modified="reScale"
        v-bind:style="{borderTop: borderWidth + 'px solid #000'}"
      ></equation-input>
    </div>
  </div>
</template>
 
<script>
import { EventBus } from "../../event-bus.js";
import stylingMixins from "../../mixins/stylingMixins.js";

export default {
  name: "Root",
  mixins: [stylingMixins.positioningMixin],
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  data() {
    return {};
  },
  props: {
    component: Object
  },
  computed: {
    borderWidth() {
      return 1;
    },
    degreeInputYPosition() {},
    baseInputXPosition() {
      return (
        this.component.degreeEqObject.width + this.component.baseSize.width
      );
    },
    basePosition() {
      return this.inputBaseLine - this.component.baseSize.height / 2;
    },
    baseXPosition() {
      return this.component.degreeEqObject.width;
    }
  },
  methods: {
    reScale() {
      // TODO - handle degree input if nessecery

      let newHeight =
        this.component.symbol.baseSize.height * this.component.sizePercentage;

      let baseInputWidth = 0;
      let degreeInputWidth = 0;

      if (this.component.baseEqObject) {
        newHeight =
          this.component.baseEqObject.height +
          5 * this.component.sizePercentage;

        baseInputWidth = this.component.baseEqObject.width;
      }

      if (this.component.degreeEqObject) {
        degreeInputWidth = this.component.degreeEqObject.width;
      }

      this.component.height = newHeight;
      this.component.width =
        baseInputWidth + degreeInputWidth + this.component.baseSize.width;

      this.$emit("modified");
    }
  },

  created() {
    EventBus.$on("componentInserted", this.reScale);
  },
  beforeDestroy() {
    EventBus.$off("componentInserted", this.reScale);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}

.root-img {
  position: absolute;
  top: 0%;
  left: 0%;
}

.root {
  display: inline-block;
  vertical-align: middle;
}

.base {
  display: inline-block;
  vertical-align: top;
}

.degree {
  display: inline-block;
  vertical-align: top;
}
</style>
