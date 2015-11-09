$(document).ready(function(){
	var $cuadro = $('.cuadro');
	var $contenedor = $('#contenedor');
	var $cuadroA = $('.cuadroA');
	var numAnimacion=0;
	var misAnimacionesJSON = 	
						[
							[	
								{"top": "0", "left": "0", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								{"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							],
							[
								{"top": "0", "left": "0", "width": "200px", "height":"200px"},
								{"top": "200px", "left": "0", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								{"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "200px", "height":"200px"}
							],
							[
								{"top": "0", "left": "0", "width": "400px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "100px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							],
							[
								{"top": "0", "left": "0", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								{"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "100px", "width": "200px", "height":"100px"},
								{"top": "100px", "left": "300px", "width": "100px", "height":"200px"}
							],
							[
								{"top": "0", "left": "0", "width": "100px", "height":"300px"},
								{"top": "0", "left": "100px", "width": "100px", "height":"300px"},
								{"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"300px"}
							],
							[
								{"top": "0", "left": "0", "width": "300px", "height":"100px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								{"top": "200px", "left": "0", "width": "300px", "height":"100px"},
								{"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							],							
							[
								{"top": "0", "left": "0", "width": "200px", "height":"100px"},
								{"top": "0", "left": "200px", "width": "200px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								{"top": "200px", "left": "0", "width": "200px", "height":"100px"},
								{"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							],
							[
								{"top": "0", "left": "0", "width": "300px", "height":"100px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"300px"},
								{"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								{"top": "100px", "left": "100px", "width": "200px", "height":"100px"},
								{"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "200px", "width": "100px", "height":"100px"}
							],
							[
								{"top": "0", "left": "0", "width": "200px", "height":"100px"},
								{"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								{"top": "100px", "left": "100px", "width": "100px", "height":"200px"},
								{"top": "0", "left": "200px", "width": "100px", "height":"200px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"200px"},
								{"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							],
							[
								{"top": "0", "left": "0", "width": "200px", "height":"300px"},
								{"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								{"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								{"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								{"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							]
						];

	function animar() {
		if (numAnimacion < misAnimacionesJSON.length) { 
			for(var i=0; i < misAnimacionesJSON[numAnimacion].length; i++) {
				if(i == (misAnimacionesJSON[numAnimacion].length -1)) {
					$cuadro.eq(i).addClass('cuadroA').css(misAnimacionesJSON[numAnimacion][i]);
					$cuadro.eq(i).on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
						console.log("numAnimacion: "+numAnimacion);
						numAnimacion++;			
						animar();
					});
				} else {
					$cuadro.eq(i).addClass('cuadroA').css(misAnimacionesJSON[numAnimacion][i]);
				}
			}
		} else {
			numAnimacion = 0;
			$('#miBoton_animar').val("Animar"); //habilitamos botón de animar
		}
	}

	$('#miBoton_animar').on("click", function() {
		if ( $(this).val() == "Animar") {
			$(this).val("Animación en Proceso"); //deshabilitamos botón de animar
			animar();
    	} 
	});

});