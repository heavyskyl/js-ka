$(document).ready(function () {
    $(".button").addClass('kjhkjh')
    $(".button").click(function () {
    if (($(this).hasClass("basketpopup"))) {
    $("div.pop-bask").toggleClass("none");
    }
$(".bg-block").removeClass("none").addClass("block");
$("body").css("overflow", "hidden");
Curds();
});

function closePopUp() {
    $('.bg-block').addClass("none").removeClass("block");
    $("div.pop-bask").addClass("none");
    $("body").css("overflow", "");
    }

$('body').on('click', '.bg-block, .popuperclose, .baskgoon', function (event) {
//                event.stopPropagation();
    closePopUp()
    });

$(".popuper").click(function (event) {
    event.stopPropagation();
    });
});


function Curds() {
    var popupwindow = $('#popuperblock');
    if (popupwindow.parent('.bg-block').hasClass('none')) {
    return false
    } else {
    popupwindow.css("margin-top", 0 + "px");
//    var curds = popupwindow.offsetTop,
    var winHeight = $(window).height(),
    popHeight = $(".popuper").height(),

    value = (winHeight - popHeight )/2;
//    margin = value - curds;

//    if (margin < 60) {
//        margin = 60
//    }
    if (value < 60) {
        value = 60
    }
//    if (curds < 0) {
//        popupwindow.css("margin-top", margin + "px")
//        console.log('never???')
//    }
//    else {
        popupwindow.css("margin-top", value + "px");
        console.log('always???')

//    }
    }
}
$(window).resize(function () {
            Curds()
            })
