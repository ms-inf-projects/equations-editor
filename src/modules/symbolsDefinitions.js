// Type of the input - each one is represented by the vue component
const inputTypes = {
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
    basic: "basic",
    fraction: "fraction",
    index: "index"
};

// Kind of the symbol to differentiate inside the input
const symbolKinds = {
    letter: "letter",
    digit: "digit",
    operator: "operator",
    fraction: "fraction",
    index: "index"
};

// Categories used for displaying
const symbolCategories = {
    basic: "basic",
    advanced: "advanced",
    letter: "letter",
    digit: "digit"
};

// TODO - if can be handeled like that make it a part of inputType or implement as lookup based on input type
var baseSize = {}
baseSize[inputTypes.aboveBelow] = {
    width: 30,
    height: 50
}
baseSize[inputTypes.basic] = {
    width: 30,
    height: 30
}

// TODO - implement template for basic letter or digit literal
const symbols = {
    integral: {
        inputType: inputTypes.aboveBelow,
        baseSize: baseSize[inputTypes.aboveBelow],
        text: String.fromCharCode(parseInt("222B", 16)),
        category: symbolCategories.advanced,
        specialRender: true
    },
    sum: {
        inputType: inputTypes.aboveBelow,
        baseSize: baseSize[inputTypes.aboveBelow],
        text: String.fromCharCode(parseInt("03A3", 16)),
        category: symbolCategories.advanced,
        specialRender: true
    },
    fraction: {
        inputType: inputTypes.fraction,
        text: String.fromCharCode(parseInt("2501", 16)),
        category: symbolCategories.advanced,
        specialRender: true,
        imagePath: require("@/assets/fraction_img.png"),
        iconPath: require("@/assets/fraction_icon.png")
    },
    root: {
        inputType: inputTypes.root,
        text: String.fromCharCode(parseInt("221A", 16)),
        category: symbolCategories.basic,
        specialRender: true,
        imagePath: require("@/assets/root_img.png")
    },
    multiply: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: " x ",
        kind: symbolKinds.operator,
        specialRender: true
    },
    add: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: " + ",
        kind: symbolKinds.operator
    },
    subtract: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: " - ",
        kind: symbolKinds.operator
    },
    equal: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: " = ",
        kind: symbolKinds.operator
    },
    subscript: {
        inputType: inputTypes.index,
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/subscript_img.png")
    },
    superscript: {
        inputType: inputTypes.index,
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/superscript_img.png")
    },
    doublescript: {
        inputType: inputTypes.index,
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/doublescript_img.png")
    }
};

export default {
    inputTypes,
    symbols,
    symbolCategories,
    symbolKinds
};