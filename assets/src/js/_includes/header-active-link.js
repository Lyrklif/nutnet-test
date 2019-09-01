/**
 * Переключение активного пункта меню в шапке сайта при нажатии и прокрутке страницы
 */

 
var positions = [], // позиции "якорных" блоков 
    currentActive = null, // id текущего блока 
    links = $('.site-nav__link'), // массив всех ссылок в шапке сайта
    anchor = $(".anchor"); // блоки, к которым ведут якорные ссылки в шапке сайта

links.click(function () {
    links.removeClass('active');
    $(this).addClass('active');
});

//перебираем блоки, сохраняем позиции и ссылки на пункты меню
anchor.each(function () { 
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#' + $(this).attr('id') + '"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse();

$(window).on('scroll', function () {
    var winTop = $(window).scrollTop();
    for (var i = 0; i < positions.length; i++) {
        if (positions[i].top < winTop) { //если прокрутка страницы ниже нашего блока
            if (currentActive !== i) { //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.filter('.active').removeClass('active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
});