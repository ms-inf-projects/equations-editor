import symbolDefinitions from './symbolsDefinitions.js'

var latexSymbols = {};
latexSymbols[symbolDefinitions.symbols.integral.code] = "\\int";
latexSymbols[symbolDefinitions.symbols.sum.code] = "\\sum";
latexSymbols[symbolDefinitions.symbols.root.code] = "\\sqrt";

export default {
    createSymbolComponent: function (inputType, uuid, symbol) {
        let component

        switch (inputType) {
            case symbolDefinitions.inputTypes.aboveBelow:
                component = createAboveBeloweSymbol(symbol)
                break;
            case symbolDefinitions.inputTypes.literal:
            case symbolDefinitions.inputTypes.operator:
            case symbolDefinitions.inputTypes.specialChar:
            case symbolDefinitions.inputTypes.basic:
                component = {
                    inputType: inputType,
                    symbol: symbol
                }
                break;
            case symbolDefinitions.inputTypes.root:
                component = createRootSymbol(symbol)
                break;
            default:
                return {}
        }

        component.uuid = uuid;
        return component;
    },

    processToLatex: function (equationObject) {
        return processEquetionInput(equationObject);
    }
};

// Components creation ------------------------------------
function createAboveBeloweSymbol(symbol) {
    return {
        inputType: symbolDefinitions.inputTypes.aboveBelow,
        symbol: symbol,
        upEqObject: {
            components: []
        },
        downEqObject: {
            components: []
        }
    }
}

function createRootSymbol(symbol) {
    return {
        inputType: symbolDefinitions.inputTypes.root,
        symbol: symbol,
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

function processComponent(component) {
    return processFunctions[component.inputType](component);
}

function processBasicSymbol(component) {
    return component.symbol;
}

function processAboveBelow(component) {
    let upInpt = processEquetionInput(component.upEqObject)
    let downInput = processEquetionInput(component.downEqObject)

    let output = symbolToLatex(component.symbol)

    if (downInput) output += `_{${downInput}}`;
    if (upInpt) output += `^{${upInpt}}`;

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