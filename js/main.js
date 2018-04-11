var link = "";

$(document).ready(function(){
   $('ul li a:first').addClass('active');
   $('#contenedor').load("inicio.html");

   $('ul li a').click(function(){
   		 $('ul li a').removeClass('active');
   		 $(this).addClass('active');

   		 link = $(this).attr('href');
   		 $("#contenedor").load(link+"."+"html");
   		 return false;
   });

	$('.flechaSubir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300);
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 0 ){
			$('.flechaSubir').slideDown(300);
		}else{
			$('.flechaSubir').slideUp(300);
		}
	});
});

