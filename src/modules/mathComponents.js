import symbolDefinitions from "./symbolsDefinitions.js";

const SIZE_PERCENTAGE_DECREASE = 0.15;
const DEFAULT_SIZE_PERCENTAGE = 1;

var latexSymbols = {};
latexSymbols[symbolDefinitions.symbols.integral.text] = "\\int";
latexSymbols[symbolDefinitions.symbols.sum.text] = "\\sum";
latexSymbols[symbolDefinitions.symbols.root.text] = "\\sqrt";
latexSymbols[symbolDefinitions.symbols.multiply.text] = "\\times";
latexSymbols[symbolDefinitions.symbols.fraction.text] = "\\dfrac";

export default {
    createSymbolComponent: function (symbol, uuid, sizePercentage) {
        let newSizePercentage = sizePercentage - SIZE_PERCENTAGE_DECREASE;

        // TODO - pass some data object
        let component = componentConstructors[symbol.inputType](symbol, newSizePercentage, sizePercentage);

        component.sizePercentage = newSizePercentage;
        component.baseSize = {
            height: newSizePercentage * symbol.baseSize.height,
            width: newSizePercentage * symbol.baseSize.width
        };
        component.position = {
            x: 0,
            y: 0
        };
        component.symbol = symbol;
        component.uuid = uuid;

        component.width = symbol.baseSize.width * newSizePercentage;
        component.height = symbol.baseSize.height * newSizePercentage;
        component.innerBaseLine = (component.height / 2) * newSizePercentage;

        return component;
    },

    processToLatex: function (equationObject) {
        return processEquetionInput(equationObject);
    },

    initialEquationObject: function () {
        return createEquationInput(DEFAULT_SIZE_PERCENTAGE);
    }
};

// Components creation ------------------------------------
var componentConstructors = {};
componentConstructors[symbolDefinitions.inputTypes.aboveBelow] = createUpAndDownInputComponent;
componentConstructors[symbolDefinitions.inputTypes.fraction] = createUpAndDownInputComponent;
componentConstructors[symbolDefinitions.inputTypes.root] = createRootComponent;
componentConstructors[symbolDefinitions.inputTypes.specialChar] = createEmptyComponent;
componentConstructors[symbolDefinitions.inputTypes.basic] = createEmptyComponent;
componentConstructors[symbolDefinitions.inputTypes.index] = createIndexComponent;
componentConstructors[symbolDefinitions.inputTypes.brackets] = createBracketsComponent;

function createUpAndDownInputComponent(symbol, sizePercentage) {
    return {
        upEqObject: createEquationInput(sizePercentage),
        downEqObject: createEquationInput(sizePercentage)
    };
}

function createIndexComponent(symbol, newSizePercentage, sizePercentage) {
    let indexComponent;

    switch (symbol) {
        case symbolDefinitions.symbols.subscript:
            indexComponent = {
                downEqObject: createEquationInput(sizePercentage / 2)
            };
            break;
        case symbolDefinitions.symbols.superscript:
            indexComponent = {
                upEqObject: createEquationInput(sizePercentage / 2)
            };
            break;
        case symbolDefinitions.symbols.doublescript:
            indexComponent = createUpAndDownInputComponent(symbol, sizePercentage / 2);
            break;
        default:
            console.warn("createIndexComponent called with invalid argument");
    }

    indexComponent.mainEqObject = createEquationInput(sizePercentage);
    return indexComponent;
}

function createBracketsComponent(symbol, newSizePercentage, sizePercentage) {
    return {
        mainEqObject: createEquationInput(sizePercentage)
    }
}

function createRootComponent(symbol, sizePercentage) {
    return {
        degreeEqObject: createEquationInput(sizePercentage / 1.5),
        baseEqObject: createEquationInput(sizePercentage)
    };
}

function createEmptyComponent() {
    return {};
}

function createEquationInput(sizePercentage) {
    return {
        components: [],
        width: symbolDefinitions.INPUT_BASE_SIZE * sizePercentage,
        height: symbolDefinitions.INPUT_BASE_SIZE * sizePercentage,
        sizePercentage: sizePercentage
    };
}

// Latex processing ----------------------------------------

var processFunctions = {};
processFunctions[symbolDefinitions.inputTypes.aboveBelow] = processAboveBelow;
processFunctions[symbolDefinitions.inputTypes.fraction] = processFraction;
processFunctions[symbolDefinitions.inputTypes.root] = processRoot;
processFunctions[symbolDefinitions.inputTypes.specialChar] = processBasicSymbol;
processFunctions[symbolDefinitions.inputTypes.basic] = processBasicSymbol;
processFunctions[symbolDefinitions.inputTypes.index] = processIndex;
processFunctions[symbolDefinitions.inputTypes.brackets] = processBrackets;

function processEquetionInput(equationInput) {
    if (equationInput == null) return null;

    return equationInput.components.map(x => processComponent(x)).join("");
}

function processComponent(component) {
    return processFunctions[component.symbol.inputType](component);
}

function processBasicSymbol(component) {
    let latex = symbolToLatex(component.symbol);

    if (component.symbol.specialParsing) {
        return ` ${latex} `;
    }

    return latex;
}

function processAboveBelow(component) {
    let upInpt = processEquetionInput(component.upEqObject);
    let downInput = processEquetionInput(component.downEqObject);

    let output = symbolToLatex(component.symbol);

    if (downInput) output += `_{${downInput}}`;
    if (upInpt) output += `^{${upInpt}}`;

    return output + " ";
}

function processIndex(component) {
    return processEquetionInput(component.mainEqObject) + processAboveBelow(component);
}

function processFraction(component) {
    let upInpt = processEquetionInput(component.upEqObject);
    let downInput = processEquetionInput(component.downEqObject);

    let output = symbolToLatex(component.symbol);

    output += `{${upInpt}}`;
    output += `{${downInput}}`;

    return output + " ";
}

function processRoot(component) {
    let degreeInput = processEquetionInput(component.degreeEqObject);
    let baseInput = processEquetionInput(component.baseEqObject);

    let output = symbolToLatex(component.symbol);

    if (degreeInput) output += `[${degreeInput}]`;
    if (baseInput) output += `{${baseInput}}`;

    return output + " ";
}

function processBrackets(component) {
    let openingBracket = component.symbol.text.substring(0, 1)
    let closingBracket = component.symbol.text.substring(1, 2)

    let mainInput = processEquetionInput(component.mainEqObject)

    // TODO - consider using /big based on component height
    return `${openingBracket}${mainInput}${closingBracket}`
}

function symbolToLatex(symbol) {
    if (symbol.specialParsing) {
        return latexSymbols[symbol.text];
    }

    if (symbol.kind == symbolDefinitions.symbolKinds.operator) {
        return ` ${symbol.text} `;
    }

    return symbol.text;
}