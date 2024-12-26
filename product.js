
    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Находим все элементы с параллакс-эффектом
        document.querySelectorAll('.decorative-leaf, .decorative-bubbles').forEach((element) => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0;
            const translateY = scrollPosition * speed;

            // Применяем движение
            element.style.transform = `translateY(${translateY}px)`;
        });
    });

