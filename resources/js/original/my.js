var ele;
var eleOriginalPositionHeight;

function destroyLessCache(pathToCss) {
  var host = window.location.host;
  var protocol = window.location.protocol;
  var keyPrefix = protocol + '//' + host + pathToCss;

  for (var key in window.localStorage) {
    if (key.indexOf(keyPrefix) === 0) {
      console.log("Removing cache for " + keyPrefix + "in pathToCss: " + pathToCss);
      delete window.localStorage[key];
    }
  }
}

function onScrollLocation(id, eleNum) {
  if(ele===undefined) {
    var element = document.getElementById(id);
    if(element!==undefined) {
      ele = element;
      eleOriginalPositionHeight = ele.offsetHeight;
    } else {
      console.log("Element {" + id + "} is undefined.")
    }
  }
}

function onScrollLocationHit(clazz, callback, reset) {
  if(window.pageYOffset>=eleOriginalPositionHeight) {
    callback(ele, clazz);
  } else {
    reset(ele, clazz);
  }
}

function addClickEvent(ele, what) {
  ele.addEventListener(
    'click',
    what,
    false
  );
}

window.onload = function() {
  onScrollLocation("heading", 0);
  var s = skrollr.init();
}

window.onscroll = function() {
  onScrollLocationHit("switched",
  function(what, clazz) {
    classes = what.classList;
    if(!classes.contains(clazz)) {
      classes.add(clazz);
    }
    what.addEventListener('click',
    function() {
      window.scroll(0,0);
    },
    false)
  },
  function (what, clazz) {
    classes = what.classList;
    if(classes.contains(clazz)) {
      classes.remove(clazz);
    }
  });
}
