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

    /*owl carousel activated*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav: true,
        // lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            // 720:{
            //     items:2
            // },
            // 960:{
            //     items:3
            // }
        }
    })
    // $('.play').on('click',function(){
    //     owl.trigger('play.owl.autoplay',[1000])
    // })
    // $('.stop').on('click',function(){
    //     owl.trigger('stop.owl.autoplay')
    // })
});