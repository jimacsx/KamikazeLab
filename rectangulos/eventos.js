$(document).ready(function(){

	var tiempo = 1000;

	var numAnimacion=0;

	$('[id="cuadro"]').eq(0).css({"position": "absolute", "top": "0", "left": "0", "width": "200px", "height":"300px", "background-color": " #6FB0DF"});
	$('[id="cuadro"]').eq(1).css({"position": "absolute", "top": "0", "left": "200px", "width": "100px", "height":"100px", "background-color": "rgb(226,144,42)"});
	$('[id="cuadro"]').eq(2).css({"position": "absolute", "top": "0", "left": "300px", "width": "100px", "height":"100px", "background-color": "#E22A5D"});
	$('[id="cuadro"]').eq(3).css({"position": "absolute", "top": "100px", "left": "200px", "width": "200px", "height":"100px", "background-color": "#9052B7"});
	$('[id="cuadro"]').eq(4).css({"position": "absolute", "top": "200px", "left": "200px", "width": "100px", "height":"100px", "background-color": "#52B77F"});
	$('[id="cuadro"]').eq(5).css({"position": "absolute", "top": "200px", "left": "300px", "width": "100px", "height":"100px", "background-color": "blue"});


	var misAnimacionesJSON = 	[
							{
								0: {"top": "0", "left": "0", "width": "100px", "height":"100px"},
								1: {"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								2: {"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								3: {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								4: {"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								5: {"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "200px", "height":"200px"},
								1: {"top": "200px", "left": "0", "width": "100px", "height":"100px"},
								2: {"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								3: {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								4: {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								5: {"top": "100px", "left": "200px", "width": "200px", "height":"200px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "400px", "height":"100px"},
								1: {"top": "100px", "left": "0", "width": "100px", "height":"100px"},
								2: {"top": "100px", "left": "100px", "width": "100px", "height":"100px"},
								3: {"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								4: {"top": "100px", "left": "300px", "width": "100px", "height":"100px"},
								5: {"top": "200px", "left": "0", "width": "400px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "100px", "height":"100px"},
								1: {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								2: {"top": "0", "left": "100px", "width": "200px", "height":"200px"},
								3: {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								4: {"top": "200px", "left": "100px", "width": "200px", "height":"100px"},
								5: {"top": "100px", "left": "300px", "width": "100px", "height":"200px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "100px", "height":"300px"},
								1: {"top": "0", "left": "100px", "width": "100px", "height":"300px"},
								2: {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								3: {"top": "100px", "left": "200px", "width": "100px", "height":"100px"},
								4: {"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								5: {"top": "0", "left": "300px", "width": "100px", "height":"300px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "300px", "height":"100px"},
								1: {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								2: {"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								3: {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								4: {"top": "200px", "left": "0", "width": "300px", "height":"100px"},
								5: {"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "200px", "height":"100px"},
								1: {"top": "0", "left": "200px", "width": "200px", "height":"100px"},
								2: {"top": "100px", "left": "0", "width": "200px", "height":"100px"},
								3: {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								4: {"top": "200px", "left": "0", "width": "200px", "height":"100px"},
								5: {"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "300px", "height":"100px"},
								1: {"top": "0", "left": "300px", "width": "100px", "height":"300px"},
								2: {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								3: {"top": "100px", "left": "100px", "width": "200px", "height":"100px"},
								4: {"top": "200px", "left": "100px", "width": "100px", "height":"100px"},
								5: {"top": "200px", "left": "200px", "width": "100px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "200px", "height":"100px"},
								1: {"top": "100px", "left": "0", "width": "100px", "height":"200px"},
								2: {"top": "100px", "left": "100px", "width": "100px", "height":"200px"},
								3: {"top": "0", "left": "200px", "width": "100px", "height":"200px"},
								4: {"top": "0", "left": "300px", "width": "100px", "height":"200px"},
								5: {"top": "200px", "left": "200px", "width": "200px", "height":"100px"}
							},
							{
								0: {"top": "0", "left": "0", "width": "200px", "height":"300px"},
								1: {"top": "0", "left": "200px", "width": "100px", "height":"100px"},
								2: {"top": "0", "left": "300px", "width": "100px", "height":"100px"},
								3: {"top": "100px", "left": "200px", "width": "200px", "height":"100px"},
								4: {"top": "200px", "left": "200px", "width": "100px", "height":"100px"},
								5: {"top": "200px", "left": "300px", "width": "100px", "height":"100px"}
							}
						];

	function animar() {
		if (numAnimacion < misAnimacionesJSON.length) {
			$('[id="cuadro"]').eq(0).animate(misAnimacionesJSON[numAnimacion][0], tiempo, 'swing');

			$('[id="cuadro"]').eq(1).animate(misAnimacionesJSON[numAnimacion][1], tiempo, 'swing');

			$('[id="cuadro"]').eq(2).animate(misAnimacionesJSON[numAnimacion][2], tiempo, 'swing');

			$('[id="cuadro"]').eq(3).animate(misAnimacionesJSON[numAnimacion][3], tiempo, 'swing');

			$('[id="cuadro"]').eq(4).animate(misAnimacionesJSON[numAnimacion][4], tiempo, 'swing');

			$('[id="cuadro"]').eq(5).animate(misAnimacionesJSON[numAnimacion][5], tiempo, 'swing',  function () {
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