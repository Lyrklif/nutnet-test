// Слайдер отзывов в блоке People say

// var numberDotsPeopleSay = $('.people-say__nav-slider').find("li").length;

var peopleSaySlider = $('.people-say__list'),
    peopleSayNavSlider = $('.people-say__nav-slider'),
    numberDotsPeopleSay = peopleSayNavSlider.find("li").length,
    countDotsPeopleSaySmall = numberDotsPeopleSay;

if(numberDotsPeopleSay > 5) {
    countDotsPeopleSaySmall = 5;
}; 

peopleSaySlider.slick({ // это изначально slick слайдер для основного блока изображений
    slidesToShow: 1,  // по одному слайдеру 
    slidesToScroll: 1, // по одному менять
    arrows: false, // включение стрелок 
    asNavFor: '.people-say__nav-slider', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
    draggable: false
});

peopleSayNavSlider.slick({ // настройка навигации
    slidesToShow: numberDotsPeopleSay, 
    arrows: false, // включение стрелок 
    asNavFor: '.people-say__list', // указываем что это навигация для блока выше
    focusOnSelect: true,  // указываем что бы слайделось по клику
    // centerMode: false,
    
    responsive: [
        {
          breakpoint: 540,
          settings: {
            slidesToShow: countDotsPeopleSaySmall,
          }
        }
    ]
});




