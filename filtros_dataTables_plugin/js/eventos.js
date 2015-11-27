var registros = [
  ["", "Av Aztecas", "San Rafael", "2000", "", "Coacalco", "VIMEX", "10", "botones"]
];

$(document).ready(function() {

  $('#tabla_id').DataTable({
    scrollY: '50vh', //scroll vertical
    scrollX: true,    //scroll horizontal
    scrollCollapse: 'true',
    stateSave: true,  //salva el estado actual de la tabla

    data: registros,
    columns: [
      { title: "Imagen" },
      { title: "Calle" },
      { title: "Colonia" },
      { title: "Precio" },
      { title: "Tipo" },
      { title: "Desarrollo" },
      { title: "Desarrollador" },
      { title: "Solicitudes" },
      { title: "Acciones" },
    ]
  });

});