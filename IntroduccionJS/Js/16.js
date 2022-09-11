// Funciones en JavaScript

// Hoisting
/*Es un término que se puede encontrar a partir de ECMAScript 2015 Lenguage Specification.
El intérprete de JavaScript divide la declaración y asignación de funciones y variables:
JavaScript "hoists" o "alza" las declaraciones a la parte superior de su scope (ámbito)
antes de la ejecución.

** JavaScript se ejectua en 2 etapas -Registro y Creación -Ejecución */

//  Declaración de la función
/*En este ejemplo de declaración de funciones se puede llamar primero la función
sin antes haberse declarado, gracias al hoisting, en el primer llamado detecta y registra
la función y en el segunda llamdo, ejecuta la función.*/

sumar(); // Llamado de la función
function sumar(){ // function [nombre de la función]()
    console.log(10 * 10); // Cuerpo de la función

}

//  Expresión de la función
/* En este ejemplo no se puede llamar primero la función aunque no este declarada
debido a que en el primer llamado de JavaScript detecta que se declaró una variable
y en el segundo llamado se ejecuta la función que aun no tiene un valor asignado
y por último se le asigna el valor de la función a la variable.
Un ejemplo mas claro sería lo siguiente:
Primer llamado encuentra declarada la variable
const sumar2;
En el segundo llamado ejecuta la función
sumar2();
Despues se le asigna el valor a la función
sumar2 = function() { console.log(3 + 3);}*/
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

// IIFE --> Se recomienda el uso exclusivo para proteger variables y no mezclar con otros archivos

(function() {
    console.log('Esto es una función');
})();