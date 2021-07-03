;(function () {
    let mainMenu = document.querySelector('.main-menu');

    if (mainMenu === null) {
        return;
    }

    let removeChildren = function(item) {
        while(item.firstChild) {
            item.removeChild(item.firstChild)
        }
    }

    let updateChildren = function(item, children) {
        console.log(children);
        removeChildren(item);
        for (let i = 0; i < children.length; i++) {
            item.appendChild(children[i]);
        }
    };

    let cards = mainMenu.querySelector('.menu-cards')
    let filterNav = mainMenu.querySelector('.filter-nav')
    let filterItems = mainMenu.querySelectorAll('.menu-card')

    filterNav.addEventListener('click', function (e) {
        let target = e.target;
        let item = myLib.closestItemByClass(target, 'filter-button')

        if (item === null || item.classList.contains('.active')) {
            return;
        }

        e.preventDefault();
        let filterValue = item.getAttribute('data-filter');
        let previousBtnActive = filterNav.querySelector('.filter-button.active');

        previousBtnActive.classList.remove('active');
        item.classList.add('active');

        if (filterValue === 'all') {
            updateChildren(cards, filterItems);
            return;
        }

        let filteredItems = [];
        for (let i = 0; i < filterItems.length; i++) {
            let current = filterItems[i];
            if (current.getAttribute('data-category') === filterValue) {
                filteredItems.push(current);
            } 
        }

        updateChildren(cards, filteredItems);
    });
})();