var Clash = (function() {
  var __version__ = "1.0.0";

  function onClick(elementId, callback) {
    document.getElementById(elementId).addEventListener("click", callback);
  }

  return {
    init: function() {
      onClick("welcome", function() {
        $$.app.showMessage("Welcome!");
      });
      onClick("version", function() {
        $$.app.showMessage("Version is: " + $$.ver);
      });
    },
    ver: __version__,
  };
})();
window.$$ = Clash;

document.addEventListener("DOMContentLoaded", $$.init);
