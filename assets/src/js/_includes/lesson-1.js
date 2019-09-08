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

