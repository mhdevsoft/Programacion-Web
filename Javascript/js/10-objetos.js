//objetos es lo mas usado y vital

const nombreProducto = "Monitor 20P"
const precio = 30;
const disponible = true;

//es como si creearamos una variable unica con multiples variables

//objeto
const producto = {
nombreProducto: "Monitor 20P", //propiedad o llave del objeto
precio: 300,
disponible: true                  //propiedad o llave del objeto
}
console.log(producto);

//para acceder a una propiedad del objeto
// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);

// //2da para acceder a los datos
// console.log(producto["precio"]);



//agrega un objeto
producto.imagen = "image.jpg"


//eliminar propiedades
delete producto.disponible;

console.log(producto);
