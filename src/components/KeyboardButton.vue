<template>
  <b-col class="math-symbol-button">
    <b-button class="symbol-btn" variant="primary" v-on:click="insertSymbol()">
      <span>{{ character }}</span>
    </b-button>
  </b-col>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "KeyboardButton",
  components: {},
  props: {
    character: String
  },
  methods: {
    insertSymbol() {
      EventBus.$emit("mastSymbolButtonClick", this.symbol);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.math-symbol-button {
  margin: 10px 0px 10px 0px;
}

.symbol-btn {
  font-size: 1.3em;
}

.symbol-img {
  max-width: 25px;
}
</style>
