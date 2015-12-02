$(document).ready(function() {
    
  $('#tabla_id').DataTable({
    scrollY: '100vh', //scroll vertical
    scrollX: true,    //scroll horizontal
    scrollCollapse: 'true',
    stateSave: true,  //salva el estado actual de la tabla
    pagingType: "full_numbers",  //numbers, simple, simple_numbers, full, full_numbers
    //para ocupar una BD creada en mysql se utilizan las siguientes lineas
    "bProcessing": true,
    "bServerSide": true,
    "sAjaxSource": 'php/desarrollos.php'
  });

});