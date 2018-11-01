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
    }
};

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