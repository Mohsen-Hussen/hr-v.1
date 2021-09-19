$(document).ready(() => {
    $('.iconBtn').click(function(){
        let iconBtnClassName = $(this).attr("class");
        if (iconBtnClassName.includes('collapsed')) {
            console.log("i'm here");
            $(this).children('i').removeClass("fa-chevron-down").addClass("fa-chevron-up");
        } else {
            console.log("failed");
            $(this).children('i').removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    /*owl carousel activated at blogs details*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav: true,
        responsive:{
            0:{
                items:1
            }
        }
    });
});

/*owl carousel activated at home page*/
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
    responsive:{
        0:{
            items:2
        }
    }
});