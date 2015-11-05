$(document).ready(function(){

	var $cuadro1 = $('#cuadro1');
	var $cuadro2 = $('#cuadro2');
	var $cuadro3 = $('#cuadro3');
	var $cuadro4 = $('#cuadro4');
	var $cuadro5 = $('#cuadro5');
	var $cuadro6 = $('#cuadro6');

	var tiempo = 1000;

	var numAnimacion=0;

	var misAnimacionesJSON = 	[
							{
								"cuadro1": {"top": "0", "left": "0", "width": "100px", "height":"100px"},
								"cuadro2": {"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								"cuadro3": {"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								"cuadro4": {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro5": {"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "200px", "height":"200px"},
								"cuadro2": {"top": "200px", "left": "0", "width": "100px", "height":"100px"},
								"cuadro3": {"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								"cuadro4": {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro5": {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "100px", "left": "200px", "width": "200px", "height":"200px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "400px", "height":"100px"},
								"cuadro2": {"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								"cuadro3": {"top": "100px", "left": "100px", "width": "100px", "height":"100px"},
								"cuadro4": {"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro5": {"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "100px", "height":"100px"},
								"cuadro2": {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								"cuadro3": {"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								"cuadro4": {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "100px", "width": "200px", "height":"100px"},
								"cuadro6": {"top": "100px", "left": "300px", "width": "100px", "height":"200px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "100px", "height":"300px"},
								"cuadro2": {"top": "0", "left": "100px", "width": "100px", "height":"300px"},
								"cuadro3": {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro4": {"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "0", "left": "300px", "width": "100px", "height":"300px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "300px", "height":"100px"},
								"cuadro2": {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro3": {"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								"cuadro4": {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "0", "width": "300px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "200px", "height":"100px"},
								"cuadro2": {"top": "0", "left": "200px", "width": "200px", "height":"100px"},
								"cuadro3": {"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								"cuadro4": {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "0", "width": "200px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "300px", "height":"100px"},
								"cuadro2": {"top": "0", "left": "300px", "width": "100px", "height":"300px"},
								"cuadro3": {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								"cuadro4": {"top": "100px", "left": "100px", "width": "200px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "200px", "width": "100px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "200px", "height":"100px"},
								"cuadro2": {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								"cuadro3": {"top": "100px", "left": "100px", "width": "100px", "height":"200px"},
								"cuadro4": {"top": "0", "left": "200px", "width": "100px", "height":"200px"},
								"cuadro5": {"top": "0", "left": "300px", "width": "100px", "height":"200px"},
								"cuadro6": {"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							},
							{
								"cuadro1": {"top": "0", "left": "0", "width": "200px", "height":"300px"},
								"cuadro2": {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro3": {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								"cuadro4": {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								"cuadro5": {"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								"cuadro6": {"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							}
						];

	function animar() {
		if (numAnimacion < misAnimacionesJSON.length) {
			$cuadro1.animate(misAnimacionesJSON[numAnimacion].cuadro1, tiempo, 'swing');

			$cuadro2.animate(misAnimacionesJSON[numAnimacion].cuadro2, tiempo, 'swing');

			$cuadro3.animate(misAnimacionesJSON[numAnimacion].cuadro3, tiempo, 'swing');

			$cuadro4.animate(misAnimacionesJSON[numAnimacion].cuadro4, tiempo, 'swing');

			$cuadro5.animate(misAnimacionesJSON[numAnimacion].cuadro5, tiempo, 'swing');

			$cuadro6.animate(misAnimacionesJSON[numAnimacion].cuadro6, tiempo, 'swing',  function () {
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