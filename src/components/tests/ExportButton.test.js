import Vue from "vue";
import ExportButton from "../ExportButton.vue";

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("ExportButton", () => {
  it("renders corretly with different props", () => {
    expect(
      getRenderedText(ExportButton, {
        text: "Hello"
      })
    ).toBe("Hello");
  });
});
