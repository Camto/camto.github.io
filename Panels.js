$(document).ready(function() {
	
	for(let cou = 0; cou < 20; cou++) {
		$("#Panels").append(`
			<div class="Panel">
				<div class="Panel-Margin-Box">
					 <div class="Panel-Content-Box"></div>
				</div>
			</div>
		`);
	}
	resize_all();
	
});

$(window).resize(resize_all);

function resize_all() {
	square_panels();
	resize_panel_box();
}

function square_panels() {
	$(".Panel").each(function() {
		$(this).height($(this).width());
	});
}

function resize_panel_box() {
	$(".Panel-Content-Box").each(function() {
		//$(this).width($(this).height() * 2);
		
	});
}