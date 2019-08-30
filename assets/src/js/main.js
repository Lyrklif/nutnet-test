/**
 * Подключение всех js-файлов
 */


// Подключение бибилиотек
@@include('assets/src/js/_libs/jquery.js') // jquery 3.3.1
@@include('assets/src/js/_libs/slick.min.js') // slick slider
//('assets/src/js/_libs/jquery.maskedinput.min.js') // Маска для input



// Мой код
$(document).ready(function() {
    @@include('assets/src/js/_includes/people-say-slider.js') 

});