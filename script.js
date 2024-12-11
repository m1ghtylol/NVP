var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}


document.querySelector('.nav a[href="#servers"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#frame-lostsouls');
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});


document.querySelector('.nav a[href="#play"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#launcher');
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 70;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});


document.querySelector('.play-main').addEventListener('click', function(e) {
    e.preventDefault(); // Останавливаем стандартное поведение ссылки
    const target = document.querySelector('#launcher'); // Целевой элемент
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 100; // Позиция целевого элемента

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth' // Плавная прокрутка
    });
});


document.querySelector('.more').addEventListener('click', function(e) {
    e.preventDefault(); // Останавливаем стандартное поведение ссылки
    const target = document.querySelector('#frame-lostsouls'); // Целевой элемент
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 130; // Позиция целевого элемента

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth' // Плавная прокрутка
    });
});



document.querySelector('.nav-footer a[href="#servers-footer"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#frame-lostsouls');
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 130;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});

document.querySelector('.nav-footer a[href="#play-footer"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#launcher');
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});
