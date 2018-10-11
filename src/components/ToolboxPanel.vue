<template>
  <div class="">
    <div class="section-header">toolbox</div>
    <div>
      <div class="toolbox-panel">
        <math-symbol symbol="x"></math-symbol>
        <math-symbol symbol="+"></math-symbol>
      </div>
    </div>
  </div>
</template>

<script>
import MathSymbol from './MathSymbol.vue'

export default {
  name: 'ToolboxPanel',
  components: {
    MathSymbol
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbox-panel {
  border: 0.5px solid #333;
  min-height: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
