<template>
  <div class="main-view">
    <b-container>
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
      <export-panel/>
    </b-container>
  </div>
</template>

<script>
import HeaderPanel from '../components/HeaderPanel.vue'
import HelpPanel from '../components/HelpPanel.vue'
import ToolboxPanel from '../components/ToolboxPanel.vue'
import EditorPanel from '../components/EditorPanel.vue'
import ExportPanel from '../components/ExportPanel.vue'

export default {
  name: 'MainView',
  components: {
    HeaderPanel,
    HelpPanel,
    ToolboxPanel,
    EditorPanel,
    ExportPanel
  }
}
</script>


<style>
.section-header {
  height: 100%;
  font-size: 24px;
  margin: 5px;
}
</style>

<style scoped>
.main-view {

}
</style>
