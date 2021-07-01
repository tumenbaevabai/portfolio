/* #################### OWL #################### */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        }
    });
    $(window).scroll(function () {
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function (){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
});


