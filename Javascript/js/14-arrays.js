//arreglos o arrays
//sirven para agrupar elementos del tipo mismo
//arrays simples
//se crean con corchetes
const numeros = [10,20,30,40,50];
console.log(numeros);
console.table(numeros);

// //con constructores
const meses = new Array('Enero','Febrero','Marzo','abril');
// console.table(numeros);
console.table(meses);

// //tipo de datos que puede tener el array

const arreglo = ["hola", 1 , true, null ,{nombre: "aldo", apellido: "chavarria"}, [1,2,3]];

 console.log(arreglo);

// //acceder a los arreglos 
 console.log(numeros[4]);

// //conocer cuantos valores existen en un array
 console.log(meses.length)
// //iteradores para llamar todos todo los arrays en una funcion y hacer recorridos
 numeros.forEach(function(n)
 {
 console.table(n);  
 });

//modificar arreglos
//forma antigua o no recomendaba
 numeros[5] = 60

//se recomienda no modificar los datos originales
//los agrega despues
 numeros.push(60,70,80);

//los agrega antes valores en el arreglo al inicio

numeros.unshift(-40,-50,-70)

//elimina valores del array

//elimina el ultimo elemento
 numeros.pop(); 
// //elimina al inicio
 numeros.shift();

//elimina valores pero especifico

//1 es de donde empezara y el 2 cuantos elementos eliminara
 numeros.splice(1, 2);

// console.table(numeros);

//rest operator o spread operator
//conservamos el arreglo anterior y creamos uno nuevo con los nuevos valores
const nuevoArreglo = [...numeros, 'juan']; //se parece al push pero no modifica el original
console.log(nuevoArreglo)
