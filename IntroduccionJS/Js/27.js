// Programación Orienta a Objetos (POO)

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}


// Object Constructor
function Producto(nombre, precio, estatus) { // Clase Producto
    // Una clase es una forma de almacenar una forma de datos que tendra un objeto en especifico.
    this.nombre = nombre;
    this.precio = precio;
    this.estatus = estatus;
}
// Prototipe permite crear funcinoes que solo se utilizan en un objeto especifico.
Producto.prototype.formatearProducto = function() {
    return `EL producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor 50"',800,false);
const producto3 = new Producto('Laptop',300, true);
const producto4 = new Producto('Celular',500, true);
const producto5 = new Producto('Accesorio',100, false);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());




