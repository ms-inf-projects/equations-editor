<!-- Handles
  - root
 -->
<template>
  <div class="symbol">
    <equation-input :equationObject="component.degreeEqObject" 
                    v-on:childUpdate="updateDegreeInput"
                    class="degree">
    </equation-input>
    <div class="root">
      &#8730;
      <equation-input :equationObject="component.baseEqObject" 
                      v-on:childUpdate="updateBaseInput"
                      class="up-border base">
      </equation-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Root",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  props: {
    symbol: String,
    component: Object
  },

  methods: {
    updateDegreeInput(childObject) {
      let updatedObject = this.component;
      updatedObject.degreeEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    updateBaseInput(childObject) {
      let updatedObject = this.component;
      updatedObject.baseEqObject = childObject;

      this.childUpdate(updatedObject);
    },

    childUpdate(updatedObject) {
      console.log("Above and belowe event");
      this.$emit("childUpdate", updatedObject);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symbol {
  margin: 1px;
  display: inline-block;
  vertical-align: middle;
}

.root {
  display: inline-block;
  vertical-align: middle;
}

.base {
  display: inline-block;
  vertical-align: top;
  border-top: 1px solid #000;
}

.degree {
  display: inline-block;
  height: 50%;
  vertical-align: top;
}
</style>
