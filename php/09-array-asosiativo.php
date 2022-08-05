<?php 

$perro = [
    //sintaxis de un array associativo
    'color' => 'cafe',
    'raza'  => 'PUG',

    'datos' => [
        'edad' => 3,
        'altura' => '60CM',
        "Pelaje" => 'chino',
    ]
];

echo "<pre>";
print_r($perro);
echo "</pre>";

echo "<br>";
echo ($perro['datos']['altura']);
echo "<br>";

$color = $perro['color'];
$raza = $perro['raza'];
$edad = $perro['datos']['edad'];
$altura = $perro['datos']['altura'];
$pelaje = $perro['datos']['Pelaje'];



echo("el perro es de color {$color} y su raza es: {$raza}
y tiene {$edad} años y su altura es {$altura} el pelaje es : {$pelaje}");

