function sumar(n1 , n2)
{
    //retorna el valor de la funcion
    return n1 + n2;
}

//se muestra en una variable el valor de la funcion
const sum = sumar(2,3)

console.log(sum);
////////////////////////

let total = 0

function agregarCarrtito (precio)
{
    //realizamos incremento en el valor de la variable y la guardamos
 return total += precio;
}
//incrementamos el valor de la variable
total = agregarCarrtito(200);
total = agregarCarrtito(600);
total = agregarCarrtito(200);


function iva(total)
{
    //realizamos el calculo del iva y lo guardamos en el return
    return 1.15*total
}

//se muestra el valor que tiene nuestro return
const totalPago = iva(total);

console.log(total)
console.log(totalPago);

function valores (num1 ,num2)
{
    console.log(`el numero 1 es ${num1}`)
    console.log(`el numero 1 es ${num2}`)

    return sumar(num1 , num2)
}

function sumar(num1, num2 ) {
    console.log( num1 + num2)
}

valores(1,2)