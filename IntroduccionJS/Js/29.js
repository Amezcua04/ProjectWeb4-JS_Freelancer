// Try - Catch

const num1 = 20;
const num3 = 30;

console.log(num1);
try {
    console.log(num2);
} catch (error) {
    console.log(error);
}
console.log(num3);

// EL try-catch es a prueva de errores, más sin embargo no se utiliza en todo nuestro codigo. Se útiliza en bloques importantes (conexión bd, login, etc.)

// Try -> intenta ejecutar un bloque de código.
// Catch -> cuando hay un error, obtiene la información de ese error y realiza otro bloque de código.