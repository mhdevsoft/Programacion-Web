//objetos

const producto = {
    nombreProducto: "Monitor 20P",
    precio: 300,
    disponible: true                  //propiedad o llave del objeto
    }

//extraemos el valor del objeto y lo convertimos en una variable
//forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;



// console.log(precioProducto);
// console.log(nombreProducto);

// sacar valores de la estrucutra
//creamos la variable y extraemos el valor del objeto
//destructuracion
// sacar de una estructura el valor de una propiedad o propiedades dentro de un objeto y lo crea una variable
const {precio,nombreProducto,disponible} = producto;

console.log(precio ,nombreProducto, disponible);