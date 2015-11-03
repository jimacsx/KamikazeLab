$(document).ready(function(){

	var $contenedor = $('#contenedor');
	var $cuadro1 = $('#cuadro1');
	var $cuadro2 = $('#cuadro2');
	var $cuadro3 = $('#cuadro3');
	var $cuadro4 = $('#cuadro4');
	var $cuadro5 = $('#cuadro5');
	var $cuadro6 = $('#cuadro6');

	var tiempo = 1000;

	function animar_1(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 0,
			left: 100 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_2(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 200 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');
	}

	function animar_3(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 0,
			width: 400 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_4(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 0,
			left: 100 +'px',
			width: 200 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 100 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');
	}

	function animar_5(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 0,
			left: 100 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');
	}

	function animar_6(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 100 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_7(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 0,
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 100 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_8(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 300 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_9(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 100 +'px',
			left: 0,
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 100 +'px',
			left: 100 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 200 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar_10(){
		$contenedor.children('#cuadro1').animate({
			top: 0,
			left: 0,
			width: 200 +'px',
			height: 300 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro2').animate({
			top: 0,
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro3').animate({
			top: 0,
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro4').animate({
			top: 100 +'px',
			left: 200 +'px',
			width: 200 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro5').animate({
			top: 200 +'px',
			left: 200 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');

		$contenedor.children('#cuadro6').animate({
			top: 200 +'px',
			left: 300 +'px',
			width: 100 +'px',
			height: 100 +'px'
		}, tiempo, 'swing');
	}

	function animar() {
		animar_1();
		animar_2();
		animar_3();
		animar_4();
		animar_5();
		animar_6();
		animar_7();
		animar_8();
		animar_9();
		animar_10();
	}

	$('#miBoton_animar').click(function() {
		animar();	
	});

});