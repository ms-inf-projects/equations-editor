<template>
  <div
    class="equation-input"
    v-on:click="activateInput()"
    ref="equationInput"
    :style="{height: equationObject.height+'px', width: equationObject.width+'px'}"
  >
    <span v-if="!equationObject.components"></span>
    <img
      v-if="equationObject.components && equationObject.components.length==0"
      src="../../assets/empty_input_img.png"
      class="empty-input-img"
      :style="{height: equationObject.height+'px', width: equationObject.width+'px'}"
    >
    <div
      class="component-container"
      v-for="(elem, index) in equationObject.components"
      :key="index"
    >
      <above-below-input
        v-if="elem.symbol.inputType == inputTypes.aboveBelow"
        :component="elem"
        :positionX="getPositionX(index)"
        v-on:modified="reScaleInput"
        :inputBaseLine="inputBaseLine"
      ></above-below-input>

      <index
        v-if="elem.symbol.inputType == inputTypes.index"
        :component="elem"
        :positionX="getPositionX(index)"
        v-on:modified="reScaleInput"
        :inputBaseLine="inputBaseLine"
      ></index>

      <fraction
        v-if="elem.symbol.inputType == inputTypes.fraction"
        :component="elem"
        :positionX="getPositionX(index)"
        v-on:modified="reScaleInput"
        :inputBaseLine="inputBaseLine"
      ></fraction>

      <basic
        v-if="elem.symbol.inputType == inputTypes.basic"
        :component="elem"
        :positionX="getPositionX(index)"
        v-on:modified="reScaleInput"
        :inputBaseLine="inputBaseLine"
      ></basic>

      <root
        v-if="elem.symbol.inputType == inputTypes.root"
        :component="elem"
        :positionX="getPositionX(index)"
        v-on:modified="reScaleInput"
        :inputBaseLine="inputBaseLine"
      ></root>
    </div>
  </div>
</template>

<script>
import symbolsDefinitions from "../../modules/symbolsDefinitions.js";
import AboveBelowInput from "./AboveBelowInput.vue";
import Basic from "./Basic.vue";
import Root from "./Root.vue";
import Fraction from "./Fraction.vue";
import Index from "./Index.vue";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Root,
    Basic,
    Fraction,
    Index
  },
  data() {
    return {
      inputTypes: symbolsDefinitions.inputTypes
    };
  },
  props: {
    equationObject: Object,
    rootInput: false
  },
  computed: {
    inputBaseLine() {
      let maxHeightDown = this.maxHeightDown();
      let maxSymbolHeight = this.maxSymbolHeight();
      console.log("input base: " + maxHeightDown + maxSymbolHeight / 2);
      return maxHeightDown + maxSymbolHeight / 2;
    }
  },
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };

      this.$store.dispatch("activateEquationInput", payload);
    },

    getPositionX(index) {
      let positionX = this.equationObject.components
        .slice(0, index)
        .reduce((c1, c2) => c1 + c2.width, 0);

      return positionX;
    },

    maxHeightDown() {
      return Math.max.apply(
        Math,
        this.equationObject.components.map(
          c => c.innerBaseLine - c.baseSize.height / 2
        )
      );
    },

    maxSymbolHeight() {
      return Math.max.apply(
        Math,
        this.equationObject.components.map(c => c.baseSize.height)
      );
    },

    maxHeightUp() {
      return Math.max.apply(
        Math,
        this.equationObject.components.map(
          c => c.height - c.innerBaseLine - c.baseSize.height / 2
        )
      );
    },

    addEmbededComponent(componentData) {
      if (
        !this.equationObject.components ||
        this.equationObject.components.length == 0
      ) {
        componentData.id = 1;
        this.equationObject.components = [componentData];
      } else {
        let lastIndex = this.equationObject.components[
          this.equationObject.components.length - 1
        ].id;
        componentData.id = lastIndex + 1;
        this.equationObject.components.push(componentData);
      }

      this.reScaleInput();
    },

    reScaleInput() {
      let newHeight = 0;
      let newWidth = 0;

      if (this.equationObject.components.length > 0) {
        newWidth = this.equationObject.components.reduce(
          (c1, c2) => c1 + c2.width,
          0
        );

        // TODO - consider doing this in single loop
        let maxHeightUp = this.maxHeightUp();
        let maxHeightDown = this.maxHeightDown();
        let maxSymbolHeight = this.maxSymbolHeight();

        newHeight = maxHeightUp + maxHeightDown + maxSymbolHeight;
      } else {
        newWidth =
          symbolsDefinitions.INPUT_BASE_SIZE *
          this.equationObject.sizePercentage;
        newHeight =
          symbolsDefinitions.INPUT_BASE_SIZE *
          this.equationObject.sizePercentage;
      }

      this.equationObject.width = newWidth;
      this.equationObject.height = newHeight;

      this.$emit("modified");
    },

    deleteInput() {
      if (!this.equationObject.components) return;

      if (this.equationObject.components.length > 0) {
        this.equationObject.components = [];
      } else if (
        this.equationObject.components.length == 0 &&
        !this.rootInput
      ) {
        this.equationObject.components = null;
      }

      this.reScaleInput();
    },

    removeLast() {
      let updated = this.equationObject;

      if (updated.components.length > 0) {
        updated.components.splice(-1, 1);
      }

      this.reScaleInput();
    }
  },

  mounted() {
    this.$emit("modified");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equation-input {
  line-height: normal;
  position: relative;
}

.component-container {
  display: inline-block;
}

.empty-input-img {
  position: absolute;
  top: 0%;
  left: 0%;
}
</style>
