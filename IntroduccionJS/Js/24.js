// Estructuras de control

// For Loop

for( let i = 0; i < 10; i++){ //index condición incremento
    console.log(i);
}

for( let i = 1; i <= 10; i++){ //index condición incremento
    if( i % 2 === 0 ){
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);
    }
}

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

for( let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre );
}

// While Loop -> Primero evalua la condición y si se cumple, lo ejecuta.

let i = 0; //index

while( i < carrito.length ){ //condición

    console.log( carrito[i].nombre );
    i++; //incremento
}

// Do - While Loop -> Se ejecuta al menos una vez, a diferencia del while, ejecuta y despues evalua la condición.
let j = 0; //index

do{
    console.log(carrito[j].nombre);
    j++; //incremento
}while( j < carrito.length ); //condición