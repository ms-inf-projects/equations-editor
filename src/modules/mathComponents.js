const symbolTypes = {
    literal: "literal",
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
}

const symbols = {
    integral: {
        type: symbolTypes.aboveBelow,
        code: '222B'
    },
    sum: {
        type: symbolTypes.aboveBelow,
        code: '03A3'
    },
    root: {
        type: symbolTypes.root,
        code: '221A'
    }
}

var latexSymbols = {};
latexSymbols[symbols.integral.code] = "\\int";
latexSymbols[symbols.sum.code] = "\\sum";
latexSymbols[symbols.root.code] = "\\sqrt";

export default {
    symbolTypes,
    symbols,

    createSymbolComponent: function (type, uuid, symbol) {
        let component

        switch (type) {
            case this.symbolTypes.aboveBelow:
                component = createAboveBeloweSymbol(symbol)
                break;
            case this.symbolTypes.literal:
                component = createLiteralSymbol(symbol)
                break;
            case this.symbolTypes.root:
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
        type: symbolTypes.aboveBelow,
        symbol: symbol,
        upEqObject: {
            components: []
        },
        downEqObject: {
            components: []
        }
    }
}

function createLiteralSymbol(symbol) {
    return {
        type: symbolTypes.literal,
        symbol: symbol
    }
}

function createRootSymbol(symbol) {
    return {
        type: symbolTypes.root,
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

function processEquetionInput(equationInput) {
    if (equationInput == null) return null

    return equationInput.components.map(x => processComponent(x)).join('');
}

const processFunctions = {
    aboveBelow: processAboveBelow,
    root: processRoot,
    literal: processLiteral
};

function processComponent(component) {
    return processFunctions[component.type](component);
}

function processLiteral(component) {
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

function symbolToLatex(symbol) {
    let num = symbol.charCodeAt(0);
    let hexString = num.toString(16);

    let zeros = "0".repeat(4 - hexString.length)
    hexString = zeros + hexString.toUpperCase()

    return latexSymbols[hexString]
}