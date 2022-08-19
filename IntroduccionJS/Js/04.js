// Tipos de Datos en JavaScript

// String o cadena de texto
const productos = "Monitor de 20\""; // para un string se puede utilizar '' o "" pero utilizando la misma para inicio y cierre, no combinadas
// String utilizando constructor String
const productos2 = String('Monitor 30 pulgadas');

const productos3 = new String('MOnitor 50 pulgadas'); //esta forma arrojaria un tipo de dato Object

console.log(productos); // typeof sirve para conocer el tipo de dato de una variable
console.log(productos2);
console.log(typeof productos3);

// Métodos o Funciones con String
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto = 'Monitor HD';
const email = 'correo@correo.com';

// .length (propiedad) --> sirve para conocer la longitud del string
console.log(tweet.length);
// indexOf --> sirve para ubicar la posicion de un texto
console.log(tweet.indexOf('JavaScript'));
console.log(tweet.indexOf('javascript'));//Si arroja como resultado -1 es equivalente a que no existe en el string
// include --> retorna true o false
console.log(tweet.includes('JavaScript'));
console.log(producto.includes('Tablet'));