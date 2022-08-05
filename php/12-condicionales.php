<?php 

$usuario = true;
$autenticado = true;
$rol = "user";

//setencia o condicional
if ($usuario) {
    
    //condicional anidada
    if ($autenticado) {
     
      echo "¡Bienvenido Usuario! ";
      
      //condicional anidada
      if ($rol == "admin" ) 
      {
      echo "eres un administrador";
      }
      else
      {
        echo "no reconocemos tu rol";
      }


    }
    else
    {
      echo "eres un usuario pero no estas autenticado";
    }
    
}
else{
    echo "no eres un usario";
}

echo "<br>";

$rol1 = "admin";

if ($rol1 == "admin") {
    echo "administrador";
}
elseif ($rol1 == "usuario") {
    echo "cliente";
}
elseif ($rol1 == "empleado") {
    echo "empleado";
}
else
{
    echo "no reconocemos tu rol";
}

echo "<br>";

switch ($rol1)
{
   case 'admin':
     echo "administrador SW";
    break;

    case 'usuario':
        echo "usuario SW";
       break;

       case 'empleado':
        echo "empleado SW";
       break;
      
default:
echo "no se encuentra tu rol en SW";
break;
}

