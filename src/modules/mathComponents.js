import symbolDefinitions from './symbolsDefinitions.js'

var latexSymbols = {};
latexSymbols[symbolDefinitions.symbols.integral.text] = "\\int";
latexSymbols[symbolDefinitions.symbols.sum.text] = "\\sum";
latexSymbols[symbolDefinitions.symbols.root.text] = "\\sqrt";
latexSymbols[symbolDefinitions.symbols.multiply.text] = "\\times";
latexSymbols[symbolDefinitions.symbols.fraction.text] = "\\dfrac";

export default {
    createSymbolComponent: function (symbol, uuid) {
        let component = componentConstructors[symbol.inputType]()

        component.symbol = symbol
        component.uuid = uuid;

        return component;
    },

    processToLatex: function (equationObject) {
        return processEquetionInput(equationObject);
    }
};

// Components creation ------------------------------------
var componentConstructors = {}
componentConstructors[symbolDefinitions.inputTypes.aboveBelow] = createAboveBeloweComponent;
componentConstructors[symbolDefinitions.inputTypes.fraction] = createAboveBeloweComponent;
componentConstructors[symbolDefinitions.inputTypes.root] = createRootComponent;
componentConstructors[symbolDefinitions.inputTypes.specialChar] = createEmptyComponent;
componentConstructors[symbolDefinitions.inputTypes.basic] = createEmptyComponent;

function createAboveBeloweComponent() {
    return {
        upEqObject: {
            components: []
        },
        downEqObject: {
            components: []
        }
    }
}

function createRootComponent() {
    return {
        degreeEqObject: {
            components: []
        },
        baseEqObject: {
            components: []
        }
    }
}

function createEmptyComponent() {
    return {};
}

// Latex processing ----------------------------------------

var processFunctions = {}
processFunctions[symbolDefinitions.inputTypes.aboveBelow] = processAboveBelow;
processFunctions[symbolDefinitions.inputTypes.fraction] = processFraction;
processFunctions[symbolDefinitions.inputTypes.root] = processRoot;
processFunctions[symbolDefinitions.inputTypes.specialChar] = processBasicSymbol;
processFunctions[symbolDefinitions.inputTypes.basic] = processBasicSymbol;

function processEquetionInput(equationInput) {
    if (equationInput == null) return null

    return equationInput.components.map(x => processComponent(x)).join('');
}

function processComponent(component) {
    return processFunctions[component.symbol.inputType](component);
}

function processBasicSymbol(component) {
    let latex = symbolToLatex(component.symbol)

    if (component.symbol.specialRender) {
        return ` ${latex} `
    }

    return latex
}

function processAboveBelow(component) {
    let upInpt = processEquetionInput(component.upEqObject)
    let downInput = processEquetionInput(component.downEqObject)

    let output = symbolToLatex(component.symbol)

    if (downInput) output += `_{${downInput}}`;
    if (upInpt) output += `^{${upInpt}}`;

    return output + " ";
}

function processFraction(component) {
    let upInpt = processEquetionInput(component.upEqObject)
    let downInput = processEquetionInput(component.downEqObject)

    let output = symbolToLatex(component.symbol)

    if (downInput) output += `{${downInput}}`;
    if (upInpt) output += `{${upInpt}}`;

    return output + " ";
}

function processRoot(component) {
    let degreeInput = processEquetionInput(component.degreeEqObject)
    let baseInput = processEquetionInput(component.baseEqObject)

    let output = symbolToLatex(component.symbol)

    if (degreeInput) output += `[${degreeInput}]`;
    if (baseInput) output += `{${baseInput}}`;

    return output + " ";
}

function symbolToLatex(symbol) {
    if (symbol.specialRender) {
        return latexSymbols[symbol.text]
    }

    return symbol.text
}