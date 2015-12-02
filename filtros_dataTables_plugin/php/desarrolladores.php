<?php
	// inicializamos variables
  $cols = array('', 'nombreDesarrollador', 'nombreContacto', 'telefonoContacto', '');
	$amt=10;  //cantidad de registros a mostrar
  
	// realizamos consultas 
  function dbRow($sql){ 
    $r = carga_cache(md5($sql));
    if($r == false) {
      $q = mysql_query(($sql));
      $r = mysql_fetch_array($q);
      guarda_cache(md5($sql), $r);
    }
    return $r;
  } 
  
  function dbAll($sql){ 
    $rs = carga_cache(md5($sql));
    if($rs == false) {
      $rs = array();
      $q = mysql_query($sql);

      while ($r = mysql_fetch_array($q)) {
        $rs[] = $r;
      }
      guarda_cache(md5($sql), $rs);
    }
    return $rs;
  }

  //conectamos con la BD
  @mysql_connect('localhost','root',''); 
  mysql_select_db('tucanton');

  // conteo de registros existentes en la BD
  $r=dbRow('select count(iddesarrollador) as d from desarrollador');
  $total_records=$r['d']; 

  // funciones de almacenamiento en cache
  function carga_cache($md5) {
    if( file_exists('cache/'.$md5)) {
      return json_decode(file_get_contents('cache'.$md5), true);
    }
    return false;
  }
  function guarda_cache($md5, $vals) {
    file_put_contents('cache/.$md5', json_encode($vals));
  }

  /*
  iDisplayStart: donde comienza a paginar.
  iDisplayLength: Número de filas (registros) a mostrar.
  */
  if(isset($_REQUEST['iDisplayLength'])) {
    $amt=(int)$_REQUEST['iDisplayLength'];
    if($amt > 100 || $amt < 10) {
      $amt = 10;
    }
  }
  //De dónde se comienza a mostrar los registros de la BD
  $start=0; 
  if(isset($_REQUEST['iDisplayStart'])){
    $start=(int)$_REQUEST['iDisplayStart'];
    if($start < 0) {
      $start = 0;
    }
  }

  // Realizamos ordenamiento
  $scol=1; 
  if(isset($_REQUEST['iSortCol_0'])){ 
    $scol=(int)$_REQUEST['iSortCol_0'];
    if($scol > 3 || $scol<1) 
      $scol=1; 
  }

  $sdir='asc'; 
  if(isset($_REQUEST['sSortDir_0'])){ 
    if($_REQUEST['sSortDir_0']!='asc') 
      $sdir='desc'; 
  } 
  $scol_name=$cols[$scol]; 
  //echo $scol_name;
  // Realizamos búsquedas 
  $search_sql=''; 
  if(isset($_REQUEST['sSearch']) && ''!=$_REQUEST['sSearch']){ 
    $stext=addslashes($_REQUEST['sSearch']); 
    $search_sql='where '; 
    if(strlen($stext)) {
      $search_sql.="nombreDesarrollador like '%$stext%' or "; 
      $search_sql.="nombreContacto like '%$stext%' or ";
      $search_sql.="telefonoContacto like '%$stext%'";
    }  
  } 

  // contamos registros después del filtro
  $total_after_filter=$total_records; 
  if($search_sql){ 
    $r=dbRow("select count(iddesarrollador) as d from desarrollador $search_sql"); 
    $total_after_filter=$r['d']; 
  } 

  //Empezamos a mostrar registros
  echo '{"iTotalRecords":'.$total_records.',
         "iTotalDisplayRecords":'.$total_after_filter.',
         "aaData":['; 

  $rs=dbAll("select iddesarrollador, logo, nombreDesarrollador, nombreContacto, telefonoContacto from desarrollador $search_sql
            order by $scol_name $sdir limit $start,$amt"); 
  $f=0;  

  foreach($rs as $r){ 

    if($f++) echo ','; 
    echo '["',"<center><img src='".$r['logo']."'></center>",'",
           "',addslashes($r['nombreDesarrollador']),'",
           "',$r['nombreContacto'],'",
           "',$r['telefonoContacto'],'",
           "',mysql_num_rows(mysql_query("SELECT * FROM desarrollador NATURAL JOIN casa WHERE iddesarrollador = '{$r['iddesarrollador']}'")),'",
           "',"<button>Editar</button> <button>Eliminar</button>",'"]';
  } 
  echo ']}'; 

?>