// ForEach y Map -> Se ejecutan una vez por cada elemento de un objeto o array.

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

// ForEach -> Se utiliza cuando se quiere iterar sobre un arreglo y mostrar los resultados en pantalla.
    carrito.forEach( producto => console.log( producto.nombre ) );
// Map -> Se utiliza para crear un nuevo arreglo en base al que se esta iterando, filtrando propiedades de la base
    const arreglo2 = carrito.map( producto => producto.nombre );
    console.log(arreglo2);