<?php 
//array 
//1ra forma
$carrito = ['Television','Tablet','PC'];
         //    0            1       2  3 RAM
//2da forma 
$carrito2 = array('Television','Tablet','PC');

//editar o agregar un elemento a nuestro array
$carrito[0] = "Pantalla 20p";
$carrito2[3] = "Contectores";

//Elemento al final del array
array_push($carrito , "Mouse USB");

//Elemento al principio de nuestro array
array_unshift($carrito , "Bocina Bluetooth");

//var_dump($carrito);

//var_dump($carrito2);

//iteramos y accedemos en nuestro array
echo $carrito[0];
echo "<br>";
//sirve para mostrarnos el contenido de nuestro array
print_r($carrito);

