<template>
  <b-row class="export-panel justify-content-sm-center">
    <export-button text="Export as MathML"/>
    <export-button text="Export to LaTeX"/>
  </b-row>  
</template>

<script>
import ExportButton from '../components/ExportButton.vue'

export default {
  name: 'ExportPanel',
  components: {
    ExportButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.export-panel {
  margin: 20px;
}
</style>
