
// Переключение активного пункта меню в шапке сайта при нажатии и прокрутке страницы

var positions = [], // позиции "якорных" блоков 
    currentActive = null, // id текущего блока 
    links = $('.site-nav__link'), // массив всех ссылок в шапке сайта
    anchor = $(".anchor"); // блоки, к которым ведут якорные ссылки в шапке сайта


// При нажатии на пункт меню к нему добавляется класс "active"
links.click(function () {
    links.removeClass('active');
    $(this).addClass('active');
});


// Перебор якорных блоков. Сохранение позиций и ссылок на пункты меню
anchor.each(function () {
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#' + $(this).attr('id') + '"]')
    });
});


// Массив позиций якорных блоков в обратном порядке
positions = positions.reverse();


// При прокрутке страницы изменять активный пункт меню в шапке
$(window).on('scroll', function () {
    var winTop = $(window).scrollTop();
    for (var i = 0; i < positions.length; i++) {
        if (positions[i].top < winTop) { // если прокрутка страницы ниже текущего блока
            if (currentActive !== i) { // если к текущему блоку ещё не добавлен класс 
                currentActive = i;
                links.filter('.active').removeClass('active'); // снять класс "active" с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; // выйти из цикла, чтобы не проверять блоки выше текущего 
        }
    }
});
