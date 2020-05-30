import Burger from '../components/burger/burger';
import MobileMenu from '../components/mobileMenu/mobileMenu';
import Slider from '../components/slickSlider/slickSlider';


const burgerItem = document.querySelector('.j-burger');
if(burgerItem) {
	Burger();
}

const mobileMenuItem = document.querySelector('.j-mobile-menu');
if(mobileMenuItem) {
	MobileMenu();
}

const slider = document.querySelector('.j-slider');
if(slider) {
	Slider();
}
