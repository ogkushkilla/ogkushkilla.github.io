var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.special-pagination',
        bulletClass: 'special-bullet',
        bulletActiveClass: 'special-bullet-active',
        clickable: true
      },
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