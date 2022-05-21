'use strict';

(function ($) {
    "use strict";

    /*------------------------------------------------------------------
    [Table of contents]
      1. my owl function
    2. smooth scroll
    3. custom input type number function
    4. custom input type select function
    5. email patern
    6. equalheight function
    7. pricing fixedtable function
    8. content to center banner section
    9. sticky header
    10. skew background width calculate function
    11. on screen function
    12. set logo function
    13. prelaoder load done then load wow
    14. preloader close button
    15. mega navigation menu init
    16. twitter api init
    17. client slider
    18. testimonial slider
    19. testimonial slider 2
    20. blog post gallery slider
    21. contact form init
    22. turn off autocomplete
    23. service block on hover class add
    24. video popup init
    25. Side Offset cart menu open
    26.	wow animation init
    27. my custom select init
    28. tab swipe indicator
    29. pricing matrix expand slider
    30. feature section prev class get function
    31. pricing expand function
    32. accordion add class "isActive" function
    33. click and go to current section init
    34. input number increase
    35. right click , ctrl+u and ctrl+shift+i disabled
    36. image dragable false setup
    37. ajaxchimp init
    38. wave animation use by parallax
    39. magnific modal popup
    40. tooltip init
    41. revulation hero init
    42. revulation carousel slider init
    43. shuffle letters
    44. XpeedStudio Maps
      -------------------------------------------------------------------*/

    /*==========================================================
                    1. my owl function
    ======================================================================*/

    $.fn.myOwl = function (options) {

        var settings = $.extend({
            items: 1,
            dots: false,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            autoplay: true,
            navText: ['', ''],
            margin: 0,
            stagePadding: 0,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navRewind: false,
            responsive: {},
            animateOut: '',
            animateIn: '',
            smartSpeed: 900,
            center: ''
        }, options);

        return this.owlCarousel({
            items: settings.items,
            loop: settings.loop,
            mouseDrag: settings.mouseDrag,
            touchDrag: settings.touchDrag,
            nav: settings.nav,
            navText: settings.navText,
            dots: settings.dots,
            margin: settings.margin,
            stagePadding: settings.stagePadding,
            autoplay: settings.autoplay,
            autoplayTimeout: settings.autoplayTimeout,
            autoplayHoverPause: settings.autoplayHoverPause,
            animateOut: settings.animateOut,
            animateIn: settings.animateIn,
            responsive: settings.responsive,
            navRewind: settings.navRewind,
            center: settings.center,
            smartSpeed: settings.smartSpeed
        });
    };

    /*==========================================================
                    2. smooth scroll
    ======================================================================*/
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    };

    /*==========================================================
                    3. custom input type number function
    ======================================================================*/
    $.fn.customNumber = function (options) {
        var settings = $.extend({
            plusIcon: '',
            minusIcon: ''
        }, options);

        this.append('<span class="add">' + settings.plusIcon + '</span>');
        this.append('<span class="sub">' + settings.minusIcon + '</span>');

        return this.each(function () {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                add = spinner.find('.add'),
                sub = spinner.find('.sub');

            input.parent().on('click', '.sub', function (event) {
                event.preventDefault();
                if (input.val() > parseInt(input.attr('min'), 10)) {
                    input.val(function (i, oldvalue) {
                        return --oldvalue;
                    });
                }
            });
            input.parent().on('click', '.add', function (event) {
                event.preventDefault();
                if (input.val() < parseInt(input.attr('max'), 10)) {
                    input.val(function (i, oldvalue) {
                        return ++oldvalue;
                    });
                }
            });
        });
    };

    /*==========================================================
                    4. custom input type select function
    ======================================================================*/
    $.fn.mySelect = function (options) {
        var $this = $(this),
            numberOfOptions = $(this).children('option');

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var styledSelect = $this.next('.select-styled');
        styledSelect.text($this.children('option').eq(0).text());

        var list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter(styledSelect);

        for (var i = 0; i < numberOfOptions.length; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo(list);
        }

        var listItems = list.children('li');

        styledSelect.on('click', function (e) {
            e.stopPropagation();
            $('.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('.select-options').fadeIn();
            });
            $(this).toggleClass('active').next('.select-options').toggle();
            $(this).parent().toggleClass('focus');
        });

        listItems.on('click', function (e) {
            e.stopPropagation();
            styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            list.hide();
            if ($(this).parent().parent().hasClass('focus')) {
                $(this).parent().parent().removeClass('focus');
            }
        });

        $(document).on('click', function () {
            styledSelect.removeClass('active');
            list.hide();
        });
    };

    /*==========================================================
                    5. email patern
    ======================================================================*/
    function email_pattern(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    /*==========================================================
                    6. equalheight function
    ======================================================================*/
    function equalHeight() {
        var pricingImage = $('.pricing-image'),
            pricingFeature = $('.pricing-feature-group');

        if ($(window).width() > 991) {
            pricingFeature.css('height', pricingImage.outerHeight());
        } else {
            pricingFeature.css('height', 100 + '%');
        }
    }

    /*==========================================================
                    7. pricing fixedtable function
        ======================================================================*/
    function fixedtabel() {

        var table = $('.xs-table');

        if (!($(window).width() > 576)) {
            if ($('.xs-table.fixed-column').length === 0) {
                var fixedCol = table.clone().insertBefore(table).addClass('fixed-column');
            }
        } else {
            $('.xs-table.fixed-column').remove();
        }
        var fixedCol = $('.xs-table.fixed-column');
        fixedCol.find('th:not(:first-child),td:not(:first-child)').remove();

        fixedCol.find('tr').each(function (i, elem) {
            $(this).height(table.find('tr:eq(' + i + ')').height());
        });
    };

    /*==========================================================
                    8. content to center banner section
    ======================================================================*/
    function centerContent() {
        var content = $('.contet-to-center > .container'),
            header = $('.header-transparent');

        if ($(window).width() > 991) {
            content.css('margin-top', header.outerHeight());
        } else {
            content.css('margin-top', 0 + 'px');
        }
    }

    /*==========================================================
                    9. sticky header
    ======================================================================*/
    function stickyHeader() {
        var mainheader = $('.nav-sticky'),
            height = mainheader.outerHeight(),
            scroll = $(document).scrollTop();
        $(window).on('load', function () {
            if ($(document).scrollTop() > height) {
                if (mainheader.hasClass('sticky-header')) {
                    mainheader.removeClass('sticky-header');
                } else {
                    mainheader.addClass('sticky-header');
                }
            }
        });
        $(window).on('scroll', function () {
            var scrolled = $(document).scrollTop(),
                header = $('.sticky-header');
            if (scrolled > scroll) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
            }
            if (header.attr('data-scroll-position') === 'top') {
                if (scrolled < scroll) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            }
            if (scrolled === 0) {
                mainheader.removeClass('sticky-header');
            } else {
                mainheader.addClass('sticky-header');
            }
            scroll = $(document).scrollTop();
        });
    }

    /*==========================================================
                    10. skew background width calculate function
    ======================================================================*/
    function skewBgWidthCalc() {
        var skewBg = $('.xs-banner.skew-bg'),
            width = $(window).width();
        skewBg.append('<style>.xs-banner.skew-bg::after{border-left: ' + width + 'px solid transparent}</style>');
    }

    /*==========================================================
    	11. on screen function
    ======================================================================*/
    $.fn.onScreen = function () {
        var offset = this.offset();
        var win = $(window);
        var viewport = {
            top: $(window).scrollTop(),
            left: $(window).scrollLeft()
        };
        viewport.right = viewport.left + $(window).width();
        viewport.bottom = viewport.top + $(window).height();
        offset.right = offset.left + this.outerWidth();
        offset.bottom = offset.top + this.outerHeight();
        return !(viewport.right < offset.left || viewport.left > offset.right || viewport.bottom < offset.top || viewport.top > offset.bottom);
    };

    /*==========================================================
                    12. set logo function
    ======================================================================*/
    function setLogo() {
        $('.xs-logo').each(function () {
            var $this = $(this).children(),
                clone = $this.clone(),
                holder = $('.nav-brand');
            if ($(window).width() > 991) {
                if (holder.children().length > 0) {
                    holder.children().remove();
                }
            } else {
                if (holder.children().length === 0) {
                    holder.append(clone);
                }
            }
        });
    }

    $(window).on('load', function () {

        // equal hight init
        equalHeight();
        // fixedtable init
        fixedtabel();
        // center content
        centerContent();

        // sticky header init
        stickyHeader();

        // set logo
        setLogo();

        /*==========================================================
                    13. prelaoder load done then load wow
        ======================================================================*/
        setTimeout(function () {
            $('#preloader').addClass('loaded', function () {
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true,
                    scrollContainer: null
                });
                wow.init();
            });
        }, 1000);
    }); // END load Function

    $(document).ready(function () {
        // equal hight init
        equalHeight();
        // fixedtable init
        fixedtabel();
        // center content
        centerContent();

        // sticky header init
        stickyHeader();

        // set logo
        setLogo();

        if ($('<style>.xs-banner.skew-bg::after</style>').length > 0) {
            skewBgWidthCalc();
        }

        /*==========================================================
                    14. preloader close button
        ======================================================================*/
        $('.prelaoder-btn').on('click', function (e) {
            e.preventDefault();
            if (!$('#preloader').hasClass('loaded')) {
                $('#preloader').addClass('loaded');
            }
        });

        /*==========================================================
                15. mega navigation menu init
        ======================================================================*/
        if ($('.xs-menus').length > 0) {
            $('.xs-menus').xs_nav({
                mobileBreakpoint: 992
            });
        }

        /*==========================================================
                16. twitter api init
        ======================================================================*/
        if ($('.xs-tweet').length > 0) {
            $('.xs-tweet').twittie({
                dateFormat: '%b. %d, %Y',
                template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank">Details</a>',
                count: 2,
                username: 'xpeedstudio',
                loadingText: 'Loading!'
            });
        }

        /*==========================================================
                17. client slider
        ======================================================================*/
        if ($('.xs-client-slider').length > 0) {
            $('.xs-client-slider').myOwl({
                items: 5,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: 5
                    }
                }
            });
        }

        /*==========================================================
                18. testimonial slider
        ======================================================================*/
        if ($('.xs-testimonial-slider').length > 0) {
            $('.xs-testimonial-slider').myOwl({
                items: 3,
                center: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    920: {
                        items: 1
                        // center: false
                    },
                    1024: {
                        items: 3,
                        center: true
                    }
                }
            });
        }

        /*==========================================================
                    19. testimonial slider 2
        ======================================================================*/
        if ($('.xs-testimonial-slider-2').length > 0) {
            $('.xs-testimonial-slider-2').myOwl({
                items: 3,
                center: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    920: {
                        items: 1
                        // center: false
                    },
                    1024: {
                        items: 3,
                        center: true
                    }
                }
            });
        }

        /*==========================================================
                    20. blog post gallery slider
        ======================================================================*/
        if ($('.post-gallery-slider').length > 0) {
            $('.post-gallery-slider').myOwl({
                nav: true,
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
                responsive: {
                    0: {
                        nav: false
                    }
                }
            });
        }

        /*==========================================================
                    21. contact form init
        ======================================================================*/

        $(document).on('submit', '#xs-contact-form', function (event) {
            event.preventDefault();
            /* Act on the event */

            var xs_contact_name = $('#xs_contact_name'),
                xs_contact_email = $('#xs_contact_email'),
                xs_contact_website = $('#xs_contact_website'),
                x_contact_massage = $('#x_contact_massage'),
                xs_contact_submit = $('#xs_contact_submit'),
                xs_contact_error = false;

            $('.xpeedStudio_success_message').remove();

            if (xs_contact_name.val().trim() === '') {
                xs_contact_name.addClass('invaild');
                xs_contact_error = true;
                xs_contact_name.focus();
                return false;
            } else {
                xs_contact_name.removeClass('invaild');
            }
            if (xs_contact_email.val().trim() === '') {
                xs_contact_email.addClass('invaild');
                xs_contact_error = true;
                xs_contact_email.focus();
                return false;
            } else if (!email_pattern(xs_contact_email.val().toLowerCase())) {
                xs_contact_email.addClass('invaild');
                xs_contact_error = true;
                xs_contact_email.focus();
                return false;
            } else {
                xs_contact_email.removeClass('invaild');
            }
            if (xs_contact_website.val().trim() === '') {
                xs_contact_website.addClass('invaild');
                xs_contact_error = true;
                xs_contact_website.focus();
                return false;
            } else {
                xs_contact_website.removeClass('invaild');
            }
            if (x_contact_massage.val().trim() === '') {
                x_contact_massage.addClass('invaild');
                xs_contact_error = true;
                x_contact_massage.focus();
                return false;
            } else {
                x_contact_massage.removeClass('invaild');
            }

            if (xs_contact_error === false) {
                xs_contact_submit.before().hide().fadeIn();
                $.ajax({
                    type: "POST",
                    url: "assets/php/contact-form.php",
                    data: {
                        'xs_contact_name': xs_contact_name.val(),
                        'xs_contact_email': xs_contact_email.val(),
                        'xs_contact_website': xs_contact_website.val(),
                        'x_contact_massage': x_contact_massage.val()
                    },
                    success: function success(result) {
                        xs_contact_submit.after('<p class="xpeedStudio_success_message">' + result + '</p>').hide().fadeIn();

                        setTimeout(function () {
                            $(".xpeedStudio_success_message").fadeOut(1000, function () {
                                $(this).remove();
                            });
                        }, 5000);

                        $('#xs-contact-form')[0].reset();
                    }
                });
            }
        });

        /*==========================================================
                    22. turn off autocomplete
        ======================================================================*/
        $('input').each(function (e) {
            $(this).attr('autocomplete', 'off');
            $(this).attr('autocorrect', 'off');
        });

        /*==========================================================
                        23. service block on hover class add
        ======================================================================*/
        $('.xs-service-block').on('mouseenter', function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        });
        $('.xs-service-block').on('mouseleave', function (e) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });

        /*==========================================================
                24. video popup init
        ======================================================================*/
        if ($('.xs-video-popup').length > 0) {
            $('.xs-video-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        /*==========================================================
             25. Side Offset cart menu open
        ======================================================================*/
        if ($('.offset-side-bar').length > 0) {
            $('.offset-side-bar').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.cart-group').addClass('isActive');
            });
        }
        if ($('.close-side-widget').length > 0) {
            $('.close-side-widget').on('click', function (e) {
                e.preventDefault();
                $('.cart-group').removeClass('isActive');
            });
        }
        if ($('.navSidebar-button').length > 0) {
            $('.navSidebar-button').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.info-group').addClass('isActive');
            });
        }
        if ($('.close-side-widget').length > 0) {
            $('.close-side-widget').on('click', function (e) {
                e.preventDefault();
                $('.info-group').removeClass('isActive');
            });
        }
        $('body').on('click', function (e) {
            $('.info-group').removeClass('isActive');
            $('.cart-group').removeClass('isActive');
        });
        $('.xs-sidebar-widget').on('click', function (e) {
            e.stopPropagation();
        });

        /*=============================================================
                    26.	wow animation init
        =========================================================================*/
        // $(function () {
        //     var wow = new WOW({
        //         boxClass: 'wow',
        //         animateClass: 'animated',
        //         offset: 0,
        //         mobile: false,
        //         live: true,
        //         scrollContainer: null,
        //     });
        //     wow.init();
        // });

        /*=============================================================
                    27. my custom select init
        =========================================================================*/
        if ($('select').length > 0) {
            $('select').mySelect();
        }

        /*=============================================================
                    28. tab swipe indicator
        =========================================================================*/
        if ($('.tab-swipe').length > 0) {
            $('.tab-swipe').each(function () {
                $('.tab-swipe').append('<li class="indicator"></li>');
                if ($('.tab-swipe li a').hasClass('active')) {
                    var cLeft = $('.tab-swipe li a.active').position().left + 'px',
                        cWidth = $('.tab-swipe li a.active').css('width');
                    $('.indicator').css({
                        left: cLeft,
                        width: cWidth
                    });
                }
                $('.tab-swipe li a').on('click', function () {
                    $('.tab-swipe li a').removeClass('isActive');
                    $(this).addClass('isActive');
                    var cLeft = $('.tab-swipe li a.isActive').position().left + 'px',
                        cWidth = $('.tab-swipe li a.isActive').css('width');
                    $('.indicator').css({
                        left: cLeft,
                        width: cWidth
                    });
                });
            });
        }

        /*=============================================================
                    29. pricing matrix expand slider
        =========================================================================*/
        if ($('.pricing-matrix-slider').length > 0) {
            $('.pricing-matrix-slider').on('initialized.owl.carousel translated.owl.carousel', function () {
                var $this = $(this);
                $this.find('.owl-item.last-child').each(function () {
                    $(this).removeClass('last-child');
                });
                $(this).find('.owl-item.active').last().addClass('last-child');
            });
            var sliderItems = $(this).find('.pricing-matrix-slider .pricing-matrix-item').length;
            var slideControl = null;
            if (sliderItems <= 3) {
                slideControl = false;
            } else if (sliderItems >= 4) {
                slideControl = true;
            } else {
                return;
            }
            $('.pricing-matrix-slider').myOwl({
                items: 3,
                mouseDrag: slideControl,
                autoplay: slideControl,
                nav: true,
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
                loop: false,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: true,
                        loop: true
                    },
                    768: {
                        items: 2,
                        mouseDrag: true
                    },
                    1024: {
                        items: 3,
                        mouseDrag: slideControl,
                        autoplay: slideControl
                    }
                }
            });
        }

        /*=============================================================
                    30. feature section prev class get function
        =========================================================================*/
        if ($('.xs-feature-section').length > 0) {
            if ($('.xs-feature-section').prev().hasClass('xs-bg-gray')) {
                $('.xs-feature-section').addClass('xs-bg-gray');
            } else {
                $('.xs-feature-section').removeClass('xs-bg-gray');
            }
            if ($('.xs-footer-section').prev().hasClass('xs-bg-gray')) {
                $('.xs-footer-section').children('.xs-feature-section').addClass('xs-bg-gray');
            } else {
                $('.xs-footer-section').children('.xs-feature-section').removeClass('xs-bg-gray');
            }
        };

        /*=============================================================
                    31. pricing expand function
        =========================================================================*/
        if ($('.pricing-expand').length > 0) {
            if ($(window).width() > 991) {
                var pricingContainer = $('.pricing-expand.pricing-matrix'),
                    height = Math.floor(pricingContainer.height()),
                    children = $('.pricing-expand.pricing-matrix .pricing-matrix-slider'),
                    childreHeight = children.height(),
                    gap = $('.pricing-expand.pricing-matrix .gap'),
                    gapHeight = gap.height(),
                    mini = Math.floor(height - (childreHeight / 2 + gap.length * 1)),
                    animSpeed = 500;

                pricingContainer.attr('data-height', height + 'px');
                pricingContainer.attr('data-min', mini + 'px');
                pricingContainer.css('height', mini + 'px');

                if ($('.content-collapse-wraper').length === 0) {
                    pricingContainer.after('<div class="content-collapse-wraper"><a href="#" class="btn btn-primary expand-btn">Load More <i class="icon icon-arrow_down"></i></a></div>');
                }

                $('.expand-btn').on('click', function (e) {
                    e.preventDefault();
                    var content = $(this).parent().prev();
                    content.animate({
                        'height': content.attr('data-height')
                    }, animSpeed);
                    content.addClass('expand');
                    $(this).addClass('hide');
                });
            } else {
                if ($('.pricing-matrix').hasClass('pricing-expand')) {
                    $('.pricing-matrix').removeClass('pricing-expand');
                    console.log('hi');
                } else {
                    $('.pricing-matrix').removeClass('pricing-expand');
                }
            }
        }
        $('.pricing-matrix .gap').prev().addClass('border-bottom-0');

        /*=============================================================
                    32. accordion add class "isActive" function
        =========================================================================*/
        if ($('.xs-accordion .card-header > a').length > 0) {
            $('.xs-accordion .card-header > a').on('click', function () {
                if (!$(this).parent().parent().hasClass('isActive')) {
                    $(this).parent().parent().prevAll().removeClass('isActive');
                    $(this).parent().parent().nextAll().removeClass('isActive');
                    $(this).parent().parent().addClass('isActive');
                }
            });
        }

        /*=============================================================
                    33. click and go to current section init
        =========================================================================*/
        $('.comment-reply-link').on('click', function (event) {
            event.preventDefault();
            $('#comment-form').scrollView();
        });

        /*=============================================================
                 34. input number increase
        =========================================================================*/

        $('.custom_number').customNumber({
            plusIcon: '<i class="icon icon-plus"></i>',
            minusIcon: '<i class="icon icon-minus"></i>'
        });

        /*=============================================================
                 35. right click , ctrl+u and ctrl+shift+i disabled
        =========================================================================*/
        // $('body').on('contextmenu', function (e) {
        // 	e.preventDefault();
        // 	e.stopPropagation();
        // 	return false;
        // });
        // $(document).on('keydown', function(e) {
        // 	if (
        // 			(e.ctrlKey && (e.keyCode == 85)) ||
        // 			(e.ctrlKey && (e.shiftKey && e.keyCode == 73)) ||
        // 			(e.ctrlKey && (e.shiftKey && e.keyCode == 75)) ||
        // 			(e.metaKey && (e.shiftKey && e.keyCode == 91))
        // 			) {
        // 		return false;
        // 	} else {
        // 		return true;
        // 	}
        // });

        /*=============================================================
                 36. image dragable false setup
        =========================================================================*/
        $('img').each(function () {
            $(this).attr('draggable', 'false');
            $(this).on('mousedown', function (event) {
                if (event.preventDefault) {
                    event.preventDefault();
                }
            });
        });

        /*=============================================================
                 37. ajaxchimp init
        =========================================================================*/
        if ($('#subscribe-form').length > 0) {
            $('#subscribe-form').ajaxChimp({
                url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
            });
        }

        /*==========================================================
                    38. wave animation use by parallax
        ======================================================================*/
        if ($('.wave_animation').length > 0) {
            $('.wave_animation').parallax();
        }

        /*==========================================================
                    39. magnific modal popup
        ======================================================================*/
        if ($('.xs-modal-popup').length > 0) {
            $('.xs-modal-popup').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: false,
                callbacks: {
                    beforeOpen: function beforeOpen() {
                        this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                    }
                }
            });
        }

        /*==========================================================
                    40. tooltip init
        ======================================================================*/
        $('[data-toggle="tooltip"]').tooltip();

        /*==========================================================
                        41. revulation hero init
        ======================================================================*/
        var revapi17, tpj;
        (function () {
            if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

            function onLoad() {
                if (tpj === undefined) {
                    tpj = jQuery;if ("off" == "on") tpj.noConflict();
                }
                if (tpj("#rev_slider_17_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_17_1");
                } else {
                    revapi17 = tpj("#rev_slider_17_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {},
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1600, 1024, 778, 480],
                        gridheight: [1110, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: false
                        }
                    });
                }; /* END OF revapi call */
            }; /* END OF ON LOAD FUNCTION */
        })(); /* END OF WRAPPING FUNCTION */

        /*==========================================================
                    42. revulation carousel slider init
        ======================================================================*/
        var revapi18, tpj;
        (function () {
            if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

            function onLoad() {
                if (tpj === undefined) {
                    tpj = jQuery;if ("off" == "on") tpj.noConflict();
                }
                if (tpj("#rev_slider_18_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_18_1");
                } else {
                    revapi18 = tpj("#rev_slider_18_1").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "",
                        sliderLayout: "auto",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                touchOnDesktop: "on",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            }
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [803, 768, 960, 720],
                        lazyType: "none",
                        shadow: 0,
                        spinner: "spinner0",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "on",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false
                        }
                    });
                }; /* END OF revapi call */
            }; /* END OF ON LOAD FUNCTION */
        })(); /* END OF WRAPPING FUNCTION */
    }); // end ready function

    $(window).on('scroll', function () {
        /*==========================================================
                        43. shuffle letters
        ======================================================================*/
        $('.shuffle-letter-title-wraper').each(function (e) {
            if ($(this).onScreen() && !$(this).hasClass('shuffle-title')) {
                setTimeout(function () {
                    $(this).find('.shuufle-letter-title').shuffleLetters();
                    $(this).addClass('shuffle-title');
                }.bind(this), 400);
            }
        });
    }); // END Scroll Function

    $(window).on('resize', function () {
        // equal hight init
        equalHeight();
        // fixedtable init
        fixedtabel();
        // center content
        centerContent();

        // set logo
        setLogo();

        if ($('<style>.xs-banner.skew-bg::after</style>').length > 0) {
            skewBgWidthCalc();
        }
    }); // End Resize

    /*==========================================================
                44. XpeedStudio Maps
    ======================================================================*/

    if ($('#xs-map').length > 0) {
        var locations = [['Bondi Beach', -33.890542, 151.274856, 4, 'assets/images/map-marker.png'], ['Coogee Beach', -33.923036, 151.259052, 5, 'assets/images/map-marker-1.png'], ['Cronulla Beach', -34.028249, 151.157507, 6, 'assets/images/map-marker-2.png']];

        var map = new google.maps.Map(document.getElementById('xs-map'), {
            zoom: 10,
            center: new google.maps.LatLng(-33.92, 151.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "hue": "#008eff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "0" }, { "lightness": "0" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "-60" }, { "lightness": "-20" }] }]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                title: 'HostNinza',
                icon: locations[i][4]
            });

            google.maps.event.addListener(marker, 'click', function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            }(marker, i));
        }
    }
})(jQuery);