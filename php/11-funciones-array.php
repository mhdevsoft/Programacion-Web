<?php 

$carrito = ['TV','PC','Laptop'];

//in_array - buscar los elementos de un arreglo

var_dump(in_array('TV',$carrito));

$numeros = [1,7,2,9,8,3,4];

echo "<pre>";
//numeros de menor a mayor
sort($numeros);
print_r($numeros);
echo "</pre>";

echo "<pre>";
//numeros de mayor a menor
rsort($numeros);
print_r($numeros);
echo "</pre>";

$animal = [
    'nombre' => 'oso',
    'comida' => 'pescado',
    'edad' => 3
];

//ordenar por valor y despues por orden alfabetico
echo "<pre>";
asort($animal);
print_r($animal);
echo "</pre>";

//ordenar por orden alfabetico y despues su valor
echo "<pre>";
ksort($animal);
print_r($animal);
echo "</pre>";

//ordenar por valor (z - a)
echo "<pre>";
arsort($animal);
print_r($animal);
echo "</pre>";






