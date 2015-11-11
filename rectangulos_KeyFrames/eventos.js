$(document).ready(function(){
	var $cuadro = $('.cuadro');
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

	/*var cssRule;

  	function getRule() {
      var rule;
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
         for (var x = 0; x < ss[i].cssRules.length; ++x) {
            rule = ss[i].cssRules[x];	
            if (rule.name == "animar" && rule.type == CSSRule.KEYFRAMES_RULE) {
               cssRule = rule;
            }
         }
      }
  	}*/

	function animar() {
		/*getRule();	//obtenemos KeyFrame a animar
  		console.log(cssRule);

		cssRule.appendRule("10% " + misAnimacionesJSON[0][0]);
		cssRule.appendRule("20% " + misAnimacionesJSON[1][0]);
		cssRule.appendRule("30% " + misAnimacionesJSON[2][0]);
		cssRule.appendRule("40% " + misAnimacionesJSON[3][0]);
		cssRule.appendRule("50% " + misAnimacionesJSON[4][0]);
		cssRule.appendRule("60% " + misAnimacionesJSON[5][0]);
		cssRule.appendRule("70% " + misAnimacionesJSON[6][0]);
		cssRule.appendRule("80% " + misAnimacionesJSON[7][0]);
		cssRule.appendRule("90% " + misAnimacionesJSON[8][0]);
		cssRule.appendRule("100% " + misAnimacionesJSON[9][0]);

		$cuadro.eq(0).addClass('cuadroAA');		*/
		if( numAnimacion < $cuadro.size()) {
			console.log("entra: " + numAnimacion);
			$cuadro.eq(numAnimacion).addClass('cuadroA').css('animation-name', 'animar'+numAnimacion);
			numAnimacion++;
			animar();
		} else {
			$cuadro.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
    			numAnimacion = 0;
    			$('#miBoton_animar').val("Animar");
			});
		}
		
		/*$cuadro.eq(0).addClass('cuadroA').css('animation-name', 'animar0');
		$cuadro.eq(1).addClass('cuadroA').css('animation-name', 'animar1');
		$cuadro.eq(2).addClass('cuadroA').css('animation-name', 'animar2');
		$cuadro.eq(3).addClass('cuadroA').css('animation-name', 'animar3');
		$cuadro.eq(4).addClass('cuadroA').css('animation-name', 'animar4');
		$cuadro.eq(5).addClass('cuadroA').css('animation-name', 'animar5');*/
		
	}

	$('#miBoton_animar').on("click", function() {
		if ( $(this).val() == "Animar") {
			console.log("oprime Animar");
			animar();
			$(this).val("Animación en Proceso"); //deshabilitamos botón de animar
    	} 
	});

});