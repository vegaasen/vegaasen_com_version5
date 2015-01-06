jQuery(function() {
  stickyNavigation();
  var controller = new ScrollMagic({
  // globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*1}
  });
  /* STAGE-2 */
  renderSceneLayer2(controller);
  renderSceneLayer3(controller);
  renderSceneLayer4(controller);
});

function renderSceneLayer2(controller) {
  console.log("Rendering Scene 2");
  renderSceneLayer2Pictures(controller);
  renderSceneLayer2Text(controller);
}

function renderSceneLayer2Pictures(controller) {
  var inScene = new ScrollScene({triggerElement: "#trigger-2-a", duration: 550})
  .setTween(TweenMax.staggerFromTo(".picture-me", 0.5, {left: (window.innerWidth+500)}, {left: 0, ease: Back.easeOut}, 0.15))
  .addTo(controller);
  var outScene = new ScrollScene({triggerElement: "#trigger-2-b", duration: 5500})
  .setTween(TweenMax.staggerFromTo(".picture-me", 0.5, {left: 0}, {left: (window.innerWidth+500), ease: Back.easeOut}, 0.15))
  .addTo(controller);
}

function renderSceneLayer2Text(controller) {
    var scene = new ScrollScene({triggerElement: "#trigger-2-b", duration: 650})
    .setTween(new TimelineMax ().add([TweenMax.fromTo(".me-description", 1, {'margin-top': 0}, {'margin-top': 200, ease: Linear.easeNone})]))
    .addTo(controller);
}

function renderSceneLayer3(controller) {
  console.log("Rendering Scene 3");
  renderSceneLayer3Parallax(controller);
  renderSceneLayer3Text(controller);
}

function renderSceneLayer3Parallax(controller) {
  new ScrollScene({triggerElement: ".layer-3", triggerHook: "onEnter", duration: $(window).height()*2})
  .setTween(TweenMax.from(".layer-3 > .parallax-background", 1, {top: "-60%", ease: Linear.easeNone}))
  .addTo(controller);
}

function renderSceneLayer3Text(controller) {
  var scene = new ScrollScene({triggerElement: ".layer-3", triggerHook: "onEnter", duration: 2000})
  .setTween(new TimelineMax ().add([TweenMax.fromTo(".layer-3 .p-body", 1, {'margin-top': 0}, {'margin-top': 400, ease: Linear.easeNone})]))
  .addTo(controller);
}

function renderSceneLayer4(controller) {
  console.log("Rendering Scene 4");
  renderSceneLayer4Parallax(controller);
  renderSceneLayer4Picture(controller);
}

function renderSceneLayer4Parallax(controller) {
  new ScrollScene({triggerElement: ".layer-4", triggerHook: "onEnter", duration: 2000})
  .setTween(TweenMax.fromTo(".layer-4 > .parallax-background", 1, {opacity: 1}, {top: "-40%", opacity: 0.4, ease: Linear.easeNone}))
  .addTo(controller);
}

function renderSceneLayer4Picture(controller) {
  new ScrollScene({triggerElement: ".layer-4 .heart", triggerHook: "onEnter", duration: 5000})
  .setTween(TweenMax.staggerFromTo(".layer-4 .heart", 1, {'margin-top': 400}, {'margin-top': 100, ease: Back.easeOut}, 0.15))
  .addTo(controller);
}

/* !parallax config not below this line! */

function stickyNavigation() {

}
