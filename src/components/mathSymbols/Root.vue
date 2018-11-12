<!-- Handles
  - root
 -->
<template>
  <div class="symbol">
    <equation-input :equationObject="component.degreeEqObject"
                    class="degree">
    </equation-input>
    <div class="root" ref="rootRef">
      <img src="../../assets/root_img.png" v-bind:style="{height: rootHeight +'px'}">
      <equation-input  :equationObject="component.baseEqObject"
                      class="base" v-bind:style="{borderTop: borderWidth + 'px solid #000'}">
      </equation-input>
    </div>
  </div>
</template>
 
<script>
import { EventBus } from "../../event-bus.js";

export default {
  name: "Root",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  data() {
    return {
      rootHeight: 20
    };
  },
  props: {
    symbol: String,
    component: Object
  },
  computed: {
    borderWidth() {
      return this.rootHeight / 10 / 4;
    }
  },

  created() {
    EventBus.$on("componentInserted", () => {
      this.rootHeight = this.$refs.rootRef.clientHeight;
    });
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
}

.degree {
  display: inline-block;
  height: 50%;
  vertical-align: top;
}
</style>
