$(document).ready(function() {

	$('#main_div').height($(window).height() - 65);
	$('#body_div').particleground({
		dotColor: '#657b7c',
		lineColor: '#657b7c'
	});

	$('#h2w_div').off('click').on('click', function() {
		$('.head_menu').removeClass('active');
		$("#About").addClass('active');
		var container = $('#main_div');
		loadAbout(container);
	});

	$('#diagnosis_div').off('click').on('click', function() {
		$('.head_menu').removeClass('active');
		$("#Diagnosis").addClass('active');
		var container = $('#main_div');
		loadDiagnosis(container);
	})

	var timer = setInterval(function() {
		loopClickUI();
	}, 80);


	$('.head_menu').off('click').on('click', function() {
		$('.head_menu').removeClass('active');
		$(this).addClass('active');

		var moduleId = $(this).attr('id');
		var container = $('#main_div');
		container.empty();
		if ('About' == moduleId) {
			loadAbout(container);
		} else if ('Diagnosis' == moduleId) {
			loadDiagnosis(container);
		}else{
			loadHome(container);
		}
	});

	$('#logo_img').off('click').on('click', function() {

	});

	function loadAbout(container){
		container.load('about.html');
	}
	function loadHome(container){
		container.load('home.html');
	}
	//
	function loadDiagnosis(container) {
		container.load('graph.html');
	}

	function loopClickUI() {
		var thisImg = $('#click_div .click_active');
		var nextImg = thisImg.next();
		if (nextImg.length == 0) {
			nextImg = $('#click_div img').first();
		}
		thisImg.removeClass('click_active');
		nextImg.addClass('click_active');
	}
	//table页显示后，调用下方js (table页面高度，主要方法就是页面内容加载后，使用计算tbody高度)

// 	$('#main_div').find('table').css('height', '0');
// 	$('#main_div').find('table').each(function() {
// 		var that = this;
// 		var captionHeight = 0;
// 		if ($(this).find('caption').length > 0) {
// 			$(this).find('caption').each(function() {
// 				captionHeight += $(this).outerHeight();
// 			});
// 		}
// 		$(that).find('tbody').height(0.9 * (($(that).parent().height() - $(that).find('thead').height() - captionHeight)));
// 	});
});
