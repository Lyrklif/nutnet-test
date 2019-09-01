/**
 * Подключение всех js-файлов
 */


// Подключение бибилиотек
@@include('assets/src/js/_libs/jquery.js') // jquery 3.3.1
@@include('assets/src/js/_libs/slick.min.js') // slick slider
//('assets/src/js/_libs/jquery.maskedinput.min.js') // Маска для input
//('assets/src/js/_libs/collapse.js') // collapse
//('assets/src/js/_libs/dropdown.js') // dropdown
//('assets/src/js/_libs/modal.js') // modal



// Мой код
$(document).ready(function() {
    @@include('assets/src/js/_includes/people-say-slider.js') 
    @@include('assets/src/js/_includes/header-burger-menu.js') 
    @@include('assets/src/js/_includes/animate-scroll.js') 
    @@include('assets/src/js/_includes/header-active-link.js') 
    
    
});