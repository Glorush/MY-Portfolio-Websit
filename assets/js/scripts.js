$(document).ready(function(){
	
	//***********Header js work************
	// menu slide icon
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(700);
		// hamburger add class
		$('.nav-icon').toggleClass('addhumb')
		return false;
	});
	
	// animate html body
	$('.menu ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top  
		},1000);
		return false;
	});
	
	
	//***********Body js work************
	//type animation 
	var typed = new Typed(".type",{
		strings:["Front End Designer.","Responsive Designer.","Back End Developer."],
		typeSpeed:100,
		backSpeed:50,
		loop:true
	})
	
	// mixitup
	var mixer = mixitup('.isotop-mix');
	
	//team casrousel
	$('.team-carousel').owlCarousel({
		items:2,
		loop:true,
		dots:true,
		margin:30,
		nav:false,
		autoplay:1000,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:1,
			},
			768 : {
				items:2
			}
		}
	})
	
	//counterup
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});
	
	
	// back to top-btn
	$('.bact-to-btn').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
		return false;
	});

})
$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	// sticky
	if(scrollvalue>100){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
		
	 return false;
	}
	
	// back to top btn
	if(scrollvalue>500){
        $('.bact-to-btn').fadeIn();
    }else{
        $('.bact-to-btn').fadeOut();
    }
	return false;
})