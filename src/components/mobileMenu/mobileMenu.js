const openSubmenu = () => {
    const menuItem = [...document.querySelectorAll('.j-mobile-menu__link')];

    menuItem.forEach((item) => {
        const submenu = item.nextElementSibling;
        if (submenu) {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                item.classList.toggle('is-open');
                submenu.classList.toggle('is-open');
            })
        }
    });
};

export default openSubmenu;
