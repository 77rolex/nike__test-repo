function hideEmptyItems() {
    const items = document.querySelectorAll('.sports-time__item');

    items.forEach(item => {
        const hasLink = item.querySelector('a');

        if (window.innerWidth <= 1400 && !hasLink) {
            item.style.display = 'none';
        } else {
            item.style.display = ''; 
        }
    });
}

// запуск при загрузке
hideEmptyItems();

// запуск при изменении размера окна
window.addEventListener('resize', hideEmptyItems);
