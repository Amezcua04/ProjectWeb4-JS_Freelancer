// Objects (Objetos) --> parte central de JavaScript

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitos 20 pulgadas",
    precio : 300,
    disponible : true
}
console.log(producto);

// acceder a propiedades de un objeto por puntero
/* console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);
// acceder a propiedades de un objeto por corchetes
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]); */

// Modificar Objetos

// Agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';

// Eliminar propiedades a un objeto
delete producto.disponible;

console.log(producto);