
// Координаты курсора относительно блока во втором section

var blockLesson2 = document.querySelector('.lesson-2__block'), // Блок
    coordinatesBlock2 = document.querySelector('.lesson-2__coordinates'); // Куда будут записаны координаты


/**
 * Если провести курсором мыши по блоку, то в параграфе под блоком будут показаны
 * координаты курсора относительно границ этого блока 
 * @param  {} mousemove [обрабатываемое событие]
 * @param  {} blockX [Координаты относительно блока по оси Y]
 * @param  {} blockY [Координаты относительно блока по оси Y]
 */
blockLesson2.addEventListener("mousemove", function(e){
    let blockX = e.offsetX, // Координаты относительно блока по оси Y
        blockY = e.offsetY; // Координаты относительно блока по оси Y

    coordinatesBlock2.innerHTML = 'Left = ' + blockX  + ', Top = ' + blockY;
});