<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <!-- TODO in first case there should be some white space - min height -->
    <span v-if="!equationObject.components"></span>
    <div v-if="equationObject.components && equationObject.components.length==0">
      <!-- <img src="@/assets/empty_input_img.png" class="empty-input-img" :style="{width: sizePercentage + 'px'}"/> -->
      &#x2b1c;
    </div>
    <div class="component-container" v-for="(elem, index) in equationObject.components" :key="index">
     
      <above-below-input v-if="elem.symbol.inputType == inputTypes.aboveBelow"
        :component="elem">
      </above-below-input>

      <fraction v-if="elem.symbol.inputType == inputTypes.fraction"
        :component="elem">
      </fraction>

      <basic v-if="elem.symbol.inputType == inputTypes.basic" 
        :symbol="elem.symbol">
      </basic>

      <root v-if="elem.symbol.inputType == inputTypes.root"
        :component="elem">
      </root>

    </div>
  </div>
</template>

<script>
import symbolsDefinitions from "../../modules/symbolsDefinitions.js";
import AboveBelowInput from "./AboveBelowInput.vue";
import Basic from "./Basic.vue";
import Root from "./Root.vue";
import Fraction from "./Fraction.vue";
import { EventBus } from "../../event-bus.js";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Root,
    Basic,
    Fraction
  },
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
    },

    removeLast() {
      let updated = this.equationObject;

      if (updated.components.length > 0) {
        updated.components.splice(-1, 1);
      }

      this.$emit("childUpdate", updated);
    }
  },

  mounted() {
    EventBus.$emit("componentInserted");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equation-input {
  font-size: 0.8em;
  line-height: normal;
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
