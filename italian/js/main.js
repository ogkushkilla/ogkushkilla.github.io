document.querySelector('.navbar__menu').addEventListener('click', function() {
    document.querySelector('.navbar__menu').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});