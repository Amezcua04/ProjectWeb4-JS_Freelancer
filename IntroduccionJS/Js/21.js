// Arrow Functions

// Declaración de la función -> NO se pueden utilizar arrow functions

function sumar(numero1 = 0, numero2 = 0){ // número1 y numero2 son párametros.
    console.log(numero1 + numero2);

}
sumar(10, 10);

// Expresión de la función -> Sintaxis con arrow functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
// Si la función solo contiene 1 linea, las llaves son opcionales y no afectan en su funcionamiento.
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
// Si la función cuenta con un solo párametro, los parentesis son opcionales.

aprendiendo('JavaScript');


// Array Methods con arrow functions

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Televisión 50"', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 250},
    { nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo sí existe');
    }
});

let resultado;
// Some (para Arrays de objetos)
resultado = carrito.some (producto => producto.nombre === 'Celular');

// Reduce se utiliza para sumar cantidades dentro de un Array de objetos
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

// Filter sirve para camparar de diferentes formas los elementos de un Array de objetos
resultado = carrito.filter( producto => producto.precio < 400 );
resultado = carrito.filter( producto => producto.nombre !== 'Celular');

console.log(resultado);
