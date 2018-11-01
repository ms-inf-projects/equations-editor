<template>
  <div class="equation-input" v-on:click="activateInput()" ref="equationInput">
    <span v-if="equationObject.components.length==0">[_]</span>
    <!-- <span> {{ equationObject.components.length }} </span> -->
    <div class="component-container" v-for="(elem, index) in equationObject.components" :key="index">
      <above-below-input v-if="elem.type == types.aboveBelow" 
        :symbol="elem.symbol"
        :id="elem.id"
        :component="elem"
        v-on:childUpdate="childUpdate"
        v-on:deleted="componentDeleted(id)">
      </above-below-input>

      <literal v-if="elem.type == types.literal" 
        :symbol="elem.symbol"
        :id="elem.id"
        v-on:deleted="componentDeleted(id)">
      </literal>

      <root v-if="elem.type == types.root" 
        :symbol="elem.symbol"
        :id="elem.id"
        :component="elem"
        v-on:childUpdate="childUpdate"
        v-on:deleted="componentDeleted(id)">
      </root>
    </div>
  </div>
</template>

<script>
import mathComponents from "../../modules/mathComponents.js";
import AboveBelowInput from "./AboveBelowInput.vue";
import Literal from "./Literal.vue";
import Root from "./Root.vue";

export default {
  name: "EquationInput",
  components: {
    AboveBelowInput,
    Literal,
    Root
  },
  data() {
    return {
      // TODO - consider storing different array for different types
      types: mathComponents.symbolTypes
    };
  },
  props: {
    equationObject: Object,
    rootInput: false
  },
  methods: {
    activateInput() {
      let payload = {
        activatedInput: this
      };
      console.log(this.$refs);

      this.$store.dispatch("activateEquationInput", payload);
    },

    toLatex() {
      // TODO - call toLatex on all of the components
      // TODO -call toLatex based on type?
      // glue the result
    },

    addEmbededComponent(componentData) {
      if (
        !this.equationObject.components ||
        this.equationObject.components.length == 0
      ) {
        componentData.id = 1;
        this.equationObject.components = [componentData];
        console.log(this.equationObject);
      } else {
        let lastIndex = this.equationObject.components[
          this.equationObject.components.length - 1
        ].id;
        componentData.id = lastIndex + 1;
        this.equationObject.components.push(componentData);
        console.log(this.equationObject);
      }

      if (this.rootInput) {
        this.$emit("updateRoot", this.equationObject);
      } else {
        this.$emit("childUpdate", this.equationObject);
      }
    },

    deleteInput() {
      this.$emit("childUpdate", null);
    },

    removeLast() {
      let updated = this.equationObject;

      if (updated.components.length > 0) {
        updated.components.splice(-1, 1);
      }

      this.$emit("childUpdate", updated);
    },

    // TODO - will this function also handle delete case
    childUpdate(childObject) {
      console.log("Child update on uuid: ", this.equationObject.uuid);
      // TODO - ensure everyone is uuid
      let childToUpdate = this.equationObject.components.filter(
        x => x.uuid == childObject.uuid
      )[0];

      childToUpdate = childObject;

      if (this.rootInput) {
        this.$emit("updateRoot", this.equationObject);
      } else {
        this.$emit("childUpdate", this.equationObject);
      }
    },
    aboveBelowChildUpdate() {}
  },

  computed: {
    isEmpty() {
      if (
        !this.equationObject.symbols ||
        this.equationObject.symbols.length == 0
      ) {
        return true;
      }

      return false;
    }
  },

  updated() {
    console.log("updated");
    // this.embededSymbols = this.$refs.equationInput.$children;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equation-input {
  font-size: 0.8em;
  line-height: normal;
  /* display: inline-block;
  vertical-align: top; */
}

.component-container {
  display: inline-block;
}
</style>
