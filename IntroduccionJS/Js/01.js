// Variables

//Se declara con la palabra reservada var
var producto = 'Audifonos Gamer'; //Inicializar variable y asignarle valor
var disponible; //Se puede declarar una variable sin valor

producto = true; // Se puede reasignar valor a una variable con distinto tipo de dato

 // Se pueden declarar multiples variables consecutivas cambiando el ';' por ',' y finalizando con ';' cuando sea la ultima variable por declarar
 var producto1 = 'computadora',
    disponible1 = true,
    categoria = 'computadoras';

// Las variables pueden contener números, más no pueden iniciar con ellos
//var 1disponible; --> error
//var -disponible; --> error
//var _disponible; --> correcto

// Estilos para las variables
var nombre_producto = 'Monitor HD';// underscore
var nombreProducto = 'Monitor HD';// Camelcase
var NombreProducto = 'Monitor HD';//Pascal Case (para clases o funciones)
var nombreproducto = 'Monitor HD'; //No se utiliza frecuentemente

console.log(producto); //mostrar en la consola del navegador