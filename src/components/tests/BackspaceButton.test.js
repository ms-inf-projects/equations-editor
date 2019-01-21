import Vue from "vue";
import BackspaceButton from "../BackspaceButton.vue";

describe("BackspaceButton", () => {
  it("has a insertKey method", () => {
    expect(typeof BackspaceButton.methods.insertKey).toBeDefined();
  });
});
