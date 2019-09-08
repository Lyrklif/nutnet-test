
// Слайдер отзывов в блоке People say

var peopleSaySlider = $('.people-say__list'), // Слайдер отзывов
  peopleSayNavSlider = $('.people-say__nav-slider'), // Слайдер фотографий, выполняет функцию dots для слайдера отзывов
  numberDotsPeopleSay = peopleSayNavSlider.find("li").length, // Количество элементов в слайдере
  dotShowSmall = 3; // Сколько dots будет показано в мобильной версии сайта


// Если в слайдере меньше 3 элементов, 
// то это количество и будет показано в мобильной версии сайта
if (numberDotsPeopleSay < 3) {
  dotShowSmall = numberDotsPeopleSay;
};


// Настройки слайдера отзывов
peopleSaySlider.slick({
  slidesToShow: 1, // Сколько элементов будет показано одновременно
  slidesToScroll: 1, // Какое к-во слайдов будет прокручиваться за раз
  arrows: false, // Отключить стрелки для переключения элементов слайдера
  asNavFor: peopleSayNavSlider, // Связать со слайдером навигации  
  draggable: false, // Нельзя переключать элементы, перетаскивая их мышкой 
  swipe: false, // Нельзя переключать элементы, проводя пальцем по слайдеру
  mobileFirst: true // Mobile first слайдер
});


// Настройки слайдера навигации (dots)
peopleSayNavSlider.slick({ // настройка навигации
  arrows: false, // Отключить стрелки для переключения элементов слайдера
  asNavFor: peopleSaySlider, // Связать со слайдером отзывов
  focusOnSelect: true, // Фокусировка на активном элементе
  draggable: false, // Нельзя переключать элементы, перетаскивая их мышкой 
  swipe: false, // Нельзя переключать элементы, проводя пальцем по слайдеру
  centerMode: true, // Активный слайд будет расположен по центру
  mobileFirst: true, // Mobile first слайдер

  slidesToShow: dotShowSmall, // Сколько элементов будет показано одновременно

  responsive: [{
    breakpoint: 576, // Если ширина экрана больше 576px
    settings: {
      slidesToShow: numberDotsPeopleSay, // Сколько элементов будет показано одновременно
    }
  }]
});
