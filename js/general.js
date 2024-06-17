var $ = jQuery.noConflict();

$(window).on('load', function () {
	$('.sf-field-taxonomy-homepage_dropdown ul li a[rel="migrate-print-to-the-cloud"]').click();
}).scroll(function () {
	if ($(this).scrollTop()) {
		$('.site-header').addClass('fixed');
	} else {
		$('.site-header').removeClass('fixed');
	}
});

document.addEventListener('StartAsyncLoading', function () {
	$('.carousel-brands-sldier').slick({
		speed: 2000,
		dots: false,
		autoplay: true,
		arrows: false,
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1650,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1550,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	});
});

$(document).ready(function () {
	$('.related-resources-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$('.related-pillar-pages-sldier').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$('.related-posts-sldier').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$('.latest-resources-sldier').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$('.testimonials-slider').slick({
		speed: 2000,
		dots: false,
		autoplay: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.resources-slider').slick({
		speed: 2000,
		dots: true,
		autoplay: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.tabbed-slide').slick({
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false, //fade: true,
		dots: true,
		draggable: false,
		asNavFor: '.slider-nav',
	});

	$('.slider-nav').slick({
		slidesToShow: $('.vertical-navigation-slider .slider-item.slider-for .slick-slide:not(.slick-cloned)').length,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		width: true,
		draggable: false,
		focusOnSelect: true,
	});

	$('a[data-slide]').click(function (e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.slider-nav').slick('slickGoTo', slideno - 1);
	});

	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		css3animation: 'animated fadeInLeft',
		removeHashfrmUrl: true,
		closed: 'accordion', // Start closed if in accordion view
		activate: function (event) {
			// Callback function if tab is switched
		},
	});

	$('.resp-tabs-list .resp-tab-item, .resp-tabs-container > li').on('click', function () {
		$('.tabbed-slide').slick('refresh');
	});

	$('.resp-accordion').on('click', function () {
		$('.tabbed-slide').slick('refresh');
	});

	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
		},
	});

	$(function () {
		$('.accordion__title').on('click', function (e) {
			e.preventDefault();
			var $this = $(this);

			if (!$this.hasClass('accordion-active')) {
				$('.accordion__content').slideUp(400);
				$('.accordion__title').removeClass('accordion-active');
				$('.accordion__arrow').removeClass('accordion__rotate');
			}

			$this.toggleClass('accordion-active');
			$this.next().slideToggle();
			$('.accordion__arrow', this).toggleClass('accordion__rotate');
		});
	});

	$(function () {
		$('.accordion__titles').on('click', function (e) {
			e.preventDefault();
			var $this = $(this);

			if (!$this.hasClass('accordion-active')) {
				$('.accordion__content').slideUp(400);
				$('.accordion__title').removeClass('accordion-active');
				$('.accordion__arrow').removeClass('accordion__rotate');
			}

			$this.toggleClass('accordion-active');
			$this.next().slideToggle();
			$('.accordion__arrow', this).toggleClass('accordion__rotate');
		});
	});

	$(function () {
		$('.faq__accordion__title').on('click', function (e) {
			e.preventDefault();
			var $this = $(this),
				id = $this.parent().attr('id');

			if (!$this.hasClass('accordion-active')) {
				$('.accordion__content').slideUp(400);
				$('.faq__accordion__title').removeClass('accordion-active');
				$('.accordion__arrow').removeClass('accordion__rotate');
				$('.faq-image .faq-image-thumb').removeClass('active');
			}

			$this.toggleClass('accordion-active');
			$this.next().slideToggle();

			if ($('.faq__accordion__title.accordion-active').length > 0) {
				$('.faq-image .faq-image-thumb[data-id="' + id + '"]').toggleClass('active');
			}

			$('.accordion__arrow', this).toggleClass('accordion__rotate');
		});
	});

	$('#verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true,
	});

	let $searchToggle = $('.search-toggle'),
		$searchContainer = $('.search-container');

	$searchToggle.addClass('closed');

	$searchToggle.find('.search-icon').click(function (e) {
		e.preventDefault();

		if ($searchToggle.hasClass('closed')) {
			$searchToggle.removeClass('closed').addClass('opened');
			$searchContainer.addClass('opened');
			$('#search-terms').focus();
		} else {
			$searchToggle.removeClass('opened').addClass('closed');
			$searchContainer.removeClass('opened');
		}
	});
});

