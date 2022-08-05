//tipos de datos JS 

//strings o texto

//existen 3 formas
const producto = "monitor 20 p"; //esta es el mas concurrente 
const producto5 = "monitor 20p\" " //para saltarse comillas dobles 
const producto2 = String('Monitor 20 p'); //estas no son mas usadas *esta en un constructor
const producto3 = new String ('Monitor 50 Pulgadas'); //esto es un objeto


//Metodos o funciones en strings

const cosa = "hola jaja xd";
console.log (cosa.length); //contara los caracteres que tiene la palabra


//IndexOF busca en que posicion se encuentra la palabra (Retorna una posicion)
const tweet = "Hola PHP Prros"
console.log(tweet.indexOf('PHP')); 
//si no lo encuentra lo pondra en -1
console.log(tweet.indexOf('A')); 


//Includes (retorna true o false)
console.log(tweet.includes('PHP')); 
console.log(tweet.includes('A')); 

//type of retorna el tipo de dato
console.log(typeof producto, typeof producto2, typeof producto3, producto5);