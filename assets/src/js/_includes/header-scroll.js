// Добавление класса 'scroll' для выпадающих элементов шапки

var header = $('.header');


$(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 100;

    if (top > height) {
        header.addClass('scroll');
    } else {
        header.removeClass('scroll');
    }
});

