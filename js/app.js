$(function() {

    var nav = $('#toc');
    var containerStart = $('.post-content').offset().top;
    var containerHeight = $('.post-content').height();

    console.log(containerHeight);

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if(scrollTop + nav.height() > (containerStart + containerHeight)) {
            nav.addClass('bottom-stick');
            //nav.css('position', 'relative');
            nav.css('top', containerHeight - nav.height());
        } else {
            nav.removeClass('bottom-stick');
            //nav.css('position', 'fixed');
            nav.css('top', 0);
        }

        if (scrollTop > containerStart) {
            nav.addClass('stick');
        } else {
            nav.removeClass('stick');
        }
    });

});