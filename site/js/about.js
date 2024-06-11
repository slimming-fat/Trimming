$(document).ready(function() {

	$('.about_module').off('click').on('click', function() {
		$('.about_module').removeClass('about_active');
		$(this).addClass('about_active');
		var moduleId = $(this).attr('id');
		var container = $('#about_content');
		container.empty();
		if ('about_sol_div' == moduleId) {
			loadResult(container);
		} else if ('about_bug_div' == moduleId) {
			loadRun(container);
		} else{
			loadDownload(container);
		}
	});

});


function loadDownload(container) {
	container.load('download.html');
}

function loadRun(container) {
	container.load('run.html');
}

function loadResult(container) {
	container.load('result.html');
}
