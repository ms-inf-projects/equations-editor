<template>
  <div class="symbol">
    <b-button>{{ symbol }}</b-button>
  </div>
</template>

<script>
export default {
  name: 'MathSymbol',
  props: {
    symbol: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 5px;
  display: inline-block;
}
</style>
