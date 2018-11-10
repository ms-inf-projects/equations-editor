<template>
    <b-col class="math-symbol-button">
      <b-button v-on:click="insertSymbol()">{{ decodedSymbol }}</b-button>
    </b-col> 
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "ExportButton",
  components: {},
  props: {
    mathSymbolDisplay: String,
    inputType: String,
    symbol: "",
    isCode: false
  },
  methods: {
    insertSymbol() {
      EventBus.$emit(
        "mastSymbolButtonClick",
        this.inputType,
        this.decodedSymbol
      );
    }
  },
  computed: {
    decodedSymbol() {
      if (this.isCode) return String.fromCharCode(parseInt(this.symbol, 16));
      else return this.symbol;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.math-symbol-button {
  margin: 10px 0px 10px 0px;
}
</style>
