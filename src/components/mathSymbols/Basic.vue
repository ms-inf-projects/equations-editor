<!-- Handles
  - single letters
  - single numbers
  - operators
  - special symbols
 -->
<template>
  <div class="basic">
    <span class="basic-data" :class="symbol.kind">{{symbol.text}}</span>
  </div>
</template>

<script>
export default {
  name: "Basic",
  components: {},
  props: {
    symbol: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic {
  display: inline-block;
  text-align: center;
  vertical-align: auto;
  /* vertical-align: 110%; */
  /* height: 100px; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* height: 30%; */
  /* width: 50%; */
  /* margin: -15% 0 0 -25%; */
}

.basic-data {
  vertical-align: middle;
}

.operator {
  font-size: 0.8em;
}
</style>
