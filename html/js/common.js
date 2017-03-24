$(function() {

    'use strict';

    //-------------------------------
    //Мобильное меню
    //-------------------------------

    $('.header__nav-button').on('click', function(e) {
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header__nav-list').slideDown(300);
        } else {
            $(this).removeClass('active');
            $('.header__nav-list').slideUp(300);
        }
    });

    //Выключение при клике по странице
    $(document).on('click', function(e) {
        e.stopPropagation();
        var w = $(window).width();
        if (w <= 640 && !$(e.target).closest(".header__nav-listheader__nav-list").length) {
            $('.header__nav-button').removeClass('active');
            $('.header__nav-list').slideUp(300);
        }
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 640) {
            $('.header__nav-button').removeClass('active');
            $('.header__nav-list').removeAttr('style');
        }
    });

    //---------------------------------
    //Cлайдер reviews
    //---------------------------------
    $(".reviews__slider").addClass("owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 15000,
        autoplay: true,
        smartSpeed: 1200,
        autoHeight: true
    });

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //------------------------------------
    //popup
    //------------------------------------
    $('.popup-zoom').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
