<template>
  <div class="main-view">
    <b-container>
      <b-row>          
          <b-col>
            <header-panel/>
          </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="12" md="8">
          <editor-panel/>
        </b-col>
        <b-col cols="12" md="4" class="toolbox">
          <toolbox-panel/>
        </b-col>
      
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderPanel from "../components/HeaderPanel.vue";
import ToolboxPanel from "../components/ToolboxPanel.vue";
import EditorPanel from "../components/EditorPanel.vue";
import ExportPanel from "../components/ExportPanel.vue";

export default {
  name: "MainView",
  components: {
    HeaderPanel,
    ToolboxPanel,
    EditorPanel,
    ExportPanel
  }
};
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

@media only screen and (max-device-width: 480px) {
  .toolbox {
    position: fixed;
    z-index: 10;
    bottom: 0;
  }
}
</style>
