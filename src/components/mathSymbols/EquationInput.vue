<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <!-- TODO in first case there should be some white space - min height -->
    <span v-if="!equationObject.components"></span>
    <span v-if="equationObject.components && equationObject.components.length==0">[_]</span>
    <div class="component-container" v-for="(elem, index) in equationObject.components" :key="index">
     
      <above-below-input v-if="elem.inputType == inputTypes.aboveBelow" 
        :symbol="elem.symbol"
        :component="elem">
      </above-below-input>

      <basic v-if="elem.inputType == inputTypes.basic" 
        :symbol="elem.symbol"
        :type="elem.inputType">
      </basic>

      <root v-if="elem.inputType == inputTypes.root" 
        :symbol="elem.symbol"
        :component="elem">
      </root>

    </div>
  </div>
</template>

<script>
import symbolsDefinitions from "../../modules/symbolsDefinitions.js";
import AboveBelowInput from "./AboveBelowInput.vue";
import Literal from "./Literal.vue";
import Basic from "./Basic.vue";
import Root from "./Root.vue";
import { EventBus } from "../../event-bus.js";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Literal,
    Root,
    Basic
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
      console.log(this.$refs);

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
</style>
