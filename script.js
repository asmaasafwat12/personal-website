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
        console.log($(this).offset().top + bottom_object);
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
$(function () {

    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
        })
        
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "contact.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}
function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    var msgClasses;
    if (valid) {
        msgClasses = "h3 text-center text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
};
