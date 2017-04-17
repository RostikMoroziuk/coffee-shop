$(document).ready(function() {
    $("#nav-menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top-180;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
