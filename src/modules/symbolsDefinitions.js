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
var baseSize = {};
baseSize[inputTypes.aboveBelow] = {
    width: 30,
    height: 50
};
baseSize[inputTypes.basic] = {
    width: 20,
    height: 30
};
baseSize[inputTypes.root] = {
    width: 30,
    height: 45
};
baseSize[inputTypes.fraction] = {
    width: 30,
    height: 6
};
baseSize[inputTypes.index] = {
    width: INPUT_BASE_SIZE,
    height: INPUT_BASE_SIZE
};

const INPUT_BASE_SIZE = 48;

// TODO - implement template for basic letter or digit literal
const symbols = {
    integral: {
        inputType: inputTypes.aboveBelow,
        baseSize: baseSize[inputTypes.aboveBelow],
        text: String.fromCharCode(parseInt("222B", 16)),
        category: symbolCategories.advanced,
        specialParsing: true
    },
    sum: {
        inputType: inputTypes.aboveBelow,
        baseSize: baseSize[inputTypes.aboveBelow],
        text: String.fromCharCode(parseInt("03A3", 16)),
        category: symbolCategories.advanced,
        specialParsing: true
    },
    fraction: {
        inputType: inputTypes.fraction,
        baseSize: baseSize[inputTypes.fraction],
        text: String.fromCharCode(parseInt("2501", 16)),
        category: symbolCategories.advanced,
        specialParsing: true,
        imagePath: require("@/assets/fraction_img.png"),
        iconPath: require("@/assets/fraction_icon.png")
    },
    root: {
        inputType: inputTypes.root,
        baseSize: baseSize[inputTypes.root],
        text: String.fromCharCode(parseInt("221A", 16)),
        category: symbolCategories.basic,
        specialParsing: true,
        imagePath: require("@/assets/root_img.png")
    },
    multiply: operatorWithTextWithSpecialParsing(String.fromCharCode(parseInt("00b7", 16))),
    add: operatorWithText("+"),
    subtract: operatorWithText("-"),
    equal: operatorWithText("="),
    lessThan: operatorWithText("<"),
    moreThan: operatorWithText(">"),
    subscript: {
        inputType: inputTypes.index,
        baseSize: baseSize[inputTypes.index],
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/subscript_img.png")
    },
    superscript: {
        inputType: inputTypes.index,
        baseSize: baseSize[inputTypes.index],
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/superscript_img.png")
    },
    doublescript: {
        inputType: inputTypes.index,
        baseSize: baseSize[inputTypes.index],
        category: symbolCategories.advanced,
        text: "",
        kind: symbolKinds.index,
        iconPath: require("@/assets/doublescript_img.png")
    }
};

function operatorWithText(text) {
    return operator(text)
}

function operatorWithTextWithSpecialParsing(text) {
    return operator(text, true)
}

function operator(text, specialParsing) {
    let operatorSymbol = {
        inputType: inputTypes.basic,
        baseSize: baseSize[inputTypes.basic],
        category: symbolCategories.basic,
        text: text,
        kind: symbolKinds.operator
    }

    if (specialParsing) operatorSymbol.specialParsing = true

    return operatorSymbol
}

function createLiteralSymbol(text) {
    return {
        inputType: inputTypes.basic,
        text: text,
        kind: symbolKinds.letter,
        baseSize: baseSize[inputTypes.basic]
    };
}

export default {
    INPUT_BASE_SIZE,
    inputTypes,
    symbols,
    symbolCategories,
    symbolKinds,
    baseSize,
    createLiteralSymbol
};