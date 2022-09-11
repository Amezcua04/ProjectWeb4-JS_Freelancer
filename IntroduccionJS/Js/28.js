// POO - Classes en JavaScript

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    precioProducto() {
        return this.precio;
    }
}

const producto = new Producto('Monitor 49"', 800);
const producto2 = new Producto('Laptop"', 300);

// Herencia
// Sirve para evitar duplicar codigo, se pueden heredar métodos entre clases.
class Libro extends Producto {
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es: ${this.isbn}`;
    }
    precioProducto() {
        console.log(`${super.precioProducto() } y sí hay en existencia`);
    }
}

const libro = new Libro('JavaScript la Revolucion',120, '12920839247');
console.log(libro.formatearProducto());
console.log(libro.precioProducto());
console.log(producto.formatearProducto());