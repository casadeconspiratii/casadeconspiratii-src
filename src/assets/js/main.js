$(document).ready(function() {

	if ($(window).width() >= 768) {
		$('html, body').mousewheel(function(e, delta) {
			this.scrollLeft -= (delta);
			e.preventDefault();
		});
	}
	else {
		return false;
	}

	$(".profile__koleroo").hover(function(){
    $(".profile__vifor--bio").css("opacity", "1");
    $(".profile__vifor img").css("opacity", ".2");
  }, function() {
    $(".profile__vifor--bio").css("opacity", "0");
    $(".profile__vifor img").css("opacity", "1");
  });

  $(".profile__vifor").hover(function(){
    $(".profile__koleroo--bio").css("opacity", "1");
    $(".profile__koleroo img").css("opacity", ".2");
  }, function() {
    $(".profile__koleroo--bio").css("opacity", "0");
    $(".profile__koleroo img").css("opacity", "1");
  });

});