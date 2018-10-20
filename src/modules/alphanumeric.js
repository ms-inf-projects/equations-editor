module.exports = {
<<<<<<< HEAD
    isLiteralSymbol: function (key) {
        if (/^[a-zA-Z0-9]{1}$/.test(key)) {
            return true;
        }
=======
    isLiteralSymbol: function (keyCode) {
        // TODO - while holding shit it is possible to enter !, @ etc.
        // 48-57 -> 0-9, 65-90 -> A-Z, 97-122 -> a-z
        if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
            return true
>>>>>>> 5750dfaa699945fa8775998110d10fb74a254624

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