$('.custom-select').each(function () {
	var classes = $(this).attr('class'),
		id = $(this).attr('id'),
		name = $(this).attr('name'),
		template = '<div class="' + classes + '">';

	template += '<span class="custom-select-trigger">' + $(this).attr('placeholder') + '</span>';
	template += '<div class="custom-options">';

	$(this).find('option').each(function () {
		template += '<span class="custom-option ' + $(this).attr('class') + '" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
	});

	template += '</div></div>';

	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
});

$('.custom-option:first-of-type').hover(function () {
	$(this).parents('.custom-options').addClass('option-hover');
}, function () {
	$(this).parents('.custom-options').removeClass('option-hover');
});

$('.custom-select-trigger').on('click', function (event) {
	event.stopPropagation();
	$('html').one('click', function () {
		$('.custom-select').removeClass('opened');
	});

	$(this).parents('.custom-select').toggleClass('opened');
});

$('.custom-option').on('click', function () {
	$(this).parents('.custom-select-wrapper').find('select').val($(this).data('value'));
	$(this).parents('.custom-options').find('.custom-option').removeClass('selection');
	$(this).addClass('selection');
	$(this).parents('.custom-select').removeClass('opened');
	$(this).parents('.custom-select').find('.custom-select-trigger').text($(this).text());
});

(function ($) {
	$.fn.isOnScreen = function (test) {
		var height = this.outerHeight(),
			width = this.outerWidth();

		if (!width || !height) {
			return false;
		}

		var win = $(window),
			viewport = {
			top: win.scrollTop(),
			left: win.scrollLeft(),
		};

		viewport.right = viewport.left + win.outerWidth();
		viewport.bottom = viewport.top + win.outerHeight() / 0.5;

		var bounds = this.offset();

		bounds.right = bounds.left + width;
		bounds.bottom = bounds.top + height;

		var deltas = {
			top: viewport.bottom - bounds.top,
			left: viewport.right - bounds.left,
			bottom: bounds.bottom - viewport.top,
			right: bounds.right - viewport.left,
		};

		if (typeof test == 'function') {
			return test.call(this, deltas);
		}

		return deltas.top > 0 && deltas.left > 0 && deltas.right > 0 && deltas.bottom > 0;
	};
})(jQuery);

$(window).on('load', function () {
	$('.animation-box').each(function () {
		let $this = $(this);

		if ($this.isOnScreen()) {
			$this.addClass('onview');
			var _child = $this.find('.animation');

			if (_child.length) {
				$(function () {
					var el = _child,
						index = 0,
						timer = window.setInterval(function () {
							if (index < el.length) {
								el.eq(index++).addClass('onview');
							} else {
								window.clearInterval(timer);
							}
						}, 400);
				});
			}
		}
	});

	$('.stats-block, .stat-circle-sections, .case-Study-stats ').each(function () {
		if ($(this).isOnScreen()) {
			setTimeout(function () {
				$('#odometer1').html($('#odometer1').attr('data-odometer'));
				$('#odometer2').html($('#odometer2').attr('data-odometer'));
				$('#odometer3').html($('#odometer3').attr('data-odometer'));
				$('#odometer4').html($('#odometer4').attr('data-odometer'));
				$('#odometer5').html($('#odometer5').attr('data-odometer'));
				$('#odometer6').html($('#odometer6').attr('data-odometer'));
				$('#odometer7').html($('#odometer7').attr('data-odometer'));
				$('#odometer8').html($('#odometer8').attr('data-odometer'));
				$('#odometer9').html($('#odometer9').attr('data-odometer'));
				$('#odometer10').html($('#odometer10').attr('data-odometer'));
			}, 1000);
		}
	});
}).scroll(function () {
	$('.animation-box').each(function () {
		let $this = $(this);

		if ($this.isOnScreen()) {
			$this.addClass('onview');
			let _child = $this.find('.animation');

			if (_child.length) {
				$(function () {
					var el = _child,
						index = 0,
						timer = window.setInterval(function () {
							if (index < el.length) {
								el.eq(index++).addClass('onview');
							} else {
								window.clearInterval(timer);
							}
						}, 400);
				});
			}
		}
	});

	sticky_sidebar();

	$('.stats-block, .stat-circle-sections, .case-Study-stats ').each(function () {
		if ($(this).isOnScreen()) {
			setTimeout(function () {
				$('#odometer1').html($('#odometer1').attr('data-odometer'));
				$('#odometer2').html($('#odometer2').attr('data-odometer'));
				$('#odometer3').html($('#odometer3').attr('data-odometer'));
				$('#odometer4').html($('#odometer4').attr('data-odometer'));
				$('#odometer5').html($('#odometer5').attr('data-odometer'));
				$('#odometer6').html($('#odometer6').attr('data-odometer'));
				$('#odometer7').html($('#odometer7').attr('data-odometer'));
				$('#odometer8').html($('#odometer8').attr('data-odometer'));
				$('#odometer9').html($('#odometer9').attr('data-odometer'));
				$('#odometer10').html($('#odometer10').attr('data-odometer'));
			}, 1000);
		}
	});
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
	$('.your-class').slick('setPosition');
});

