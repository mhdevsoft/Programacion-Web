//Numeros
const num = 100;
const num2 = 200; //numeros en color azul
const numf = "300"; //string en color negro
const num3 = 30.30;
const num4 = .10;
const num5 = -5;

//operaciones matematicas

console.log(num + num2)
console.log(num - num2)
console.log(num * num2)
console.log(num / num2)
console.log(num & num2) //modulo residuo de la division

//NaN = not a number

// MATH

//window es lo que se encuentra disponible en JS

//window.math.random() //crea numeros aleatorios decimales

let resultado ;
//funciones matematicas
resultado = Math.PI;
resultado = Math.round(2.5); //redondea hacia arriba abajo
resultado = Math.ceil (2.2); // siempre redondea hacia arriba
resultado = Math.floor(2.5); // redondea siempre hacia abajo
resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(-300); //convierte los numeros en positivo
resultado = Math.min (1,5,3,7,3,2,5); //busca el numero menor de una lista
resultado = Math.floor(Math.random()* 1000); //realiza numeros aleatorios
console.log(resultado);

console.log(numf,num,num2,num3,num4,num5);