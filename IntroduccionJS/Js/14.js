// Arrays o Arreglos

// Declarar un Array sin constructor
const numeros = [10,20,30,40,50];
console.log(numeros);

// Declarar Array con constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.log(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Carlos", trabajo: "Developer"}, [1, 2, 3]];
console.log(arreglo);
/*
// Acceder a los valores de un objeto
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[10]); //undefined porque aun no tiene un valor en esa posición

// Conocer la extensión de un arreglo
console.log(meses.length);


// forEach se ejecuta una vez por cada elemento del arreglo
numeros.forEach( function(numero) {
    console.log(numero);
});
*/

// Modificar un Array conociendo sus indices y la posición que se dea modificar
numeros[5] = 60;

// Modificar un Array con el método PUSH
numeros.push(70,80); // Agrega los elementos al final del Array

numeros.unshift(-10, -20, -30,); // Agrega los elementos al inicio del Array

console.log(numeros);
/*
meses.pop(); // Elimina el último elemento del Array
meses.shift(); // Elimina el primer elemento del Array
*/
meses.splice(2, 1); // Elimina un valor de un Array indicando la posición (índice)
                    //y a partir de ese índice cuantos valores se van a eliminar.

console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses,'Junio']; //Agrega elementos en un arreglo sin módificar el óriginal
console.log(nuevoArreglo);