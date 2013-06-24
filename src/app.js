$$.app = (function() {
  return {
    showMessage: function(message) {
      document.getElementById("message").innerHTML = message;    
    }
  }
})();
