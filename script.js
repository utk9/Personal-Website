var collision = function($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;
	
	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}

var my = function(){
	alert("clicked");
}



var main = function(){


	var imgFromTop = ($('body').height()/2) - ($(".jumbotron img").height());
	$("#image_row").css('top', imgFromTop+'px');

	$(window).scroll(function(){
		var st;
    //if ($(this).scrollTop()/10 )
    st = $(this).scrollTop()/1000;
    if (st<=0.8){
    	$(".nav-bar").css('background-color', 'rgba(0, 0, 0,' + st + ')');
    }

});

	$('#portfolio_link').click(function(){
		$('html,body').animate({
			scrollTop: $(".portfolio-container").offset().top},
			'slow');
    });

    $('#about_link').click(function(){
		$('html,body').animate({
			scrollTop: 0},
			'slow');
    });

    $('#contact_link').click(function(){
		$('html,body').animate({
			scrollTop: document.body.scrollHeight},
			'slow');
    });




};









$(document).ready(main);