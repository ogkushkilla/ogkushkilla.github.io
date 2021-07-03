document.querySelector('button').addEventListener('click', function() {
    document.querySelector('#main').classList.toggle('menu_active');
});

let anchors = document.querySelectorAll('header a[href*="#"]');

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
}