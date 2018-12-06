<!-- Handles
  - root
 -->
<template>
  <div class="symbol" ref="root">
    <equation-input :equationObject="component.degreeEqObject" class="degree"></equation-input>
    <div class="root" ref="rootRef">
      <img :src="component.symbol.imagePath" v-bind:style="{height: rootHeight +'px'}">
      <equation-input
        id="abcd"
        :equationObject="component.baseEqObject"
        class="base"
        ref="baseRef"
        v-bind:style="{borderTop: borderWidth + 'px solid #000'}"
      ></equation-input>
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
    component: Object
  },
  computed: {
    borderWidth() {
      return this.rootHeight / 10 / 4;
    }
  },
  methods: {
    reScale() {
      this.rootHeight = this.$refs.baseRef.$el.clientHeight;
    }
  },

  created() {
    EventBus.$on("componentInserted", this.reScale);
  },
  beforeDestroy() {
    EventBus.$off("componentInserted", this.reScale);
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
