import Burger from '../components/burger/burger';
import MobileMenu from '../components/mobileMenu/mobileMenu';
import AdvantagesSlider from '../components/slickSlider/slickSlider';


const burgerItem = document.querySelector('.j-burger');
if(burgerItem) {
	Burger();
}

const mobileMenuItem = document.querySelector('.j-mobile-menu');
if(mobileMenuItem) {
	MobileMenu();
}

const advantagesSlider = document.querySelector('.j-advantages-slider');
if(advantagesSlider) {
	AdvantagesSlider();
}
