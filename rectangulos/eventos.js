$(document).ready(function(){

	var $cuadro1 = $('#cuadro1');
	var $cuadro2 = $('#cuadro2');
	var $cuadro3 = $('#cuadro3');
	var $cuadro4 = $('#cuadro4');
	var $cuadro5 = $('#cuadro5');
	var $cuadro6 = $('#cuadro6');

	var tiempo = 1000;

	var myArray = [
						[ 0, 0, 100, 100, 100, 0, 100, 100, 0, 100, 200, 200, 0, 300, 100, 100, 100, 300, 100, 100, 200, 0, 400, 100 ],
						[ 0, 0, 200, 200, 200, 0, 100, 100, 200, 100, 100, 100, 0, 200, 100, 100, 0, 300, 100, 100, 100, 200, 200, 200 ],
						[ 0, 0, 400, 100,  100, 0, 100, 100, 100, 100, 100, 100, 100, 200, 100, 100, 100, 300, 100, 100, 200, 0, 400, 100],
						[ 0, 0, 100, 100, 100, 0, 100, 200, 0, 100, 200, 200, 0, 300, 100, 100, 200, 100, 200, 100, 100, 300, 100, 200],
						[ 0, 0, 100, 300, 0, 100, 100, 300, 0, 200, 100, 100, 100, 200, 100, 100, 200, 200, 100, 100, 0, 300, 100, 300],
						[ 0, 0, 300, 100, 0, 300, 100, 100, 100, 0, 200, 100, 100, 200, 200, 100, 200, 0, 300, 100, 200, 300, 100, 100],
						[ 0, 0, 200, 100, 0, 200, 200, 100, 100, 0, 200, 100, 100, 200, 200, 100, 200, 0, 200, 100, 200, 200, 200, 100],
						[ 0, 0, 300, 100, 0, 300, 100, 300, 100, 0, 100, 200, 100, 100, 200, 100, 200, 100, 100, 100, 200, 200, 100, 100],
						[ 0, 0, 200, 100, 100, 0, 100, 200, 100, 100, 100, 200, 0, 200, 100, 200, 0, 300, 100, 200, 200, 200, 200, 100],
						[ 0, 0, 200, 300, 0, 200, 100, 100, 0, 300, 100, 100, 100, 200, 200, 100, 200, 200, 100, 100, 200, 300, 100, 100]
					  ];

	var num_animacion=0;
	var datos;

	function obtener_datos_de_animacion() {
		return myArray[num_animacion];
	}

	function animar() {
		console.log("animación num: "+num_animacion);
		datos = obtener_datos_de_animacion();
		if (num_animacion < 10) {
			$cuadro1.animate({
				top: datos[0] +'px',
				left: datos[1] +'px',
				width: datos[2] +'px',
				height: datos[3] +'px'
			}, tiempo, 'swing');

			$cuadro2.animate({
				top: datos[4] +'px',
				left: datos[5] +'px',
				width: datos[6] +'px',
				height: datos[7] +'px'
			}, tiempo, 'swing');

			$cuadro3.animate({
				top: datos[8] +'px',
				left: datos[9] +'px',
				width: datos[10] +'px',
				height: datos[11] +'px'
			}, tiempo, 'swing');

			$cuadro4.animate({
				top: datos[12] +'px',
				left: datos[13] +'px',
				width: datos[14] +'px',
				height: datos[15] +'px'
			}, tiempo, 'swing');

			$cuadro5.animate({
				top: datos[16] +'px',
				left: datos[17] +'px',
				width: datos[18] +'px',
				height: datos[19] +'px'
			}, tiempo, 'swing');

			$cuadro6.animate({
				top: datos[20] +'px',
				left: datos[21] +'px',
				width: datos[22] +'px',
				height: datos[23] +'px'
			}, tiempo, 'swing',  function () {
				num_animacion++;
				animar();
			});

		} else {
			num_animacion = 0;
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