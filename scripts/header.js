/* Включаем/скрываем бургер меню по нажатию на кнопку */
let burger_button = document.getElementById('burger-button');
let burger_menu_item = document.getElementById('burger-menu-item');
let menu = document.getElementById('nav-menu');
let lang_link = document.getElementById('header-lang');

function showMenu(e) {
    if (menu.classList.contains('header_menu_visible')) {
        menu.classList.remove('header_menu_visible');
        burger_button.classList.remove('header__burger_on');
        burger_menu_item.classList.remove('header__burger-menu_off');
        lang_link.classList.remove('header__lang_visible');
    } else {
        menu.classList.add('header_menu_visible');
        burger_button.classList.add('header__burger_on');
        burger_menu_item.classList.add('header__burger-menu_off');
        lang_link.classList.add('header__lang_visible');
    }
}

burger_button.addEventListener('click', showMenu, false);

/* Обрабатываем нажатие на якорь и скрываем бургер меню */
function clickMenuItem(e) {
    if (e.target.tagName == 'A') {
        showMenu(e);
    }
}

menu.addEventListener('click', clickMenuItem, false);
