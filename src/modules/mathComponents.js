const symbolTypes = {
    literal: "literal",
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
}

export default {
    symbolTypes,

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
                component = createRootSymbol()
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

function createRootSymbol() {
    return {
        type: symbolTypes.root,
        symbol: '\u8730',
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

const latexSymbols = {
    '\u222B': "\\int",
    '\u03A3': "\\sum",
    '\u8730': "\\sqrt"
};

function symbolToLatex(symbol) {
    return latexSymbols[symbol]
}