
// Burger menu в шапке сайта

var menuToggle = $(".burger"), // Кнопка открытия мобильной версии меню 
    menu = $(".site-nav__list"); // Пункты меню в шапке сайта


// При нажатии на кнопку burger открывается мобильная версия меню
menuToggle.click(function () {
    menu.toggleClass('open');
    menuToggle.toggleClass('open');
});


// При клике на странице вне кнопки burger мобильная версия меню закрывается
$(document).click(function (event) {
    if ($(event.target).closest(menuToggle).length) return;
    menu.removeClass('open');
    menuToggle.removeClass('open');
    event.stopPropagation();
});
