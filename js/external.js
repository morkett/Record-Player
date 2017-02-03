$(document).ready(function() {
$('#needle').click(function(){

  $(this).addClass("needle-on");
  setTimeout(function () {
  $("#needle").addClass("needle-shake");
    $('#record').addClass("spin").css("-webkit-animation-play-state", "running");
  }, 1000);

});


$("#player").click(function(){

  $("#needle").removeClass("needle-shake");
  setTimeout(function () {
  $("#needle").removeClass("needle-on");
  $('.spin').css("-webkit-animation-play-state", "paused");
}, 10);
});
});
