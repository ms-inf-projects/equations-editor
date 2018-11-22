import symbolDefinitions from './symbolsDefinitions.js'

var latexSymbols = {};
latexSymbols[symbolDefinitions.symbols.integral.code] = "\\int";
latexSymbols[symbolDefinitions.symbols.sum.code] = "\\sum";
latexSymbols[symbolDefinitions.symbols.root.code] = "\\sqrt";

export default {
    createSymbolComponent: function (symbol, uuid) {
        let component

        switch (symbol.inputType) {
            case symbolDefinitions.inputTypes.aboveBelow:
                component = createAboveBeloweComponent()
                break;
            case symbolDefinitions.inputTypes.root:
                component = createRootComponent()
                break;
            default:
                component = {}
        }

        component.symbol = symbol
        component.uuid = uuid;

        console.log(component)

        return component;
    },

    processToLatex: function (equationObject) {
        return processEquetionInput(equationObject);
    }
};

// Components creation ------------------------------------
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

// Latex processing ----------------------------------------

var processFunctions = {}
processFunctions[symbolDefinitions.inputTypes.aboveBelow] = processAboveBelow;
processFunctions[symbolDefinitions.inputTypes.root] = processRoot;
processFunctions[symbolDefinitions.inputTypes.literal] = processBasicSymbol;
processFunctions[symbolDefinitions.inputTypes.operator] = processBasicSymbol;
processFunctions[symbolDefinitions.inputTypes.specialChar] = processBasicSymbol;

function processEquetionInput(equationInput) {
    if (equationInput == null) return null

    return equationInput.components.map(x => processComponent(x)).join('');
}

// TODO - fix Latex processing
function processComponent(component) {
    console.log(component)
    return processFunctions[component.symbol.inputType](component);
}

function processBasicSymbol(component) {
    return component.symbol.text;
}

function processAboveBelow(component) {
    let upInpt = processEquetionInput(component.upEqObject)
    let downInput = processEquetionInput(component.downEqObject)

    let output = symbolToLatex(component.symbol.text)

    if (downInput) output += `_{${downInput}}`;
    if (upInpt) output += `^{${upInpt}}`;

    return output + " ";
}

function processRoot(component) {
    let degreeInput = processEquetionInput(component.degreeEqObject)
    let baseInput = processEquetionInput(component.baseEqObject)

    let output = symbolToLatex(component.symbol.text)

    if (degreeInput) output += `[${degreeInput}]`;
    if (baseInput) output += `{${baseInput}}`;

    return output + " ";
}

function symbolToLatex(component) {
    switch (component.inputType) {
        case this.inputTypes.literal:
        case this.inputTypes.operator:
            return component.text
        default:
            return utf8SymbolToLatex(component.symbol)
    }
}

function utf8SymbolToLatex(symbol) {
    let num = symbol.charCodeAt(0);
    let hexString = num.toString(16);

    let zeros = "0".repeat(4 - hexString.length)
    hexString = zeros + hexString.toUpperCase()

    return latexSymbols[hexString]
}