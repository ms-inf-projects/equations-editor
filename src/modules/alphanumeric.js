module.exports = {
  isLiteralSymbol: function (key) {
    if (/^[a-zA-Z0-9]{1}$/.test(key)) {
      return true;
    }

    return false;
  },

  isDelete: function (keyCode) {
    return keyCode == 46;
  },

  isBackspace: function (keyCode) {
    return keyCode == 8;
  },

  isMathOperator: function (key) {
    // TODO true when one of: -,+,=,/,(,
  }
};