function equalHeight() {
	let $equalize = [
		$('.cards-with-top-image-equal'),
		$('.comparison-listing-equal'),
		$('.featured-resource-equal'),
		$('.item-equal'),
		$('.related-resources-equal'),
		$('.upcoming-events-equal'),
		$('.related-posts-equal'),
		$('.related-pillar-pages-equal'),
		$('.latest-resources-equal'),
		$('.cards-with-icon-desc'),
		$('.featured-solutions-wrap'),
		$('.newsletter-equal'),
		$('.past-events-webinars-equal'),
		$('.resource-page-equal'),
		$('.news-page-equal'),
	];

	for (let i = 0; i < $equalize.length; i++) {
		if ($equalize[i].length) {
			let maxHeight = 0;

			$equalize[i].css('height', '');
			$equalize[i].each(function (j, el) {
				let $equalizer_el = $(el);
				maxHeight = $(this).outerHeight(true) > maxHeight ? $equalizer_el.outerHeight(true) : maxHeight;
			});
			$equalize[i].height(maxHeight);
		}
	}
}

$(window).on('load', function () {
	equalHeight();

	let $featuredSolutionsSelect = $('.featured-solutions .sf-input-select'),
		$faqsSelect = $('.all-faqs .sf-input-select');

	if ( $featuredSolutionsSelect.length ) {
		$featuredSolutionsSelect.selectbox();
	}

	if ( $faqsSelect.length ) {
		$faqsSelect.selectbox();
	}

	$(document).on('click', '.sbHolder', function () {
		let $sbHolder = $('.sbHolder');

		$sbHolder.find('.sbOptions a').not(this).removeClass('dropdown-open');

		$(this).toggleClass('dropdown-open');

		if ( $featuredSolutionsSelect.length ) {
			setTimeout(function () {
				$featuredSolutionsSelect.selectbox();
			}, 1000);
		}

		if ( $faqsSelect.length ) {
			setTimeout(function () {
				$faqsSelect.selectbox();
			}, 1000);
		}
	}).on('mousedown', 'select[name="_sft_topics[]"]', function () {
		if ( $featuredSolutionsSelect.length ) {
			$featuredSolutionsSelect.selectbox();
		}

		if ( $faqsSelect.length ) {
			$faqsSelect.selectbox();
		}

		let $sbHolder = $('.sbHolder');

		$sbHolder.click();
	});

	var mobileView = window.matchMedia('(max-width: 991px)');

	if (mobileView.matches) {
		$('.pillar-nav-wrap ul li a').addClass('mobile-accordion');
		$('.pillar-content').attr('data-bs-spy', '');
	} else {
		$('.pillar-content').attr('data-bs-spy', 'scroll');
	}

	$('.pillar-nav-wrap ul li a.mobile-accordion').click(function (e) {
		e.preventDefault();
		var target_ = this.hash.substr(1);

		$('.pillar-nav-wrap ul li a.mobile-accordion').removeClass('active');
		$(this).addClass('active');

		if ($('#' + target_).length) {
			$('html, body').animate({
				scrollTop: $('#' + target_).offset().top - $('header').outerHeight() - 20,
			}, 1000);
			return false;
		}
	});
}).resize(function () {
	setTimeout(function () {
		equalHeight();
	}, 501);
	setTimeout(function () {
		equalHeight();
	}, 1001);

	sticky_sidebar();

	var mobileView = window.matchMedia('(max-width: 991px)');

	if (mobileView.matches) {
		$('.pillar-nav-wrap ul li a').addClass('mobile-accordion');
		$('.pillar-content').attr('data-bs-spy', '');
	} else {
		$('.pillar-content').attr('data-bs-spy', 'scroll');
		$('.pillar-nav-wrap ul li a').removeClass('mobile-accordion');
	}
});

