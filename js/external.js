$(document).ready(function() {

  $(".btn-off").hide();
$('.btn-on').click(function(){

  $("#needle").addClass("needle-on");
  $(".shadow").addClass("shadow-rotate");
  $("p").hide();
  $("#needle").css("background","transparent");
  $('.btn-on').hide();

  setTimeout(function () {
  $("#needle").addClass("needle-shake");
  $(".shadow").addClass("shadow-shake");
    $('#record').addClass("spin").css("-webkit-animation-play-state", "running");
    $('.play-1').trigger("play");
  }, 1000);
  setTimeout(function () {
    $('.play-2').trigger("play");
    $('.btn-off').show();
  }, 2000);


});


$(".btn-off").click(function(){

  $("#needle").removeClass("needle-shake");
  $(".shadow").removeClass("shadow-shake");
  $('.btn-off').hide();

  setTimeout(function () {
  $("#needle").removeClass("needle-on");
  $(".shadow").removeClass("shadow-rotate");
  $('.play-2').trigger("pause");
}, 10);
setTimeout(function () {
  $('.play-1').trigger("pause");
$('.spin').css("-webkit-animation-play-state", "paused");

$('.btn-on').show();
}, 1000);


});
});
