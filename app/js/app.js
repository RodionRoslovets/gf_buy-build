$(document).ready(()=>{

	//Появление формы регистрации
	$('.login-panel__register').on('click', function(){
		$('.modals, .register-form').fadeIn();
	});
	//Исчезание формы регистрации
	$('.register-form .form-close').on('click', function(){
		$('.modals, .register-form').fadeOut();
	});
	//Чекбокс формы регистрации
	$('.register-form .form-checkbox input[type="checkbox"]').on('click', function(){
			$('.register-form .form-checkbox figure').toggleClass('checkbox_active');
	});

	//Появление формы входа
	$('.login-panel__login').on('click', function(){
		$('.modals, .login-form').fadeIn();
	});
	//Исчезание формы входа
	$('.login-form .form-close').on('click', function(){
		$('.modals, .login-form').fadeOut();
	});
	//Чекбокс формы входа
	$('.login-form .form-checkbox input[type="checkbox"]').on('click', function(){
		$('.login-form .form-checkbox figure').toggleClass('checkbox_active');
	});

	//Появление формы консультации
	$('.consult-me, .product-card__price-consult').on('click', function(){
		$('.modals, .consult-form').fadeIn();
	});
	//Исчезание формы консультации
	$('.consult-form .form-close').on('click', function(){
		$('.modals, .consult-form').fadeOut();
	});
	//Чекбокс формы консультации
	$('.consult-form .form-checkbox input[type="checkbox"]').on('click', function(){
		$('.consult-form .form-checkbox figure').toggleClass('checkbox_active');
	});

	//Меню пользователя
	$('.user-icon, .user-name, .user-arrow-icon').on('click', function(){
		$('.user-menu').fadeToggle();
	});

	//Мобильное меню
	$('.menu-mobile__icon').on('click', function(){
		$('.header-mobile-menu').fadeIn();
	});

	//Закрыли мобильное меню
	$('.header-mobile-menu .menu-close').on('click', function(){
		$('.header-mobile-menu').fadeOut();
	});

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

	// слайдер сравнения
	$('.compare-products, .compare-specification__row').owlCarousel({
		items:1.3,
		loop:true,
		mouseDrag:false,
		touchDrag:false,
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

	let owlCompareStrings = $('.compare-specification__row, .compare-products');

	$('.compare-options__arrow.arrow_left').on('click', function(){
		owlCompareStrings.trigger('prev.owl.carousel');
	});
	$('.compare-options__arrow.arrow_right').on('click', function(){
		owlCompareStrings.trigger('next.owl.carousel');
	});

	//переключение выбора оплаты в корзине

	let paymentDivs = [...$('.cart-user-info__payment .cart-user-info__payment-item')],
		paymentRadioInputs = [...$('.cart-user-info__payment input[type="radio"]')];

		paymentRadioInputs.forEach((item, index)=>{
			if(item.checked){
				paymentDivs[index].classList.add('cart-user-info__payment-item_active');
			}
		});

	$('.cart-user-info__payment label').on('click', function(){

		$('.cart-user-info__payment .cart-user-info__payment-item').removeClass('cart-user-info__payment-item_active')

		paymentRadioInputs.forEach((item, index)=>{
			if(item.checked){
				paymentDivs[index].classList.add('cart-user-info__payment-item_active');
			}
		});
	})
	//переключение выбора доставки в корзине

	let deliveryDivs = [...$('.cart-user-info__delivery .cart-user-info__delivery-item')],
		deliveryRadioInputs = [...$('.cart-user-info__delivery input[type="radio"]')];

		deliveryRadioInputs.forEach((item, index)=>{
			if(item.checked){
				deliveryDivs[index].classList.add('cart-user-info__delivery-item_active');
			}
		});

	$('.cart-user-info__delivery label').on('click', function(){

		$('.cart-user-info__delivery .cart-user-info__delivery-item').removeClass('cart-user-info__delivery-item_active')

		deliveryRadioInputs.forEach((item, index)=>{
			if(item.checked){
				deliveryDivs[index].classList.add('cart-user-info__delivery-item_active');
			}
		});
	})

	//Переключение характеристик на странице сравнения
	let compareDivs = [...$('.compare-options__item')],
		compareRadioInputs = [...$('.compare-options__options input[type="radio"]')];

		compareRadioInputs.forEach((item, index)=>{
			if(item.checked){
				compareDivs[index].classList.add('compare-options__item_active');
			}
		});

	$('.compare-options__options label').on('click', function(){

		$('.compare-options__item').removeClass('compare-options__item_active')

		compareRadioInputs.forEach((item, index)=>{
			if(item.checked){
				compareDivs[index].classList.add('compare-options__item_active');
			}
		});
	})

});
