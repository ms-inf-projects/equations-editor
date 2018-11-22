<!-- Handles
  - simple operators like +, -, =
 -->
<template>
  <div class="operator">
    <span class="operator-data">{{symbol}}</span>
  </div>
</template>

<script>
export default {
  name: "Operator",
  components: {},
  props: {
    symbol: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operator {
  display: inline-block;
  text-align: center;
  vertical-align: auto;
}

.operator-data {
  vertical-align: middle;
}
</style>
