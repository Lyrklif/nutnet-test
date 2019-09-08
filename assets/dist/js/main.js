"use strict";

// Подключение всех js-файлов



// Подключение бибилиотек
// ('assets/src/js/_libs/jquery.js')                      // jquery 3.3.1
// ('assets/src/js/_libs/slick.js')                       // slick slider 1.8.1


// Мой код
document.addEventListener('DOMContentLoaded', function() {
    // При нажатии на картинку блока, этот блок выделяется
// (если поставить обработчик на сам блок, то это не сработает, т.к. картинка перекрывает собой весь блок)


var imageItemsWrap = document.querySelector('.lesson-1__img-list'), // Родительский блок (ul) элементов, к которым будут применяться стили
    imageItemClass = 'lesson-1__img', // Класс картинок, содержащихся в блоках, к которым будут применяться стили
    selectItemClass = 'bordered'; // класс, который будет добавляться при клике на элемент


// При нажатии на блок 
imageItemsWrap.addEventListener('click', function (e) {
    let clickElement = e.target, // Элемент, на который нажимаем
        clickElementClassName = clickElement.className; // Класс элемента, на который нажимаем 
    
    // Если нажали на картинку блока, к которому будет применяться стили
    if(clickElementClassName == imageItemClass) {
        // добавить/удалить класс родительскому элементу картинки 
        clickElement.parentElement.classList.toggle(selectItemClass);
    }
});

   // lesson-1 
    
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
});   // lesson-2 
    // При надатии на блок, ему добавляется случайное оформление


// Массив классов для декора блока
// У каждого класса прописаны стили в css
var decorClasses = [
    'bordered',
    'opacity',
    'shadow',
    'bordered-2'
];


var decorBlockDefaultClass = 'lesson-3__block', // Стандартный класс блока
    decorBlock = document.querySelector('.' + decorBlockDefaultClass); // Блок, клик по которому будет обрабатываться

/**
 * При нажатии на блок, ему добавляется случайный класс из массива decorClasses
 */
decorBlock.addEventListener('click', function clickDecorBlock(e) {
    decorBlock.removeAttribute('class'); // Удалить все классы у блока
    decorBlock.classList.add(decorBlockDefaultClass); // Добавить изначальный класс блока
    decorBlock.style.backgroundColor = getRandomColor(); // Установить случайный цвет фона 
    decorBlock.classList.add(radromDecorClass()); // Добавить блоку случайный класс из массива
});


/**
 * Получить случайное значение из массива слассов для декора блока
 * @param  {} radromDecorClass [Случайное значение из массива decorClasses]
 */
function radromDecorClass() {
    // decorClasses[отбросить значения после запятой(случайное число от 0 до 1 * длина массива)]
    let radromDecorClass = decorClasses[Math.floor(Math.random() * decorClasses.length)];

    return radromDecorClass;
};

// Генератор случайного цвета
function getRandomColor() {
    var letters = '0123456789ABCDEF'; // возможные буквенные значения в цвете
    var color = '#'; // сюда будет записан итоговый цвет

    // цвет состоит из 6 букв
    for (var i = 0; i < 6; i++) {
        // в переменную записывается одна случайная буква из массива
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
};   // lesson-3 
    
// Перемещение элементов внури родительских блоков

var bloksWpIn4 = document.querySelectorAll('.lesson-4__blocks-wp'), // Массив родительских блоков 
    blocksIn4 = document.querySelectorAll('.lesson-4__block'), // Массив дочерних элементов блоков 
    elementsIndex = document.querySelector('.lesson-4__elementsIndex'), // Параграф для записи данных ДО перестановок
    elementsIndexAfter = document.querySelector('.lesson-4__elementsIndex-after'); // Параграф для записи данных ПОСЛЕ перестановок


// Записать в параграф список дочерних элементов блоков ДО всех перестановок
// в виде "i: className", где i - index элемента
elementsIndex.innerHTML = bloksWpInfo(bloksWpIn4);


// Удалить 0 элемент из 0 блока 
bloksWpIn4[0].removeChild(blocksIn4[0]);

// Перенести 2 элемент во 1 блок в конец
bloksWpIn4[1].appendChild(blocksIn4[1]);

// Перенести 7 элемент из 1 блока в 0 блок
// insertBefore(какой элемент перенести, перед каким элементов поставить)
bloksWpIn4[0].insertBefore(blocksIn4[7], blocksIn4[3]);

// Перенести в 0 блок клон 9 элемента
// поставить его в конец
bloksWpIn4[0].appendChild(blocksIn4[9].cloneNode());

// Перенести в 0 блок клон 9 элемента и всех его дочерних элементов
// поставить его в конец
bloksWpIn4[0].appendChild(blocksIn4[9].cloneNode(true));


// Записать в параграф список дочерних элементов блоков ПОСЛЕ всех перестановок 
// в виде "i: className", где i - index элемента
elementsIndexAfter.innerHTML = bloksWpInfo(bloksWpIn4);



/**
 * Перебор массива родительских блоков и массива их дочерних элементов и запись данных в строку
 * Возвращает строку, содержащую:
 * i: класс блока (i - порядковый номер блока в массиве)
 * z класс дочернего блока (z - содержимое элемента (текст внутри))
 * @param  {} array [массив, принимаемый в качестве параметра]
 * @param  {} str [строка, куда записываются данные об элементах массива]
 * @param  {} return str
 */
function bloksWpInfo(array) {
    let str = ''; // строка, куда записываются данные об элементах массива

    // перебрать все элементы массива родительских блоков
    for (let i = 0; i < array.length; i++) {
        // записать в str index блока и название класса
        str += '<b>' + i + ': ' + array[i].className + '</b>' + '<br>';

        // пеербрать массив дочерних элементов этого родительского блока
        for (let z = 0; z < array[i].children.length; z++) {
            // записать в строку index элемента и его второй класс в списке классов
            str += array[i].children[z].textContent + ' ' + array[i].children[z].classList[1] + '<br>';
        }
        str += '<br>';
    }
    return str;
};   // lesson-4 

 }, false);


