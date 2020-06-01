$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
 
  
  $(function () {
	
	$('.right-items__input').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});


	$('.bottom-section__input').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$('.section-services__input').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$('.section-jobs__input').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$('.last-column__input').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$('.right-items__button').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
});	
  $("form").submit(function(){
    
    var $form = $(this);
    
    $.post(
        $form.attr("action"),
        $form.serialize(),   
     function Thanks() {
        $('.reg_form').html("<div class='reg_form__result style= dispaly: flex'></div>");
        $('.reg_form__result').html("<h2>Спасибо!</h2>")
        .append("<p>Мы свяжемся с Вами в ближайшее время.</p>");
         $ ('.reg_form').fadeOut(4000);
        $ ('#overlay').fadeOut(4000); 
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
  769: {
	slidesPerView: 2,
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



  



 
