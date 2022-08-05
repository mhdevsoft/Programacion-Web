//funciones son una serie de procedimientos o instrucciones que realizan una accion
//son reutilizables

//declaracion //expresion
//nos permite tener un codigo mas ordenado y mas facil de matener

//declaracion de la funcion 
// son argumentos de la operacion()
function sumar() {
//cuerpo de una funcion
console.log(10 + 10);
}


//se manda a llamar una funcion
sumar()

//no se recomienda reutilizarlas porque solo sirven para proteger el codigo


//expresion de la funcion
//se denomina mas como una variable
//esta no funcionara porque no se declaro como funcion antes 
const sumar2 = function()
{
    console.log(3+3);
}

sumar2();

//IIFE se mandan a llamar solas
//sirve para que no se mesclen variables o funciones de otros archivos
(function(){
console.log('esto es una funcion')
})(); //se manda a llamar con parentesis


//primero se registran y se crean las funciones despues se mandan a llamar y no importa el orden

//javascript se ejecuta de izquierda a derecha
//se registran las funciones y se crean las funciones despues se mandan a llamar
//etapa de creacion de la funcion y ejecucion de la funcion