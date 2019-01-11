<template>
    <b-button class="symbol-btn" variant="primary" v-on:click="insertKey()">
      <span>&#x232b;</span>
    </b-button>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "BackspaceButton",
  methods: {
    insertKey() {
      EventBus.$emit("backspaceButtonClick");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.symbol-btn {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  width: 48px;
}

</style>
