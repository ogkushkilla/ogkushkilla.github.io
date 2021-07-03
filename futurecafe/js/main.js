new WOW().init();

let anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            console.log(anchorId)
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
};