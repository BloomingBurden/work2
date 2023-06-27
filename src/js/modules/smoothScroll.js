window.addEventListener('wheel', function(event) {
    // Получаем текущую позицию скролла
    var currentScrollPosition = window.pageYOffset;
  
    // Определяем направление скролла
    var direction = event.deltaY > 0 ? 1 : -1;
  
    // Вычисляем следующую позицию скролла
    var nextScrollPosition = currentScrollPosition + direction * 170;
    

    // Изменяем позицию скролла с плавной анимацией
    window.scrollTo({
      top: nextScrollPosition,
      behavior: 'smooth'
    });
  
    // Отменяем действие по умолчанию
    event.preventDefault();
  });