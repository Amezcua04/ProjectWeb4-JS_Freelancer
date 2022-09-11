// Estructuras de control

const puntaje = 1000;
// El operador === es más estricto que ==, compara el valor y el tipo de dato
// if
if(puntaje === 1000){
    console.log('El puntaje es 1000');
}else{
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if( efectivo > carrito){
    console.log('El usuario puede pagar');
}else{
    console.log('Fondos inusficientes');
}

// else if
const rol = 'EDITOR'

if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
}else if(rol === 'EDITOR'){
    console.log('Eres editor');
}else{
    console.log('No tienes acceso');
}