'use strict';


/**
 * Путь к файлам
 * src - исходные файлы
 * dist - готовые файлы 
 * watch - файлы, за изменениями в которых надо наблюдать
 */
var path = {
    dist: {
        html: 'assets/dist/',
        js: 'assets/dist/js/',
        css: 'assets/dist/css/',
        img: 'assets/dist/img/'
    },
    src: {
        baseDir: 'assets/src',
        pug: 'assets/src/pug/*.pug',
        js: 'assets/src/js/main.js',
        scss: 'assets/src/scss/main.scss',
        img: 'assets/src/img/**/*.*'
    },
    watch: {
        pug: 'assets/src/pug/**/*.pug',
        js: 'assets/src/js/**/*.js',
        scss: 'assets/src/scss/**/*.scss',
        img: 'assets/src/img/**/*.*'
    },
    clean: './assets/dist/*'
};


/* настройки сервера */
var config = {
    server: { baseDir: './assets/dist' },
    notify: false
};

/* подключаем gulp и плагины */
var gulp = require('gulp'), // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    uglify = require('gulp-uglify-es').default, // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    del = require('del'), // плагин для удаления файлов и каталогов
    rename = require('gulp-rename'), // изменение имени файла
    fileinclude = require('gulp-file-include'), // модуль для импорта содержимого одного файла в другой
    pug = require('gulp-pug'); // препроцессор pug



/* задачи */

// запуск сервера
gulp.task('webserver', function() {
    webserver(config);
});

// сбор html
// gulp.task('html:dist', function() {
//     return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
//         .pipe(plumber()) // отслеживание ошибок
//         .pipe(fileinclude({ // импорт вложений
//             prefix: '@@',
//             basepath: path.src.baseDir
//         }))
//         .pipe(gulp.dest(path.dist.html)) // выкладывание готовых файлов
//         .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
// });


// сбор html из pug-файлов
gulp.task('html:dist', function() {
    return gulp.src(path.src.pug)
        .pipe(plumber()) // отслеживание ошибок
        .pipe(pug())
        .pipe(gulp.dest(path.dist.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
  });


// сбор стилей
gulp.task('css:dist', function() {
    return gulp.src(path.src.scss) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] })) // добавим префиксы
        .pipe(gulp.dest(path.dist.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.dist.css)) // выгружаем в dist
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});



// сбор js
gulp.task('js:dist', function() {
    return gulp.src(path.src.js) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(fileinclude({ // импортируем все указанные файлы в main.js
            prefix: '@@',
            basepath: '@root'
        }))
        .pipe(gulp.dest(path.dist.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(uglify()) // минимизируем js
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.dist.js)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});


// перенос картинок
gulp.task('img:dist', function() {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(gulp.dest(path.dist.img)); // выгрузка готовых файлов
});

// удаление старых файлов из каталога dist 
gulp.task('clean:dist', async function() {
    return del.sync(path.clean);
});

// очистка кэша
gulp.task('cache:clear', function() {
    cache.clearAll();
});

// сборка
gulp.task('dist',
    gulp.series('clean:dist',
        gulp.parallel(
            'html:dist',
            'css:dist',
            'js:dist',
            'img:dist'
        )
    )
);

// запуск задач при изменении файлов
gulp.task('watch', function() {
    gulp.watch(path.watch.pug, gulp.series('html:dist'));
    gulp.watch(path.watch.scss, gulp.series('css:dist'));
    gulp.watch(path.watch.js, gulp.series('js:dist'));
    gulp.watch(path.watch.img, gulp.series('img:dist'));
});

// задача по умолчанию
gulp.task('default', gulp.series(
    'dist',
    gulp.parallel('webserver', 'watch')
));