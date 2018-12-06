<template>
  <div
    class="equation-input"
    v-on:click="activateInput()"
    ref="equationInput"
    :style="{height: equationObject.height+'px', width: equationObject.width+'px'}"
  >
    <!-- :style="{height: equationObject.height+'px', width: equationObject.width+'px'}" -->
    <span v-if="!equationObject.components"></span>
    <div
      v-if="equationObject.components && equationObject.components.length==0"
      ref="inputDefault"
      class="empty-input"
    >&#x2b1c;</div>
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
      ></above-below-input>

      <index v-if="elem.symbol.inputType == inputTypes.index" :component="elem"></index>

      <fraction v-if="elem.symbol.inputType == inputTypes.fraction" :component="elem"></fraction>

      <basic v-if="elem.symbol.inputType == inputTypes.basic" :symbol="elem.symbol"></basic>

      <root v-if="elem.symbol.inputType == inputTypes.root" :component="elem"></root>
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
import sizeMixins from "../../mixins/sizeMixins.js";
import { EventBus } from "../../event-bus.js";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Root,
    Basic,
    Fraction,
    Index
  },
  // mixins: [sizeMixins.equationInputSizeMixin],
  data() {
    return {
      inputTypes: symbolsDefinitions.inputTypes
    };
  },
  props: {
    // TODO - consider passing font size reduction as prop
    equationObject: Object,
    rootInput: false
  },
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };

      this.$store.dispatch("activateEquationInput", payload);
    },

    getPositionX(index) {
      console.log(this.equationObject.components);

      let positionX = this.equationObject.components
        .slice(0, index)
        .reduce((c1, c2) => c1 + c2.width, 0);

      return positionX;
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
    },

    reScaleInput() {
      this.equationObject.width = this.equationObject.components.reduce(
        (c1, c2) => c1 + c2.width,
        0
      );

      // TODO - consider doing this in single loop
      let maxHeightTop = Math.max.apply(
        Math,
        this.equationObject.components.map(
          c => c.height - c.innerBaseLine - c.symbol.baseSize.height / 2
        )
      );

      let maxHeightDown = Math.max.apply(
        Math,
        this.equationObject.components.map(
          c => c.innerBaseLine - c.symbol.baseSize.height / 2
        )
      );

      let maxSymbolHeight = Math.max.apply(
        Math,
        this.equationObject.components.map(c => c.symbol.baseSize.height)
      );

      this.equationObject.height =
        maxHeightTop + maxHeightDown + maxSymbolHeight;
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

      EventBus.$emit("componentInserted");
    },

    removeLast() {
      let updated = this.equationObject;

      if (updated.components.length > 0) {
        updated.components.splice(-1, 1);
      }

      EventBus.$emit("componentInserted");
    }
  },

  // TODO - consider approach with passing events (performence issue with large amout of components)
  mounted() {
    EventBus.$emit("componentInserted");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty-input {
  display: block;
}

.equation-input {
  line-height: normal;
  position: relative;
  /* display: inline-block;
  vertical-align: top; */
}

.component-container {
  display: inline-block;
}

.empty-input-img {
  margin-bottom: 3px;
  margin-top: 3px;
}
</style>
