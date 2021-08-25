let circleItem = document.querySelector('.circle');
let formBlock = document.querySelector('.form-block');
let deliveryButton = document.querySelector('.delivery-button');
let yearInput = document.querySelector('.date-input');
let resultBlock = document.querySelector('.result');

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

circleItem.addEventListener('click', function(e) {
    formBlock.classList.add('overflow');
});

let marks = {};
json.forEach( function( item ) {
    let mark = marks[item.mark] = marks[item.mark] || {};
    mark[item.mark] = true;
});

let markData = [];
for( let mark in marks ) {
    markData.push({ mark: mark});
}

JSON.stringify( markData, null, 4 );

markData.forEach((item) => {
    $('#mark').append('<option value="' + item.mark + '">' + item.mark + '</option>');
})

json.forEach((item) => {
    $('#model').append('<option value="' + item.model + '" class="' + item.mark + '">' + item.model + '</option>');
    $('#year').append('<option value="' + item.year + '" class="' + item.model + '">' + item.year + '</option>');
});

$('select[name=autoMark]').change(function() {
    $('select[name=autoModel]').show();
    $('select[name=autoModel] option').hide();
    $('select[name=autoModel] option.' + $('select[name=autoMark]').val()).show();
});

$('select[name=autoModel]').change(function() {
    $('select[name=autoYear]').show();
    $('select[name=autoYear] option').hide();
    $('select[name=autoYear] option.' + $('select[name=autoModel]').val()).show();
});

$('select[name=autoYear]').change(function() {
    $(deliveryButton).show();
});

$(deliveryButton).click(function() {
    $(yearInput).show();
});

function textOption(sel) {
    for (let i = 0; i < json.length; i++) {
        let current = json[i];
        if (current.model === sel.options[sel.selectedIndex].text || current.year === sel.options[sel.selectedIndex].text) {
            $(yearInput).attr('min', current["delivery-min"])
            $(yearInput).attr('max', current["delivery-max"])
        }
    }
    console.log(sel.options[sel.selectedIndex].text);
};

$(yearInput).change(function() {
    $(formBlock).hide();
    $(circleItem).hide();
    $(resultBlock).css('display', 'flex');
});

function setNewContent() {
    $('#main').load("index.html");
};