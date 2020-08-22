//Document on ready functions
$(document).ready(function () {
    "use strict";
    //PRELOADER

    $('.preloader').delay(800).fadeOut('slow');
    setTimeout(function () {
     $('body').removeClass('no-scroll');
    }, 800); //Here you can change preloader time

    //add active class
    $("li.nav-item a").click(function () {
        $("li.nav-item a").removeClass("active");
        $(this).addClass("active");
           


    })







})






/////////////////////////window on scroll
var navbarFixedTop = $("nav.navbar.navbar-expand-lg.navbar-light");
$(window).on('scroll', function () {
    //// Adding background for .navbar after scroll more than 220
    if (navbarFixedTop.offset().top > 220) {
        $(navbarFixedTop).addClass('nav-bg');
        $(".button-up").fadeIn(300);
    } else {
       //Removing all adding styles
        $(navbarFixedTop).removeClass('nav-bg');
        $(".button-up").fadeOut(300);

    }


    var Scroll = $(window).scrollTop() ,// This variable finds the distance you have scrolled from the top.
    SectionHomeOffset = $('#home').offset().top, // This variable finds the distance between #section-home and the top. 
    SectionAboutOffset = $('#about').offset().top, // This variable finds the distance between #section-about and the top.
    SectionServicesOffset = $('#services').offset().top, // This variable finds the distance between #section-services and the top.
    SectionContactOffset = $('#contact').offset().top; // This variable finds the distance between #section-contact and the top.
    
   
    console.log();
    if (Scroll >= SectionHomeOffset) {
        $('li.nav-item a').removeClass("active");
        $('a[href^="#home"]').addClass("active");
        
       
    }
    
    if (Scroll >= SectionAboutOffset) {
        $('li.nav-item a').removeClass("active");
        $('a[href^="#about"]').addClass("active");
        


    }
   
    if (Scroll >= SectionServicesOffset) {
        $('li.nav-item a').removeClass("active");
        $('a[href^="#services"]').addClass("active");
       
       
        
    }
    
    if (Scroll >= SectionContactOffset) {
        $('li.nav-item a').removeClass("active");
        $('a[href^="#contact"]').addClass("active");
        

    }

    




    //Animate progress-bar in About me section
    $(".progress .progress-bar").each(function () {
        var bottom_object = $(this).offset().top + $(this).outerHeight();
        var bottom_window = $(window).scrollTop() + $(window).height();
        var progressWidth = $(this).attr('aria-valuenow') + '%';
        if (bottom_window > bottom_object) {
            $(this).css({
                width: progressWidth
            });
        }
    });
});



////////////////////////contact////////////////////////////
