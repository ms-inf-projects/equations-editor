<template>
  <div class="toolbox-panel">
      <div class="section-header toolbox-header hide-on-mobile">
        toolbox
      </div>
      <div class="toggle-button show-on-mobile" v-on:click="toggleToolbox">
        <span > {{ buttonText }} </span>
      </div>
      <div class="toolbox toolbox-responsive" v-bind:class="{ hidden: !toolboxDisplayed }">

        <div class="change-palet-btn left">
          <font-awesome-icon icon="angle-left" />
        </div>
        <div class="change-palet-btn right">
          <font-awesome-icon icon="angle-right" />    
        </div>

        <div class="toolbox-area" >
          <!-- TODO - try to refactor: foreach - list of symbolTypes and methods -->
          <!-- TODO - correct display in buttons -->
          <math-symbol-button v-for="(symbol, index) in symbols" 
                              :symbol='symbol' 
                              v-bind:key="index" 
                              isCode="true" ></math-symbol-button>
          
        </div>

      </div>

  </div>
</template>

<script>
import mathComponents from "../modules/mathComponents.js";
import MathSymbolButton from "./MathSymbolButton.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleRight);
library.add(faAngleLeft);

export default {
  name: "ToolboxPanel",
  components: {
    MathSymbolButton
  },
  data() {
    return {
      symbols: mathComponents.symbols,
      toolboxDisplayed: true,
      buttonText: "Hide toolbox"
    };
  },

  methods: {
    toggleToolbox() {
      this.toolboxDisplayed = !this.toolboxDisplayed;

      if (this.toolboxDisplayed) this.buttonText = "Hide toolbox";
      else this.buttonText = "Show toolbox";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbox-area {
  border: 0.5px solid rgb(51, 51, 51);
  display: inline-block;
  width: 78%;
  margin: auto;
  height: auto;
  max-height: 50%;
}

.toolbox {
  position: relative;
}

.change-palet-btn {
  position: absolute;
  z-index: 12;
  display: inline-block;
  font-size: 3em;
  top: 10%;
  padding: 0px 8px 0px 8px;
  border-radius: 10%;
  cursor: pointer;
}

.change-palet-btn:hover {
  color: rgb(99, 147, 236);
}

.change-palet-btn:active {
  color: rgb(69, 117, 236);
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
  .change-palet-btn {
    color: #fff;
  }

  .change-palet-btn:hover {
    color: #ccc;
  }

  .change-palet-btn:active {
    color: #ccc;
  }

  .show-on-mobile {
    display: initial;
  }

  .toolbox-area {
    border: none;
  }

  .hide-on-mobile {
    display: none;
  }

  .toolbox-responsive {
    width: 100%;
    /* background-color: rgb(0, 60, 88); */
    background-color: rgb(5, 65, 118);
  }

  .hidden {
    display: none;
  }

  .toggle-button {
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background-color: rgb(0, 60, 88);
    color: #ffffff;
    width: 100%;
    padding: 3px;
    border-top: rgb(0, 60, 88) solid 3px;
    border-bottom: #1a5ca3 solid 3px;
  }

  .toggle-button:hover {
    background-color: rgb(0, 60, 88);
  }
}
</style>
