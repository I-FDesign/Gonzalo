//Numeros-------------------------------

$('.trafic').on('change', function(){
	$('.phones').slideToggle(300);
});

$('.aleatoria').on('change', function(){
	$('.phones').slideUp(300);
});

//--------------------------------------

//Days----------------------------------



$(document).ready(function(){

	verif();

	$('.definir').on('change', function(){
		$('.fecha').slideToggle(300);
	});

	$('.todos').on('change', function(){
		$('.fecha').slideUp(300);
	});

});


//----------------------------------------