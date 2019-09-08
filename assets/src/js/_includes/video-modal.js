
// Открытие модального окна с видео 

var openVideo = $('.video__watch'), // Блок, при нажатии на который появляется модальное окно, содержит кнопку и заголовок
    modalVideo = $('.modal-video'), // Модальное окно с видео
    modalWp = $('.modal-wp'), // Обёртка модального окна для затемнения экрана 
    closeModalVideo = $('.modal-video__close'), // Кнопка закрытия модального окна
    videoIframe = $('.modal-video__video'); // Видео в модальном окне


// При клике на блок появляется модальное окно
openVideo.click(function () {
    modalWp.toggleClass('open');
});

// При нажатии на кнопку закрытия модальное окно исчезает, 
// а воспроизведение видео останавливается
closeModalVideo.click(function () {
    modalWp.removeClass('open');
    videoIframe.attr("src", videoIframe.attr("src")); // остановить воспроизведение видео 
});
