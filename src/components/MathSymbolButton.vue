<template>
  <b-col class="math-symbol-button" cols="4">
    <b-button class="symbol-btn" variant="primary" v-on:click="insertSymbol()">
      <img v-if="symbol.iconPath" :src="symbol.iconPath" class="symbol-img">
      <span v-else>{{ symbol.text }}</span>
    </b-button>
  </b-col>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "MathSymbolButton",
  components: {},
  props: {
    mathSymbolDisplay: String,
    symbol: Object,
    isCode: false
  },
  methods: {
    insertSymbol() {
      EventBus.$emit("mastSymbolButtonClick", this.symbol);
    }
  },
  computed: {
    decodedSymbol() {
      if (this.symbol.code)
        return String.fromCharCode(parseInt(this.symbol.code, 16));
      else return this.symbol.text;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.math-symbol-button {
  margin: 10px 0px 10px 0px;
  display: inline-block;
}

.symbol-btn {
  font-size: 1.3em;
}

.symbol-img {
  max-width: 25px;
}
</style>
