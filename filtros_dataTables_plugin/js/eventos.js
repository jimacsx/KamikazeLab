$(document).ready(function() {
   var tabla = $('#table_id').DataTable({ //propiedades para modificar contenidos de la tabla
   	"paging":   true,
      "ordering": true,
      "info":     true,
      "pagingType": "simple_numbers", //tipo de paginacion (numbers, simple, simple_numbers, full, full_numbers)
      //"scrollY": "200px",
      scrollY: '50vh',	//scroll vertical
   	scrollX: true,		//scroll horizontal
      scrollCollapse: 'true',
      stateSave: true,	//salva el estado actual de la tabla

      "ajax": 'ajax/datos.json'
   });

   $('#table_id tbody').on('click', 'tr', function () { //muestra msj de alerta al dar click en una celda
        var dato = tabla.row( this ).data();					// es un arreglo donde los atributos de los tabla son datos dentro del arreglo
        alert( 'You clicked on '+dato[1]+'\'s row' );
    } );
});