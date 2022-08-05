const producto = {
    nombreProducto: "Monitor 20P",
    precio: 300,
    disponible: true                  //propiedad o llave del objeto
    }

const medidas = {
    peso: "1KG",
    medida: "1M"
}
//la idea no se trata de modificar el objeto sino de extraer sus valores y crear una variable
//unir varios objetos
//spread operator (...) para unir varios objetos en uno solo y crear una variable nueva con todos los valores de los objetos 
//que le pasemos como parametro en un solo objeto 
const nuevoproducto = {...producto,...medidas}
console.log(nuevoproducto);
console.log(producto);

