import Vue from "vue";
import EditorPanel from "../EditorPanel.vue";
import symbolsDefinitions from "../../modules/symbolsDefinitions.js";

describe("EditorPanel", () => {
  it("has a created hook", () => {
    expect(typeof EditorPanel.created).toBe("function");
  });

  it("has a mounted hook", () => {
    expect(typeof EditorPanel.mounted).toBe("function");
  });

  it("mounting works", () => {
    const Constructor = Vue.extend(EditorPanel);
      const vm = new Constructor({}).$mount();
  })

  it("sets the correct default data", () => {
    expect(typeof EditorPanel.data).toBe("function");

    const defaultData = EditorPanel.data();

    expect(defaultData.latexData).toEqual("");
    expect(defaultData.equationObject).toEqual({});
    expect(defaultData.inputTypes).toEqual(symbolsDefinitions.inputTypes);
    expect(defaultData.symbolKinds).toEqual(symbolsDefinitions.symbolKinds);
  });

  it("has a handleKeyboard method", () => {
    expect(typeof EditorPanel.methods.handleKeyboard).toBeDefined();
  });

  it("has a handleMobileKeyboard method", () => {
    expect(typeof EditorPanel.methods.handleMobileKeyboard).toBeDefined();
  });


  it("has a insertMathSymbol method", () => {
    expect(typeof EditorPanel.methods.insertMathSymbol).toBeDefined();
  });


  it("has a processToLatex method", () => {
    expect(typeof EditorPanel.methods.processToLatex).toBeDefined();
  });

  it("has a removeActiveInput method", () => {
    expect(typeof EditorPanel.methods.removeActiveInput).toBeDefined();
  });


  it("has a removeLastFromActiveInput method", () => {
    expect(typeof EditorPanel.methods.removeLastFromActiveInput).toBeDefined();
  });


  it("has a finishActivation method", () => {
    expect(typeof EditorPanel.methods.finishActivation).toBeDefined();
  });
});
