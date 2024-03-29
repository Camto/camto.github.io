$(document).ready(function() {
	resize_all();
	
	$(".Panel-Content-Box").mouseover(function() {
		$(this).find(".Panel-Image").stop().animate({
			width: $(this).parent().width() * 1.51,
			height: $(this).parent().height() * 1.2
		}, 200, function() {});
	});
	
	$(".Panel-Content-Box").mouseleave(function() {
		$(this).find(".Panel-Image").stop().animate({
			width: $(this).parent().width(),
			height: $(this).parent().height()
		}, 200, function() {});
	});
});

$(window).resize(resize_all);

function resize_all() {
	square_panels();
	resize_panel_content();
}

function square_panels() {
	$(".Panel").each(function() {
		$(this).height($(this).width());
	});
}

function resize_panel_content() {
	
	$(".Panel-Image").each(function() {
		$(this).width($(this).parent().parent().width());
		$(this).height($(this).parent().parent().height());
	});
	
	$(".Panel-Title").each(function() {
		$(this).width($(this).parent().parent().width() * 2.25);
		$(this).css("margin-top", $(this).parent().parent().height() * 1.25);
	});
	
	$(".Panel-Description").each(function() {
		$(this).width($(this).parent().width() * 0.75);
		$(this).height($(this).parent().height() * 2.25);
		$(this).css("margin-left", $(this).parent().width() * 1.45);
	});
	
}