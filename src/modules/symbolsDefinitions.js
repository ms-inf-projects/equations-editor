// Type of the input - each one is represented by the vue component
const inputTypes = {
    literal: "literal",
    operator: "operator",
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
    basic: "basic",
}

// Kind of the symbol to differentiate inside the input
const symbolKinds = {
    letter: "letter",
    digit: "digit",
    operator: "operator",
}

// Categories used for displaying 
const symbolCategories = {
    basic: "basic",
    calculus: "calculus",
    letter: "letter",
    digit: "digit",
}

const symbols = {
    integral: {
        inputType: inputTypes.aboveBelow,
        text: String.fromCharCode(parseInt('222B', 16)),
        category: symbolCategories.calculus,
    },
    sum: {
        inputType: inputTypes.aboveBelow,
        text: String.fromCharCode(parseInt('03A3', 16)),
        category: symbolCategories.calculus
    },
    root: {
        inputType: inputTypes.root,
        text: String.fromCharCode(parseInt('221A', 16)),
        category: symbolCategories.basic
    },
    multiply: {
        inputType: inputTypes.basic,
        category: symbolCategories.basic,
        text: ' x ',
        kind: symbolKinds.operator
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