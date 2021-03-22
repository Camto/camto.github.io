$(document).ready(function() {
	Panels = [
		{
			"title": "calc=",
			"image": "calc.gif",
			"link": "calc/console",
			"description": "A neat little stack based programming language."
		},
		
		{
			"title": "Lad",
			"image": "Lad.png",
			"link": "Lad/Website/",
			"description": "Lad is a cool Discord bot that you can totally add to your server."
		},
		
		{
			"title": "cmic",
			"image": "cmic.png",
			"link": "cmic",
			"description": "READERADERE TEHEH CMICMICI"
		},
		
		{
			"title": "Other projects",
			"image": "Camto.png",
			"link": "https://github.com/Camto?tab=repositories",
			"description": "A list of all my GitHub repositories."
		}
	];
	
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