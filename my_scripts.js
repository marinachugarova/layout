$(document).ready(function() {
	$("#phone").mask("+7 (999) 99-99-999");
	$("#phone_more").mask("+7 (999) 99-99-999");

	$('input[type=button]').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show();
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$(".reg_form__form").submit(function(){
		var $form = $(this);
		$.post(
			$form.attr("action"),
			$form.serialize(),   
		 function () {
			$('.reg_form').html("<div class='reg_form__result style= dispaly: flex'></div>");
			$('.reg_form__result').html("<h2>Спасибо!</h2>")
			.append ("<a class='result__close' href='#'>Close</a>")
			.append("<p>Мы свяжемся с Вами в ближайшее время.</p>");
			 $ ('.reg_form').fadeOut(1500);
			 $ ('#overlay').fadeOut(1500, function(){
	
			$('.reg_form__result').html("<h2>Заявка уже отправлена!</h2>")
			.append("<p>Мы свяжемся с Вами в ближайшее время.</p>")
			.append("<a class='result__close' href='#'>Close</a>");
				
			$('.result__close').click(function () {
			$('.reg_form').fadeOut(100);
			$('#overlay').remove('#overlay');
			return false;
			});
			});

			$('.result__close').click(function () {
				$('.reg_form').fadeOut(100);
				$('#overlay').remove('#overlay');
				return false;
			});
		 });  
		return false;
	});
	$(".reg_form-more__form").submit(function(){	
	var $form = $(this);	
	$.post(
	 $form.attr("action"),
	  $form.serialize(),   
	 function () {
	  $('.reg_form-more').html("<div class='reg_form-more__result style= dispaly: flex'></div>");
	 $('.reg_form-more__result').html("<h2>Спасибо!</h2>")
	.append("<p>Мы свяжемся с Вами в ближайшее время.</p>")
	.append ("<a class='result__close' href='#'>Close</a>");
	 $ ('.reg_form-more').fadeOut(1500);
	 $ ('#overlay').fadeOut(1500, function(){
	
		$('.reg_form-more__result').html("<h2>Заявка уже отправлена!</h2>")
		.append("<p>Мы свяжемся с Вами в ближайшее время.</p>")
		.append("<a class='result__close' href='#'>Close</a>");
			
		$('.result__close').click(function () {
		$('.reg_form-more').fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
		});
		}); 
	
	 $('.result__close').click(function () {
		$('.reg_form-more').fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
	 }
		  
		);  
		return false;
	});

 


$('.header__burger-item').click(function () {
	$('#header__burger-menu-input').prop('checked', false)
 });

 new Swiper ('.swiper-container', {
	slideClass: 'swiper-container__article',
	wrapperClass: 'swiper-container__examples',
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true, 

	breakpoints: {
	  1116: {
	slidesPerView: 3,
	spaceBetween: 25,
   
  },
  
  690: {
	  slidesPerView:2,
  },
  
  480: {
	slidesPerView: 1,
	
  },
  320: {
	slidesPerView: 1,
	spaceBetween: 15,
  }
},
	pagination: {
	el: '.swiper-container__swiper-pagination',
	bulletClass: 'swiper',
	bulletActiveClass:'swiper-active',
	type: 'bullets',
	clickable: true,
	},

	navigation: {
   nextEl: '.swiper-container__button-next',
   prevEl: '.swiper-container__button-prev',
   },
  });

 });


	