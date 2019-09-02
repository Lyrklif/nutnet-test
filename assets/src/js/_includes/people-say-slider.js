// Слайдер отзывов в блоке People say

var peopleSaySlider = $('.people-say__list'),
  peopleSayNavSlider = $('.people-say__nav-slider'),
  numberDotsPeopleSay = peopleSayNavSlider.find("li").length,
  dotShowSmall = 3;

if (numberDotsPeopleSay < 3) {
  dotShowSmall = numberDotsPeopleSay;
};


peopleSaySlider.slick({ // это изначально slick слайдер для основного блока изображений
  slidesToShow: 1, // по одному слайдеру 
  slidesToScroll: 1, // по одному менять
  arrows: false, // выключение стрелок 
  asNavFor: peopleSayNavSlider, // навигация для слайдера 
  draggable: false,
  swipe: false,
  mobileFirst: true,
});

peopleSayNavSlider.slick({ // настройка навигации
  arrows: false, // выключение стрелок 
  asNavFor: peopleSaySlider, // навигация для блока выше
  focusOnSelect: true,
  swipe: false,
  centerMode: true,
  mobileFirst: true,

  slidesToShow: dotShowSmall,

  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: numberDotsPeopleSay,
    }
  }]
});