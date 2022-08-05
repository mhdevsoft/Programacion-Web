//objetos
"use strict"; //correr js en modo estricto
const producto = {
    nombreProducto: "Monitor 20P",
    precio: 300,
    disponible: true                  //propiedad o llave del objeto
    }

//no permite agragar mas valores y no sea modificable
Object.freeze(producto);
producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto)); //Comprueba si el objeto esta congelado o no y retorna un boolean

Object.seal(producto); //permite solo modificar el objeto y sus propiedades
producto.precio = 400;

console.log(producto);