(function($) {
    "use strict";
    var pageLoaded = $("body");
    $(window).on('load', function() {
        pageLoaded.addClass("loaded");
    });
    $(window).on("load", function() {
        $('.preloader').addClass('loaded');
        if ($('.preloader').hasClass('loaded')) {
            $('.preloader').delay(1200).queue(function() {
                $(this).remove();
            });
        }
    });
    function backgroundHolder() {
        $(".background-image-holder").each(function() {
            var thesrc = $(this).attr('src');
            $(this).parent().css("background-image", "url(" + thesrc + ")");
            $(this).parent().css("background-repeat", "no-repeat");
            $(this).hide();
        });
    }
    backgroundHolder();
    $(".article .article__thumbnail-image").each(function() {
        var imgsrc = $(this).find(".background-image-holder").height();
        $(this).css("height", imgsrc);
    });
    var convertAttr = $(".jsElement");
    convertAttr.each(function() {
        var dataBGColor = $(this).data('bg-color');
        var dataWidth = $(this).data('width');
        var dataHeight = $(this).data('height');
        var dataProgressHorizon = $(this).data('progress-horizon');
        var dataProgressVertical = $(this).data('progress-vertical');
        var dataTop = $(this).data('top');
        var dataLeft = $(this).data('left');
        var dataPull = $(this).data('pull');
        var dataPush = $(this).data('push');
        $(this).css("background-color", "" + dataBGColor);
        $(this).css("width", "" + dataWidth);
        $(this).css("height", "" + dataHeight);
        $(this).css("width", "" + dataProgressHorizon + "%");
        $(this).css("height", "" + dataProgressVertical + "%");
        $(this).css("top", "" + dataTop + "%");
        $(this).css("left", "" + dataLeft + "%");
        $(this).css("margin-top", "" + dataPull + "px");
        $(this).css("margin-bottom", "" + dataPush + "px");
        $(this).removeAttr("data-bg-color data-width data-height data-progress-horizon data-progress-vertical data-top data-left data-pull data-push");
    });
    function dropdownModule() {
        var $landDropdown = $('.dropdown-module-list');
        $(".dropdown-module__toggler").on('click', function(e) {
            $(this).next(".dropdown-module-list").slideToggle("fast");
            e.stopPropagation();
        });
        $(".dropdown-module__item").on('click', function(e) {
            $landDropdown.hide();
            e.stopPropagation();
        });
        $(".dropdown-module-list").on('click', function(e) {
            e.stopPropagation();
        });
        $("body").on('click', function() {
            $landDropdown.hide();
        });
    }
    dropdownModule();
    function smoothScroll() {
        $('.navbar .nav-item .nav-link, a.smooth-scroll').on('click', function(event) {
            var $anchor = $(this);
            var headerH = $('header').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        $.extend($.easing, {
            easeInOutExpo: function(t, e, i, n, s) {
                return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },
        });
    }
    smoothScroll();
    var matchHeight = function() {
        function init() {
            eventListeners();
            matchHeight();
        }
        function eventListeners() {
            $(window).on('resize', function() {
                matchHeight();
            });
        }
        function matchHeight() {
            var groupName = $('.carosuel-slider--v3 .slide .card');
            var groupHeights = [];
            groupName.css('min-height', 'auto');
            groupName.each(function() {
                groupHeights.push($(this).outerHeight());
            });
            var maxHeight = Math.max.apply(null, groupHeights);
            groupName.css('min-height', maxHeight);
        }
        ;return {
            init: init
        };
    }();
    $(document).ready(function() {
        matchHeight.init();
    });
    function reveal() {
        window.sr = ScrollReveal();
        sr.reveal('[data-animation="true"] .reveal', {
            duration: 1000,
            delay: 0,
            scale: 1,
            opacity: .2,
            easing: 'ease-in-out',
        });
    }
    reveal();
    function csselem() {
        $(".height-emulator").css({
            height: jQuery(".footer--fixed").outerHeight(true)
        });
    }
    csselem();
    $(window).resize(function() {
        csselem();
    });
    function calculatorBtnToggle() {
        var calculatorBtn = $(".token-calculator__coin")
        calculatorBtn.on("click", function() {
            calculatorBtn.removeClass('token-calculator__coin--is-active');
            $(this).addClass('token-calculator__coin--is-active');
            var thissrc = $(this).children(".coin-name").data('coin');
            $(".currency-name--target").text(thissrc);
        });
    }
    calculatorBtnToggle();
    function lightBox() {
        $('.lightbox').venobox();
    }
    lightBox();
    $('.carosuel-slider--v1').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 800,
        pauseOnDotsHover: true
    });
    $('.carosuel-slider--v2').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        speed: 800,
        pauseOnDotsHover: true,
        prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-up"></i></button>',
        nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-down"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-left"></i></button>',
                nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-right"></i></button>',
            }
        }, ]
    });
    $('.carosuel-slider--v3').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--prev"><i class="icon icon-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--next"><i class="icon icon-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, ]
    });
    $('.carosuel-slider--v4').slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="carosuel-cursor carosuel-cursor--dark carosuel-arrow--prev"><i class="icon icon-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="carosuel-cursor carosuel-cursor--dark carosuel-arrow--next"><i class="icon icon-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, ]
    });
    $('.carosuel-slider--v5').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 800,
        pauseOnDotsHover: true
    });
    var carosuelMain = $(".carosuel-slider--v6");
    carosuelMain.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        prevArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev"><i class="icon icon-up-arrow"></i></button>',
        nextArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next"><i class="icon icon-down-arrow"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 1,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev"><i class="icon icon-left-arrow"></i></button>',
                nextArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next"><i class="icon icon-right-arrow"></i></button>',
            }
        }]
    });
    var carosuelItem = $(".carosuel-slider--v6 .slick-slide");
    var maxHeight = -1;
    carosuelItem.each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    carosuelItem.each(function() {
        if ($(this).height() < maxHeight) {
            $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 1) + 'px 0');
        }
    });
    var years = [];
    carosuelItem.each(function() {
        var year = $(this).data("year");
        var dom;
        if ($(this).hasClass("slick-active")) {
            dom = '<li class="h3-font font-w--700 active">' + year + '</li>';
        } else {
            dom = '<li class="h3-font font-w--700">' + year + '</li>';
        }
        if ($.inArray(year, years) == -1) {
            $(".roadmap__year").append(dom);
        }
        years.push(year);
    });
    carosuelMain.on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $(document).ready(function() {
            checkWidth(true);
            $(window).resize(function() {
                checkWidth(false);
            });
        });
        function checkWidth(init) {
            if ($(window).width() <= 767) {
                var current_year = $('.slick-active').data('year');
            } else {
                var current_year = $('.slick-active:eq(1)').data('year');
            }
            $(".roadmap__year li").each(function() {
                if ($(this).html() == current_year) {
                    $(".roadmap__year li").removeClass('active');
                    $(this).addClass("active");
                }
            });
        }
    });
    $('.carosuel-slider--v7').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-up"></i></button>',
        nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-down"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-left"></i></button>',
                nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-right"></i></button>',
            }
        }, ]
    });
    var jSFocus = $(".jsElementFocus");
    jSFocus.mouseover(function() {
        jSFocus.removeClass("focused");
        $(this).addClass("focused");
    });
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -95,
    });
}
)(jQuery);
