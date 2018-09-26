
	//Cambio de form

var lel = '';

	function change(){
		var objective = this.id;
		$('.form>div').css('display', 'none');
		$('.options .option').addClass('gray');
		$(this).removeClass('gray');

		if(objective == 'config'){
			$('.form .config').css('display', 'block');
		}

		if(objective == 'whatsapp'){
			$('.form .whatsapp').css('display', 'block');
		}

		if(objective == 'telefono'){
			$('.form .telefono').css('display', 'block');
		}

		if(objective == 'mail'){
			$('.form .mail').css('display', 'block');
		}

		if(objective == 'facebook'){
			$('.form .facebook_form').css('display', 'block');
		}

		if(objective == 'gmaps'){
			$('.form .gmaps').css('display', 'block');
		}

	}

	$('.option').on('click', change);

