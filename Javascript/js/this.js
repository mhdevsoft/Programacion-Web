//this hace referencia al objeto donde se esta mandando a llamar la funcion o etc

const reservacion = {
  nombre: 'Pedro',
  apellido: 'Perez',
  total: 5000,
  pagado: false,
  informacion: function(){
    console.log(`el cliente ${this.nombre} reservo y debe pagar ${this.total}`)
  }
}

reservacion.informacion();


const reservacion2 = {
    nombre: 'juan',
    informacion: () =>{
        console.log(`${this.nombre}`)
    }
}