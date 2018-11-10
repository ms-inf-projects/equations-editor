<template>
  <div class="toolbox-panel">
      <div class="section-header toolbox-header hide-on-mobile">
        toolbox
      </div>
      <b-button class="toggle-button show-on-mobile" v-on:click="toggleToolbox">
        <span > {{ buttonText }} </span>
      </b-button>
      <div class="toolbox toolbox-responsive">

        <b-button class="change-palet-btn left">
         L
        </b-button>
        <b-button class="change-palet-btn right">
         R
        </b-button>

        <div class="toolbox-area" v-bind:class="{ hidden: !toolboxDisplayed }">
          <div class="toolbox-content">

          </div>
          <!-- TODO - try to refactor: foreach - list of symbols and methods -->
          <!-- TODO - correct display in buttons -->
          <math-symbol-button symbol='222B' isCode="true" v-bind:inputType="symbols.aboveBelow" ></math-symbol-button>
          <math-symbol-button symbol='03A3' isCode="true" v-bind:inputType="symbols.aboveBelow" ></math-symbol-button>
          <math-symbol-button symbol='221A' isCode="true" v-bind:inputType="symbols.root" ></math-symbol-button>
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
.toolbox-area {
  border: 0.5px solid #333;
  display: inline-block;
  width: 78%;
  margin: auto;
}

.toolbox {
  position: relative;
}

.change-palet-btn {
  position: absolute;
  display: inline-block;
  top: 30%;
}

.left {
  left: 0%;
}

.right {
  right: 0%;
}

.show-on-mobile {
  display: none;
}

@media only screen and (max-device-width: 480px) {
  .show-on-mobile {
    display: initial;
  }

  .hide-on-mobile {
    display: none;
  }

  .toolbox-responsive {
    width: 100%;
    background-color: #333;
  }

  .hidden {
    display: none;
  }
}

.toggle-button {
  width: 100%;
}
</style>
