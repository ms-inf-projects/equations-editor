<template>
    <b-col class="export-button" col lg="2" md="3" sm="6" xs="12">
      <b-button>{{ text }}</b-button>
    </b-col> 
</template>

<script>
export default {
  name: 'ExportButton',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.export-button {
  margin: 10px;
}
</style>
