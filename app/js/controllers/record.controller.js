function RecordController($timeout){
  var controller = this;
  controller.canStart = false;
  controller.startSound = false;
  controller.startMusic = false;
  // controller.canShake = false;
  console.log('start-initial', controller.canStart);
  console.log('start-shake', controller.canStart);

  // controller.startShake = function() {
  //   $timeout(function() {
  //     controller.canShake = !controller.canShake;
  //     console.log('start-shake', controller.canShake);
  //   }, 1000);
  // };
  controller.toggleStart = function() {
    controller.canStart = !controller.canStart;
    controller.startSound = !controller.startSound;

    $timeout(function () {
      controller.startMusic = !controller.startMusic;
    }, 200);
    console.log('start-click-true', controller.canStart);
  };



  function init() {

  }


  init();
}



angular
  .module('RecordApp')
  .controller('RecordController', RecordController);
