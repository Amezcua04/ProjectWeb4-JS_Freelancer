// This -> Hace referencia al objeto sobre el cual se esta llamando esta función
window.nombre = 'Un nombre'; // se deben de declarar variables de entorno global
window.total = 1000;// para lograr que el arrow function encuentre los resultados esperados
const reservacion = {
    nombre: 'Carlos',
    apellido: 'Amezcua',
    total: 2500,
    pagado: false,
    informacion: () => { // en este contexto, el (this) arrow function hace referencia a la ventana global.
        console.log(this); //
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Eduardo',
    apellido: 'Amezcua',
    total: 2500,
    pagado: false,
    informacion: function(){ // mientras que este function hace referencia al objeto sobre el cual se esta ejecutando.
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();