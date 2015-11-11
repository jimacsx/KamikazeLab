$(document).ready(function(){
	var $cuadro = $('.cuadro');
	var numCuadro=0;
	
	function resetearCuadros() {
		for(var i=0; i < $cuadro.size(); i++) {
			$cuadro.eq(i).removeClass('cuadroA');
			$cuadro.eq(i).removeAttr('style');		
		}
	}

	function animar() {
		if( numCuadro < $cuadro.size()) { //hace la llamada a animar cada uno de los cuadros
			$cuadro.eq(numCuadro).addClass('cuadroA').css('animation-name', 'animar'+numCuadro);
			numCuadro++;
			animar();
		} else { // si ya no hay cuadros a animar 
			//cuando termina la animación del último cuadro reseteamos los valores de los cuadros al estado inicial
			$cuadro.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
				resetearCuadros();
    			numCuadro = 0;
    			$('#miBoton_animar').val("Animar"); //habilitamos botón de animar
			});
		}
	}

	$('#miBoton_animar').on("click", function() {
		if ( $(this).val() == "Animar") {
			animar();
			$(this).val("Animación en Proceso"); //deshabilitamos botón de animar
    	} 
	});

});