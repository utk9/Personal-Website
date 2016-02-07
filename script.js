
var scrollToAbout = function(){
	$('html,body').animate({
			scrollTop: $(".about").offset().top},
			'slow');
}

var scrollToPortfolio = function(){
	$('html,body').animate({
			scrollTop: $(".portfolio").offset().top},
			'slow');
}

var scrollToContact = function(){
	$('html,body').animate({
			scrollTop: $(".contact").offset().top},
			'slow');
}

var main = function(){

	var minHeight = $(".jumbotron h3").offset().top + $(".jumbotron h3").height() + 140;

	$(".jumbotron").css("min-height", minHeight);

	var st = $(this).scrollTop()/1000;
	if (st>0.85) st = 0.85;
	$(".navbar").css('background-color', 'rgba(0, 0, 0,' + st + ')');

	$(window).scroll(function(){
		st = $(this).scrollTop()/1000;
		if (st<=0.85){
			$(".navbar").css('background-color', 'rgba(0, 0, 0,' + st + ')');
		}
	});
	

	$(".content-container").hover(function(){
		$(this).find(".myOverlay").css("display", "block");
	}, function(){
		$(this).find(".myOverlay").css("display", "none");
	});

	$(".glyphicon.glyphicon-chevron-left").click(function(){
		var c = $(this).parent().parent();
		c.carousel('prev');  
	});

	$(".glyphicon.glyphicon-chevron-right").click(function(){
		var c = $(this).parent().parent();
		c.carousel('next');  
	});
/*
	$("#myCarousel").swiperight(function() {  
    		  $(this).carousel('prev');  
    		  alert("swipe");
	    		});  
		   $("#myCarousel").swipeleft(function() {  
		      $(this).carousel('next');  
	   });
*/


};

$(document).ready(main);