const clickBurger = () => {
	const burger = document.querySelector('.j-burger');
	const mobileMenu = document.querySelector('.j-mobile-menu');

	const openMenu = () => {
		mobileMenu.classList.toggle('mobile-menu--is-active');
		burger.classList.toggle('burger--is-active');
	};


	burger.addEventListener('click', function(e) {
		e.preventDefault();

		openMenu();
	});
};

export default clickBurger;
