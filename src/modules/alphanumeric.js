module.exports = {
    isLiteralSymbol: function (key) {
        if (/^[a-zA-Z0-9]{1}$/.test(key)) {
            return true;
        }

        return false
    },

    isBakcspaceOrDelete: function (keyCode) {
        if (keyCode == 8 || keyCode == 127)
            return true;

        return false;
    },

    isMathOperator: function (key) {
        // TODO true when one of: -,+,=,/,(,
    }
}