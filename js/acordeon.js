$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var hamb = $('.hamburger');
	var header = $('.header');
	var hambActive = false;
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHamburger();
	initParallax();
	initProgressBars();
	initAccordions();
	initLoaders();
	initMilestones();
    function initAccordions() {
        if ($('.accordion_btn').length) {
            var accs = $('.accordion_btn');
    
            accs.each(function () {
                var acc = $(this);
    
                acc.on('click', function () {
                    acc.toggleClass('active');
                    var panel = $(this).next('.collapse');
    
                    if (panel.hasClass('show')) {
                        panel.collapse('hide');
                    } else {
                        panel.collapse('show');
                    }
                });
            });
        }
    }
}); 