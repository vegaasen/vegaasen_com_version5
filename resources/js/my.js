function destroyLessCache(pathToCss) { // e.g. '/css/' or '/stylesheets/'
 
  var host = window.location.host;
  var protocol = window.location.protocol;
  var keyPrefix = protocol + '//' + host + pathToCss;
  
  for (var key in window.localStorage) {
    if (key.indexOf(keyPrefix) === 0) {
      console.log("Removeing cache for " + keyPrefix + "in pathToCss: " + pathToCss);
      delete window.localStorage[key];
    }
  }
}

window.onload = function() {
  destroyLessCache("/resources/");
}