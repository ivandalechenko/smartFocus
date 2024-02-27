// try {

// Функция, которая будет вызвана при появлении элемента в поле зрения
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // Если элемент становится видимым
        if (entry.isIntersecting) {
            // Получаем элемент
            const target = entry.target;
            // Заменяем атрибут "src" на "data-src", загружая изображение
            target.setAttribute('src', target.getAttribute('data-src'));
            // Устанавливаем opacity в 1, чтобы сделать изображение видимым
            target.style.opacity = 1;
            // Отключаем наблюдение за этим элементом, если нужно сделать это только один раз
            observer.unobserve(target);
        }
    });
}

// Создаем новый Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Находим все элементы с классом "lazy-image"
const lazyImages = document.querySelectorAll('img');

// Начинаем наблюдение за каждым элементом
lazyImages.forEach(image => {
    if (!image.classList.contains('notEasyLoad')) {
        observer.observe(image);
    }
});
// } catch (error) {

// }