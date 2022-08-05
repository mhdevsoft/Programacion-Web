//document se refiere a todo el documento html
const btn = document.querySelector('#btn')

//evento que registrara del id y ejecutara una funcion
btn.addEventListener('click' , function () {
   //promises se ocupan para pedir permisos
   //para pedir permiso de notificaciones
  Notification.requestPermission()
  //obtiene el resultado del promise
  .then(resultado => console.log('el resultado es', resultado))
})

if (Notification.permission == 'granted')
{
   new Notification('ADE Servicios',
   {
      icon:'img/icon.png',
      body: '¡Bienvenido! Horacio Chavarria Lozano Area: Servicios Escolares'
   })
}