import $ from 'jquery';
import slick from 'slick-carousel';

const slider = () => {
	$('.j-slider').slick({
		infinite: false,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [{
			breakpoint: 1279,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}

		}]
	});
};

export default slider;
