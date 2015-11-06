$(document).ready(function(){

	var tiempo = 1000;

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
			$('.cuadro').eq(0).animate(misAnimacionesJSON[numAnimacion][0], tiempo, 'swing');

			$('.cuadro').eq(1).animate(misAnimacionesJSON[numAnimacion][1], tiempo, 'swing');

			$('.cuadro').eq(2).animate(misAnimacionesJSON[numAnimacion][2], tiempo, 'swing');

			$('.cuadro').eq(3).animate(misAnimacionesJSON[numAnimacion][3], tiempo, 'swing');

			$('.cuadro').eq(4).animate(misAnimacionesJSON[numAnimacion][4], tiempo, 'swing');

			$('.cuadro').eq(5).animate(misAnimacionesJSON[numAnimacion][5], tiempo, 'swing',  function () {
				numAnimacion++;
				animar();
			});
		} else {
			numAnimacion = 0;
			$('#miBoton_animar').val("Animar"); //habilitamos botón de animar
		}
	}

	$('#miBoton_animar').on("click", function() {
		if ( $(this).val() == "Animar") {
			animar();
			$(this).val("Animación en Proceso"); //deshabilitamos botón de animar
    	} 
	});

});