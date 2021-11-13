let tableButton = document.querySelector('.table-button');
let hideElement = document.querySelectorAll('.hide-el');

let selectorMenu = document.querySelector('.selector-menu');
let companySelector = document.querySelector('.company-selector');

let handleClick = () => {
    tableButton.addEventListener('click', (e) => {
        e = e.target;
        tableButton.classList.toggle('clicked');
        if (tableButton.classList.contains('clicked')) {
            hideElement.forEach(function(el) {
                el.style.display = 'none';
            });
            tableButton.classList.add('rotate');
        } else {
            hideElement.forEach(function(el) {
                el.style.display = 'table';
            });
            tableButton.classList.remove('rotate');
        }
    });

    selectorMenu.addEventListener('click', (e) => {
        e = e.target;
        companySelector.classList.toggle('company-selector__clicked');
        selectorMenu.classList.toggle('selector-menu__rotate');
    })
}

handleClick();