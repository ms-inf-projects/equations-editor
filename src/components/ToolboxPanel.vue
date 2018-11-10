<template>
  <div class="">
    <div>
      <div class="section-header">
        toolbox
      </div>
      <div class="toolbox-panel" v-bind:class="{ hidden: !toolboxDisplayed }">
        <!-- TODO - try to refactor: foreach - list of symbols and methods -->
        <!-- TODO - correct display in buttons -->
        <math-symbol-button symbol='222B' v-bind:inputType="symbols.aboveBelow" ></math-symbol-button>
        <math-symbol-button symbol='03A3' v-bind:inputType="symbols.aboveBelow" ></math-symbol-button>
        <math-symbol-button symbol='221A' v-bind:inputType="symbols.root" ></math-symbol-button>
      </div>
    </div>
  </div>
</template>

<script>
import mathComponents from "../modules/mathComponents.js";
import MathSymbolButton from "./MathSymbolButton.vue";

export default {
  name: "ToolboxPanel",
  components: {
    MathSymbolButton
  },
  data() {
    return {
      symbols: mathComponents.symbolTypes,
      toolboxDisplayed: true,
      buttonText: "Hide"
    };
  },
  methods: {
    toggleToolbox() {
      this.toolboxDisplayed = !this.toolboxDisplayed;

      if (this.toolboxDisplayed) this.buttonText = "Hide";
      else this.buttonText = "Show";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbox-panel {
  border: 0.5px solid #333;
  height: 200px;
}
</style>
