
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
};