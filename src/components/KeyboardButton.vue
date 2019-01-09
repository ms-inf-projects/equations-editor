<template>
    <b-button class="symbol-btn" variant="primary" v-on:click="insertKey()">
      <span>{{ character }}</span>
    </b-button>
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
    insertKey() {
      EventBus.$emit("keyboardButtonClick", this.character);
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
  width: 22px;
}

</style>
