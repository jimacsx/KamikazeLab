<?php

	$table = 'desarrollador';

	$primaryKey = 'iddesarrollador';

	$columns = array(
		array('db' => 'iddesarrollador', 'dt' => 0),
		array('db' => 'nombreDesarrollador', 'dt' => 1),
		array('db' => 'nombreContacto', 'dt' => 2),
		array('db' => 'telefonoContacto', 'dt' => 3),
		array('db' => 'correoContacto', 'dt' => 4),
		array('db' => 'prioridad', 'dt' => 5),
		array('db' => 'logo', 'dt' => 6),
		array('db' => 'direccionFiscal', 'dt' => 7),
		array('db' => 'rfc', 'dt' => 8),
		array('db' => 'comision', 'dt' => 9)
	);

	$sql_details = array(
		'user' => 'root',
		'pass' => '',
		'db' => 'tucanton',
		'host' => 'localhost'
	);

	
	require('ssp.class.php');

	echo json_encode(
		SSP::simple($_GET, $sql_details, $table, $primaryKey, $columns)
	);

?>