(function ($) {
    "use strict";

    /*----------------------------------------
	   Sticky Menu Activation
	------------------------------------------*/

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 150) {
			$('.header-sticky').addClass('sticky');
		} else {
			$('.header-sticky').removeClass('sticky');
		}
	});
	
	/*-----------------------------------------
		Off Canvas Mobile Menu
	-------------------------------------------*/

	$(".header-action-btn-menu").on('click', function () {
		$("body").addClass('fix');
		$(".mobile-menu-wrapper").addClass('open');
	});

	$(".offcanvas-btn-close,.offcanvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".mobile-menu-wrapper").removeClass('open');
    });

    /*-----------------------------------------
		Off Canvas Search
	-------------------------------------------*/

	$(".header-action-btn-search").on('click', function () {
		$("body").addClass('fix');
		$(".offcanvas-search").addClass('open');
	});

	$(".offcanvas-btn-close,.body-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".offcanvas-search").removeClass('open');
	});
	
	/*-----------------------------------------
		Off Canvas Mobile Menu
	-------------------------------------------*/

	$(".header-action-btn-cart").on('click', function () {
		$("body").addClass('fix');
		$(".cart-offcanvas-wrapper").addClass('open');
	});

	$(".offcanvas-btn-close,.offcanvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".cart-offcanvas-wrapper").removeClass('open');
    });
    
    /*----------------------------------------
		Responsive Mobile Menu
	------------------------------------------*/

	//Variables
	var $offCanvasNav = $('.mobile-menu, .category-menu'),
	$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();

	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
	var $this = $(this);
		if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length){
				$this.parent('li').removeClass('active');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('active');
				$this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.siblings('ul').slideDown();
			}
		}
	});
    
	/*----------------------------------------*/
	/*  Lightgallery Active
	/*----------------------------------------*/

	$(".popup-gallery").lightGallery({
		pager: false, // Enable/Disable pager
		thumbnail: false, // Enable thumbnails for the gallery
		fullScreen: true, // Enable/Disable fullscreen mode
		zoom: true, // Enable/Disable zoom option
		rotateLeft: true, // Enable/Disable Rotate Left
		rotateRight: true, // Enable/Disable Rotate Right
	  });

	/*-----------------------------------------
		Sticky Sidebar Activation
	-------------------------------------------*/

	$('#sticky-sidebar').theiaStickySidebar({
		// Settings
		additionalMarginTop: 150
	});

	/*----------------------------------------*/
	/* Toggle Function Active
	/*----------------------------------------*/

	// showlogin toggle
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(500);
	});
	// showlogin toggle
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(500);
	});
	// showlogin toggle
	$('#cbox').on('click', function () {
		$('#cbox-info').slideToggle(500);
	});

	// Ship box toggle
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	/*---------------------------------
        Scroll Up
    -----------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
	scrollToTop();

	/*---------------------------------
        Partner Slider Active
    -----------------------------------*/
    $('#owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    dots: false,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    dots: true,
                    loop:false
                }
            }

       });


})(jQuery);

