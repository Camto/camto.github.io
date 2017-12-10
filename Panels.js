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
	square_panels();
	
});

$(window).resize(square_panels);

function square_panels() {
	$(".Panel").each(function() {
		$(this).height($(this).width());
	});
}