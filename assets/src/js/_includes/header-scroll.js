
// При проктутке страницы вниз у шапки сайта появляется полупрозрачный фон

var header = $('.header'); // Шапка сайта


// При проктутке страницы на 100px вниз к header добавляется класс "scroll"
// У "scroll" в стилях прописан полупрозрачный фон
$(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 100;

    if (top > height) {
        header.addClass('scroll');
    } else {
        header.removeClass('scroll');
    }
});
