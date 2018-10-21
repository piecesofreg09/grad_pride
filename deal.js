
$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 100) {
        console.log("run to here.");
        $('.navbar').addClass('fixed-top');
        $('.affix + .container-fluid').css("padding-top", "80x");
    }
    else {
        $('.navbar').removeClass('fixed-top');
        $('.affix + .container-fluid').css("padding-top", "");
    }
    
    
});
