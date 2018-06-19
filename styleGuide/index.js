$(document).ready(function(){
    $('li > a').click(function() {
        $('li').removeClass();
        $(this).parent().addClass('active');
    });
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('li > a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li').removeClass();
            currLink.parent().addClass('active');
        }
    });
}
