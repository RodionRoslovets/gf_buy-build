$(document).ready(()=>{

	let owlBestsellers = $('.bestsellers .row'),
		owlManufacturers = $('.manufacturers .row');

	// Слайдер хитов продаж
	$('.bestsellers .row').owlCarousel({
		items:1.3,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		responsive:{
			800:{
				items:2,
			},
			1000:{
				items:3,
			},
			1200:{
				items:4,
			},
		}

	});

	$('.bestsellers__arrow.arrow_left').click(function() {
		owlBestsellers.trigger('prev.owl.carousel');
	});
	$('.bestsellers__arrow.arrow_right').click(function() {
		owlBestsellers.trigger('next.owl.carousel');
	});

	// Слайдер производителей
	$('.manufacturers .row').owlCarousel({
		items:1.3,
		loop:true,
		autoplay:true,
		autoplayTimeout:3500,
		responsive:{
			800:{
				items:2,
			},
			1000:{
				items:3,
			},
			1200:{
				items:6,
			},
		}
	});

	$('.manufacturers__arrow.arrow_left').click(function() {
		owlManufacturers.trigger('prev.owl.carousel');
	});
	$('.manufacturers__arrow.arrow_right').click(function() {
		owlManufacturers.trigger('next.owl.carousel');
	});
});
