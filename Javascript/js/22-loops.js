//for loop
//i = se le conoce como indice o incremento

//let i = 0; inicio del ciclo
// i < 10; condicion del ciclo
// i++; incremento del ciclo

// for (let i=0; i<= 10; i++) {
//     console.log(i);
    
// }

// for (let i= 1; i<= 100; i++) {
//     if(i % 2 === 0) //es para ver que numero es par 
//     {
//       console.log(`El numero ${i} es par`)
//     }
//     else
//     {
//         console.log(`el numero ${i} es impar`)
//     }
// }

const carrito = [
    {nombre: 'Monitor 20P', precio: 500 },
    {nombre: 'Monitor 50P', precio: 560 },
    {nombre: 'Monitor 80P', precio: 520 },
    {nombre: 'Monitor 120P', precio: 1000 },
    {nombre: 'Monitor 400P', precio: 5000 },
]

//buscamos elementos del array y ver el contenido de ese array

for (let i = 0; i < carrito.length; i++) {
   console.table(carrito[i].nombre);
}



//while loop

//se ejecuta mientras la condicion sea verdarera 

// let i = 0 //Indice
// //evalua primero condicion para poder ejecutar codigo
// while (i < 10) { //condicion
    
//     console.log(i);
//     i++; //incremento
// }

//diferencia

//do while loop
let i = 0;
//ejecuta el codigo 1 vez y despues evalua
do { 
 console.log(i);

    i++;
} while (i < 10);