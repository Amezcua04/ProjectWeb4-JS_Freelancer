// Variables con let (no hay diferencia entre var y let)

//Se declara con la palabra reservada let
let producto = 'Audifonos Gamer'; //Inicializaletiable y asignarle valor
let disponible; //Se puede declarar una variable sin valor

producto = true; // Se puede reasignar valor a una variable con distinto tipo de dato

 // Se pueden declarar multiples variables consecutivas cambiando el ';' por ',' y finalizando con ';' cuando sea la ultima variable por declarar
let producto1 = 'computadora',
    disponible1 = true,
    categoria = 'computadoras';

// Las variables pueden contener números, más no pueden iniciar con ellos
//let 1disponible; --> error
//let -disponible; --> error
//let _disponible; --> correcto
//let disponible_; --> correcto

// Estilos para las variables
let nombre_producto = 'Monitor HD';// underscore
let nombreProducto = 'Monitor HD';// Camelcase
let NombreProducto = 'Monitor HD';//Pascal Case (para clases o funciones)
let nombreproducto = 'Monitor HD'; //No se utiliza frecuentemente
