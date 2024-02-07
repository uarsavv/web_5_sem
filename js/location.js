
    // Получаем текущий путь страницы
    var currentPage = document.location.href;

    // Получаем все ссылки меню
    var menuLinks = document.querySelectorAll(".nav_link");

    // Перебираем ссылки
    menuLinks.forEach(function(link) {
    // Проверяем совпадает ли адрес ссылки с текущим путем страницы
    if (link.href === currentPage) {
    // Если совпадает, добавляем active к ссылке
    link.classList.add("active");

    // Добавляем класс "underlined" к родительскому элементу ссылки
    link.parentNode.classList.add("underlined");
}
});
