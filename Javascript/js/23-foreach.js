//foreach solo se puede usar en arreglos


const carrito = [
    {nombre: 'Monitor 20P', precio: 500 },
    {nombre: 'Monitor 50P', precio: 560 },
    {nombre: 'Monitor 80P', precio: 520 },
    {nombre: 'Monitor 120P', precio: 1000 },
    {nombre: 'Monitor 400P', precio: 5000 },
]


//foreach //metodos esclusivos de arreglos y se ejecutan 1 vez

//para ver los arreglos en consola o en HTML es para resultados

//no se usan condiciones para hacer los recorridos
//foreach con arrows
carrito.forEach(producto => console.log(producto.nombre))


//para ver y añadir mas arreglos
//map con arrows  
//crea por implicito un nuevo arreglo
//creaos arreglos nuevos
const arreglo = carrito.map(producto => producto.nombre);

const arreglo1 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

//undefinded es para que no se muestre el resultado
//HTML
console.log(arreglo);
//muestra el resultado en consola
console.log(arreglo1);
