const symbolTypes = {
    literal: "literal",
    aboveBelow: "aboveBelow",
    specialChar: "specialChar",
    root: "root",
}

module.exports = {
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

// Components creation

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
        degreeEqObject: {
            components: []
        },
        baseEqObject: {
            components: []
        }
    }
}

// Latex processing

// TODO - handle with map of functions
function processComponent(component) {
    switch (component.type) {
        case symbolTypes.aboveBelow:
            return processAboveBelow(component);

        case symbolTypes.root:

            break;

        case symbolTypes.literal:
            return component.symbol;

        default:
            return ""
    }
}

function processAboveBelow(component) {
    let upInpt = processEquetionInput(component.upEqObject)
    let downInput = processEquetionInput(component.downEqObject)

    let output = symbolToLatex(component.symbol)

    if (downInput) {
        output += `_{${downInput}}`;
    }

    if (upInpt) {
        output += `^{${upInpt}}`;
    }

    return output + " ";
}

function processEquetionInput(equationInput) {
    if (equationInput == null) return null

    return equationInput.components.map(x => processComponent(x)).join('');
}

// const latexSymbols = {
//   ''
// },

// TODO - handle with map
function symbolToLatex(symbol) {

    switch (symbol) {
        case '\u222B':
            return "\\int"
        case '\u03A3':
            return "\\sum"
        default:
            return ""
    }
}