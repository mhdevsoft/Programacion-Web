<?php 
//funciones son una serie de procedimientos y realizan una accion
//son reutilizables
//se usan mucho en la Programacion 
declare (strict_types = 1); //declaramos que todo tipo de dato sea esticro

function sumar()
{
 $n1 = 10;
 $n2 = 30;
 echo $n1 + $n2;
}

sumar();

function multiplicar (int $num1 , int $num2 ,string $nombre,
 bool $trivia, float $porcentaje) //parametros //tipado de datos estricto
{  
  $multiplicar = $num1 * $num2;
  echo $multiplicar;
}

function nombre (string $nombre , int $edad) : ?string //retorna o espeficiamos el tipo de datos que va a aceptar 
{
    // ? es un retorno opcional si pintar algo en pantalla o entregar un resultado
    //vacio o lleno
    return $nombre . $edad;
}



multiplicar(40,30,"pedro",true,20,12);

$resultado = nombre("Pedro Lopez",12);
echo "<br>";
echo $resultado;

