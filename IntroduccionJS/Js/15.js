// Array Methods

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
meses.forEach( function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo sí existe');
    }
});

// Includes (para Arrays planos)
let resultado = meses.includes('Marzo');
console.log(resultado);

// Some (para Arrays de objetos)
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});

// Reduce se utiliza para sumar cantidades dentro de un Array de objetos
resultado = carrito.reduce( function(total, producto){
    return total + producto.precio
}, 0);


// Filter sirve para camparar de diferentes formas los elementos de un Array de objetos
resultado = carrito.filter(function(producto){
    return producto.precio < 400;
});
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

console.log(resultado);