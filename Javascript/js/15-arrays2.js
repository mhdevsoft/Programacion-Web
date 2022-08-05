//array metods
//se les dice por que tienen el nombre del array y la funcion que se le va a ejecutar
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

//arreglo unidimensional
//arreglo con objetos
const carrito = [
    {nombre: 'Monitor 20P', precio: 500 },
    {nombre: 'Monitor 50P', precio: 560 },
    {nombre: 'Monitor 80P', precio: 520 },
    {nombre: 'Monitor 120P', precio: 1000 },
    {nombre: 'Monitor 400P', precio: 5000 },
]

//buscar un valor en el arreglo
//forEatch
meses.forEach(function(mes)
{
if(mes == 'Marzo')
{
    console.log('Marzo si Existe');
}
});
//array metods
// includes en arrays planos
let rst = meses.includes('Marzo');
console.log(rst); //true
//arrays con objetos

//busqueda
//busca un valor en el arreglo con objetos
rst = carrito.some(function(pr)
{
return pr.nombre === 'Monitor 20P'
})

//sumar valores dentro de objetos con arrays

//reduce
//para hacer sumas
suma = carrito.reduce(function(total, producto)
{
return total + producto.precio
}, 0);

//filter filtra segun las necesidades
rst = carrito.filter(function(producto)
{
    return producto.nombre == 'Monitor 20P'
})

rst  = carrito1


console.log(rst);
console.log(suma);

