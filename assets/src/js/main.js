
// Подключение всех js-файлов



// Подключение бибилиотек
@@include('assets/src/js/_libs/jquery.js')                      // jquery 3.3.1
@@include('assets/src/js/_libs/slick.js')                       // slick slider 1.8.1


// Мой код
$(document).ready(function() {
    @@include('assets/src/js/_includes/people-say-slider.js')   // Слайдер отзывов в блоке People say
    @@include('assets/src/js/_includes/header-burger-menu.js')  // Burger menu в шапке сайта
    @@include('assets/src/js/_includes/animate-scroll.js')      // Плавная прокрутка до якоря
    @@include('assets/src/js/_includes/header-active-link.js')  // Переключение активного пункта меню в шапке 
    @@include('assets/src/js/_includes/header-scroll.js')       // При проктутке страницы вниз у шапки появляется фон
    @@include('assets/src/js/_includes/video-modal.js')         // Открытие модального окна с видео 
    
});
