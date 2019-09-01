var menuToggle = $(".burger"),
    menu = $(".site-nav__list");


menuToggle.click(function () {
    menu.toggleClass('open');
    menuToggle.toggleClass('open');

});

$(document).click(function (event) {
    if ($(event.target).closest(menuToggle).length) return;
    menu.removeClass('open');
    menuToggle.removeClass('open');
    event.stopPropagation();
});