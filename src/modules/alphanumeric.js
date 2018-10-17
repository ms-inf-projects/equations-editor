module.exports = {
    isLiteralSymbol: function (keyCode) {
        // 48-57 -> 0-9, 65-90 -> A-Z, 97-122 -> a-z
        if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
            return true

        return false
    },

    isBakcspaceOrDelete: function (keyCode) {
        if (keyCode == 8 || keyCode == 127)
            return true;

        return false;
    }
}