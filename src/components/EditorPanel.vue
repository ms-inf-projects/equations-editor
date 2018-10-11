<template>
  <div class="">
    <div class="section-header">editor</div>
    <div class="editor">
      <div class="editor-area">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorPanel',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor-area {
  border: 1px solid #000;
  min-height: 200px;
}
</style>
