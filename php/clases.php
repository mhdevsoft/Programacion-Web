<?php 

Class hola{

    public function hola()
    {
        $hola = "hola mundo";
        return $hola;
    }

}

$clase = new hola();
$hola = $clase->hola();
echo $hola;