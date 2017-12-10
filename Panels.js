$(document).ready(function() {
	$.getJSON("Panels.json", function(Panels) {
		
		for(let cou = 0; cou < Panels.length; cou++) {
			
			let title = Panels[cou].title;
			let image = Panels[cou].image;
			let link = Panels[cou].link;
			let description = Panels[cou].description;
			
			$("#Panels").append(`
				<div class="Panel">
					<div class="Panel-Margin-Box">
						 <div class="Panel-Content-Box">
						 	<a href="${link}"><div class="Panel-Image" style="background-image: url('${"PICS/" + image}')"></div></a>
							<a class="Panel-Title" href="${link}">${title}</a>
							<div class="Panel-Description">${description}</div>
						 </div>
					</div>
				</div>
			`);
			
		}
		
		resize_all();
		
		$(".Panel-Content-Box").mouseover(function() {
			$(this).find(".Panel-Image").stop().animate({
				width: $(this).find(".Panel-Image").height() * 1.51
			}, 500, function() {});
		});
		
		$(".Panel-Content-Box").mouseleave(function() {
			$(this).find(".Panel-Image").stop().animate({
				width: $(this).find(".Panel-Image").height()
			}, 500, function() {});
		});
		
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
		$(this).width($(this).parent().parent().width() * 1);
		$(this).height($(this).parent().parent().height() * 1);
	});
	
	$(".Panel-Title").each(function() {
		$(this).width($(this).parent().parent().width() * 2.25);
		$(this).css("margin-top", $(this).parent().parent().height() * 1.15);
	});
	
	$(".Panel-Description").each(function() {
		$(this).width($(this).parent().width() * 0.75);
		$(this).height($(this).parent().height() * 2.25);
		$(this).css("margin-left", $(this).parent().width() * 1.45);
	});
	
}