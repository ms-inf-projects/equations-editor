<template>
  <div class="main-view">
    <b-container class="bv-example-row">
      <b-row>          
          <b-col>
            <header-panel/>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderPanel from '../components/HeaderPanel.vue'

export default {
  name: 'MainView',
  components: {
    HeaderPanel
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
