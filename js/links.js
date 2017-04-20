$(document).ready(function() {
    $("#nav-menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top-$( window ).height()*0.15;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
