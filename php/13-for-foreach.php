<?php 

$perro = [
    [
        'raza' => "pitbull",
        'altura' => '60CM',
        "Pelaje" => 'chino',
    ],
    [
        'raza' => "pug",
        'altura' => '40CM',
        "Pelaje" => 'lasio',
    ],
    [
        'raza' => "pastor",
        'altura' => '120CM',
        "Pelaje" => 'largo',
    ]
];

echo "<table>
<tr>
    <th>Raza</th>
    <th>altura</th>  
    <th>pelaje</th>
</tr>
"; //pintamos nuestra tabla HTML

foreach ($perro as $perro1)
{  //terminamos PHP ?>

<!-- CODIGO HTML e iteramos en el Array -->

  <!-- Interando array y mostrarlo dentro de un elemento de mi tabla -->
    <tr>
      <td><?php echo $perro1['raza'] ?></td>
      <td><?php echo $perro1['altura'] ?></td>
      <td><?php echo $perro1['Pelaje'] ?></td>
    </tr>


 <?php } //terminamos el codigo PHP  para incrustrar codigo
 //html

 echo "</table>";


 for ($i=0; $i <= 10 ; $i++) { 
    echo $i;
 }

 //sizeof cuenta cuantos elementos existen en un array
 //count 
//realizamos un loop en uno solo 
 for ($i=0; $i < count($perro)  ; $i++) { 
    echo "<pre>";
     echo ($perro[$i]['raza']);
     echo "</pre>";
 }

 $i = 0;
//si no se cumple la condicion no realiza el loop
 while ($i <= 10) {
    echo $i;
    $i++;
 }

 echo "<br>";
//si no se cumple la condicion ejecuta la accion 1 vez
 do {
   echo $i;
    $i++;
 } while ($i <= 20);

 $cliente = [
    "nombre" => "Pedro",
    "apeliido" => "Perez",
    "edad" => "20"
 ];

 echo "<br>";
//recorrer un array asociativo la cual $key es la clave y $value es su valor
 foreach ($cliente as $key => $value ) {
   echo "{$key} :  {$value} <br>";
 }











