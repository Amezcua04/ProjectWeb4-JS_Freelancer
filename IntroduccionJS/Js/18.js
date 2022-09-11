// Funciones con Párametros y Argumentos


function sumar(numero1 = 0, numero2 = 0){ // número1 y numero2 son párametros.
    console.log(numero1 + numero2);

}
sumar(10, 10); // Los valores reales son los argumentos.
sumar(3, 3);
sumar(3, 6);
sumar(1); /*Cuando se ejecute una función en donde no se cuenta con todos los argumentos
es recomendable asignar valores por defecto en los párametros, para evitar que
nos arroje un error, por no contar con ese argumento.
*/
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);