document.addEventListener('scroll', function () {
    const parallaxImage = document.querySelector('.parallax-image');
    const scrollY = window.scrollY;
    
    // Изменяем положение изображения в зависимости от прокрутки
    parallaxImage.style.transform = `translateY(${scrollY * 0.5}px)`;
});
