<template>
    <b-col class="math-symbol-button">
      <b-button v-on:click="insertSymbol()">{{ mathSymbol }}</b-button>
    </b-col> 
</template>

<script>
export default {
  name: "ExportButton",
  components: {},
  props: {
    mathSymbol: String
  },
  methods: {
    insertSymbol() {
      this.$emit("buttonClick");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.math-symbol-button {
  margin: 10px;
}
</style>
