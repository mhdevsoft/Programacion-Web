//promises 
//todas las apis como geolocalizacion usa promises
//refleja un valor que puede estar disponible ahora en un futuro o nunca

const usuarioAuth = new Promise( (resolve, reject) =>{
const auth = true;
//cuando se usa promise se pasan 2 valores automaticamente
//resolve ejecuta 
if (auth) {
    resolve('Usuario Autenticado'); //la promersa se cumple
}
{
    reject('No se inicio sesion') //no se cumple
}
});

usuarioAuth
//en estado cumplido y acceder al dato
.then(resultado => console.log(resultado))
//en caso de rechazo igual acceder al dato
.catch(error => console.log(error))

/*
en los promises existen 3 valores
 pending: no se ha cumplido pero tampoco rechazado
 Fulfielled: Ya se cumplio
 Rejected: Se ha rechazado o no se pudo cumplir

*/