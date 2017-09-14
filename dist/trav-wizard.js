$(function () {
	$('.next-step').click(function () {
		$('.wizard .nav-tabs li.active').next().find('a[data-toggle="tab"]').click();
	});

	$('.prev-step').click(function () {
		$('.wizard .nav-tabs li.active').prev().find('a[data-toggle="tab"]').click();
	});
});
