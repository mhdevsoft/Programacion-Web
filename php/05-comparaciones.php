<?php 
//comparadores
$numero1 = 20;
$numero2 = 20;
$numero3= "20";
$numero4 = 1;

/*
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
== compara que los datos sean iguales
=== compara los datos pero tambien compara el tipo de dato
!=  Diferente al tipo al resultado
!== no identico en el tipo de dato
*/

var_dump($numero1 > $numero2);
var_dump($numero1 < $numero2);
var_dump($numero1 >= $numero2);
var_dump($numero1 <= $numero2);
var_dump($numero1 == $numero3);
var_dump($numero1 === $numero3);
var_dump($numero1 != $numero2);
var_dump($numero1 !== $numero3);
