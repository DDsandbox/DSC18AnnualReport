// close the dropdown if the user clicks outside of it
$(document).click(function() {
    $("#dropdown-nav").removeClass("show-nav");
    $(".nav-button").removeClass("nav-is-open");
});

// open & close the dropdown with the nav button
$(".nav-button").click(function(event) {
    $("#dropdown-nav").toggleClass("show-nav");
    $(".nav-button").toggleClass("nav-is-open");
    event.stopPropagation();
});

// close the dropdown when user selects a link
$("#dropdown-nav a").click(function(event) {
    $("#dropdown-nav").toggleClass("show-nav");
    $(".nav-button").toggleClass("nav-is-open");
    event.stopPropagation();
});
