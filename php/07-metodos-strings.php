<?php 

$nombre = "Alberto Lopez";

//conocer las letras que tiene mi variable
echo strlen ($nombre);

echo "<br>";

//limpia los espacios de mi string
$limpiar = trim($nombre);
echo strlen($limpiar);

//convertir string a mayusculas
echo strtoupper($nombre);

//convertir string a minusculas
echo strtolower($nombre);

//ejemplo de funciones de strings

$email = "correo@correo.com";
$email2 = 'Correo@correo.com';

var_dump( strtolower($email) == strtolower($email2));

//remplazar una palabra o letra por otra 
echo str_replace('Alberto','Roberto',$nombre);
//1 la texto que va a afectar
//2 el texto que se va remplazar
//3 la variable que va modificar

$saldo = 300;
$pagar = 250;

echo "<br>";

//1ra concatenar variables o unir variables
 
echo "El usuario tiene como saldo ". $saldo . " y va a pagar en caja " . $pagar;
//2da forma de concatenar variables o unirlas
echo "<br>";
echo "El usuario tiene como saldo {$saldo} y va a pagar en caja {$pagar}";




