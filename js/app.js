$(function() {

    var nav = $('#toc');
    var content = $('.post-content');
    var containerStart = content.offset().top;
    var containerHeight = content.height();

    // Menu scroll
    var stickyScroll = function() {
        var scrollTop = $(window).scrollTop();

        var atTop = scrollTop < containerStart;
        var atBottom = scrollTop + nav.height() > (containerStart + containerHeight);

        if(atTop) {
            nav.removeClass('stick');
            nav.removeClass('col-3');
            nav.addClass('non-stick');
        } else if(!atTop && !atBottom) {
            nav.addClass('stick');
            nav.addClass('col-3');
            nav.removeClass('non-stick');
            nav.removeClass('bottom-stick');
            nav.css('top', 0);
        } else {
            nav.removeClass('stick');
            nav.addClass('bottom-stick');
            nav.addClass('non-stick');

            nav.css('top', containerHeight - nav.height());
        }
    };

    $(window).scroll(stickyScroll);

    // Highlighting
    var scroll = function() {
        nav.find('a').removeClass('active');
        var scrollTop = $(window).scrollTop();

        var headers = content.find('h1, h2, h3, h4, h5, h6');
        var nearest = null;

        headers.each(function(index, value) {
            var header = $(value);
            var id = header.attr('id');
            if(header.offset().top <= scrollTop) {
                nearest = nav.find('a[href="#' + id + '"]');
            }
        });

        if(nearest !== null) {
            nearest.addClass('active');
        }
    };

    $(window).scroll(scroll);

    // Content resizing
    $(window).resize(function() {
        containerHeight = content.height();

        stickyScroll();
    })

});