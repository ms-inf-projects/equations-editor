import Vue from "vue";
import KeyboardButton from "../KeyboardButton.vue";

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("ExportButton", () => {
  it("renders corretly with different props", () => {
    expect(
      getRenderedText(KeyboardButton, {
        character: "text"
      })
    ).toBe("text");
  });

  it("has a insertKey method", () => {
    expect(typeof KeyboardButton.methods.insertKey).toBeDefined();
  });
});
