// Funciones que retornan un valor

// Ejemplo sencillo

function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);
console.log(resultado);

// Ejemplo complejo
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

function calcImpuesto(total){
    return 1.15 * total;
}

console.log(total);

const totalPagar = calcImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalPagar}`);