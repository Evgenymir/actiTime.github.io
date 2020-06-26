const openSubmenu = () => {
    const menuItem = [...document.querySelectorAll('.j-mobile-menu__link')];

    menuItem.forEach((item) => {
        const submenu = item.nextElementSibling;
        if (submenu) {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                item.classList.toggle('mobile-menu__link--is-open');
                submenu.classList.toggle('mobile-menu__submenu--is-open');
            })
        }
    });
};

export default openSubmenu;
