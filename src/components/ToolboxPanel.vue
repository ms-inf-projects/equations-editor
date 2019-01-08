<template>
  <div class="toolbox-panel">
    <div class="section-header toolbox-header hide-on-mobile">toolbox</div>
    <div class="toggle-button show-on-mobile" v-on:click="toggleToolbox">
      <span>{{ buttonText }}</span>
    </div>
    <div class="toolbox toolbox-responsive" v-bind:class="{ hidden: !toolboxDisplayed }">
      <div class="change-palet-btn left" v-on:click="swapCategory(-1)">
        <font-awesome-icon icon="angle-left"/>
      </div>
      <div class="change-palet-btn right" v-on:click="swapCategory(1)">
        <font-awesome-icon icon="angle-right"/>
      </div>

      <div class="toolbox-area">
        <b-row class="category-name">
          <b-col>
            <span>{{ activeCategory.name }}</span>
          </b-col>
        </b-row>
        <!-- TODO - correct displays - ex 5-6 in a row -->
        <div v-if="activeCategory.name == categories.letter">
          <!-- TODO - display alphabet -->
          <b-row v-for="(row, index) in keyboard" v-bind:key="index">
            <b-col cols="1" v-for="(key, keyIndex) in row" v-bind:key="keyIndex">
              <keyboard-button :character="key"></keyboard-button>
            </b-col>
          </b-row>
        </div>
        <div v-else-if="activeCategory.name == categories.digit">
          <!-- TODO - display digits -->
          <span>digits keyboard</span>
        </div>
        <div v-else>
          <math-symbol-button
            v-for="(symbol, index) in symbols"
            v-bind:key="index"
            v-if="symbol.category == activeCategory.name"
            :symbol="symbol"
            isCode="true"
          ></math-symbol-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import symbolsDefinitions from "../modules/symbolsDefinitions.js";
import MathSymbolButton from "./MathSymbolButton.vue";
import KeyboardButton from "./KeyboardButton.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleRight);
library.add(faAngleLeft);

export default {
  name: "ToolboxPanel",
  components: {
    MathSymbolButton,
    KeyboardButton
  },
  data() {
    return {
      symbols: symbolsDefinitions.symbols,
      categories: symbolsDefinitions.symbolCategories,
      categoriesArray: Array,
      activeCategory: Object,
      toolboxDisplayed: true,
      buttonText: "Hide toolbox",
      keyboard: [],
      numpad: []
    };
  },

  methods: {
    toggleToolbox() {
      this.toolboxDisplayed = !this.toolboxDisplayed;

      if (this.toolboxDisplayed) this.buttonText = "Hide toolbox";
      else this.buttonText = "Show toolbox";
    },

    swapCategory(side) {
      let currentIndex = this.activeCategory.id;
      let newIndex = currentIndex + side;

      if (newIndex < 0) newIndex = this.categoriesArray.length + newIndex;
      else if (newIndex >= this.categoriesArray.length)
        newIndex = newIndex - this.categoriesArray.length;

      this.activeCategory = {
        id: newIndex,
        name: this.categoriesArray[newIndex]
      };
    }
  },

  created() {
    this.categoriesArray = Object.values(this.categories);
    this.activeCategory = {
      id: 0,
      name: this.categoriesArray[0]
    };
    console.log(this.activeCategory.name);

    this.keyboard = [
      "q,w,e,r,t,y,u,i,o,p".split(","),
      "a,s,d,f,g,h,j,k,l".split(","),
      "z,x,c,v,b,n,m".split(",")
    ];
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
  min-height: 100px;
  max-height: 60%;
  max-height: 60vh;
  overflow-y: auto;
}

.category-name {
  margin: 5px 0px 5px 0px;
  font-weight: 700;
  font-size: 1.1em;
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
  .toolbox-area {
    max-height: 40%;
    max-height: 40vh;
  }

  .category-name {
    color: #fff;
  }

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
