// Type of the input - each one is represented by the vue component
const inputTypes = {
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
    basic: "basic",
    fraction: "fraction"
}

// Kind of the symbol to differentiate inside the input
const symbolKinds = {
    letter: "letter",
    digit: "digit",
    operator: "operator",
    fraction: "fraction"
}

// Categories used for displaying 
const symbolCategories = {
    basic: "basic",
    advanced: "advanced",
    letter: "letter",
    digit: "digit",
}

const symbols = {
    integral: {
        inputType: inputTypes.aboveBelow,
        text: String.fromCharCode(parseInt('222B', 16)),
        category: symbolCategories.advanced,
        specialRender: true
    },
    sum: {
        inputType: inputTypes.aboveBelow,
        text: String.fromCharCode(parseInt('03A3', 16)),
        category: symbolCategories.advanced,
        specialRender: true
    },
    fraction: {
        inputType: inputTypes.fraction,
        text: String.fromCharCode(parseInt('2501', 16)),
        category: symbolCategories.advanced,
        specialRender: true,
        imagePath: require("@/assets/fraction_img.png"),
        iconPath: require("@/assets/fraction_icon.png")
    },
    root: {
        inputType: inputTypes.root,
        text: String.fromCharCode(parseInt('221A', 16)),
        category: symbolCategories.basic,
        specialRender: true,
        imagePath: require("@/assets/root_img.png")
    },
    multiply: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: ' x ',
        kind: symbolKinds.operator,
        specialRender: true
    },
    add: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: ' + ',
        kind: symbolKinds.operator
    },
    subtract: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: ' - ',
        kind: symbolKinds.operator
    },
    equal: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: ' = ',
        kind: symbolKinds.operator
    }
}

export default {
    inputTypes,
    symbols,
    symbolCategories,
    symbolKinds
}