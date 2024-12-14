// Список всех изображений
const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png'
];

// Индекс текущего изображения
let currentIndex = 0;

const imageContainer = document.getElementById('image');

// Функция для плавного обновления изображения
function updateImage() {
    // Плавно исчезаем изображение
    imageContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    imageContainer.style.opacity = '0';
    imageContainer.style.transform = 'scale(0.95)'; // Немного уменьшаем изображение для эффекта

    // Обновляем изображение после задержки
    setTimeout(() => {
        imageContainer.src = images[currentIndex];

        // Плавно показываем изображение
        imageContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        imageContainer.style.opacity = '1';
        imageContainer.style.transform = 'scale(1)'; // Восстанавливаем нормальный размер изображения
    }, 300); // Задержка на время исчезновения (300мс)
}

// Обработчик для кнопки "вправо"
document.getElementById('nextImage').addEventListener('click', function(event) {
    event.preventDefault();  // Останавливаем переход по ссылке

    // Увеличиваем индекс (переход к следующему изображению)
    currentIndex = (currentIndex + 1) % images.length;

    // Обновляем изображение
    updateImage();
});

// Обработчик для кнопки "влево"
document.getElementById('prevImage').addEventListener('click', function(event) {
    event.preventDefault();  // Останавливаем переход по ссылке

    // Уменьшаем индекс (переход к предыдущему изображению)
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    // Обновляем изображение
    updateImage();
});
