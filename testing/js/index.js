let circleItem = document.querySelector('.circle');                 // Здесь хранится элемент Круг
let circleText = document.querySelector('.circle-text');            // Здесь хранится элемент текста в круге
let formBlock = document.querySelector('.form-block');              // Здесь хранится родительский блок формы
let deliveryButton = document.querySelector('.delivery-button');    // Здесь хранится кнопка "Доставить"
let yearInput = document.querySelector('.date-input');              // Здесь хранится поле для ввода даты
let resultBlock = document.querySelector('.result');                // Здесь хранится блок с выводом итоговой информации
let body = document.getElementsByTagName('body');
// Здесь хранятся данные для формы
let json = [
    {
        "mark": "Audi",
        "model": "A4",
        "year": "2015",
        "delivery-min": "2021-05-21",
        "delivery-max": "2022-02-28"
    },

    {
        "mark": "Audi",
        "model": "A4",
        "year": "2016",
        "delivery-min": "2021-05-01",
        "delivery-max": "2022-03-21"
    },

    {
        "mark": "Audi",
        "model": "A5",
        "year": "2015",
        "delivery-min": "2021-05-21",
        "delivery-max": "2021-06-28"
    },

    {
        "mark": "ВАЗ",
        "model": "2101",
        "year": "1970",
        "delivery-min": "2021-05-21",
        "delivery-max": "2021-10-28"
    },

    {
        "mark": "BMW",
        "model": "M4",
        "year": "2017",
        "delivery-min": "2021-05-21",
        "delivery-max": "2021-05-28"
    },

    {
        "mark": "BMW",
        "model": "X7",
        "year": "2019",
        "delivery-min": "2021-05-21",
        "delivery-max": "2021-07-28"
    },

    {
        "mark": "Wolkswagen",
        "model": "Polo",
        "year": "2010",
        "delivery-min": "2021-10-21",
        "delivery-max": "2021-12-01"
    },

    {
        "mark": "Wolkswagen",
        "model": "Polo",
        "year": "2014",
        "delivery-min": "2021-10-21",
        "delivery-max": "2021-12-01"
    },

    {
        "mark": "Wolkswagen",
        "model": "Tuarek",
        "year": "2018",
        "delivery-min": "2021-10-21",
        "delivery-max": "2022-01-31",
    },

    {
        "mark": "Renaut",
        "model": "Logan",
        "year": "2007",
        "delivery-min": "2021-08-05",
        "delivery-max": "2022-08-05",
    }
]

let disabledClick = false;      // Нужна для блокировки клика
// При клике на Круг, показываем родительский блок формы 
circleItem.addEventListener('click', function (e) {
    // Блокируем любые действия с блоком
    e.stopPropagation();
    if (disabledClick === true) {
        return false;
    }
    // Блокируем клик
    disabledClick = true;
    // Если круг появился - срабатывает клик
    if (getComputedStyle(circleItem).opacity === '1') {
        formBlock.classList.add('overflow');
        $(body).css('background-color', 'rgba(0, 0, 0, 0.2)');
    }
    // Показываем всплывающее окно, если с момента клика прошло 6 секунд
    setTimeout(function () {
        formBlock.classList.add('overflow');
        $(body).css('background-color', 'rgba(0, 0, 0, 0.2)');
    }, 6000);
});

let marks = {};
// Ищем одинаковые значения mark в json
json.forEach( function( item ) {
    let mark = marks[item.mark] = marks[item.mark] || {};
    mark[item.mark] = true;
});

let markData = [];
// После, пушим отфильтрованные данные в пустой массив
for( let mark in marks ) {
    markData.push({ mark: mark});
}
// Полученные данные переводим в строку JSON
JSON.stringify( markData, null, 4 );
// Добавляем новые данные в select с тегом option
markData.forEach((item) => {
    $('#mark').append('<option value="' + item.mark + '">' + item.mark + '</option>');
})
// Добавляем исходные данные в остальные select
json.forEach((item) => {
    $('#model').append('<option value="' + item.model + '" class="' + item.mark + '">' + item.model + '</option>');
    $('#year').append('<option value="' + item.year + '" class="' + item.model + '">' + item.year + '</option>');
});
// Отображаем модель по марке автомобиля
$('select[name=autoMark]').change(function() {
    $('select[name=autoModel]').show();
    $('select[name=autoModel] option').hide();
    $('select[name=autoModel] option.' + $('select[name=autoMark]').val()).show();
});
// Отображаем год по модели автомобиля
$('select[name=autoModel]').change(function() {
    $('select[name=autoYear]').show();
    $('select[name=autoYear] option').hide();
    $('select[name=autoYear] option.' + $('select[name=autoModel]').val()).show();
});
// Если заполнили select с годом выпуска - показываем кнопку "Доставить"
$('select[name=autoYear]').change(function() {
    $(deliveryButton).show();
});
// По клику на кнопке показываем поле для ввода даты
$(deliveryButton).click(function() {
    $(yearInput).show();
});
// Функция ставит интервал даты в поле для ввода даты доставки
function textOption(sel) {
    for (let i = 0; i < json.length; i++) {
        let current = json[i];
        // Если значение модели или год выпуска совпадают со значением выбранного option, то ограничиваем дату исходя из данных json
        if (current.model === sel.options[sel.selectedIndex].text || current.year === sel.options[sel.selectedIndex].text) {
            $(yearInput).attr('min', current["delivery-min"])
            $(yearInput).attr('max', current["delivery-max"])
        }
    }
};
// После выбора даты скрываем родительский блок формы, Круг и показываем итоговый результат
$(yearInput).change(function() {
    $(formBlock).hide();
    $(circleItem).hide();
    $(resultBlock).css('display', 'flex');
});
// Функция обновляет содержимое без перезагрузки страницы
function setNewContent() {
    $('#main').load("index.html");
};