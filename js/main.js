$(window).on('load', function () {
    $('.loader').fadeOut(1800);
    new WOW().init();
});

$(document).ready(function () {
    "use strict";

    $(".nav_bar a").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).addClass("active");
            }
        }
    );

    if (window.location.href.includes('/index')) {

        $("body [data-link]").on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $("#" + $(this).attr("data-link")).offset().top - 45
            }, 500);
        });
    
        $(window).on("scroll", function () {
            $(".body-content > section").each(function () {
                if ($(window).scrollTop() >= $(this).offset().top - 50) {
                    $(".nav_bar a[data-link='" + $(this).attr("id") + "']").addClass("active").parent().siblings().children().removeClass("active");
                }
            });
        
        });

        if(localStorage.getItem('theLocation') !== null) {
            setTimeout(function () {
                $("html, body").animate({
                    scrollTop: $("#" + localStorage.getItem('theLocation')).offset().top - 45
                }, 500);
            }, 800);
        }

        setTimeout(function () {
            localStorage.removeItem('theLocation');
        }, 1000);


    }

    var theLocation = window.location.href.slice(0, window.location.href.lastIndexOf('/'));

    $(".nav_bar > li > a").on("click", function () {
        if (!window.location.href.includes('/index') && $(this).attr('data-link')) {
            // alert( theLocation + '/index.html');
            window.location.href = theLocation + '/index.html';
            localStorage.setItem('theLocation', $(this).attr('data-link'));
        } else {

        }
    });
});


$(document).ready(function () {
    "use strict";
    $(".close-open-nav").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".nav_bar").addClass("active");
        } else {
            $(".nav_bar").removeClass("active");
        }
    });

    $("body").on("click", function () {
        $(".close-open-nav.active").click();
    });

    $('.counter').countUp();
});

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").addClass("active");
        } else {
            $(".back-to-top").removeClass("active");
        }
    });

    $(".back-to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

});



$(document).ready(function () {
    "use strict";
        $(".owl-index").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            rtl: true,
            lazyLoad: true,
            smartSpeed: 2500,
            autoplay: true,
            autoplayTimeout: 5000000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".partners-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            rtl: true,
            lazyLoad: true,
            smartSpeed: 2500,
            autoplay: true,
            autoplayTimeout: 3000,
            // items: 2,
            autoplayHoverPause: true,
            slideTransition: 'linear',
            responsive: {
                900: {
                    items: 6
                },
                
                700: {
                    items: 5
                },

                400: {
                    items: 3
                }
            }
        });
    });
