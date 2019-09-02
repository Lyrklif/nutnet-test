// Слайдер отзывов в блоке People say

var peopleSaySlider = $('.people-say__list'),
  peopleSayNavSlider = $('.people-say__nav-slider'),
  numberDotsPeopleSay = peopleSayNavSlider.find("li").length,
  dotShowSmall = 3;

if (numberDotsPeopleSay < 3) {
  dotShowSmall = numberDotsPeopleSay;
};

if (numberDotsPeopleSay > 5) {
  numberDotsPeopleSay = 5;
};

peopleSaySlider.slick({ // это изначально slick слайдер для основного блока изображений
  slidesToShow: 1, // по одному слайдеру 
  slidesToScroll: 1, // по одному менять
  arrows: false, // выключение стрелок 
  asNavFor: peopleSayNavSlider, // навигация для слайдера 
  draggable: false,
  swipe: false,
  mobileFirst: true,
  initialSlide: 0,
});

peopleSayNavSlider.slick({ // настройка навигации
  arrows: false, // выключение стрелок 
  asNavFor: peopleSaySlider, // навигация для блока выше
  focusOnSelect: true, 
  swipe: false,
  centerMode:true,
  mobileFirst: true,

  slidesToShow: dotShowSmall,

  responsive: [{
    breakpoint: 540,
    settings: {
      slidesToShow: numberDotsPeopleSay,
    }
  }]
});