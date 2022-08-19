//Desestructuración de objetos (Destructuring Objects)
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
console.log(producto);

// Forma anterior
const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
//console.log(nombreProducto);

//Destructuring
const {precio, nombreProducto} = producto;
const {} = producto;

console.log(precio);
console.log(nombreProducto);