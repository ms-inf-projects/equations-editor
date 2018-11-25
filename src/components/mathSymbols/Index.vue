<!-- Handles
  - subscript
  - superscript
  - both at the same time
 -->
<template>
  <div class="index-input">

    <div class="wrapper">
      <equation-input v-if="component.upEqObject"
                      class="superscript"
                      :equationObject="component.upEqObject">
      </equation-input>
    </div>

    <div class="wrapper">
      <equation-input v-if="component.downEqObject"
                    class="subscript"
                    :equationObject="component.downEqObject">
      </equation-input>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    component: Object
  },
  created() {
    console.log(this.component);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-input {
  display: inline-block;
  height: 100%;
}

.wrapper {
  height: 0px;
}

.superscript {
  display: inline-block;
  vertical-align: top;
  font-size: 0.5em;
}

.subscript {
  vertical-align: bottom;
  display: inline-block;
  font-size: 0.5em;
}
</style>
