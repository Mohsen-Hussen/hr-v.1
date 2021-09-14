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
});