function sticky_sidebar() {
	let $pillarContent = $('.pillar-content'),
		$pillarNavWrap = $('.pillar-nav-wrap');

	if ($pillarContent.length > 0) {
		var secTop = 270,
			mobileView_1024 = window.matchMedia('(max-width: 1024px)'),
			mobileView_1500 = window.matchMedia('(max-width: 1500px)');

		if (mobileView_1024.matches) {
			secTop = 140;
		}

		if (mobileView_1500.matches) {
			secTop = 180;
		}

		if (window.scrollY < $pillarContent.offset().top + $pillarContent.height() - $pillarNavWrap.outerHeight() - 180) {
			$pillarNavWrap.css({
				position: 'fixed',
				top: secTop + 'px',
			});
		} else {
			$pillarNavWrap.css({
				position: 'fixed',
				top: $pillarContent.offset().top + $pillarContent.height() - $pillarNavWrap.outerHeight() - window.scrollY - 90,
			});
		}
	}

	$('.pillar-nav-wrap ul li a.mobile-accordion').off('click').on('click', function (e) {
		e.preventDefault();
		var target_ = this.hash.substr(1);

		$('.pillar-nav-wrap ul li a.mobile-accordion').removeClass('active');
		$(this).addClass('active');

		if ($('#' + target_).length) {
			$('html, body').animate({
				scrollTop: $('#' + target_).offset().top - $('header').outerHeight() - 20,
			}, 1000);
			return false;
		}
	});
}

$(document).ajaxComplete(function () {
	$('.accordion__title').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass('accordion-active')) {
			$('.accordion__content').slideUp(400);
			$('.accordion__title').removeClass('accordion-active');
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass('accordion-active');
		$this.next().slideToggle();
		$('.accordion__arrow', this).toggleClass('accordion__rotate');
	});

	$('.accordion__titles').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass('accordion-active')) {
			$('.accordion__content').slideUp(400);
			$('.accordion__title').removeClass('accordion-active');
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass('accordion-active');
		$this.next().slideToggle();
		$('.accordion__arrow', this).toggleClass('accordion__rotate');
	});

	$('.faq__accordion__title').on('click', function (e) {
		e.preventDefault();
		var $this = $(this),
			id = $this.parent().attr('id');

		if (!$this.hasClass('accordion-active')) {
			$('.accordion__content').slideUp(400);
			$('.faq__accordion__title').removeClass('accordion-active');
			$('.accordion__arrow').removeClass('accordion__rotate');
			$('.faq-image .faq-image-thumb').removeClass('active');
		}

		$this.toggleClass('accordion-active');
		$this.next().slideToggle();
		$('.faq-image .faq-image-thumb[data-id="' + id + '"]').toggleClass('active');
		$('.accordion__arrow', this).toggleClass('accordion__rotate');
	});
});

$(window).on('load', function () {

	$('.content-with-filter-wrap h4').click(function (event) {
		event.preventDefault();
		event.stopPropagation();

		var currentSubMenu = $(this).closest('li').find('.sb-menu');

		if(!currentSubMenu.hasClass('active')){
			$('.sb-menu.active').removeClass('active');
			currentSubMenu.addClass('active');
		} else {
			$('.sb-menu.active').removeClass('active');
		}
		
		return false;
	});

	$(document).on('sf:ajaxstart', '.searchandfilter', function (e) {
		equalHeight();
	}).on('sf:ajaxfinish', '.searchandfilter', function (e) {
		equalHeight();

		let $pastEventsWebinars = $('.past-events-webinars');

		if ( $pastEventsWebinars.length ) {
			$('html, body').animate({
				scrollTop: $pastEventsWebinars.offset().top - $('header').outerHeight(),
			}, 100);
		}
	});
});

$('.footer-img-logo').appendTo('#footer-menu .footer-img-icon');