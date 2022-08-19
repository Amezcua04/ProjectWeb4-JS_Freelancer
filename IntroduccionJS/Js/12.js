// "use strict"; //Correr JavaScript en modo estricto
// Metodos de Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto); // No permite modificar el objeto
Object.seal(producto); // Solo permite modificar las propiedades existentes del objeto
producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto)); //sirve para conocer si un objeto esta sellado con freeze
console.log(Object.isSealed(producto));
console.log(producto);