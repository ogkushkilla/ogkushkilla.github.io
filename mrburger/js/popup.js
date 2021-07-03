;(function() {
    let body = document.querySelector('body');

    let closestItemByClass = function(item, className) {
        let node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    let showPopup = function(target) {
        target.classList.add('hidden');
    };

    let closePopup = function(target) {
        target.classList.remove('hidden');
    };

    let toggleScroll = function () {
        body.classList.toggle('no-scroll');
    };

    body.addEventListener('click', function(e){
        let target = e.target;
        let popupClass = target.getAttribute('data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();
        let popup = document.querySelector('.' + popupClass);
        
        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    }); 

    body.addEventListener('click', function(e) {
        let target = e.target;

        if (target.classList.contains('close') || target.classList.contains('popup')) {
            let popup = closestItemByClass(target, 'popup');
            
            closePopup(popup);
            toggleScroll();
        }
    });

})();