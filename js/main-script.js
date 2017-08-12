//resume-section event flags (true if closed)
var about_flag = true;
var education_flag = true;
var skills_flag = true;
var academic_flag = true;
var experience_flag = true;

$(document).ready(function() {
	// intro fades
	$('#myName').hide().fadeIn(2000);
	$('#header-info').hide().fadeIn(3000);
	$('#resume').hide().fadeIn(3500);

	// element shading
	$('#header-info p, a').hover(function () {
		$(this).addClass('element-shadow');
	}, function () {
		$(this).removeClass('element-shadow');
		$(this).addClass('element-shadow-reverse');
	});
	
	// drop down header info
	$('#contact').click(function () {
		$('#contact-info').animate({opacity: 'show', height: 'show'}, 600);
		$('#myName, #header-info').mouseleave(function () {
			$('#contact-info').animate({opacity: 'hide', height: 'hide'}, 800);
		});
	});
	
	$('#project').click(function () {
		$('#project-info').animate({opacity: 'show', height: 'show'}, 800);
		$('#myName, #header-info').mouseleave(function () {
			$('#project-info').animate({opacity: 'hide', height: 'hide'}, 800);
		});
	});

	// resume drop downs (will toggle the dropDown/raiseUp functions)
	var dropDown = function (contentId, dropTime) {
		contentId.stop(true);
		contentId.children('hr').stop(true);
		contentId.prev().stop(true);

		contentId.children('hr').removeClass('ghost-line-retract');
		contentId.children('hr').addClass('line-expand element-shadow');
		contentId.prev().removeClass('section-title');
		contentId.prev().addClass('section-title-focused');
		contentId.css("visibility", "visible");
		contentId.animate({opacity: 'show', height: 'show'}, dropTime);
	};
	var raiseUp = function (contentId, raiseTime) {
		contentId.stop(true);
		$(this).children('hr').stop(true);
		contentId.prev().stop(true);

		contentId.prev().removeClass('section-title-focused');
		contentId.prev().addClass('section-title');
		contentId.animate({opacity: 'hide', height: 'hide'}, raiseTime);
		$(this).children('hr').removeClass('line-expand');
		$(this).children('hr').addClass('line-retract');
	};


	$('#about').click(function () {
		if (about_flag) {
			dropDown($('#about .resume-content'), 800);
		} else {
			raiseUp($('#about .resume-content'), 800);
		}
		about_flag = !about_flag;
	});

	$('#education').click(function () {
		if (education_flag) {
			dropDown($('#education .resume-content'), 800);
		} else {
			raiseUp($('#education .resume-content'), 500);
		}
		education_flag = !education_flag;
	});
	
	$('#skills').click(function () {
		if (skills_flag) {
			dropDown($('#skills .resume-content'), 800);
		} else {
			raiseUp($('#skills .resume-content'), 800);
		}
		skills_flag = !skills_flag;
	});

	$('#academic').click(function () {
		if (academic_flag) {
			dropDown($('#academic .resume-content'), 800);
		} else {
			raiseUp($('#academic .resume-content'),800);
		}
		academic_flag = !academic_flag;
	});

	$('#experience').click(function () {
		if (experience_flag) {
			dropDown($('#experience .resume-content'), 800);
		} else {
			raiseUp($('#experience .resume-content'), 800);
		}
		experience_flag = !experience_flag;
	});
	
	/******************** make lines expand ***************************/
	// check if a tab is open before we retract a line 
	// this is implemented in the methods following it
	var thisIsNotOpen = function (sectionId) {
		switch (sectionId) {
			case 'about':
				return about_flag;
			case 'education':
				return education_flag;
			case 'skills':
				return skills_flag;
			case 'academic':
				return academic_flag;
			case 'experience':
				return experience_flag;
		}
	}

	// line animation for the head of the website (Name, contact, project)
	$('#myName, #header-info, #contact-info, #project-info').hover(function () {

		$('#header-info').children('hr').removeClass('line-retract');
		$('#header-info').children('hr').addClass('line-expand');
	}, function () {
		$('#header-info').children('hr').removeClass('line-expand');
		$('#header-info').children('hr').addClass('line-retract');
	});

	$('.resume-section').hover(function () {
		$(this).children('p').removeClass('section-title');
		$(this).children('p').addClass('section-title-focused');
		$(this).children('hr').removeClass('line-retract');
		$(this).children('hr').addClass('line-expand');
	}, function () {
		if (thisIsNotOpen($(this).attr('id'))) {
			$(this).children('p').removeClass('section-title-focused');
			$(this).children('p').addClass('section-title');
			$(this).children('hr').removeClass('line-expand');
			$(this).children('hr').addClass('line-retract');
		}
	});

	// this method added for the special line at the bottom of the page
	$('#experience').hover(function () {
		$(this).children('p').removeClass('section-title');
		$(this).children('p').addClass('section-title-focused');
		$(this).children('hr').removeClass('ghost-line-retract');
		$(this).children('hr').addClass('line-expand');
	}, function () {
		if (thisIsNotOpen($(this).attr('id'))) {
			$(this).children('p').removeClass('section-title-focused');
			$(this).children('p').addClass('section-title');
			$(this).children('hr').removeClass('line-expand');
			$(this).children('hr').addClass('ghost-line-retract');
		}
	});
});