$(function() {

    'use strict';

    //-------------------------------
    //Мобильное меню
    //-------------------------------

    var $headerNavButton = $('.header__nav-button'),
        $headerNavList = $('.header__nav-list');
    $headerNavButton.on('click', function(e) {
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $headerNavList.slideDown(300);
        } else {
            $(this).removeClass('active');
            $headerNavList.slideUp(300);
        }
    });

    //Выключение при клике по странице
    $(document).on('click', function(e) {
        e.stopPropagation();
        var w = $(window).width();
        if (w <= 640 && !$(e.target).closest($headerNavList).length) {
            $headerNavButton.removeClass('active');
            $headerNavList.slideUp(300);
        }
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 640) {
            $headerNavButton.removeClass('active');
            $headerNavList.removeAttr('style');
        }
    });

    //---------------------------------
    //Cлайдер reviews
    //---------------------------------
    $(".reviews__slider").addClass("owl-carousel").owlCarousel({
        // loop: true,
        items: 1,
        nav: true,
        navText: '',
        // autoplayTimeout: 15000,
        // autoplay: true,
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

    //---------------------------------
    //Cлайдер brigade
    //---------------------------------
    $(".brigade__slider").addClass("owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 1200,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            361: {
                items: 2
            },
            481: {
                items: 3
            },
            641: {
                items: 4
            }
        }
    });

    //---------------------------------
    //Cлайдер brigade
    //---------------------------------
    $(".build__slider").addClass("owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplayTimeout: 6000,
        autoplay: true,
        smartSpeed: 1200,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            361: {
                items: 2
            },
            641: {
                items: 3
            }
        }
    });

    //---------------------------------------------
    //Видеопопап
    //---------------------------------------------
    $('.popup-youtube').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //---------------------------------------------
    //Аккордеон technologi
    //---------------------------------------------
    var $technologyItem = $('.technology__item'),
        $technologyItemTitle = $('.technology__item-title'),
        $technologyItemText = $('.technology__item-text');

    $technologyItemTitle.not(":first").removeClass('active');
    $technologyItemText.not(":first").hide();

    $technologyItemTitle.on('click', function() {
        var $this = $(this);
        $technologyItemText.slideUp(300);
        if($this.hasClass('active')) {
            $this.removeClass('active')
        } else {
            $this.addClass('active').closest($technologyItem).find($technologyItemText).slideDown(300).addBack().siblings().find($technologyItemTitle).removeClass('active');
        }
    });

    //---------------------------------------------
    //Сокрытие текста about
    //---------------------------------------------
    var $aboutContentText = $('.about__content-text p').not(":first"),
        $aboutContentButton = $('<div class="about__content-button"><a>Раскрыть текст полностью</a></div>');

    $aboutContentText.hide();
    $('.about__content').append($aboutContentButton);

    $aboutContentButton.on('click', 'a', function() {
        var $this = $(this);
        if($this.hasClass('active')) {
            $this.removeClass('active').text('Раскрыть текст полностью');
            $aboutContentText.slideUp(300);
        } else {
            $this.addClass('active').text('Скрыть текст');
            $aboutContentText.slideDown(300);
        }
    });


    //--------------------------------------------------------------------
    //Яндекс карта
    //--------------------------------------------------------------------
    var $map = $('#map');
    if ($map.length) {
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                center: [55.779466, 49.132403],
                zoom: 16,
                controls: ['zoomControl'],
                behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
            }, {
                searchControlProvider: 'yandex#search'
            });
            var myPlacemark = new ymaps.Placemark([55.779351, 49.135836], {
                hintContent: '',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/icon-map.png',
                // Размеры метки.
                iconImageSize: [16, 23],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-8, -23]
            });
            function disableDrag() {
                var w = $(window).width();
                if (w <= 768) {
                    myMap.behaviors.disable('drag');
                } else {
                    myMap.behaviors.enable('drag');
                }
            }
            disableDrag();
            $(window).resize(function() {
                disableDrag();
            });

            myMap.geoObjects.add(myPlacemark);
        });
    }

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
