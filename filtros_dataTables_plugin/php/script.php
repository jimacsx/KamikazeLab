<?php

	$table = 'casas';

	$primaryKey = 'imagen';

	$columns = array(
		array('db' => 'imagen', 'dt' => 0),
		array('db' => 'calle', 'dt' => 1),
		array('db' => 'colonia', 'dt' => 2),
		array('db' => 'precio', 'dt' => 3),
		array('db' => 'tipo', 'dt' => 4),
		array('db' => 'desarrollo', 'dt' => 5),
		array('db' => 'desarrollador', 'dt' => 6),
		array('db' => 'solicitudes', 'dt' => 7),
		array('db' => 'acciones', 'dt' => 8)
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