(function() {
  var determine, hasDetermined, isBrowser, isNodeJS;

  hasDetermined = false;

  isNodeJS = false;

  isBrowser = false;

  determine = function(nodeJS) {
    if (nodeJS == null) nodeJS = true;
    hasDetermined = true;
    isNodeJS = nodeJS;
    return isBrowser = !isNodeJS;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) determine();
  }

  if (!hasDetermined) determine(false);

  module.exports = {
    hasDetermined: hasDetermined,
    isNodeJS: isNodeJS,
    isBrowser: isBrowser
  };

}).call(this);
