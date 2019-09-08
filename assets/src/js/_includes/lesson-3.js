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
};