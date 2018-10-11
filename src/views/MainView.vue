<template>
  <div class="main-view">
    <b-container class="bv-example-row">
      <b-row>          
          <b-col>
            <header-panel/>
          </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3">
          <help-panel/>
        </b-col>
        <b-col cols="6" md="6">
          <editor-panel/>
        </b-col>
        <b-col cols="3" md="3">
          <toolbox-panel/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderPanel from '../components/HeaderPanel.vue'
import HelpPanel from '../components/HelpPanel.vue'
import ToolboxPanel from '../components/ToolboxPanel.vue'
import EditorPanel from '../components/EditorPanel.vue'

export default {
  name: 'MainView',
  components: {
    HeaderPanel,
    HelpPanel,
    ToolboxPanel,
    EditorPanel
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
