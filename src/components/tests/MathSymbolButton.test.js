import Vue from "vue";
import MathSymbolButton from "../MathSymbolButton.vue";

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("ExportButton", () => {
  it("renders corretly with different props", () => {
    expect(
      getRenderedText(MathSymbolButton, {
        mathSymbolDisplay: "+",
      })
    ).toBe("");
  });
})
