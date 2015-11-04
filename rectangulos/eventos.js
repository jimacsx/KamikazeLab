$(document).ready(function(){

	var $cuadro1 = $('#cuadro1');
	var $cuadro2 = $('#cuadro2');
	var $cuadro3 = $('#cuadro3');
	var $cuadro4 = $('#cuadro4');
	var $cuadro5 = $('#cuadro5');
	var $cuadro6 = $('#cuadro6');

	var tiempo = 1000;

	function animar_1(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 0,
			left: 100 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_2);
	}

	function animar_2(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 200 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing', animar_3);
	}

	function animar_3(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_4);
	}

	function animar_4(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 0,
			left: 100 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing', animar_5);
	}

	function animar_5(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 0,
			left: 100 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing', animar_6);
	}

	function animar_6(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 100 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_7);
	}

	function animar_7(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 0,
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 100 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_8);
	}

	function animar_8(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_9);
	}

	function animar_9(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing', animar_10);
	}

	function animar_10(){
		$cuadro1.animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$cuadro2.animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro3.animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro4.animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro5.animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$cuadro6.animate({
			top: 200 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	$('#miBoton_animar').click(function() {
		animar_1();	
	});

});