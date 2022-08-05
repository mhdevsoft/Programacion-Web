//arrow functions 
//funciones de flecha
//n1 y n2 son parametros de la funcion   
//se usan si solo tenemos una linea de codigo
const sumar2 = (n1 ,n2) => console.log(n1+n2);

//estructura basica del arrow fuctions
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

sumar2(5,10);
aprendiendo('JavaScript')


//ejemplo 

//con arrow fuctions
//arreglo con objetos
const carrito = [
    {nombre: 'Monitor 20P', precio: 500 },
    {nombre: 'Monitor 50P', precio: 560 },
    {nombre: 'Monitor 80P', precio: 520 },
    {nombre: 'Monitor 120P', precio: 1000 },
    {nombre: 'Monitor 400P', precio: 5000 },
]

let resultado;

resultado = carrito.some(producto => producto.nombre === 'Monitor 20P');

//sin arrow fuctions

//cuando tiene una linea de codigo no se usan llaves
resultado = carrito.some(producto => 
     producto.nombre === 'Celular PRO'
)


const meses = ["Enero", "Febrero", "Marzo", "Abril"];

//si tiene mas de una linea de codigo se usan llaves
meses.forEach(mes =>{
if(mes == 'Marzo')
{
    console.log('Marzo si Existe');
}
});
