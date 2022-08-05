//class 


class Producto 
{
constructor(nombre,precio)
{
this.nombre = nombre;
this.precio = precio;
}

formatearProducto()
    {
        return `el producto ${this.nombre} tiene un precio de ${this.precio}`
    }
}

//herencia
//pasar valores de un lado a otro

class Libro extends Producto 
{
    constructor(nombre,precio,code)
    
    {
     super(nombre , precio); // ira al constructor padre y buscar los valores que le va a pasar
     this.code = code
    }

    formatearProducto()
    {
        //traer mas valores de la clase padre
        return `${super.formatearProducto()} y su codigo es ${this.code}`
    }

}
const producto = new Producto ('Monitor',100)
const libro = new Libro('JS', 100, '21329129');

/////////////
//aplicamos la herencia
console.log(libro.formatearProducto());
console.log(producto.formatearProducto());



// class Suma 
// {
//     constructor(n1,n2)
//     {
//         this.n1 = n1;
//         this.n2 = n2;
//     }

// Sum ()
// {
//  const resultado = this.n1 + this.n2;
//  if (resultado > 0)
//  {
//     return `el resultado de la suma es ${resultado}`
//  }
//  else
//  {
//     return `sin datos`
//  }

// }

// }

// const producto2 = new Producto('Monitor',800,true); //argumento
// const producto3 = new Producto('Celular',300,false) 

// const operando = new Suma (100,444);


// console.log(operando.Sum());
