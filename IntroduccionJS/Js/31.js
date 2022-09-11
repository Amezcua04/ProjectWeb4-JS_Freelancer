// NOTIFICATION API

const boton = document.querySelector('#boton'); //Se utiliza para seleccionar contenido HTML
boton.addEventListener('click',function(){
    Notification.requestPermission()
        .then(resultado => console.log(`EL resultado es: ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: null,
        body: 'API NOTIFICATION'
    })
}