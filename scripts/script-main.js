// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// type.js animation
$(document).ready(function () {
    $(function () {
        $(".hello").typed({
            strings: ["Hi! I'm Will."],
            typeSpeed: 100
        });
    });
});

var bg = $("#home, #education, #work, #projects, #groups, #volunteering, #contact");
var HEIGHT_CHANGE_TOLERANCE = 100;
var currentHeight = $(window).height();

bg.height(currentHeight + 60);

function resizeBackground() {
    if(Math.abs(currentHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
        currentHeight = $(window).height();
        bg.height(currentHeight + 60);
    }
}

$(window).resize(resizeBackground);
resizeBackground();


/*
function resizeBackground() {
    bg.height($(window).height());
}

$(window).resize(resizeBackground);
resizeBackground();
*/