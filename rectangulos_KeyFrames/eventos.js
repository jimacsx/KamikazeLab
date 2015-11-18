$(document).ready(function(){
	var $cuadro = $('.cuadro');
	var numCuadro=0;
	var numAnimacion=0;
	var miKeyframe;
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

  	function localizarKeyFrame(nombreKeyframe) {
	    var ss = document.styleSheets;
	    for (var i = 0; i < ss.length; ++i) {
	        for (var j = 0; j < ss[i].cssRules.length; ++j) {
	            if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == nombreKeyframe) { 
	              return ss[i].cssRules[j]; 
	            }
	        }
	    }
	    return null;
	}

  	function resetearCuadros() {
		for(var i=0; i < $cuadro.size(); i++) {
			$cuadro.eq(i).removeClass('cuadroM');
			$cuadro.eq(i).removeAttr('style');		
		}
	}


	function animar() {
		console.log(numAnimacion);
		var anterior;
		if(numAnimacion < misAnimacionesJSON.length) {
			if(numAnimacion == 0) {
				anterior = 9;
			} else {
				anterior = numAnimacion-1;
			}
			for(var numCuadro=0; numCuadro < misAnimacionesJSON[numAnimacion].length; numCuadro++) {
				miKeyframe = localizarKeyFrame('mover'+numCuadro);
				miKeyframe.deleteRule("0%");
				miKeyframe.deleteRule("100%");
				miKeyframe.appendRule("0% { top: "+ misAnimacionesJSON[anterior][numCuadro].top + "; left: "+ misAnimacionesJSON[anterior][numCuadro].left + "; width: "+ misAnimacionesJSON[anterior][numCuadro].width + "; height: "+ misAnimacionesJSON[anterior][numCuadro].height +";  }");
				miKeyframe.appendRule("100% { top: "+ misAnimacionesJSON[numAnimacion][numCuadro].top + "; left: "+ misAnimacionesJSON[numAnimacion][numCuadro].left + "; width: "+ misAnimacionesJSON[numAnimacion][numCuadro].width + "; height: "+ misAnimacionesJSON[numAnimacion][numCuadro].height +";  }");
				console.log(miKeyframe);
				$cuadro.eq(numCuadro).addClass('cuadroM').css('animation-name', 'mover'+numCuadro);
				if(numCuadro == (misAnimacionesJSON[numAnimacion].length -1)) { 
					setTimeout(function() {
						numAnimacion++;
						animar();
					}, 1000);	
				}
			}
		} else {
			numAnimacion = 0;
			resetearCuadros();
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