;(function() {
    let cards = document.querySelector('.menu-cards');

    if (cards === null) {
        return;
    }

    let changeProductSize = function(target) {
        let product = myLib.closestItemByClass(target, 'menu-card');
        let previousBtnActive = product.querySelector('.choosen-type.is-active');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
    }

    let changeProductOrderInfo = function(target) {
        let product = myLib.closestItemByClass(target, 'menu-card');
        let order = document.querySelector('.popup');

        let productTitle = product.querySelector('.card-title').textContent;
        let productSize = product.querySelector('.choosen-type.is-active').textContent;
        let productPrice = product.querySelector('.card-price').textContent;
        let productImgSrc = product.querySelector('.card-image').getAttribute('src');
        let bigPrice = 50;
        
        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);
        order.querySelector('.order-info-size').setAttribute('value', productSize);

        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-type').textContent = productSize;
        order.querySelector('.popup-image').setAttribute('src', productImgSrc);

        if (productSize === 'большой') {
            order.querySelector('.order-product-price').textContent = parseInt(productPrice) + bigPrice + ' ₽';
        } else {
            order.querySelector('.order-product-price').textContent = productPrice;
        }
    }

    cards.addEventListener('click', function(e) {
        let target = e.target;

        if (target.classList.contains('choosen-type')) {
            e.preventDefault();
            changeProductSize(target);
        }
        if (target.classList.contains('card-button')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });

})();