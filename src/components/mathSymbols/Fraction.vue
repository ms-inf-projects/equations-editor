<!-- Handels
  - fraction
 -->
<template>
  <div class="symbol">
    <equation-input v-if="component.upEqObject"
                    :equationObject="component.upEqObject">
    </equation-input>
    
    <div ref="fractionRef" class="img-wrapper">
        <img class="fraction-img" :src="component.symbol.imagePath" :style="{width: fractionWidth +'px'}" />
    </div>

    <equation-input v-if="component.downEqObject"
                    :equationObject="component.downEqObject" >
    </equation-input>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";

export default {
  name: "Fraction",
  components: {
    EquationInput: () => import("./EquationInput.vue")
  },
  data() {
    return {
      fractionWidth: 25
    };
  },
  props: {
    component: Object
  },

  methods: {
    reScale() {
      this.fractionWidth = this.$refs.fractionRef.clientWidth;
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

.img-wrapper {
  height: 2px;
}

.fraction-img {
  height: 2px;
  display: block;
}
</style>
