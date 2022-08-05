//POO 

//Object literal

//un objeto tiene variables en una sola
const producto = {
    nombre: 'tablet',
    precio: 500
}

//objetct construcctor


//clase

//es la forma de almacenar la forma como los datos que va a tener un objetos especificos
//una clase es el contenedor de toda la forma de todos los datos y metodo y funciones que va a tener un objeto en el

function Producto(nombre,precio,status) //parametro
{
//debe tener todos los difentes valores que usara el objeto
this.n = nombre;
this.p = precio;
this.s = status
}

const producto2 = new Producto('Monitor',800,true); //argumento
const producto3 = new Producto('Celular',300,false) 

Producto.prototype.formatearCodigo = function ()
{
    return `el producto ${this.n} tiene un precio de ${this.p}`
}

// console.log(producto2)
// console.log(producto3)



//prototypes
//crear funciones que solo se utilizaran en un objeto especifico
//es una funcion que esta asociada a un objecto

//uso 

console.log(producto2.formatearCodigo());