<?php

	$table = 'city';

	$primaryKey = 'ID';

	$columns = array(
		array('db' => 'ID', 'dt' => 0),
		array('db' => 'Name', 'dt' => 1),
		array('db' => 'CountryCode', 'dt' => 2),
		array('db' => 'District', 'dt' => 3),
		array('db' => 'Population', 'dt' => 4)
	);

	$sql_details = array(
		'user' => 'root',
		'pass' => '',
		'db' => 'world',
		'host' => 'localhost'
	);

	
	require('ssp.class.php');

	echo json_encode(
		SSP::simple($_GET, $sql_details, $table, $primaryKey, $columns)
	);

?>