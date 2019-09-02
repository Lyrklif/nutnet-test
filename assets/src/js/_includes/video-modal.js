// Модальное окно в разделе Video

var openVideo = $('.video__btn'),
    modalVideo = $('.modal-video'),
    modalWp = $('.modal-wp'),
    closeModalVideo = $('.modal-video__close'), 
    videoIframe = $('.modal-video__video');


openVideo.click(function () {
    modalWp.toggleClass('open');
});

closeModalVideo.click(function () {
    modalWp.removeClass('open');
    videoIframe.attr("src", videoIframe.attr("src")); // Остановить воспроизведение видео при закрытии модального окна
});

