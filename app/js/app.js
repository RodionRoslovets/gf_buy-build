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

	//каталог
	$('.header-bottom__menu').on('click', ()=>{
		$('.catalog-menu').fadeToggle();
	});

	$('.login-link').on('click', (e)=>{
		e.preventDefault();
		$('.login-panel').fadeToggle();
	});

	//Слайдер фильтра по цене

	$('.price-filter__slider').slider({
		range:true,
		classes:{
			"ui-slider-handle": "price-filter__slider-handle",
			"ui-slider-range": "price-filter__slider-range",
			"ui-slider": "price-filter__slider-base",
		},
		min:100,
		max:30000,
		values: [100, 30000],
		slide:(e,ui)=>{
			if(ui.handleIndex === 0){
				$('#price-min').attr('value', ui.value)
			}
			if(ui.handleIndex === 1){
				$('#price-max').attr('value', ui.value)
			}
		}
	});

	//обработка чекбоксов для выделения цвета

	$('.color-filter__colors').on('click', ()=>{
		let checkboxes = [...$('.color-filter__colors input[type="checkbox"]')],
			colors = $('.color-filter__color');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				colors[index].classList.add('color-filter__color_active');
			}

			if(!item.checked && colors[index].classList.contains('color-filter__color_active')){
				colors[index].classList.remove('color-filter__color_active')
			}
		});
	});

	//обработка чекбоксов для фильтра по типу

	$('.type-filter').on('click', ()=>{
		let checkboxes = [...$('.type-filter input[type="checkbox"]')],
			boxes = $('.type-filter__checkbox');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				boxes[index].classList.add('type-filter__checkbox_active');
			}

			if(!item.checked && boxes[index].classList.contains('type-filter__checkbox_active')){
				boxes[index].classList.remove('type-filter__checkbox_active')
			}
		});
	});

	//обработка чекбоксов для фильтра по виду поверхности

	$('.surface-filter').on('click', ()=>{
		let checkboxes = [...$('.surface-filter input[type="checkbox"]')],
			boxes = $('.surface-filter__checkbox');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				boxes[index].classList.add('surface-filter__checkbox_active');
			}

			if(!item.checked && boxes[index].classList.contains('surface-filter__checkbox_active')){
				boxes[index].classList.remove('surface-filter__checkbox_active')
			}
		});
	});

	//обработка чекбоксов для фильтра по покрытию

	$('.coverage-filter').on('click', ()=>{
		let checkboxes = [...$('.coverage-filter input[type="checkbox"]')],
			boxes = $('.coverage-filter__checkbox');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				boxes[index].classList.add('coverage-filter__checkbox_active');
			}

			if(!item.checked && boxes[index].classList.contains('coverage-filter__checkbox_active')){
				boxes[index].classList.remove('coverage-filter__checkbox_active')
			}
		});
	});
	//обработка чекбоксов для фильтра по лицевым сторонам

	$('.facing-filter').on('click', ()=>{
		let checkboxes = [...$('.facing-filter input[type="checkbox"]')],
			boxes = $('.facing-filter__checkbox');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				boxes[index].classList.add('facing-filter__checkbox_active');
			}

			if(!item.checked && boxes[index].classList.contains('facing-filter__checkbox_active')){
				boxes[index].classList.remove('facing-filter__checkbox_active')
			}
		});
	});

	//фильтры на мобильной
	$('.category-sorting__mobile-filters').on('click', ()=>{
		$('.category-filter').fadeToggle();
	});

	$('.category-filter__close').on('click', ()=>{
		$('.category-filter').fadeToggle();
	})

	// подменю на категории

	$('.catalog-category__subcategory-heading').on('click', function(){
		$(this).children('.catalog-category__subcategory-list').slideToggle();
	});

	// переключение вида сетки

	$('.category-sorting__display-list').on('click',()=>{
		$('.category-displaying .col-md-4').removeClass('col-md-4').addClass('col-md-12');
		$('.category-displaying .product-card').addClass('list-display');
		$('.category-sorting__display-list rect').attr('fill', '#0050FF')
		$('.category-sorting__display-grid rect').attr('fill', '#DCD9E3')
	});

	$('.category-sorting__display-grid').on('click',()=>{
		$('.category-displaying .col-md-12').removeClass('col-md-12').addClass('col-md-4');
		$('.category-displaying .product-card').removeClass('list-display');
		$('.category-sorting__display-list rect').attr('fill', '#DCD9E3')
		$('.category-sorting__display-grid rect').attr('fill', '#0050FF')
	});

	// опции цвета в товаре
	$('.product-details__color label').on('click', ()=>{
		let checkboxes = [...$('.product-details__color input[type="checkbox"]')],
			colors = $('.product-details__color-option');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				colors[index].classList.add('product-details__color-option_active');
			}

			if(!item.checked && colors[index].classList.contains('product-details__color-option_active')){
				colors[index].classList.remove('product-details__color-option_active')
			}
		});
	});
	// опции толщины в товаре
	$('.product-details__thickness label').on('click', ()=>{
		let checkboxes = [...$('.product-details__thickness input[type="checkbox"]')],
			blocks = $('.product-details__thickness-block');

		checkboxes.forEach((item, index) =>{
			if(item.checked){
				blocks[index].classList.add('product-details__thickness-block_active');
			}

			if(!item.checked && blocks[index].classList.contains('product-details__thickness-block_active')){
				blocks[index].classList.remove('product-details__thickness-block_active')
			}
		});
	});

	// вкладки с описанием и характеристиками
	$('.description-specifications__controls span').on('click', function(){
		$('.description-specifications__controls span').removeClass('description-specifications__controls_active');
		$(this).addClass('description-specifications__controls_active');
		let tabs = $('.description-specifications__tab');

		$(tabs).fadeOut();

		setTimeout( ()=>{
			$(tabs[$(this).index()]).fadeIn();
		} ,400);
	});

	// слайдер похожих товаров
	$('.similar-products').owlCarousel({
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

});
